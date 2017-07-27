
$(document).ready(function(){

    function handleChange(evt, rowIndex) {

    }

    //------------------------------INPUT----------------------------------------------------

        var header = ["Chancen","Risiken","Stärken","Gefahren"];
//------------------------------Chancen----------------------------------------------------
    $(function () {
        // Initialize appendGrid
        $('#SwotChancenTblAppendGrid, #SwotRisikenTblAppendGrid, #SwotStarkenTblAppendGrid, #SwotGefahrenTblAppendGrid').each(function (index, item) {
           $(item).appendGrid({
            caption: header[index],
            initRows: 1,
            columns: [
                { name: header[index].toLowerCase(), display: header[index],
                    onChange: function (evt, rowIndex) {

                    }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}, ctrlClass: 'parteien' },

                { name: 'einfluss', display: 'Einfluss auf die Ergebnisse', type: 'ui-spinner', ctrlAttr: { maxlength: 2 }, value: 0,ctrlCss: { width: '200px' }, uiOption: { min: 0, max: 20} },

                { name: 'umsetz', display: 'Umsetzbarkeit', type: 'ui-spinner', ctrlAttr: { maxlength: 2 ,value: 0}, value: 0, ctrlCss: { width: '100px' }, uiOption: { min: 0, max: 20} },

                { name: 'ranking', display: 'Ranking', type: 'ui-spinner', ctrlAttr: { maxlength: 2 ,value: 0}, value: 0, ctrlCss: { width: '40px' }, uiOption: { min: 0, max: 20} },
            ]
        });
        });


        $('#SwotChancenTblAppendGrid, #SwotRisikenTblAppendGrid, #SwotStarkenTblAppendGrid, #SwotGefahrenTblAppendGrid').each(function (index, item) {
            $(item).appendGrid('appendRow', 5);


        });

        $("#SwotBtnPaste").click(function () {


            $('#SwotChancenTblAppendGrid, #SwotRisikenTblAppendGrid, #SwotStarkenTblAppendGrid, #SwotGefahrenTblAppendGrid').each(function (index, item) {
                var rowcount = $(item).appendGrid('getRowCount');

                for (var i = 0; i < rowcount; i++) {
                    var val = localStorage.getItem(header[index]+i);
                    $(item).appendGrid('setCtrlValue', header[index].toLowerCase(), i, val);
                }

            });
/*

            for (var i = 0; i < rowcount; i++) {
                var val = localStorage.getItem("Chancen"+i);
                $('#SwotChancenTblAppendGrid').appendGrid('setCtrlValue', 'chancen', i, val);
                var val = localStorage.getItem("Risiken"+i);
                $('#SwotChancenTblAppendGrid').appendGrid('setCtrlValue', 'risiken', i, val);
            }
*/


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


                $('#SwotChancenTblAppendGrid, #SwotRisikenTblAppendGrid, #SwotStarkenTblAppendGrid, #SwotGefahrenTblAppendGrid').each(function (index, item) {
                    var rowcount = $(item).appendGrid('getRowCount');

                    for (var i = 0; i < rowcount; i++) {

                        var val = $(item).appendGrid('getCtrlValue', header[index].toLowerCase(), i, val);
                      //  var val = localStorage.getItem(header[index]+i);
                        localStorage.setItem(header[index]+i, val);
                    }

                });



              /*  var rowcount =  $('#SwotTblAppendGrid').appendGrid('getRowCount');

                for (var i = 0; i<rowcount ;i++){

                    var data = $('#SwotChancenTblAppendGrid').appendGrid('getRowValue', i);

                    localStorage.setItem("Chancen"+i, data.chancen);
                    localStorage.setItem("Risiken"+i, data.risiken);

                }
*/


            } //-----------------Submitted
        });





    });

});

//-----------------------------------------------------------------------------------------------------------





