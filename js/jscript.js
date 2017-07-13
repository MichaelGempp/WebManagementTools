
var chart = null;
var dataprovider;
var idTablPol = "pol";
var idTablEco = "eco";
var idTablSoz = "soz";
var idTablTech = "tech";
var idTablOek = "oek";
var idTablRec = "rech";
$(document).ready(function(){


    var pointsPol = 2;
    var pointsLeg = 2;
    var pointsEnv = 2;
    var pointsTech = 2;
    var pointsSoc = 2;
    var pointsEco = 2;

    dataprovider = [ {
        "category": "Political",
        "points": Number(pointsPol)
    }, {
        "category": "Legal",
        "points": Number(pointsLeg)
    }, {
        "category": "Enviromental",
        "points": Number(pointsEnv)
    }, {
        "category": "Technological",
        "points": Number(pointsTech)
    }, {
        "category": "Social",
        "points": Number(pointsSoc)
    }, {
        "category": "Econimic",
        "points": Number(pointsEco)
    } ];


    chart = AmCharts.makeChart( "chartdiv", {
        "type": "radar",
        "theme": "light",
        "dataProvider": dataprovider,
        "valueAxes": [ {
            "axisTitleOffset": 20,
            "minimum": 0,
            "maximum": 7,
            "axisAlpha": 0.15
        } ],
        "startDuration": 2,
        "graphs": [ {
            "balloonText": "[[value]] points",
            "bullet": "round",
            "lineThickness": 2,
            "valueField": "points"
        } ],
        "categoryField": "category",
        "export": {
            "enabled": true
        }
    } );




    var thHeader = ["Econimic","Political","Legal","Enviromental","Technological","Social"];




    //$('#btnAddPol').click(function(){



    createTable($("#thPol"),idTablPol,"Politische Einflussfaktoren");
    createTable($("#thEco"),idTablEco,"Ökonimische Einflussfaktoren");
    createTable($("#thSoz"),idTablSoz,"Soziologische Einflussfaktoren");
    createTable($("#thTech"),idTablTech,"Technologische Einflussfaktoren");
    createTable($("#thOek"),idTablOek,"Ökologische Einflussfaktoren");
    createTable($("#thRech"),idTablRec,"Rechtliche Einflussfaktoren");

    function createTable(th,idTable,title){

        //Table wird in th eingefügt

            th.append('<div id="'+idTable+'">' +
                '<h2>'+title+'</h2>' +
                '<ul class="list-group"><li>'+title+'</li>' +
                '<li>Summe <span id = Sum class="badge">0</span></li>' +
                '<li><a href="#" data-value="1"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span><span class="badge glyphbadge">0</span></a></li>' +
                '<li><a href="#" data-value="2"><span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span><span class="badge glyphbadge">0</span></a></li>' +
                ' <li><a href="#" data-value="3"><span class="glyphicon glyphicon-alert" aria-hidden="true"></span><span class="badge glyphbadge">0</span></a></li>' +
                '</ul><form>' +
                '<table>' +
                '<tr>' +
                '<th>Nr</th>' +
                '<th>Einflussfaktoren</th>' +
                '<th>Auswirkungen</th>' +
                '<th>Stärke der Auswirkung</th' +
                '><th>Trend</th><th>Mögliche Massnahmen</th>' +
                '<th>Status</th>' +
                '</tr>' +
                '</table>' +
                '</form><' +
                'button>Add</button></div>');

        // Zeile wird hinzugefugt

        var iTblRow = 1;

        $('#'+idTable+' button').click(function () {
            $('#'+idTable+' table').append('      ' +
            '<tr> ' +
            '<td id="index">'+iTblRow+'</td>' +
            '<td><input type="text" name="0.1"></td>' +
            '<td><input type="text" name="0.2"></td>' +
            '<td>' +
            '<div class="plus_minus"><div class="form-control input-sm center merge-bottom-input">0</div>' +
            '<div class="btn-group btn-block" role="group" aria-label="plus-minus">' +
            '<button type="button" class="btn btn-sm btn-danger minus-button merge-top-left-button" disabled="disabled">' +
            '<span class="glyphicon glyphicon-minus"></span>' +
            '</button> <button type="button" class="btn btn-sm btn-success plus-button merge-top-right-button">' +
            '<span class="glyphicon glyphicon-plus"></span>' +
            '</button>' +
            '</div><!-- end button group --> </div>' +
            '</td>' +
            '<td><' +
            'div class="trend">' +
            '<div class="btn-group"><a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">Trend <span class="caret"></span></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a data-value="1"><span class="glyphicon glyphicon-circle-arrow-up" aria-hidden="true"></span></a></li>' +
            '<li><a data-value="2"><span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span></a></li>' +
            '<li><a data-value="3"><span class="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></a></li>' +
            '</ul></div>' +
            '</div>' +
            '</td>  ' +
            '<td><input type="text" name="0.5"></td> ' +
            '<td><' +
            'div class="status">' +
            '<div class="btn-group"><a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">Status <span class="caret"></span></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a data-value="1"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></a></li>' +
            '<li><a data-value="2"><span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span></a></li>' +
            '<li><a data-value="3"><span class="glyphicon glyphicon-alert" aria-hidden="true"></span></a></li>' +
            '</ul></div>' +
            '</div>' +
            '</td>  ' +
            '</tr>');

            iTblRow ++;


            //ersetzt text durch Zeichen

            $('#'+idTable+' .dropdown-menu li a').unbind();
            $('#'+idTable+' .dropdown-menu li a').click(function(){

                var obj = $(this).children().clone();
                var selText = $(this).text();
                $(this).parents('.btn-group').find('.dropdown-toggle').html(selText).append(obj);

                //aktualisiert anzahl der Zeichen in der übersicht
                var countglyphs = [$('#'+idTable+' .status .dropdown-toggle .glyphicon-remove-sign').length,
                    $('#'+idTable+' .status .dropdown-toggle .glyphicon-ok-sign').length,
                    $('#'+idTable+' .status .dropdown-toggle .glyphicon-alert').length];

                $('#'+idTable+' .list-group').find(".glyphbadge").each(function (i) {

                    $(this).text(countglyphs[i]);
                });
            });


            $('#'+idTable+' .minus-button').unbind();

            $('#'+idTable+' .minus-button').click(function(e){

                // change this to whatever minimum you'd like
                const minValue = 0;

                const currentInput = $(e.currentTarget).parent().prev()[0];

                minusInputValue = $(currentInput).html();

                if (minusInputValue > minValue) {
                    minusInputValue --;
                    $($(e.currentTarget).next()).removeAttr('disabled');
                    $(currentInput).html(minusInputValue);

                    if (minusInputValue <= minValue) {
                        $(e.currentTarget).attr('disabled', 'disabled');
                    }
                }

            });

            $('#'+idTable+' .plus-button').unbind();

            $('#'+idTable+' .plus-button').click(function(e) {

                const maxValue = 4;

                const currentInput = $(e.currentTarget).parent().prev()[0];

                plusInputValue = $(currentInput).html();

                if (plusInputValue < maxValue) {
                    plusInputValue ++;
                    $($(e.currentTarget).prev()[0]).removeAttr('disabled');
                    $(currentInput).html(plusInputValue);

                    if (plusInputValue >= maxValue) {
                        $(e.currentTarget).attr('disabled', 'disabled');
                    }
                }

            });

            //$('#'+idTable+' .plus-button').add('#'+idTable+' .minus-button').unbind();
            $('#'+idTable+' .plus-button').add('#'+idTable+' .minus-button').click(function () {
                var sum = 0;
                $('#'+idTable+' .input-sm').each(function(i, obj) {
                    var val  = $(this).text();
                    sum = Number(sum) + Number(val);
                });
                $('#'+idTable+' span:first').text((sum));

                //UpdateChart
                refreshChart();

            });


        });

        //anzahl Spalten
        for (var i = 1; i< 5; i++){
            $('#'+idTable+' button:last').click();
        };

    };








});



//-----------------------------------------------------------------------------------------------------------
function refreshChart() {


    pointsPol =  $('#'+idTablPol+' span:first').text();
    pointsLeg = $('#'+idTablEco+' span:first').text();
    pointsEnv =  $('#'+idTablSoz+' span:first').text();
    pointsTech = $('#'+idTablTech+' span:first').text();
    pointsSoc =  $('#'+idTablOek+' span:first').text();
    pointsEco =  $('#'+idTablRec+' span:first').text();
    chart.dataProvider = createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco);
    chart.validateData();

}



function createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco){
    return dataprovider = [ {
        "category": "Political",
        "points": Number(pointsPol)
    }, {
        "category": "Legal",
        "points": Number(pointsLeg)
    }, {
        "category": "Enviromental",
        "points": Number(pointsEnv)
    }, {
        "category": "Technological",
        "points": Number(pointsTech)
    }, {
        "category": "Social",
        "points": Number(pointsSoc)
    }, {
        "category": "Econimic",
        "points": Number(pointsEco)
    } ];

}


