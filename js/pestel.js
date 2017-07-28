
$(document).ready(function(){

    var PestelChart = null;
    var PestelDataprovider;


    var pointsPol = 8;
    var pointsLeg = 4;
    var pointsEnv = 6;
    var pointsTech = 8;
    var pointsSoc = 6;
    var pointsEco = 4;

    PestelDataprovider = [ {
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


    PestelChart = AmCharts.makeChart( "PestelDivChart", {
        "type": "radar",
        "theme": "light",
        "dataProvider": PestelDataprovider,
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


    PestelChart.dataProvider = createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco);
    PestelChart.validateData();





    var thHeader = ["Econimic","Political","Legal","Enviromental","Technological","Social"];


    function handleChange(evt, rowIndex) {

    }





    //------------------------------INPUT----------------------------------------------------

    $(function () {
        // Initialize appendGrid
        $('#PestelTblAppendGrid').appendGrid({
            caption: 'Eingabe',
            initRows: 1,
            columns: [
                {name: 'faktoren', display: 'FAKTOREN', type: 'select', ctrlClass: 'faktoren',
                    ctrlOptions: '1:POLITISCH ;2:WIRTSCHAFTLICH ;3:SOZ. ETH. DEM. GESELLSCH. ;4:TECHNOLOGISCH ;5:UMWELTRELEVANT;6:RECHTLICH',
                    onChange: handleChange
                },
                { name: 'trend', display: '(MEGA)-TREND',ctrlClass: 'trend',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'trend' },

                { name: 'themen', display: 'THEMEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'themen' },

                { name: 'einfluss', display: 'EINFLUSS AUF ERGEBNIS / WETTBEWERBSFÄHIGKEIT',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '416'}, ctrlClass: 'einfluss' },


                { name: 'auswirkung', display: 'AUSWIRKUNG', type: 'select',ctrlClass: 'auswirkung',
                    ctrlOptions: '0: < choose >;1: gering;2:mittel ;3:hoch ;4:substanziell',
                    onChange: handleChange
                },
                { name: 'zeitachse', display: 'ZEITACHSE', type: 'select',ctrlClass: 'zeitachse',
                    ctrlOptions: '0: < choose >;1: kurzfristig 6-12 Monate;2:mittelfristig 1-2 Jahre;3:langfristig > 2 Jahre;4:sehr langfristig > 5 Jahre',
                    onChange: handleChange
                },
                { name: 'chancen', display: 'CHANCEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'chancen' },

                { name: 'risiken', display: 'RISIKEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'risiken' },

            ]
        });


        $(function() {
            // Appending rows.
            var val = 0;
           $('#PestelTblAppendGrid').appendGrid('appendRow', 5);
            for (var i = 1; i<6;i++){
                val = i+1;
            $('#PestelTblAppendGrid').appendGrid('setCtrlValue', 'faktoren', i, val);
            }
            // Appending 3 rows with data.
       /*     $('#tblAppendGrid').appendGrid('appendRow', [
                { FAKTOREN: '2:WIRTSCHAFTLICH'},
            ]);*/
        });


        //-----------------------SUBMIT AND Validation

        $.validator.addClassRules('auswirkung', {
            required: true,
            min: 1
        });
        $.validator.addClassRules('zeitachse', {
            required: true,
            min: 1
        });
      /*  $.validator.addClassRules('trend', {
        required: true,
            minlength: 1
        });*/

        $("#PestelBtnSubmit").click(function () {

            $("#PestelForm").valid();

        });

        //-----------------------SUBMIT AND Validation
        $("#PestelForm").validate({
            lang: 'de',
            errorLabelContainer: '#PestelUlError',
            wrapper: 'li',

            submitHandler: function () {

                pointsPol = 0;
                pointsLeg = 0;
                pointsEnv = 0;
                pointsTech = 0;
                pointsSoc = 0;
                pointsEco = 0;

                var selecter;

                var rowcount =  $('#PestelTblAppendGrid').appendGrid('getRowCount');

                for (var i = 0; i<rowcount ;i++){

                var data = $('#PestelTblAppendGrid').appendGrid('getRowValue', i);

                    localStorage.setItem("Chancen"+i, data.chancen);
                    localStorage.setItem("Risiken"+i, data.risiken);

                selecter = data.faktoren;

                if(selecter === "1"){
                    pointsPol = pointsPol + Number(data.auswirkung)
                }
                else if (selecter === "2"){
                    pointsLeg = pointsLeg + Number(data.auswirkung)

                }
                else if (selecter === "3"){
                    pointsEnv = pointsEnv + Number(data.auswirkung)

                }
                else if (selecter === "4"){
                    pointsTech = pointsTech + Number(data.auswirkung)

                }
                else if (selecter === "5"){
                    pointsSoc = pointsSoc + Number(data.auswirkung)

                }
                else if (selecter === "6"){
                    pointsEco = pointsEco + Number(data.auswirkung)

                }

                }



                PestelChart.dataProvider = createDataset(pointsPol,pointsLeg,pointsEnv,pointsTech,pointsSoc,pointsEco);
                PestelChart.validateData();



            }
        });//-----------------Submitted

    }); //Init Input

    $("#PestelBtnPaste").click(function () {


        var rowcount = $('#PestelTblAppendGrid').appendGrid('getRowCount');

        for (var i = 0; i < rowcount; i++) {
            var val = localStorage.getItem("Chancen"+i);
            $('#PestelTblAppendGrid').appendGrid('setCtrlValue', 'chancen', i, val);
            var val = localStorage.getItem("Risiken"+i);
            $('#PestelTblAppendGrid').appendGrid('setCtrlValue', 'risiken', i, val);
        }


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


