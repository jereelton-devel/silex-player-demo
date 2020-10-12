<?php

namespace SilexPlayer;

class SilexPlayerStart
{
    public static function startPlayerNow()
    {
        if(file_exists('player_stop.lock')) {
            if(unlink('player_stop.lock')) {
                return "BEM VINDO AO SILEX PLAYER";
            } else {
                touch('player_stop.lock');
                return "ERRO: SILEX PLAYER NÃO PODE INICIAR";
            }
        } else {
            return "BEM VINDO AO SILEX PLAYER";
        }

    }

}
