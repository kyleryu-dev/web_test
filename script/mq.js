$(document).ready(function() {

  var clone = $('#dwl_logo');
  var clone2 = $('#btn');
  
  /* Media Query for Desktop */
  const mediaSize1024 = window.matchMedia('(min-width: 1024px)');
  const changeMedia = function(e) {
      if (e.matches) {
        $('#real_last').removeClass('full');
        $('#real_last').addClass('center');
        $('#transformer').addClass('cover')
        $('#dwl_2').append(clone);
        $('#dwl_2').append(clone2);
      } else {
        $('#real_last').removeClass('center');
        $('#real_last').addClass('full');
        $('#transformer').removeClass('cover')
        $('#dwl_logo').remove();
        $('#btn').remove();
      }
    }
  mediaSize1024.addListener(changeMedia);
  changeMedia(mediaSize1024);

});