<?php

namespace SilexPlayer;

class SilexPlayerRandomNumber
{

    private $randNumberPlayer;

    public function __construct()
    {
        $this->randNumberPlayer = rand(1, 10);
    }

    public function getRandomNumber()
    {
        return $this->randNumberPlayer;
    }

}

?>
