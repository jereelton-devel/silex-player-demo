
$(document).ready(function(){

    var controlPlayer = null;

    $("#tb_silex_player").hide();

    function getPlayerResult() {

        $.ajax({
            type: "GET",
            url: "http://localhost/webdev/testes/silex-player-demo/api3/info/player-status",
            data: "action=player-status",
            dataType: "text",
            async: false,
            success: function(resp) {
                if(resp === 0) {

                    clearInterval(controlPlayer);
                    $("#subview").html("O PLAYER NAO ESTA EXECUTANDO...");
                    console.log(resp);

                } else {

                    $.ajax({
                        type: "GET",
                        url: "http://localhost/webdev/testes/silex-player-demo/api3/info/player-result",
                        data: "action=player-result",
                        dataType: "text",
                        success: function(resp) {

                            resp = JSON.parse(resp);

                            if(resp.winner == 'api1') {
                                playerWin = 'player 1';
                            } else if(resp.winner == 'api2') {
                                playerWin = 'player 2';
                            } else {
                                playerWin = resp.winner;
                            }

                            winner1 = (resp.winner == 'api1') ? 'winner' : '';
                            winner2 = (resp.winner == 'api2') ? 'winner' : '';

                            $("#tbody_silex_player").append("" +
                                "<tr>" +
                                "<td>"+resp.id+"</td>" +
                                "<td class='"+winner1+"'>"+resp.api1_val+"</td>" +
                                "<td>"+resp.api3_val+"</td>" +
                                "<td class='"+winner2+"'>"+resp.api2_val+"</td>" +
                                "<td class='text-uppercase'>"+playerWin+"" +
                                "</tr>");

                            //console.log(typeof resp, resp);
                        }
                    });

                }
            }
        });
    }

    $("#bt-start-player").on('click', function() {

        $("#tb_silex_player").removeClass('hide');
        $("#tb_silex_player").show();

        $("#subview").html("WELCOME TO SILEX PLAYER");

        $.ajax({
            type: "GET",
            url: "http://localhost/webdev/testes/silex-player-demo/api3/controll/player-start",
            data: "action=player-start",
            dataType: "text",
            success: function(resp) {
                if(resp.search('Erro:') === -1) {
                    $("#subview").html(resp);
                    //console.log(resp);
                } else {
                    $("#subview").html(resp);
                    return false;
                }
            }
        });

        controlPlayer = setInterval(getPlayerResult, 3000);
        $("#bt-start-player").prop('disabled', true);
        $("#bt-stop-player").prop('disabled', false);
        $("#bt-reset-player").prop('disabled', true);

    });

    $("#bt-stop-player").on('click', function() {
        if(confirm("Deseja cancelar o jogo ?")) {
            $.ajax({
                type: "GET",
                url: "http://localhost/webdev/testes/silex-player-demo/api3/controll/player-stop",
                data: "action=player-stop",
                dataType: "text",
                success: function(resp) {

                    setTimeout(function() {
                        clearInterval(controlPlayer);
                        $("#subview").html(resp);
                        $("#bt-start-player").prop('disabled', false);
                        $("#bt-stop-player").prop('disabled', true);
                        $("#bt-reset-player").prop('disabled', false);
                        //console.log(resp);
                    }, 3000);

                }
            });
        }
    });

    $("#bt-reset-player").on('click', function() {
        if(confirm("Deseja resetar o jogo ?")) {

            $.ajax({
                type: "GET",
                url: "http://localhost/webdev/testes/silex-player-demo/api3/controll/player-reset",
                data: "action=player-reset",
                dataType: "text",
                success: function(resp) {

                    $.ajax({
                        type: "GET",
                        url: "http://localhost/webdev/testes/silex-player-demo/api2/controll/player-reset",
                        data: "action=player-reset",
                        dataType: "text",
                        async: false,
                        success: function(resp) {

                            $.ajax({
                                type: "GET",
                                url: "http://localhost/webdev/testes/silex-player-demo/api1/controll/player-reset",
                                data: "action=player-reset",
                                dataType: "text",
                                async: false,
                                success: function(resp) {
                                }
                            });
                        }
                    });

                    $("#subview").html(resp);
                    $("#tbody_silex_player").html("");
                    $("#tb_silex_player").hide();
                    $("#bt-start-player").prop('disabled', false);
                    $("#bt-stop-player").prop('disabled', true);
                    $("#bt-reset-player").prop('disabled', true);
                }
            });
        }
    });
});