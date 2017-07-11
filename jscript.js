$(document).ready(function(){


    var chart = AmCharts.makeChart( "chartdiv", {
        "type": "radar",
        "theme": "light",
        "dataProvider": [ {
            "category": "Political",
            "points": 2
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
        } ],
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
            '<td><input type="number" name="quantity" min="1" max="4"></td>' +
                '   <td ALIGN="center"> ' +
                    ' <select name="trend"> ' +
                        '<option value="up">up</option> ' +
                        '<option value="hover">hover</option> ' +
                        '<option value="down">down</option> ' +
            '       </select> ' +
            '</td>  ' +
            '<td><input type="text" name="0.5"></td> ' +
            '<td><input type="text" name="0.6"></td> ' +
            '</tr>');


        $iTblPolTre ++;

    });




    $('#btnAdd').click();



});

function sumPoints() {
   var clmn = $('table tr > td:nth-child(3), table tr > th:nth-child(3)')
        .data();
};


