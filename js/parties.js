
$(document).ready(function(){

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
                { name: 'parteien', display: 'INTERESSIERTE PARTEIEN',
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





        $("#btnPaste").click(function () {


            var rowcount = $('#tblAppendGrid').appendGrid('getRowCount');

            for (var i = 0; i < rowcount; i++) {
                var val = localStorage.getItem("Chancen"+i);
                $('#tblAppendGrid').appendGrid('setCtrlValue', 'chancen', i, val);
                var val = localStorage.getItem("Risiken"+i);
                $('#tblAppendGrid').appendGrid('setCtrlValue', 'risiken', i, val);
            }


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




            } //-----------------Submitted
        });

    });

});

//-----------------------------------------------------------------------------------------------------------





