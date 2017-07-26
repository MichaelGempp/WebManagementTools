$(document).ready(function() {

    // Tab initialization
    $('#tabs,#fragment-1').tabs();

    $( "#fragment-1a" ).load( "pestel.html" );
    $( "#fragment-1c" ).load( "parties.html" );


    $("#pestel").click(function () {

        $("#fragment-1c").empty();
        $("#fragment-1a").load( "pestel.html" );

    })
    $("#swot").click(function () {
        $( "#fragment-1b" ).load( "swot.html" );
    })
    $("#parties").click(function () {

        $("#fragment-1a").empty();
        $( "#fragment-1c" ).load( "parties.html" );
    })

});