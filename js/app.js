$(document).ready(function(){

  // Controls the hopping arrow animation
  $('.arrow').mouseenter(function(){
    arrowHop();
  });

  // Handles the banner hop animation
  $('.Banners').mouseenter(function(){
    $(this).find('img').finish().show()
    .animate({'margin-top':'15px'}, 250);
  });
  $('.Banners').mouseleave(function(){
    $(this).find('img').finish().show()
    .animate({'margin-top':'0px'}, 350);
  });
  $('.Banners').click(function(){
    $(this).find('img').finish().show()
    .animate({'margin-top':'0px'}, 350);
  });

  // Controls the newsletter signup responses
  $('form#signup-form').submit(function(e){
    e.preventDefault();
    $('.mailing-list-feedback').remove();
    var jqxhr = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbx4GUdH58BkYER1OmIi3zGBEpYghnEkVdkL1VxKIvrMzUQ725o/exec",
      method: "GET",
      dataType: "json",
      data: $("form#signup-form").serialize()
    }).done(function() {
      var res = document.createElement("p");
      var textnode = document.createTextNode("Thanks!");
      res.appendChild(textnode);
      res.classList.add("mailing-list-feedback");
      $("#mailing-list").append(res);
    }).fail(function() {
      var res = document.createElement("p");
      var textnode = document.createTextNode("An error occurred. Please try again later.");
      res.appendChild(textnode);
      res.classList.add("mailing-list-feedback");
      $("#mailing-list").append(res);
    });
  });

  // Handles button animation on hover
  $('#signup-button').mouseenter(function(){
    $(this).animate({'opacity': '0.75'}, 300);
  });
  $('#signup-button').mouseleave(function(){
    $(this).animate({'opacity': '1'}, 300);
  });
});

// Controls arrow hopping animation when mouse hovers over
var lastCall = 0;
function arrowHop() {
  var now = Date.now();
  if (lastCall + 1000 < now) {
    lastCall = now;
    $('.arrow').finish().show()
    .animate({'margin-bottom': '15px'}, 200, function(){
      $(this).animate({'margin-bottom': '0px'}, 350);
    });
  }
}
