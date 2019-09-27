<?php
header("content-type:text/html;charset=utf8");
if(isset($_POST["uname"]) && isset($_POST["pass"]) && isset($_POST["email"]) && isset($_POST["tel"])){
    $name = $_POST["uname"];
    $pass = $_POST["pass"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $con = mysqli_connect("localhost","root","root","mcshop");
    $res = mysqli_query($con,"select * from user where name='{$name}'");
    $row = mysqli_fetch_assoc($res);
    if(!empty($row)){
        $arr = [
            "status" =>1,
            "msg" =>"用户名被占用了"
        ];
        echo json_encode($arr);
    }else{
        $res = mysqli_query($con,"insert user(name,pass,email,tel) values('{$name}','{$pass}','{$email}','{$tel}')");
        if($res){
            $arr = [
                "status"=>2,
                "msg" => "注册成功"
            ];
            echo json_encode($arr);
        }else{
            $arr = [
                "status" =>3,
                "msg"=>"注册失败"
            ];
            echo json_encode($arr);
        }
    }
}else{
    $arr = [
        "status" => 4,
        "msg"=>"非法请求"
    ];
    echo json_encode($arr);
}