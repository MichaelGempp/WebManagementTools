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

 //------------------------------INPUT----------------------------------------------------

$(function () {
    // Initialize appendGrid
    $('#tblAppendGrid').appendGrid({
        caption: 'Eingabe',
        initRows: 1,
        columns: [
            { name: 'Produkt', display: 'Produkt',
             onChange: function (evt, rowIndex) {
                    alert(rowIndex);
                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'produkt' },
          
            { name: 'Umsatz', display: 'Umsatz',
             onChange: function (evt, rowIndex) {
               
             var value = $('#tblAppendGrid').appendGrid('getCtrlValue', 'Umsatz', rowIndex);
               
            $('#tblAppendGrid').appendGrid('setCtrlValue', 'UmsatzVal', rowIndex, value);
               
                }, type: 'range', ctrlCss: { width: '80px' }, ctrlAttr: { min: 0, max: 4 }, value: 1, ctrlClass: 'umsatz' },
          
            { name: 'UmsatzVal', display: '',
             onChange: function (evt, rowIndex) {
                   // alert(rowIndex);
                }, type: 'text', ctrlAttr: { maxlength: 2, value: 0}, ctrlCss: { width: '30px'} },
          
            { name: 'Marktwachstum', display: 'Marktwachstum',
             onChange: function (evt, rowIndex) {
               
            var value = $('#tblAppendGrid').appendGrid('getCtrlValue', 'Marktwachstum', rowIndex);
               
            $('#tblAppendGrid').appendGrid('setCtrlValue', 'MarktwachstumVal', rowIndex, value);
               
                }, type: 'range', ctrlCss: { width: '80px' }, ctrlAttr: { min: 0, max: 10 }, value: 1 ,},
          
            { name: 'MarktwachstumVal', display: '',
             onChange: function (evt, rowIndex) {
               
                }, type: 'text', ctrlAttr: { maxlength: 2, value: 0 }, ctrlCss: { width: '30px'} },
          
            { name: 'RelativerMarktanteil', display: 'Relativer Marktanteil',
             onChange: function (evt, rowIndex) {
               
            var value = $('#tblAppendGrid').appendGrid('getCtrlValue', 'RelativerMarktanteil', rowIndex);
               
            $('#tblAppendGrid').appendGrid('setCtrlValue', 'RelativerMarktanteilVal', rowIndex, value);
               
                }, type: 'range', ctrlCss: { width: '120px'}, ctrlAttr: { min: 0, max: 10 }, value: 1 },
          
            { name: 'RelativerMarktanteilVal', display: '',
             onChange: function (evt, rowIndex) {
                //    alert(rowIndex);
                }, type: 'text', ctrlAttr: { maxlength: 2,value: 0}, ctrlCss: { width: '30px'} },
          
            { name: 'Bemerkung', display: 'Bemerkung',
             onChange: function (evt, rowIndex) {
                 //   alert(rowIndex);
                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}}
        ]
    });
  
  $('#btnSubmit').button();
  
    $.validator.addClassRules('produkt', {
        required: true,
        minlength: 1
    });
    $.validator.addClassRules('umsatz', {
        required: true,
        number: true,
        min: 1
    });
    // Add custom year validation method
   //     $.validator.addMethod('year', function (value, element) {
   //         return (value && -1 != value.search(/^20[0-9]{2}$/));
   //     }, 'Please input valid year.');
    // Initialize validation plugin
    $(document.forms[0]).validate({
        errorLabelContainer: '#ulError',
        wrapper: 'li',
        submitHandler: function () {
            // For demo purpose only!
            alert('Submitted!');
        }
    });
  
  });
  
  
  

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




    $("#add").click();
    //$(".slider-range-max").click();


}); //End Document Ready

//-----------------------------------------------------------------------------------------------------------
function refreshChart() {

    chart.dataProvider = createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco);
    chart.validateData();

}



function createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco){
    return dataprovider = [ {} ];
}


