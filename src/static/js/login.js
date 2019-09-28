var u = getCookie("uname");
var p = getCookie("upass")
if(u!=undefined && p!=undefined){
    document.querySelector("input[name='username']").value = u;
    document.querySelector("input[name='password']").value = p;
}

document.querySelector('.loginBtn').onclick = function(){
    var username = document.querySelector("input[name='username']").value.trim();
    var usernameReg = /^[u4e00-\u9fa50-9a-zA-z]{6,16}$/;
    if(!usernameReg.test(username)){
        alert("用户名格式错误");
        return false;
    }
    var password = document.querySelector("input[name='password']").value.trim();
    if(!password){
        alert("请输入密码");
        return false;
    }
    var remember = document.querySelector('input[name="remember"]').checked;

    PAjax({
        method:"post",
        async:true,
        data:{uname:username,pass:password},
        url:"../static/php/login.php",
        success:function(res){
            resolve(res);
        }
    }).then(function(res){
        res = JSON.parse(res);
        if(res.status === 1){
            alert(res.msg);
            return false;
        }else if(res.status === 2){
            alert(res.msg);
            return false;
        }else if(res.status === 3){
            alert(res.msg);
            setCookie("username",username,60*60);
            if(remember){
                setCookie("uname",username,7*24*60*60);
                setCookie("upass",password,7*24*60*60);
            }else{
                delCookie("uname");
                delCookie("upass");
            }
            if(document.referrer=="http://localhost/mksc/dist/templates/register.html"){
                window.location.href = "http://localhost/mksc/dist/index.html"
            }else{
                window.location.href=document.referrer;
            }
            
        }
    })
}