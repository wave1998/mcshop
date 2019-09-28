$(".cart_counts").text(localStorage.getItem("cart_counts"))
var parames = location.search;
var reg = /id=([1-9]\d*)/;
var res = parames.match(reg);
var id = res[1];
var str = '';
$.ajax({
    url:"../static/php/detail.php",
    type:"post",
    dataType:"json",
    data:{d:id},
    success:function(res){
        str += `
        <div class="introduce clearfix">
        <div class="img fl">
            <img src="${res.image}" alt="">
        </div>
        <div class="info fl">
            <h4>${res.name}</h4>
            <div class="price">单价：￥<span>${res.price}</span></div>
            
            <div class="number clear_fix">
                <span>购买数量：</span>
                <input type="button" value="-" class="cut">
                <input type="number" class="num" value="1">
                <input type="button" value="+" class="add">
                <span style="margin-left:10px;">库存剩余：</span>
                <span class="stock" >${res.stock}
            </div>
            <div class="price">总计：￥<span class="subtotal">${res.price}</span></div>
            <button>加入购物车</button>
        </div>
    </div>
        `
        $(".listContainer").html(str);
        bindClick(res);
        bindNumber();
    }
});
function bindNumber(){
    $(".number").click(function(e){
    var target = e.target;
    if(target.className == 'cut'){
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
        if(num>=$(target).nextAll(".stock").text()-0){
            num=$(target).nextAll(".stock").text()-0;
        }else{
            num = $(target).prev().val()-0+1;
        }
        $(target).prev().val(num)
    }
    subtotal()
})
}
function subtotal(){
    $(".subtotal").each(function(){
        var price = $(this).parent().prevAll(".price").children().text()-0;
        var num = $(this).parent().prev().find(".num").val()-0;
        $(this).text((num*price).toFixed(2));
    })
}
function bindClick(data){
    $("button").click(function(){
        var uname = getCookie("username");
            if(uname == undefined){
                alert("请先登陆");
                location.href = 'login.html';
            }else{
                var arr = localStorage.getItem("list");
                var cart_counts=0;
                localStorage.clear();
                arr = JSON.parse(arr);
                if(!arr){
                    arr=[];
                    arr.push(data);
                    data.number = $(".num").val()-0;
                    localStorage.setItem("list",JSON.stringify(arr));
                    for(var j=0;j<arr.length;j++){
                        cart_counts += arr[j].number
                    }
                    localStorage.setItem("cart_counts",cart_counts)
                    $(".cart_counts").text(localStorage.getItem("cart_counts"))
                    alert("成功加入购物车");
                    
                }else{
                    for(var i=0;i<arr.length;i++){
                        if(arr[i].id==data.id){
                            arr[i].number = arr[i].number-0+($(".num").val()-0);
                            localStorage.setItem("list",JSON.stringify(arr))
                            for(var j=0;j<arr.length;j++){
                                cart_counts += arr[j].number
                            }
                            localStorage.setItem("cart_counts",cart_counts)
                            $(".cart_counts").text(localStorage.getItem("cart_counts"))
                            alert("成功加入购物车");
                            return false;
                        }
                    }
                    data.number = $(".num").val()-0;
                    arr.push(data)
                    localStorage.setItem("list",JSON.stringify(arr));
                    for(var j=0;j<arr.length;j++){
                        cart_counts += arr[j].number
                    }
                    localStorage.setItem("cart_counts",cart_counts)
                    $(".cart_counts").text(localStorage.getItem("cart_counts"))
                    alert("成功加入购物车")
                }
            } 
    });
    
}
