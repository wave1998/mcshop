$(".nav li").mouseenter(function () {
    $(this).children().eq(1).stop().slideDown(300)
})
$(".nav li").mouseleave(function () {
    $(this).children().eq(1).stop().slideUp(300)
})
var uname = getCookie("username");
if(uname == undefined){
    $(".login").prop("href","login.html").text("登录")
}else{
    $(".login").prop("href","index.html").text(uname)
}
nav();
async function nav(){
    var res = await PAjax({
        method:"get",
        url:"php/header_nav.php",
        data:{},
        async:true,
        success:function(res){
            resolve(res);
        }
    })
    var str = '';
    var data = JSON.parse(res);
    for(var i=0;i<data.length;i++){
        str += 
        `
        <div class="minbox">
            <div class="img" style="border-right:0px;">
                <a href="#">
                    <img src="${data[i].image}" alt="">
                </a>
            </div>
            <a href="#" style="padding-left: 40px;">
                ${data[i].name}
            </a>
            <em>￥${data[i].price}</em>
        </div>
        `
    }
    $('.nav .box').html(str)
}