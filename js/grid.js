$(document).ready(function(){

$(function () {
    // Initialize appendGrid
    $('#tblAppendGrid').appendGrid({
        caption: 'Eingabe',
        initRows: 1,
        columns: [
            { name: 'Produkt', display: 'Produkt', type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'} },
            { name: 'Umsatz', display: 'Umsatz', type: 'ui-selectmenu', uiOption: { 'width': '100px' },
                // You can use string / array / object / function on `ctrlOptions` for `ui-selectmenu` type
                ctrlOptions: '0:Item 0;1:Item 1;2:Item 2;3:Item 3;4:Item 4'
            },
            { name: 'Marktwachstum', display: 'Marktwachstum', type: 'ui-selectmenu', uiOption: { 'width': '100px' },
                // You can use string / array / object / function on `ctrlOptions` for `ui-selectmenu` type
                ctrlOptions: '0: +;1: ++;2: +++;3: ++++'
            },
            { name: 'Relativer Marktanteil', display: 'Relativer Marktanteil', type: 'ui-selectmenu', uiOption: { 'width': '100px' },
                // You can use string / array / object / function on `ctrlOptions` for `ui-selectmenu` type
                ctrlOptions: '0:Item 0;1:Item 1;2:Item 2;3:Item 3;4:Item 4'
            },
            { name: 'Bemerkung', display: 'Bemerkung', type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'} ,
                onChange: function (evt, rowIndex) {alert('You have changed value of Range at row ' + rowIndex);}},
            { name: 'Range', display: 'Range', type: 'range', ctrlCss: { width: '80px' }, ctrlAttr: { min: 0, max: 10 }, value: 5 },

        ]
    });




    // Handle `Load` button click
    $('#btnLoad').button().click(function () {
        $('#tblAppendGrid').appendGrid('load', [
            { 'Album': 'Dearest', 'Artist': 'Theresa Fu', 'Year': '2009', 'Origin': 1, 'Poster': true, 'Price': 168.9, 'RecordId': 123 },
            { 'Album': 'To be Free', 'Artist': 'Arashi', 'Year': '2010', 'Origin': 3, 'Poster': true, 'Price': 152.6, 'RecordId': 125 },
            { 'Album': 'Count On Me', 'Artist': 'Show Luo', 'Year': '2012', 'Origin': 2, 'Poster': false, 'Price': 306.8, 'RecordId': 127 },
            { 'Album': 'Wonder Party', 'Artist': 'Wonder Girls', 'Year': '2012', 'Origin': 4, 'Poster': true, 'Price': 108.6, 'RecordId': 129 },
            { 'Album': 'Reflection', 'Artist': 'Kelly Chen', 'Year': '2013', 'Origin': 1, 'Poster': false, 'Price': 138.2, 'RecordId': 131 }
        ]);
    });
    // Handle `Serialize` button click
    $('#btnSerialize').button().click(function () {
        alert('Here is the serialized data!!\n' + $(document.forms[0]).serialize());
    });
});

}); //End Document Ready

//-----------------------------------------------------------------------------------------------------------