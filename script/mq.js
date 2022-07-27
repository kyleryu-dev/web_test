$(document).ready(function() {
  
  /* Media Query for Desktop */
  const mediaSize1024 = window.matchMedia('(min-width: 1024px)');
  const changeMedia = function(e) {
      if (e.matches) {
        $('#real_last').removeClass('full');
        $('#real_last').addClass('center');
      } else {
        $('#real_last').removeClass('center');
        $('#real_last').addClass('full');
      }
    }
  mediaSize1024.addListener(changeMedia);
  changeMedia(mediaSize1024);

});