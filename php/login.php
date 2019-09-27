<?php
header("content-type:text/html;charset=utf8");
if(isset($_POST["uname"]) && isset($_POST["pass"])){
    $name = $_POST["uname"];
    $pass = $_POST["pass"];
    $con = mysqli_connect("localhost","root","root","mcshop");
    mysqli_query($con,"set names utf8");
    $res = mysqli_query($con,"select * from user where name='{$name}'");
    $row = mysqli_fetch_assoc($res);
    if(!$row){
        $arr = [
            "status"=>1,
            "msg"=>"用户名不存在"
        ];
        echo json_encode($arr);
    }else{
        $res = mysqli_query($con,"select * from user where name='".$_POST['uname']."' and pass='".$_POST["pass"]."'");
        $row = mysqli_fetch_assoc($res);
        if($row){
            $arr = [
                "status"=>3,
                "msg"=>"登陆成功"
            ];
            echo json_encode($arr);
        }else{
            $arr = [
                "status"=>2,
                "msg"=>"密码错误"
            ];
            echo json_encode($arr);
        }
    }
}
 