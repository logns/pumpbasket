// define is used to register a module in require js 
define([
          "jquery",
          "jquery/ui"
     ], function($) {
 
     console.log('called');
        //defining our plugin
    $.fn.mycomponent = function(options) {
         
        // get initialised data here
       console.log(options);
         
         
        // 'your plugin is ready do whatevent you want to do'
//        $('#desc').append("HELO WORLDs");
                    
    };
 
 
});

//define([
//    'jquery',
//    'jquery/ui',
//    'mage/menu' ],
//    function($){
//        $.widget('inchoo.menu', $.mage.menu, {
//            _init: function () {
//                alert("I'm Inchoo");
//            },
//            toggle: function () {
//                alert("I'm Inchoo");
//            }
//    });
//    return $.inchoo.menu;
//    });