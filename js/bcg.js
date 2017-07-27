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
            { name: 'Produkt', display: 'Produkt',
             onChange: function (evt, rowIndex) {
                
                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'produkt' },
          
            { name: 'Umsatz', display: 'Umsatz',
             onChange: function (evt, rowIndex) {
               
             var value = $('#BcgTblAppendGrid').appendGrid('getCtrlValue', 'Umsatz', rowIndex);
               
            $('#BcgTblAppendGrid').appendGrid('setCtrlValue', 'UmsatzVal', rowIndex, value);
               
                }, type: 'range', ctrlCss: { width: '80px' }, ctrlAttr: { min: 0, max: 400 }, value: 0 },
          
            { name: 'UmsatzVal', display: '',
             onChange: function (evt, rowIndex) {
             
                }, type: 'text', ctrlAttr: { maxlength: 3, value: 0}, ctrlCss: { width: '30px'} , ctrlClass: 'umsatzval'},
          
            { name: 'Marktwachstum', display: 'Marktwachstum',
             onChange: function (evt, rowIndex) {
               
            var value = $('#BcgTblAppendGrid').appendGrid('getCtrlValue', 'Marktwachstum', rowIndex);
               
            $('#BcgTblAppendGrid').appendGrid('setCtrlValue', 'MarktwachstumVal', rowIndex, value);
               
                }, type: 'range', ctrlCss: { width: '80px' }, ctrlAttr: { min: 0, max: 10 }, value: 0},
          
            { name: 'MarktwachstumVal', display: '',
             onChange: function (evt, rowIndex) {
               
                }, type: 'text', ctrlAttr: { maxlength: 2, value: 0 }, ctrlCss: { width: '30px'}, ctrlClass: 'umsatzval'},
          
            { name: 'RelativerMarktanteil', display: 'Relativer Marktanteil',
             onChange: function (evt, rowIndex) {
               
            var value = $('#BcgTblAppendGrid').appendGrid('getCtrlValue', 'RelativerMarktanteil', rowIndex);
               
            $('#BcgTblAppendGrid').appendGrid('setCtrlValue', 'RelativerMarktanteilVal', rowIndex, value);
               
                }, type: 'range', ctrlCss: { width: '120px'}, ctrlAttr: { min: 0, max: 10 }, value: 0},
          
            { name: 'RelativerMarktanteilVal', display: '',
             onChange: function (evt, rowIndex) {
        
                }, type: 'text', ctrlAttr: { maxlength: 2,value: 0}, ctrlCss: { width: '30px'},ctrlClass: 'umsatzval' },
          
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
            // For demo purpose only!

          var datastream = $("#BcgForm").serialize();

            var Prod = /Produkt_\d=(.*?)&/g;
            var Umsatz = /UmsatzVal_\d=(.*?)&/g;
            var Marktwachs = /MarktwachstumVal_\d=(.*?)&/g;
            var RelMarkt = /RelativerMarktanteilVal_\d=(.*?)&/g;
            var Bemerkung = /Bemerkung_\d=(.*?)&/g;

            var s = datastream


            var p;
            var Produkte = [];

            do {
                p = Prod.exec(s);
                if (p) {
                  Produkte.push(p[1]);
                }
            } while (p);

            var u;
            var Umsätze = [];

            do {
                u = Umsatz.exec(s);
                if (u) {
                    Umsätze.push(u[1]);
                }
            } while (u);

            var ma;
            var Marktwachstums = [];

            do {
                ma = Marktwachs.exec(s);
                if (ma) {
                    Marktwachstums.push(ma[1]);
                }
            } while (ma);

            var re;
            var RelMarktAnt = [];


            do {
                re = RelMarkt.exec(s);
                if (re) {
                    RelMarktAnt.push(re[1]);
                }
            } while (re);

            var be;
            var Bemerkungen = [];


            do {
                be = Bemerkung.exec(s);
                if (be) {
                    Bemerkungen.push(be[1]);
                }
            } while (be)


            graphs = [];


            for (var i=0; i<Produkte.length;i++ ) {



                var product = Produkte[i];
                var ums = Umsätze[i];
                var mark = Marktwachstums[i];
                var relmark = RelMarktAnt[i];

                y = mark;
                x = relmark;
               // value = (ums * 100);

                createDataSet(y, x, ums,product);
               // createGraph(product);


            }


            BcgChart.dataProvider;

            BcgChart.validateData();




        /*    var rowset= [];
          for (i=0; i<rows; i++){    
          rowset.push({row: data[data.length - 1].value[i]});
          i++;
          }
*/
          
        } //-----------------Submitted
    });
  
  });

}); //End Document Ready

//-----------------------------------------------------------------------------------------------------------


