$(document).ready(function(){



   var dataProvider =  [{}];


   function createDataSet(y,x,value) {
       var dataset = {
           "y": x,
           "x": y,
           "value": value,
           "y2": x,
           "x2": y,
           "value2": value};
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
            "maximum": "100",
            "minimum": "0",
            "position": "bottom",
            "axisAlpha": 0
        }, {
            "maximum": "100",
            "minimum": "0",
            "position": "left",
            "axisAlpha": 0
        } ],
        "startDuration": 1,
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
            '<td><p id="index"     data-index-number=1">' + rows + '</p></td> ' + //Index
            '<td><label class="product" for="product' + rows + '">Produkt</label><input class="product" type="text" name="product" id="product' + rows + '"></td> ' + // Label Input

            '<td><div class="slider" id="slider'+(rows)+'"><div id="custom-handle'+(rows)+'" class="slidhandle" class="ui-slider-handle"></div></div></td>' + //irgendwas stimm nicht mit der klasse ?
            '<td><div class="slider" id="slider'+(rows+1)+'"><div id="custom-handle'+(rows+1)+'" class="slidhandle" class="ui-slider-handle"></div></div></td>' +
            '<td><div class="slider" id="slider'+(rows+2)+'""<div id="custom-handle'+(rows+2)+'" class="slidhandle" class="ui-slider-handle"></div></div></td>' +
            /*  '<td><p><label for="slider'+rows+'">Umsatz:</label><input type="text" class="amount" id="slider'+rows+'"><div class="slider-range-max"></div></td> ' +
             '<td><p><label for="slider'+(rows+1)+'">Marktwachstum:</label><input type="text" class="amount" id="slider'+(rows+1)+'"></p><div class="slider-range-max"></div></td> ' +
             '<td><p><label for="slider'+(rows+2)+'">Relativer Marktanteil:</label><input type="text" class="amount" id="slider'+(rows+2)+'"></p><div class="slider-range-max"></div></td>' +*/
            '<td><label for="notice' + rows + '">Bemerkung</label><input  class="notice"   type="text" name="notice" id="notice' + rows + '"></td> ' +
            '</tr>'
        );


        //inputs disablen
        $(".amount").prop('disabled', true);

        // neuer slider

        //   $( function() {
        //     var handle = $( "#custom-handle" );
        //     $( "#slider" ).slider({
        //         create: function() {
        //             handle.text( $( this ).slider( "value" ) );
        //         },
        //         slide: function( event, ui ) {
        //             handle.text( ui.value );
        //         }
        //     });
        // } );


        /*
         $( function() {
         var handle = $( "#custom-handle" );
         $( "#slider" ).slider({
         create: function() {
         handle.text( $( this ).slider( "value" ) );
         },
         slide: function( event, ui ) {
         handle.text( ui.value );
         }
         });
         } );
         */

        $(function () {
           slideri = $( ".slider" ).length;
            for (var i = 1 ; i<slideri;i++){
          var handle =   $( ".slidhandle:eq("+i+")")
            $( ".slider:eq("+i+")").slider({
                        create: function() {
                             handle.text( $( this ).slider( "value" ) );
                         },
                         slide: function( event, ui ) {
                             handle.text( ui.value );
                         }
                     });
            }
        })



      /*  $(function () {

                $( ".slider" ).each(function(i){
                    $("#this").slider({
                        create: function() {
                            $( ".slidhandle:eq("+i+")" ).text( $( this ).slider( "value" ) );
                        },
                        slide: function( event, ui ) {
                            $( ".slidhandle:eq("+i+")" ).text( ui.value );
                        }
                    })
                });
        })*/


     /*   $(function () {

            var eachhandles = $( ".slidhandle" );

                eachhandles.each(function(){

                var handle = $( "#this" );

                $( ".slider" ).each(function(){

                    $("#this").slider({
                        create: function() {
                            handle.text( $( this ).slider( "value" ) );
                        },
                        slide: function( event, ui ) {
                            handle.text( ui.value );
                        }
                    })
                });



            });

        })*/


       // var allhandle = $( ".handle" ).each();

      /*  $( function() {
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
*/

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


