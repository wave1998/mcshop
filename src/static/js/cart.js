/**********************************加载数据***************************************/
function loadPage(){
    // 从本地存储中将收藏的数据读取出来
    var arr = JSON.parse(localStorage.getItem("list"));
    var str = '';
    for(var i=0;i<arr.length;i++){
        str += `
        <tr>
            <td><input type="checkbox"  class="checkOne"></td>
            <td>
                <img src="${arr[i].image}" width="100" height="100">
                <h5>${arr[i].name}</h5>
            </td>
            <td>
                ￥<span class="price">${arr[i].price}</span>
            </td>
            <td>
                <div class="number clear_fix">
                    <input type="button" value="-" class="cut">
                    <input type="number" class="num" value="${arr[i].number}">
                    <input type="button" value="+" class="add">
                    <input type="hidden" name="stock" value="${arr[i].stock}">
                </div>
            </td>
            <td>
                    ￥<span class="subtotal">${(arr[i].price*arr[i].number).toFixed(2)}</span>
            </td>
            <td>
                <button data-id="${arr[i].id}" class="del">删除</button>
            </td>
        </tr>
        `
    }
    $(".cart_tbody").html(str);
    bindClick()
}
loadPage()
/***********************************从收藏页中删除**************************************/
function bindClick(){
    $(".del").click(function(){
        console.log(this);
        // 先从本地存储中提取所有数据
        var arr = JSON.parse(localStorage.getItem("list"));
        // 指定下标删除几个元素：  arr.splice(下标,删除个数)
        var id = $(this).attr("data-id");
        // 找到当前数据在大数组中的下标
        var key;
        for(var i=0;i<arr.length;i++){
            if(arr[i].id==id){
                key = i;
            }
        }
        arr.splice(key,1);
        localStorage.setItem("list",JSON.stringify(arr));
        loadPage()
        cartSum()
    });
}

/**********************************数字加减******************************/
$(".number").click(function(e){
    var target = e.target;
    if(target.className == 'cut'){
        // 处理数字递减
        var num = $(target).next().val()-0-1;
        if(num<=1){
            num=1;
        }else{
            num = $(target).next().val()-0-1;
        }
        $(target).next().val(num)
    }
    if(target.className == 'add'){
        // 处理数字递增
        var num = $(target).prev().val()-0+1;
        if(num>=$(target).next().val()-0){
            num=$(target).next().val()-0;
        }else{
            num = $(target).prev().val()-0+1;
        }
        $(target).prev().val(num)
    }
    subtotal();
    countTotal();
    cartSum();
});
/********************计算每一项的小计***********************/
function subtotal(){
    $(".subtotal").each(function(){
        var num = $(this).parent().prev().children().find(".num").val()-0;
        var price = $(this).parent().siblings().find(".price").text()-0;
        // console.log(num,price);
        $(this).text((num*price).toFixed(2));
    });
}


/******************************全选功能*******************************/
$(".checkAll").click(function(){
    var c = $(this).prop("checked");
    if(c){
        $(".checkOne").prop("checked",true);
        $(".checkAll").prop("checked",true);
    }else{
        $(".checkOne").prop("checked",false);
        $(".checkAll").prop("checked",false);
    }
    countTotal();
});
/********************每个复选框的点击******************************/
$(".checkOne").click(function(){
    var arr = Array.prototype.slice.call($(".checkOne"));
    var res = arr.every(function(v){
        // console.log(v);
        if($(v).prop("checked")){
            return true;
        }
    });
    // console.log(res);
    if(res){
        $(".checkAll").prop("checked",true);
    }else{
        $(".checkAll").prop("checked",false);
    }
    countTotal()
});


/**************************共计*****************************/
function countTotal(){
    var sum = 0;
    var totalPrice = 0;
    $(".checkOne:checked").each(function(k,v){
        sum += $(v).parent().siblings().find(".number").children(".num").val()-0;
        totalPrice += $(v).parent().siblings().children(".subtotal").text()-0;
    });
    $(".total b i").text(sum);
    $(".total b em").text(totalPrice.toFixed(2));
}
/********************本地存储设置购物车内商品总数********************/
function cartSum(){
    var cartSum =0;
    $(".num").each(function(k,v){
        cartSum = $(v).val()-0
    })
    localStorage.setItem("cart_counts",`${cartSum}`)
    $(".cart_counts").text(localStorage.getItem("cart_counts"))
}
$(".cart_counts").text(localStorage.getItem("cart_counts"))
