<?php

//Silex is a PHP micro framework that helps you quickly write simple yet powerful web applications and APIs

require __DIR__ . "/vendor/autoload.php";

use \Silex\Application;
use \SilexPlayer\SilexPlayerRandomNumber;
use \SilexPlayer\SilexPlayerSendRandomNumber;

$app = new Application();

$app->get('/player_running/{player_id}', function($player_id) {

    //Gerar numero randomico para enviar para a API3
    $n = new SilexPlayerRandomNumber();
    $api1_value = $n->getRandomNumber();

    //file_put_contents('log', date("F j, Y, g:i a")." api1_value:".$api1_value."\r\n", FILE_APPEND);

    //Gerar numero randomico para enviar para a API3
    $s = new SilexPlayerSendRandomNumber();
    $s->sendRandomNumber('api1_val', 'api3', $api1_value, $player_id);

    exit;
});

$app->get('/controll/player-reset', function(){

    file_put_contents('log', "");

    exit;
});

//$app->post();

//$app->put();

//$app->delete();

$app->run();

?>