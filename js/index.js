$(".cart_counts").text(localStorage.getItem("cart_counts"))
    // 判断是否登录
var uname = getCookie("username");
if(uname == undefined){
    $(".login").prop("href","login.html").text("登录")
}else{
    $(".login").prop("href","index.html").text(uname)
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
            url:"php/header_nav.php",
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
    // banner轮播
    $(".swiper-container").mouseenter(function(){
      $(".swiper-button-prev").eq(0).animate({
          left:"0px"
      },200)
      $(".swiper-button-next").eq(0).animate({
          right:"0px"
      },200)
  }) 
  $(".swiper-container").mouseleave(function(){
      $(".swiper-button-prev").eq(0).stop().animate({
          left:"-30px"
      },100)
      $(".swiper-button-next").eq(0).stop().animate({
          right:"-30px"
      },100)
  })
    var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    speed:1000,// 播放的速度
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplayDisableOnInteraction : false,
  }) 

//内容头
    index_content_top();
    async function index_content_top(){
        var res = await PAjax({
            method:"get",
            url:"php/index_content_top.php",
            data:{},
            async:true,
            success:function(res){
                resolve(res);
            }
        })
        var str = '';
        var data = JSON.parse(res);
        
        for(var i=0;i<data.length;i++){
             var price = Number(data[i].price).toFixed(2)
            str += 
            `
            <div class="index_content_body_wrap box_wrap">
                <div class="content" style="height:auto;">
                    <a href="#">
                        <img src="${data[i].image}" alt="">
                    </a>
                    <a href="#">
                        ${data[i].name}
                    </a>
                    <em>￥${price}</em>
                </div>
            </div>
            `
        }
        $('.index_content_body').html(str)
    }
// 内容主体
    //小说
    index_content_novel();
    async function index_content_novel(){
        var res = await PAjax({
            method:"get",
            url:"php/index_content_novel.php",
            data:{},
            async:true,
            success:function(res){
                resolve(res);
            }
        })
        var str = '';
        var data = JSON.parse(res);
        for(var i=0;i<data.length;i++){
             var price = Number(data[i].price).toFixed(2)
             if(i==7){
                str +=
                `
                <div class="box_wrap wrap_10">
                    <div class="content">
                        <a href="#">
                            <img src="${data[i].image}" alt="">
                        </a>
                        <a href="#">
                                ${data[i].name}
                        </a>
                        <em>￥${price}</em>
                    </div>
                    <div class="content">
                        <a href="list.html"></a>
                    </div>
                </div>
                `
            }else if(i<7){
            str += 
            `
            <div class="box_wrap">
                <div class="content">
                    <a href="#">
                        <img src="${data[i].image}" alt="">
                    </a>
                    <a href="#">
                        ${data[i].name}
                    </a>
                    <em>￥${price}</em>
                    <i>0人评价</i>
                </div>
            </div>
            `

            }else if(i>7){
                str += ' '
            }
        }
        $('.index_body_novel .fr').html(str)
    }


    // 杂志
    $(".index_body_magazine li").mouseover(function(){
        $(this).css({
            "color":"#FDB14F",
            "border-bottom":"2px solid #FDB14F"
        });
        $(this).siblings().css({
            "color":"#000",
            "border-bottom":"0px"
        });
        var title = $(this).text()
        console.log(title)
        var minfr =$(this).parent().parent().next().find(".fr")
        if(title=="知音漫客"){
            minfr.find(".minfr_1").css("z-index","10")
            minfr.find(".minfr_1").siblings().css("z-index","1")
        }else if(title == "漫客小说绘"){
            minfr.find(".minfr_2").css("z-index","10")
            minfr.find(".minfr_2").siblings().css("z-index","1")
        }else if(title == "漫客绘心"){
            minfr.find(".minfr_3").css("z-index","10")
            minfr.find(".minfr_3").siblings().css("z-index","1")
        }else if(title == "漫客绘意"){
            minfr.find(".minfr_4").css("z-index","10")
            minfr.find(".minfr_4").siblings().css("z-index","1")
        }
    })
    index_content_magazine("漫客小说绘");
    index_content_magazine("漫客绘心");
    index_content_magazine("漫客绘意");
    index_content_magazine("知音漫客");
    async function index_content_magazine(title){
        var res = await PAjax({
            method:"post",
            url:"php/index_content_magazine.php",
            data:{t:title},
            async:true,
            success:function(res){
                resolve(res);
            }
        })
        var str = '';
        var data = JSON.parse(res);
        var length = data.length;
        for(var i=0;i<length;i++){
             var price = Number(data[i].price).toFixed(2)
             if(i>7){
                 str += ``
             }else if(i==7){
                str +=
                `
                <div class="box_wrap wrap_10">
                    <div class="content">
                        <a href="#">
                            <img src="${data[i].image}" alt="">
                        </a>
                        <a href="#">
                                ${data[i].name}
                        </a>
                        <em>￥${price}</em>
                    </div>
                    <div class="content">
                        <a href="list.html"></a>
                    </div>
                </div>
                `
            }else if(i<7){
            str += 
            `
            <div class="box_wrap">
                <div class="content">
                    <a href="#">
                        <img src="${data[i].image}" alt="">
                    </a>
                    <a href="#">
                        ${data[i].name}
                    </a>
                    <em>￥${price}</em>
                    <i>0人评价</i>
                </div>
            </div>
            `
            }
        }
        if(title=="知音漫客"){
            $('.index_body_magazine .fr .minfr_1').html(str)
        }else if(title == "漫客小说绘"){
            $('.index_body_magazine .fr .minfr_2').html(str)
        }else if(title == "漫客绘心"){
            $('.index_body_magazine .fr .minfr_3').html(str)
        }else if(title == "漫客绘意"){
            $('.index_body_magazine .fr .minfr_4').html(str)
        }
        
        
    }





//more点击
$(".more_next").on("click",function(){
    var left = parseInt($(".index_content_body").css("left"))-1240
    var width = parseInt($(".index_content_body").css("width"))
    if(left<=(0-width)){
        left=0;
    }
    $(".index_content_body").stop().animate({
        left:left+"px"
    },200)
})
$(".more_pre").on("click",function(){
    var left = parseInt($(".index_content_body").css("left"))+1240
    var width = parseInt($(".index_content_body").css("width"))
    if(left>0){
        left=0-(width-1240);
    }
    console.log(left)
    $(".index_content_body").stop().animate({
        left:left+"px"
    },200)
})
