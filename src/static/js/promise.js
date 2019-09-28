function SendAjax(obj){
    var ajax = new XMLHttpRequest();
    ajax.open(obj.method,obj.url,obj.async);
    ajax.onreadystatechange = function(){
        if(ajax.status==200 && ajax.readyState==4){
            obj.success(ajax.responseText)
        }
    }
    if(obj.method=='get'){
        ajax.send(null);
    }else if(obj.method=='post'){
        ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
        var str = '';
        var f = '';
        for(var i in obj.data){
            str += f+i+"="+obj.data[i];
            f='&';
        }
        ajax.send(str);
    }
}
function PAjax(obj){
    return new Promise(function(resolve,reject){
        SendAjax({
            method:obj.method,
            url:obj.url,
            data:obj.data,
            async:obj.async,
            success:function(res){
                resolve(res);
            }
        });
    });
}
