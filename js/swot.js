
$(document).ready(function(){

    function handleChange(evt, rowIndex) {

    }

    //------------------------------INPUT----------------------------------------------------

    $(function () {
        // Initialize appendGrid
        $('#SwotTblAppendGrid').appendGrid({
            caption: 'Chancen',
            initRows: 1,
            columns: [
                { name: 'chancen', display: 'CHANCEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'parteien' },

                {name: 'qualität', display: 'BEZIEHUNGS-QUALITÄT', type: 'select',
                    ctrlOptions: '1:- ;2:+ ;3:++',
                    onChange: handleChange
                },
                {name: 'tendenz', display: 'TENDENZ RELEVANZ', type: 'select',
                    ctrlOptions: '1:- ;2:+ ;3:++',
                    onChange: handleChange
                },
                { name: 'erwartungen', display: 'ERWARTUNGEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'erwartungen' },

                { name: 'kommunikation', display: 'KOMMUNIKATION',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'kommunikation' },

                { name: 'EINFLUSS', display: 'KONFORMITÄTS-ANFORDERUNGEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '200'}, ctrlClass: 'einfluss' },


                { name: 'potential', display: 'POTENZIAL', type: 'select',
                    ctrlOptions: '0: < choose >;1: gering;2:mittel ;3:hoch ;4:substanziell',
                    onChange: handleChange
                },
                { name: 'zeitachse', display: 'ZEITACHSE', type: 'select',
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
            // Appending 2 empty rows.
            var val = 0;
            $('#SwotTblAppendGrid').appendGrid('appendRow', 5);
            for (var i = 1; i<6;i++){
                val = i+1;
                $('#SwotTblAppendGrid').appendGrid('setCtrlValue', 'FAKTOREN', i, val);
            }
            // Appending 3 rows with data.
            /*     $('#tblAppendGrid').appendGrid('appendRow', [
                     { FAKTOREN: '2:WIRTSCHAFTLICH'},
                 ]);*/
        });


        $("#SwotBtnPaste").click(function () {


            var rowcount = $('#SwotTblAppendGrid').appendGrid('getRowCount');

            for (var i = 0; i < rowcount; i++) {
                var val = localStorage.getItem("Chancen"+i);
                $('#SwotTblAppendGrid').appendGrid('setCtrlValue', 'chancen', i, val);
                var val = localStorage.getItem("Risiken"+i);
                $('#SwotTblAppendGrid').appendGrid('setCtrlValue', 'risiken', i, val);
            }


        });


        //-----------------------SUBMIT AND Validation


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

        $("#SwotBtnSubmit").click(function () {

            $("#SwotForm").valid();

        });

        $("#SwotForm").validate({             // Eingabe keine Sonderzeichen !!!!
            errorLabelContainer: '#SwotUlError',
            wrapper: 'li',
            submitHandler: function () {


                var rowcount =  $('#SwotTblAppendGrid').appendGrid('getRowCount');

                for (var i = 0; i<rowcount ;i++){

                    var data = $('#SwotTblAppendGrid').appendGrid('getRowValue', i);

                    localStorage.setItem("Chancen"+i, data.chancen);
                    localStorage.setItem("Risiken"+i, data.risiken);

                }



            } //-----------------Submitted
        });





    });

});

//-----------------------------------------------------------------------------------------------------------





