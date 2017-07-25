
$(document).ready(function(){

    var chart = null;
    var dataprovider;


    var pointsPol = 8;
    var pointsLeg = 4;
    var pointsEnv = 6;
    var pointsTech = 8;
    var pointsSoc = 6;
    var pointsEco = 4;

    dataprovider = [ {
        "category": "POLITISCH",
        "points": Number(pointsPol)
    }, {
        "category": "WIRTSCHAFTLICH",
        "points": Number(pointsLeg)
    }, {
        "category": "SOZIAL, ETHISCH, DEMOGRAPHISCH, GESELLSCHAFTLICH",
        "points": Number(pointsEnv)
    }, {
        "category": "TECHNOLOGISCH",
        "points": Number(pointsTech)
    }, {
        "category": "UMWELTRELEVANT",
        "points": Number(pointsSoc)
    }, {
        "category": "RECHTLICH",
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


    chart.dataProvider = createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco);
    chart.validateData();





    var thHeader = ["Econimic","Political","Legal","Enviromental","Technological","Social"];


    function handleChange(evt, rowIndex) {
        $('#btnSubmit').click();
    }


    //------------------------------INPUT----------------------------------------------------

    $(function () {
        // Initialize appendGrid
        $('#tblAppendGrid').appendGrid({
            caption: 'Eingabe',
            initRows: 1,
            columns: [
                {name: 'FAKTOREN', display: 'FAKTOREN', type: 'select',
                    ctrlOptions: '1:POLITISCH ;2:WIRTSCHAFTLICH ;3:SOZIAL, ETHISCH, DEMOGRAPHISCH, GESELLSCHAFTLICH ;4:TECHNOLOGISCH ;5:UMWELTRELEVANT;6:RECHTLICH',
                    onChange: handleChange
                },
                { name: 'TREND', display: '(MEGA)-TREND',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'trend' },

                { name: 'THEMEN', display: 'THEMEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'themen' },

                { name: 'EINFLUSS', display: 'EINFLUSS AUF ERGEBNIS ODER WETTBEWERBSFÄHIGKEIT',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '416'}, ctrlClass: 'einfluss' },


                { name: 'AUSWIRKUNG', display: 'AUSWIRKUNG', type: 'select',
                    ctrlOptions: '0: < choose >;1: gering;2:mittel ;3:hoch ;4:substanziell',
                    onChange: handleChange
                },
                { name: 'ZEITACHSE', display: 'ZEITACHSE', type: 'select',
                    ctrlOptions: '0: < choose >;1: kurzfristig 6-12 Monate;2:mittelfristig 1-2 Jahre;3:langfristig > 2 Jahre;4:sehr langfristig > 5 Jahre',
                    onChange: handleChange
                },
                { name: 'CHANCEN', display: 'CHANCEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'chancen' },

                { name: 'RISIKEN', display: 'RISIKEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'risiken' },

            ]
        });


        $(function() {
            // Appending 2 empty rows.
            var val = 0;
           $('#tblAppendGrid').appendGrid('appendRow', 5);
            for (var i = 1; i<6;i++){
                val = i+1;
            $('#tblAppendGrid').appendGrid('setCtrlValue', 'FAKTOREN', i, val);
            }
            // Appending 3 rows with data.
       /*     $('#tblAppendGrid').appendGrid('appendRow', [
                { FAKTOREN: '2:WIRTSCHAFTLICH'},
            ]);*/
        });


        //-----------------------SUBMIT AND Validation

        $('#btnSubmit').button();

        $.validator.addClassRules('produkt', {
            required: true,
            minlength: 1
        });
        $.validator.addClassRules('umsatzval', {
            required: true,
            number: true,
            min: 1
        });
        // Add custom year validation method
        //     $.validator.addMethod('year', function (value, element) {
        //         return (value && -1 != value.search(/^20[0-9]{2}$/));
        //     }, 'Please input valid year.');
        // Initialize validation plugin

        //-----------------------SUBMIT AND Validation
        $(document.forms[0]).validate({             // Eingabe keine Sonderzeichen !!!!
            errorLabelContainer: '#ulError',
            wrapper: 'li',
            submitHandler: function () {

                pointsPol = 0;
                pointsLeg = 0;
                pointsEnv = 0;
                pointsTech = 0;
                pointsSoc = 0;
                pointsEco = 0;

                var selecter;

                var rowcount =  $('#tblAppendGrid').appendGrid('getRowCount');

                for (var i = 0; i<rowcount ;i++){

                var data = $('#tblAppendGrid').appendGrid('getRowValue', i);

                selecter = data.FAKTOREN;

                if(selecter === "1"){
                    pointsPol = pointsPol + Number(data.AUSWIRKUNG)
                }
                else if (selecter === "2"){
                    pointsLeg = pointsLeg + Number(data.AUSWIRKUNG)

                }
                else if (selecter === "3"){
                    pointsEnv = pointsEnv + Number(data.AUSWIRKUNG)

                }
                else if (selecter === "4"){
                    pointsTech = pointsTech + Number(data.AUSWIRKUNG)

                }
                else if (selecter === "5"){
                    pointsSoc = pointsSoc + Number(data.AUSWIRKUNG)

                }
                else if (selecter === "6"){
                    pointsEco = pointsEco + Number(data.AUSWIRKUNG)

                }

                }



                chart.dataProvider = createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco);
                chart.validateData();



            } //-----------------Submitted
        });

    });

});

//-----------------------------------------------------------------------------------------------------------


function createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco){
    return dataprovider = [ {
        "category": "POLITISCH",
        "points": Number(pointsPol)
    }, {
        "category": "WIRTSCHAFTLICH",
        "points": Number(pointsLeg)
    }, {
        "category": "SOZIAL, ETHISCH, DEMOGRAPHISCH, GESELLSCHAFTLICH",
        "points": Number(pointsEnv)
    }, {
        "category": "TECHNOLOGISCH",
        "points": Number(pointsTech)
    }, {
        "category": "UMWELTRELEVANT",
        "points": Number(pointsSoc)
    }, {
        "category": "RECHTLICH",
        "points": Number(pointsEco)
    } ];

}


