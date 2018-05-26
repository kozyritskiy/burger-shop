<?php

$name = $_POST['user-name'];
$phone = $_POST['user-number'];
$address = $_POST['street'];
$house = $_POST['house'];
$housing = $_POST['housing'];
$apartment = $_POST['apartment'];
$floor = $_POST['floor'];
$pay = $_POST['pay'];
$message = $_POST['comment'];

$call = $_POST['dont-call']; // 1 или null
$call = isset($сall) ? 'НЕТ' : 'ДА';

$mail_message = '
    <html>
    <head>
        <title>TEST</title>
    </head>
    <body>
        <h2>Тестовый заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Номер: ' . $phone . '</li>
            <li>Адрес доставки: <span>' . $address. '</span>&ndash;<span>' . $house. ',</span>&nbsp;
            <span>корпус-' . $housing. ',</span>&nbsp;<span>кв.' . $apartment. ',</span>&nbsp;<span>этаж-' . $floor. '</span></li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Комментарий к заказу: ' . $message . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $call . '</li>
        </ul>
    </body>
    </html>';

$headers = "From: С уважением от Администрации <admin@mrburger-shop.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('maxim.kozyricki@gmail.com', 'Заказ', $mail_message, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);

?>