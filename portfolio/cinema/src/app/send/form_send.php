<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$txt = $_POST['txt'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$email = htmlspecialchars($email);
$txt = htmlspecialchars($txt);

$name = urldecode($name);
$tel = urldecode($tel);
$email = urldecode($email);
$txt = urldecode($txt);

$name = trim($name);
$tel = trim($tel);
$email = trim($email);
$txt = trim($txt);

if (mail("flashique@gmail.com",
    "Заявка с сайта",
    "Имя: ".$name. "\nТелефон: ".$tel. "\ne-mail: ".$email. "\nУдобное время для связи: \n".$txt ))
{
    header("Location: /#endthx");
} else {
    echo "при отправке сообщения возникли ошибки";
}