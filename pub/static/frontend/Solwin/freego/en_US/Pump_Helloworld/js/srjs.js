define([
    "jquery",
    "jquery/ui"
], function($) {
    "use strict";
 
    //creating jquery widget
    $.widget('mage.srjs', {
        _create: function() {
            console.log('hey, srjs is loaded!')
            //bind click event of elem id
            this.element.on('click', function(e){
                alert('hello , Click ME!')
            });
        }
 
    });
 
    return $.mage.srjs;
});