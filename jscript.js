
var chart = null;
var dataprovider;
$(document).ready(function(){


    var pointsPol = 2;


    dataprovider = [ {
        "category": "Political",
        "points": Number(pointsPol)
    }, {
        "category": "Legal",
        "points": 2
    }, {
        "category": "Enviromental",
        "points": 2
    }, {
        "category": "Technological",
        "points": 2
    }, {
        "category": "Social",
        "points": 2
    }, {
        "category": "Econimic",
        "points": 2
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

    var $iTblPolTre = 1;

    $('#tblPolTre').change(function (){
        sumPoints()
    });


    $('#btnAdd').click(function(){

        $('#tblPolTre')
            .append('      ' +
            '<tr> ' +
            '<td id="index">'+$iTblPolTre+'</td>' +
            '<td><input type="text" name="0.1"></td>' +
            '<td><input type="text" name="0.2"></td>' +
            '<td><input class="quantity" type="number" name="quantity" min="1" max="4"></td>' +
                '<td>' +
                '   <select name="trend"> ' +
                        '<option value="up">up</option> ' +
                        '<option value="hover">hover</option> ' +
                        '<option value="down">down</option> ' +
                '  </select> ' +
                '</td>  ' +
            '<td><input type="text" name="0.5"></td> ' +
            '<td><input type="text" name="0.6"></td> ' +
            '</tr>');


        $iTblPolTre ++;

    });




    $('#btnAdd').click();

    $('#outSum').change(function () {
        updateValue()
    });



});

function sumPoints() {
    var sum = 0;
    $('.quantity').each(function(i, obj) {
        var val  = $(this).val();
        sum = Number(sum) + Number(val);
    });
    $('#outSum').val(sum);
}

function updateValue() {
    pointsPol = $('#outSum').val();
    chart.dataProvider = createDataset(pointsPol);
    chart.validateData();

}



function createDataset(pointsPol){
    return dataprovider = [ {
        "category": "Political",
        "points": Number(pointsPol)
    }, {
        "category": "Legal",
        "points": 2
    }, {
        "category": "Enviromental",
        "points": 2
    }, {
        "category": "Technological",
        "points": 2
    }, {
        "category": "Social",
        "points": 2
    }, {
        "category": "Econimic",
        "points": 2
    } ];

}


