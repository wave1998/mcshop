// 判断是否登录
var uname = getCookie("username");
if(uname == undefined){
    $(".login").prop("href","login.html").text("登录")
}else{
    $(".login").prop("href","../index.html").text(uname)
}

// 下拉导航
$(".nav li").mouseenter(function () {
    $(this).children().eq(1).stop().slideDown(300)
})
$(".nav li").mouseleave(function () {
    $(this).children().eq(1).stop().slideUp(300)
})
    nav("热门周边");
    nav("最热漫画");
    nav("优秀小说");
    async function nav(title){
        var res = await PAjax({
            method:"post",
            url:"../static/php/header_nav.php",
            data:{t:title},
            async:true,
            success:function(res){
                resolve(res);
            }
        })
        var str = '';
        var data = JSON.parse(res);
        console.log(data)
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
        if(title=="热门周边"){
            $('.nav .box1').html(str)
        }else if(title == "最热漫画"){
            $('.nav .box2').html(str)
        }else if(title == "优秀小说"){
            $('.nav .box3').html(str)
        }
        
    }