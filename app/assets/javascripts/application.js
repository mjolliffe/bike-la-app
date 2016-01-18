// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var scroll_pos = 0;
$(document).scroll(function() {  // header change color upon scroll down
    scroll_pos = $(this).scrollTop();
    if(scroll_pos < 540) {
        $("header").css('background-color', 'transparent');
    } else {
        $("header").css('background-color', '#fff');
        $("header").css('padding', '20px');
        $("header").css('opacity', '0.95');
    }
});
