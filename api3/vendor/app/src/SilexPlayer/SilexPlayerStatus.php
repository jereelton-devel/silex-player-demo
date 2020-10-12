<?php

namespace SilexPlayer;

class SilexPlayerStatus
{
    public static function checkPlayerStatus()
    {
        if(file_exists('player_stop.lock')) {
            return false;
        } else {
            return true;
        }

    }

}
