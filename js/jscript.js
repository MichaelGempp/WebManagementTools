
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

    var iTblPolTre = 1;


    $('#btnAddPol').click(function(el){

        $('#tblPolTre')
            .append('      ' +
            '<tr> ' +
            '<td id="index">'+iTblPolTre+'</td>' +
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



        $(".dropdown-menu li a").unbind();
        $(".dropdown-menu li a").click(function(){

            var obj = $(this).children().clone();
            var selText = $(this).text();
            $(this).parents('.btn-group').find('.dropdown-toggle').html(selText).append(obj);


            var countglyphs = [$(".status .dropdown-toggle .glyphicon-remove-sign").length,
                $(".status .dropdown-toggle .glyphicon-ok-sign").length,
                $(".status .dropdown-toggle .glyphicon-alert").length];


            $(".list-group").find(".glyphbadge").each(function (i) {

                    $(this).text(countglyphs[i]);
            });




        });


        $('.minus-button').unbind();

        $('.minus-button').click(function(e){

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

            sumAndUpdate();


        });

        $('.plus-button').unbind();

        $('.plus-button').click(function(e) {

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

            sumAndUpdate();
        });


        iTblPolTre ++;

    });


    //anzahl Spalten
   for (var i = 1; i< 5; i++){
        $('#btnAddPol').click();
    }



});



//-----------------------------------------------------------------------------------------------------------
function sumAndUpdate() {
    var sum = 0;
    $('.input-sm').each(function(i, obj) {
        var val  = $(this).text();
        sum = Number(sum) + Number(val);
    });
    $('#PolSum').text((sum));

    pointsPol = $('#PolSum').text();
    chart.dataProvider = createDataset(pointsPol);
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


