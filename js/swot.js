
$(document).ready(function(){

    function handleChange(evt, rowIndex) {

    }

    //------------------------------INPUT----------------------------------------------------


//------------------------------Chancen----------------------------------------------------
    $(function () {
        // Initialize appendGrid
        $('#SwotChancenTblAppendGrid, #SwotRisikenTblAppendGrid').each(function (index, item) {
           $(item).appendGrid({
            caption: 'Chancen',
            initRows: 1,
            columns: [
                { name: 'chancen', display: 'CHANCEN',
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'parteien' },

                { name: 'einfluss', display: 'Einfluss auf die Ergebnisse', type: 'ui-spinner', ctrlAttr: { maxlength: 2 }, ctrlCss: { width: '40px' }, uiOption: { min: 0, max: 20} },

                { name: 'umsetz', display: 'Umsetz-barkeit', type: 'ui-spinner', ctrlAttr: { maxlength: 2 }, ctrlCss: { width: '40px' }, uiOption: { min: 0, max: 20} },

                { name: 'ranking', display: 'Ranking', type: 'ui-spinner', ctrlAttr: { maxlength: 2 }, ctrlCss: { width: '40px' }, uiOption: { min: 0, max: 20} },
            ]
        });
        });

        $(function() {
            // Appending 2 empty rows.
            var val = 0;
            $('#SwotChancenTblAppendGrid').appendGrid('appendRow', 5);
            for (var i = 1; i<6;i++){
                val = i+1;
                $('#SwotChancenTblAppendGrid').appendGrid('setCtrlValue', 'FAKTOREN', i, val);
            }
            // Appending 3 rows with data.
            /*     $('#tblAppendGrid').appendGrid('appendRow', [
                     { FAKTOREN: '2:WIRTSCHAFTLICH'},
                 ]);*/
        });





        $("#SwotBtnPaste").click(function () {


            var rowcount = $('#SwotChancenTblAppendGrid').appendGrid('getRowCount');

            for (var i = 0; i < rowcount; i++) {
                var val = localStorage.getItem("Chancen"+i);
                $('#SwotChancenTblAppendGrid').appendGrid('setCtrlValue', 'chancen', i, val);
                var val = localStorage.getItem("Risiken"+i);
                $('#SwotChancenTblAppendGrid').appendGrid('setCtrlValue', 'risiken', i, val);
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

                    var data = $('#SwotChancenTblAppendGrid').appendGrid('getRowValue', i);

                    localStorage.setItem("Chancen"+i, data.chancen);
                    localStorage.setItem("Risiken"+i, data.risiken);

                }



            } //-----------------Submitted
        });





    });

});

//-----------------------------------------------------------------------------------------------------------





