/**
 * 设置cookie
 * @param {*} key 键
 * @param {*} value 值
 * @param {*} indate 有效期：传入的是我想保留的时间,单位是秒
 */
function setCookie(key,value,indate){
    var date = new Date();
    date.setTime(date.getTime()-8*3600*1000+indate*1000);
    document.cookie = key+'='+value+";expires="+date;
}
/**
 * 清除cookie
 * @param {*} key 键
 */
function delCookie(key){
    setCookie(key,'',-10000);
}
/**
 * 获取cookie
 * @param {*} key 键
 */
function getCookie(key){ // sex
    var str = document.cookie; // "sex=保密; birthday=0903; BD_UPN=12314353"
    var arr = str.split("; "); // [sex=保密,birthday=0903,BD_UPN=12314353]
    for(var i=0;i<arr.length;i++){
        var k = arr[i].split("=");
        if(k[0] == key){
            return k[1];
        }
    }
}