function verify(ele,kongText,reg){
    ele.addEventListener("focus",function(){
        var span = this.nextElementSibling
        span.innerText = "*";
    },false);
    ele.addEventListener("blur",function(){
    var v = ele.value;
    var span = ele.nextElementSibling
    span.style.color='red';
    span.style.fontSize = '12px';
    if(v == ''){
            span.innerText = kongText + "不能为空";
            return false;
        }
    if(v.length<6 || v.length>16){
        span.innerText = "输入的长度不正确";
        return false;
    }
    if(!reg.test(v)){
        span.innerText=kongText + "格式不对";
        return false;
    }
    span.innerText = 'ok';
    span.style.color = '#0f0';

    },false)
}
var username = document.querySelector('[name="username"]');
verify(username,"用户名",/^[u4e00-\u9fa50-9a-zA-z]{6,16}$/)
var email = document.querySelector('[name="email"]');
verify(email,"邮箱",/^\w{4,12}@\w+\.(com|cn)$/);
var password = document.querySelector('[name="pass"]');
verify(password,"密码",/^[a-zA-Z][0-9a-zA-z]{5,15}$/);
var repass = document.querySelector('[name = "repass"]');
verify(repass,"密码",/^[a-zA-Z][0-9a-zA-z]{5,15}$/);
repass.addEventListener("blur",function(){
    var v = this.value;
    if(v!=password.value){
        var span = this.nextElementSibling
        span.style.color = 'red';
        span.style.fontSize = '12px';
        span.innerText = '两次密码不一致';
    }
},false);
var tel = document.querySelector('[name="tel"]');
verify(tel,"手机号",/^1[345789]\d{9}$/);
function check(ele,kongText,reg){
    var v = ele.value;
    var span = ele.nextElementSibling
    span.style.color='red';
    span.style.fontSize = '12px';
    if(v == ''){
            span.innerText = kongText + "不能为空";
            return false;
        }
    if(v.length<6 || v.length>16){
        span.innerText = "输入的长度不正确";
        return false;
    }
    if(!reg.test(v)){
        span.innerText=kongText + "格式不对";
        return false;
    }
    span.innerText = 'ok';
    span.style.color = '#0f0';
    return true;
}
document.querySelector('input[name="Submit"]').onclick = function(){
    var obj = {}
    obj.username = check(username,"用户名",/^[u4e00-\u9fa50-9a-zA-z]{6,16}$/);
    obj.password = check(password,"密码",/^[a-zA-Z][0-9a-zA-Z]{5,15}$/)
    obj.repass = check(repass,"密码",/^[a-zA-Z][0-9a-zA-Z]{5,15}$/);
    var v = repass.value;
    if(v!=password.value){
        var span = repass.nextElementSibling;
        span.style.color='red';
        span.style.fontSize = '12px';
        span.innerText = "两次密码不一致"
        return false;
    }
    obj.tel = check(tel,"手机号",/^1[345789]\d{9}$/)
    obj.email = check(email,"邮箱",/^\w{4,12}@\w+\.(com|cn)$/)
    var agreement = document.querySelector('input[name="agreement"]');
    if(agreement.checked == false){
        var accept = document.querySelector(".accept")
        accept.style.display = "block"
        return false;
    }
    for(var i in obj){
        if(!obj[i]){
            return false;
        }
    }

    PAjax({
        method:"post",
        async:true,
        data:{uname:username.value,pass:password.value,email:email.value,tel:tel.value.trim()},
        url:"../static/php/register.php",
        success:function(res){
            resolve(res);
        }
    }).then(function(res){
        res = JSON.parse(res);
        if(res.status === 1){
            alert(res.msg)
            return false;
        }else if(res.status === 2){
            alert(res.msg);
            location.href = 'login.html';
        }else if(res.status === 3){
            alert(res.msg);
            return false;
        }
    });
    
}
