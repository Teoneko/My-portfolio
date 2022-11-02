<?php
$headers  = 'MIME-Version: 1.0'."\r\n".'Content-type: text/html; charset=utf-8'."\r\n".'From: Teo Sites <noreplay@'.$_SERVER['SERVER_NAME'].'>'."\r\n";


$project = $_POST['project'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

$project = htmlspecialchars($project);
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$comment = htmlspecialchars($comment);

$project = urldecode($project);
$name = urldecode($name);
$phone = urldecode($phone);
$comment = urldecode($comment);

$project = trim($project);
$name = trim($name);
$phone = trim($phone);
$comment = trim($comment);

mail("ruslionar@gmail.com",
    "Заказ от $name",
    '<p>Имя: <b>'.$name.'</b><br/>Тел.: <b>'.$phone.'</b><br/>Проект: <b>'.$project.'</b><br/>Комментарий: <b>'.$comment.'</b><br/>Отправлено со страницы '.$_SERVER['HTTP_REFERER'].'</a></p>', $headers);
