"use strict";
(function($){
    $(function(){
        $('.button-collapse').sideNav();
        $('#modal1').modal();
        $('.tooltipped').tooltip({delay: 50});
        Materialize.updateTextFields();

    }); // end of document ready
})(jQuery); // end of jQuery name space