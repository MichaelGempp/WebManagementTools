
var chart = null;
var dataprovider;
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



    var chart = AmCharts.makeChart( "chartdiv", {
        "type": "xy",
        "theme": "light",
        "balloon":{
            "fixedPosition":true,
        },
        "dataProvider": [ {
            "y": 1,
            "x": 3,
            "value": 59,
            "y2": 4,
            "x2": 5,
            "value2": 44
        }, {
            "y": 5,
            "x": 3,
            "value": 50,
            "y2": -15,
            "x2": -8,
            "value2": 12
        }, {
            "y": -10,
            "x": 8,
            "value": 19,
            "y2": -4,
            "x2": 6,
            "value2": 35
        } ],
        "valueAxes": [ {
            "maximum": "10",
            "minimum": "0",
            "position": "bottom",
            "axisAlpha": 0
        }, {
            "maximum": "10",
            "minimum": "0",
            "position": "left",
            "axisAlpha": 0,
        } ],
        "startDuration": 1.5,
        "graphs": [ {
            "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
            "bullet": "circle",
            "bulletBorderAlpha": 0.2,
            "bulletAlpha": 0.8,
            "lineAlpha": 0,
            "fillAlphas": 0,
            "valueField": "value",
            "xField": "x",
            "yField": "y",
            "maxBulletSize": 100
        }, {
            "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
            "bullet": "diamond",
            "bulletBorderAlpha": 0.2,
            "bulletAlpha": 0.8,
            "lineAlpha": 0,
            "fillAlphas": 0,
            "valueField": "value2",
            "xField": "x2",
            "yField": "y2",
            "maxBulletSize": 100
        } ],
        "marginLeft": 46,
        "marginBottom": 35,
        "export": {
            "enabled": true
        }
    } );



    createTable($("#tblContainer"),"tbl","Politische Einflussfaktoren");


    function createTable(td,idTable,title){

        //Table wird in th eingefügt

        td.append('<div id="'+idTable+'" class="divTable">' +
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
            '<th>Produkt</th>' +
            '<th>Umsatz</th>' +
            '<th>Marktwachstum</th' +
            '><th>Relativer Marktanteil</th>' +
            '<th>Bemerkungen</th>' +
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
                '<td><input type="text" name="0.1"></td>' + // Produkt
                '<td>' + //Umsatz
                '<div class="plus_minus"><div class="form-control input-sm center merge-bottom-input">0</div>' +
                '<div class="btn-group btn-block" role="group" aria-label="plus-minus">' +
                '<button type="button" class="btn btn-sm btn-danger minus-button merge-top-left-button" disabled="disabled">' +
                '<span class="glyphicon glyphicon-minus"></span>' +
                '</button> <button type="button" class="btn btn-sm btn-success plus-button merge-top-right-button">' +
                '<span class="glyphicon glyphicon-plus"></span>' +
                '</button>' +
                '</div> '+
                '</td>' +
                '<td>' + //Marktwachstum
                '<div class="plus_minus"><div class="form-control input-sm center merge-bottom-input">0</div>' +
                '<div class="btn-group btn-block" role="group" aria-label="plus-minus">' +
                '<button type="button" class="btn btn-sm btn-danger minus-button merge-top-left-button" disabled="disabled">' +
                '<span class="glyphicon glyphicon-minus"></span>' +
                '</button> <button type="button" class="btn btn-sm btn-success plus-button merge-top-right-button">' +
                '<span class="glyphicon glyphicon-plus"></span>' +
                '</button>' +
                '</div> '+
                '</td>' +
                '<td>' +//Relativer Marktanteil
                '<input id="ex8" data-slider-id="ex1Slider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="14"/><' +
                '/td>' +
            '<td><input type="text" name="0.2"></td>' + // Bemerkung
                '</tr>');

            //slider
            $("#ex8").slider({
                tooltip: 'always'
            });

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


