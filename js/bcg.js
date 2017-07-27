$(document).ready(function(){


    var dataProvider = [];

   function createDataSet(y,x,value,name){
        name = decodeURI(name);
       var dataset = {
           "y": x,
           "x": y,
           "value": value,
           "Name": name,
           "y2": 0,
           "x2": 0,
           "value2": 0};
       dataProvider.push(dataset);
   }


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


   /* function createGraph (product){
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

    }*/


    var BcgChart = AmCharts.makeChart( "BcgDivChart", {
        "type": "xy",
        "theme": "light",
        "balloon":{
            "fixedPosition":true
        },
        "dataProvider": dataProvider = [{
            "y": 0,
            "x": 0,
            "value": 1,
            "Name": "",
            "y2": 0,
            "x2": 0,
            "value2": 0,
            "alpha": 0
        }
            , {
                "y": 0,
                "x": 0,
                "value": 10,
                "Name": "",
                "y2": 0,
                "x2": 0,
                "value2": 0,
                "alpha": 0
            }],
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
        "startDuration": 1,
        "graphs": [ {
            "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
            "balloonFunction": function(item) {
                // using this in order not to display balloons for
                // hidden bullets
                if (item.alpha === 0)
                    return "";
                return "" + item.dataContext.value;
            },
            "bullet": "circle",
            //"bulletBorderAlpha": 0.2,
            //"bulletAlpha": 0.8,
            "lineAlpha": 0,
            "fillAlphas": 0,
            "valueField": "value",
            "xField": "x",
            "yField": "y",
            "labelPosition": "top",
            "labelText": "[[Name]]",
            "alphaField": "alpha",
            "minBulletSize": 10,
            "maxBulletSize": 100
        }],
        "marginLeft": 46,
        "marginBottom": 35,
        "export": {
            "enabled": true
        }
    } );




    //BcgChart.addLabel("40%","80%","Relativer Marktanteil","","30"); //x - horizontal coordinate y - vertical coordinate text
    //BcgChart.addLabel("8%","70%","Marktwachstum","","30","","270");
    //BcgChart.addLabel("","","","","","","","","","");

 //------------------------------INPUT----------------------------------------------------

$(function () {
    // Initialize appendGrid
    $('#BcgTblAppendGrid').appendGrid({
        caption: 'Eingabe',
        initRows: 1,
        columns: [
            { name: 'produkt', display: 'Produkt',
             onChange: function (evt, rowIndex) {
                
                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'produkt' },
          
           { name: 'umsatz', display: 'Umsatz', type: 'ui-spinner', ctrlAttr: { maxlength: 2 ,value: 0}, value: 0, ctrlCss: { width: '40px' }, uiOption: { min: 0, max: 10} },
          
           { name: 'marktwachstum', display: 'Marktwachstum', type: 'ui-spinner', ctrlAttr: { maxlength: 2 ,value: 0}, value: 0, ctrlCss: { width: '120px' }, uiOption: { min: 0, max: 10} },

            { name: 'relativerMarktanteil', display: 'Relativer Marktanteil', type: 'ui-spinner', ctrlAttr: { maxlength: 2 ,value: 0}, value: 0, ctrlCss: { width: '150px' }, uiOption: { min: 0, max: 10} },

            { name: 'Bemerkung', display: 'Bemerkung',
             onChange: function (evt, rowIndex) {

                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}}
        ]
    });

  
    $.validator.addClassRules('produkt', {
        required: true,
        minlength: 1
    });
    $.validator.addClassRules('umsatzval', {
        required: true,
        number: true,
        min: 1
    });

    $("#BcgBtnSubmit").click(function () {

        $("#BcgForm").valid();

    });

    $("#BcgForm").validate({                // Eingabe keine Sonderzeichen !!!!
        errorLabelContainer: '#BcgUlError',
        wrapper: 'li',
        submitHandler: function () {


            var rowcount =  $('#BcgTblAppendGrid').appendGrid('getRowCount');

            for (var i = 0; i<rowcount ;i++) {

                var data = $('#BcgTblAppendGrid').appendGrid('getRowValue', i);

               // localStorage.setItem("Chancen" + i, data.chancen);
               // localStorage.setItem("Risiken" + i, data.risiken);


                var product = data.produkt
                var ums = data.umsatz
                var mark = data.marktwachstum;
                var relmark = data.relativerMarktanteil;

                y = mark;
                x = relmark;
                // value = (ums * 100);

                createDataSet(y, x, ums, product);

            }
               // createGraph(product);


            BcgChart.dataProvider;

            BcgChart.validateData();

          
        } //-----------------Submitted
    });
  
  });

}); //End Document Ready

//-----------------------------------------------------------------------------------------------------------


