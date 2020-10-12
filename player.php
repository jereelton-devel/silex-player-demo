<!DOCTYPE html>
<html>
<head>
	<title>Sliex Player</title>

    <link rel="stylesheet" href="./css/font-awesome.min.css" type="text/css" />
    <link rel="stylesheet" href="./css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="./css/styles.css" type="text/css" />

</head>
<body>

<div id="topo">
    <input class="btn btn-success" type="button" name="" id="bt-start-player" value="Start" />
    <input class="btn btn-default" type="button" name="" id="bt-stop-player" value="Stop" disabled />
    <input class="btn btn-danger" type="button" name="" id="bt-reset-player" value="Reset" disabled />
</div>
<div id="view">

    <div id="subview"></div>

    <!--Resultados-->
    <table class="table text-center" id="tb_sliex_player">
        <thead>
            <th class="text-center">ID</th>
            <th class="text-center">PLAYER 1</th>
            <th class="text-center">MACHINE PLAYER</th>
            <th class="text-center">PLAYER 2</th>
            <th class="text-center">WINNER</th>
        </thead>
        <tbody id="tbody_sliex_player">
            <!--Insere aqui os resultados-->
        </tbody>
    </table>
</div>

<script src="js/vendor/jquery/jquery-1.11.3.js"></script>
<script src="js/script.js"></script>

</body>
</html>