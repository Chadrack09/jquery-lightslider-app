$(function() {
  $('#autoWidth, #autoWidth_2').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth, #autoWidth_2').removeClass('cS-hidden');
      } 
  });  
});