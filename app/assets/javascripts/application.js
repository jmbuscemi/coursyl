// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function updateCourse(){
  var button = document.getElementsByName("commit");
  // var button = event.target
  button[0].disabled = true;
}

window.onload = function(){
  var section = document.getElementsByClassName("association container");
  var last = section[section.length - 1];
  last.style.display = "none";
}

// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
// function hideLastGrade(){
//   buttons = document.getElementsByClassName("new-association");
//   b = buttons[0];
//   b.addEventListener("click", function() {alert ("box1!")} );
// }

function showNewGrade(){
  var section = document.getElementsByClassName("association container");
  var last = section[section.length - 1];
  last.style.display = "block";
}

function hideSection(){
  var hideRow = event.target.parentElement.parentElement.parentElement;
  var markDestroy = event.target.parentElement.lastElementChild;
  hideRow.style.display = "none";
  markDestroy.checked = true;
}
