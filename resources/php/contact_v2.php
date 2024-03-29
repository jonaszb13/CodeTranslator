<?php
//send_email.php

if (isset($_POST['url']) && $_POST['url'] === '') {

   $email_from = "absender@domain.de";   //Absender falls keiner angegeben wurde
   $sendermail_antwort = true;      //E-Mail Adresse des Besuchers als Absender. false= Nein ; true = Ja
   $name_von_emailfeld = "Email";   //Feld in der die Absenderadresse steht
   
   $empfaenger = "poz53939@cuoly.com"; //Empfänger-Adresse
   $mail_cc =[""; //CC-Adresse, diese E-Mail-Adresse bekommt einer weitere Kopie
   $betreff = "Neue Kontaktanfrage"; //Betreff der Email
   
   $url_ok = "http://www.domain.de/ok.php"; //Zielseite, wenn E-Mail erfolgreich versendet wurde
   $url_fehler = "http://www.domain.de/fehler.php"; //Zielseite, wenn E-Mail nicht gesendet werden konnte
   
   
   //Diese Felder werden nicht in der Mail stehen
   $ignore_fields = array('submit');
   
   
   
   
   //Datum, wann die Mail erstellt wurde
   $name_tag = array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");
   $num_tag = date("w");
   $tag = $name_tag[$num_tag];
   $jahr = date("Y");
   $n = date("d");
   $monat = date("m");
   $time = date("H:i");
   
   //Erste Zeile unserer Email
   $msg = ":: Gesendet am $tag, den $n.$monat.$jahr - $time Uhr ::\n\n";
   
   //Hier werden alle Eingabefelder abgefragt
   foreach($_POST as $name => $value) {
      if (in_array($name, $ignore_fields)) {
         continue; //Ignore Felder wird nicht in die Mail eingefügt
      }
      $msg .= "::: $name :::\n$value\n\n";
   }
   
   
   
   //E-Mail Adresse des Besuchers als Absender
   if ($sendermail_antwort and isset($_POST[$name_von_emailfeld]) and filter_var($_POST[$name_von_emailfeld], FILTER_VALIDATE_EMAIL)) {
      $email_from = $_POST[$name_von_emailfeld];
   }
   

   if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {

      $header="From: $email_from";
   
      if (!empty($mail_cc)) {
         $header .= "\n";
         $header .= "Cc: $mail_cc";
      }
   
      //Email als UTF-8 senden
      $header .= "\nContent-type: text/plain; charset=utf-8";

   }

   if($_POST["msg"] == "" || $_POST["name"] == "" || $_POST["email"]){
      echo "<p>Please press the back button and fill in all fields</p>";
   } else {   
      $mail_senden = mail($empfaenger,$betreff,$msg,$header);
   }
   
   //Weiterleitung, hier konnte jetzt per echo auch Ausgaben stehen
   if($mail_senden){
   header("Location: ".$url_ok); //Mail wurde gesendet
   exit();
   } else{
   header("Location: ".$url_fehler); //Fehler beim Senden
   exit();
   }

}
?>