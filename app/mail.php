<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$method = $_SERVER['REQUEST_METHOD'];

//$mail->SMTPDebug = 3;                       // Enable verbose debug output

$mail->isSMTP();                              // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;  											// Включить SMTP аутентифика́ция
$mail->Username = 'n.avis.courier@gmail.com'; // Логин от почты с которой будут отправляться письма
$mail->Password = 'Dual8CoreChip'; 						// Пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                   
$mail->Port = 465; // TCP port to connect to gmail 587

$mail->setFrom('n.avis.courier@gmail.com'); 	// от кого будет уходить 
$mail->addAddress($admin_mail);     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');     // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

if ( $method === 'POST' ) {

$site_name = trim($_POST["site_name"]);
$admin_mail  = trim($_POST["admin_mail"]);
$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "site_name" && $key != "admin_mail" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
} else if ( $method === 'GET' ) {

$site_name = trim($_GET["site_name"]);
$admin_mail  = trim($_GET["admin_mail"]);
$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "site_name" && $key != "admin_mail" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
};

$message = "<table style='width: 100%;'>$message</table>";



$mail->Subject = 'Заявка с ' . $site_name;
$mail->Body    = $message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>