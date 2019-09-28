$(".cart_counts").text(localStorage.getItem("cart_counts"))
fn();
async function fn(){
    var res = await PAjax({
        method:"get",
        url:"php/list.php",
        data:{},
        async:true,
        success:function(res){
            resolve(res);
        }
    })
    var str = '';
    var data = JSON.parse(res);
    var arr = []
    for(var i=0;i<data.length;i++){
        str +=
        `
        <div class="box_wrap" style="width:25%;">
         <div class="content" style="background:#fff;height:auto;">
             <a href="detail.html?id=${data[i].id}">
                 <img src="${data[i].image}" alt="">
             </a>
             <a href="detail.html?id=${data[i].id}">
                ${data[i].name} 
             </a>
             <em style="display:block;margin-top:20px;">${data[i].price}</em>
             <i style="display:block;margin:10px auto;">0人评价</i>
             <a href="detail.html?id=${data[i].id}">查看详情</a>
         </div>
        </div>
        `
    }
    document.querySelector('.listContainer').innerHTML = str
    var a = document.querySelectorAll('.box_wrap')
    for(var i =0;i<a.length;i++){
      arr.push(a[i])
    }
  
    
  var total = arr.length;
  var size = 12;
  var page = new Page("list",{
    language:{
        first:"首页",
        prev:"上一页",
        list:"list",
        next:"下一页",
        last:"尾页",
    },
    pageData:{
        total:total,
        size:size,
    },
    show:function(currentPage){
        var showArr = arr.slice((currentPage-1)*size,currentPage*size)
        console.log(showArr.length)
        document.querySelector('.listContainer').innerHTML=""
        for(var i=0;i<showArr.length;i++){
          document.querySelector('.listContainer').appendChild(showArr[i])
        }
    }
  })
}
