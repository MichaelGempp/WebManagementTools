$(document).ready(function(){

$(function () {
    // Initialize appendGrid
    $('#tblAppendGrid').appendGrid({
        caption: 'Eingabe',
        initRows: 1,
        columns: [
            { name: 'Produkt', display: 'Produkt',
             onChange: function (evt, rowIndex) {
                    alert(rowIndex);
                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'} },
          
            { name: 'Umsatz', display: 'Umsatz',
             onChange: function (evt, rowIndex) {
               
             var value = $('#tblAppendGrid').appendGrid('getCtrlValue', 'Umsatz', rowIndex);
               
            $('#tblAppendGrid').appendGrid('setCtrlValue', 'UmsatzVal', rowIndex, value);
               
                }, type: 'range', ctrlCss: { width: '80px' }, ctrlAttr: { min: 0, max: 4 }, value: 1 },
          
            { name: 'UmsatzVal', display: '',
             onChange: function (evt, rowIndex) {
                   // alert(rowIndex);
                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '30px'} },
          
            { name: 'Marktwachstum', display: 'Marktwachstum',
             onChange: function (evt, rowIndex) {
               
            var value = $('#tblAppendGrid').appendGrid('getCtrlValue', 'Marktwachstum', rowIndex);
               
            $('#tblAppendGrid').appendGrid('setCtrlValue', 'MarktwachstumVal', rowIndex, value);
               
                }, type: 'range', ctrlCss: { width: '80px' }, ctrlAttr: { min: 0, max: 10 }, value: 1 ,},
          
            { name: 'MarktwachstumVal', display: '',
             onChange: function (evt, rowIndex) {
               
                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '30px'} },
          
            { name: 'RelativerMarktanteil', display: 'Relativer Marktanteil',
             onChange: function (evt, rowIndex) {
               
            var value = $('#tblAppendGrid').appendGrid('getCtrlValue', 'RelativerMarktanteil', rowIndex);
               
            $('#tblAppendGrid').appendGrid('setCtrlValue', 'RelativerMarktanteilVal', rowIndex, value);
               
                }, type: 'range', ctrlCss: { width: '80px' }, ctrlAttr: { min: 0, max: 10 }, value: 1 },
          
            { name: 'RelativerMarktanteilVal', display: '',
             onChange: function (evt, rowIndex) {
                //    alert(rowIndex);
                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '30px'} },
          
            { name: 'Bemerkung', display: 'Bemerkung',
             onChange: function (evt, rowIndex) {
                 //   alert(rowIndex);
                }, type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'}}
        ]
    });
  
  


    // Handle `Serialize` button click
    $('#btnSerialize').button().click(function () {
        alert('Here is the serialized data!!\n' + $(document.forms[0]).serialize());
    });
});

}); //End Document Ready

//-----------------------------------------------------------------------------------------------------------