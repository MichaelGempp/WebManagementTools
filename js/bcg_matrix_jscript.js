$(document).ready(function(){



   var dataProvider =  [{}];


   function createDataSet(y,x,value) {
       var dataset = {"y": y,
           "x": x,
           "value": value,
           "y2": 0,
           "x2": 0,
           "value2": 0};
       dataProvider.push(dataset);
   };


    var graphs =[ {
       /* "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
        "bullet": "circle",
        "bulletBorderAlpha": 0.2,
        "bulletAlpha": 0.8,
        "lineAlpha": 0,
        "fillAlphas": 0,
        "valueField": "value",
        "xField": "x",
        "yField": "y",
        "maxBulletSize": 100*/
    }];


    // ,{           Zweiter Graph
    // "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
    // "bullet": "diamond",
    // "bulletBorderAlpha": 0.2,
    // "bulletAlpha": 0.8,
    // "lineAlpha": 0,
    // "fillAlphas": 0,
    // "valueField": "value2",
    // "xField": "x2",
    // "yField": "y2",
    // "maxBulletSize": 100
    // }


    function createGraph (product){
        var graph ={
            "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>"+product+":<b>[[value]]</b>",
            "bullet": "circle",
            "bulletBorderAlpha": 0.2,
            "bulletAlpha": 0.8,
            "lineAlpha": 0,
            "fillAlphas": 0,
            "valueField": "value",
            "xField": "x",
            "yField": "y",
            "maxBulletSize": 100
        };

        graphs.push(graph);

    }







    var chart = AmCharts.makeChart( "chartdiv", {
        "type": "xy",
        "theme": "light",
        "balloon":{
            "fixedPosition":true
        },
        "dataProvider": dataProvider,
        "valueAxes": [ {
            "maximum": "10",
            "minimum": "0",
            "position": "bottom",
            "axisAlpha": 0
        }, {
            "maximum": "10",
            "minimum": "0",
            "position": "left",
            "axisAlpha": 0
        } ],
        "startDuration": 1.5,
        "graphs": graphs,
        "marginLeft": 46,
        "marginBottom": 35,
        "export": {
            "enabled": true
        }
    } );




    chart.addLabel("40%","80%","Relativer Marktanteil","","30"); //x - horizontal coordinate y - vertical coordinate text
    chart.addLabel("8%","70%","Marktwachstum","","30","","270");
    //chart.addLabel("","","","","","","","","","");


    //disable input



    var rows = 1;
    $("#add").click(function () {

        // reihe erstellen
       $("#tbl tbody").append('           ' +
           '<tr>' +
           '<td><p id="index"     data-index-number=1">'+rows+'</p></td> ' + //Index
            '<td><label class="product" for="product'+rows+'">Produkt</label><input class="product" type="text" name="product" id="product'+rows+'"></td> ' + // Label Input
           '<td><p><label for="slider'+rows+'">Umsatz:</label><input type="text" class="amount" id="slider'+rows+'"><div class="slider-range-max"></div></td> ' +
             '<td><p><label for="slider'+(rows+1)+'">Marktwachstum:</label><input type="text" class="amount" id="slider'+(rows+1)+'"></p><div class="slider-range-max"></div></td> ' +
           '<td><p><label for="slider'+(rows+2)+'">Relativer Marktanteil:</label><input type="text" class="amount" id="slider'+(rows+2)+'"></p><div class="slider-range-max"></div></td>' +
           '<td><label for="notice'+rows+'">Bemerkung</label><input  class="notice"   type="text" name="notice" id="notice'+rows+'"></td> ' +
           '</tr>'
       ) ;


       //inputs disablen
        $(".amount").prop('disabled', true);

        $( function() {
            $( ".slider-range-max" ).slider({
                range: "max",
                min: 1,
                max: 10,
                value: 1
            });
        } );

        $(".slider-range-max").click(function () {
            $(this).prev().find(".amount").val($(this).slider( "value" ));
        })


        // create Data
        $("#addData").click(function () {

            dataProvider = [];
            graphs = [];

            var index = $("#tblBody").children().length;
            for (var i=1; i <=index ; i++){
                var product = $("#product"+i).val();
                var ums =  $("#slider"+i).val();
                var mark =  $("#slider"+(i+1)).val();
                var relmark =  $("#slider"+(i+2)).val();

                y  = mark;
                x = relmark;
                value = (ums * 10);

                createDataSet(y,x,value);
                createGraph (product);

                chart.dataProvider = dataProvider;
                chart.graphs = graphs;

                chart.validateData();

            }
        });



        rows++;

    });


    $("#add").click();
    //$(".slider-range-max").click();


}); //End Document Ready

//-----------------------------------------------------------------------------------------------------------
function refreshChart() {

    chart.dataProvider = createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco);
    chart.validateData();

}



function createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco){
    return dataprovider = [ {
    } ];
}


