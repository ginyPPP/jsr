/**
 * gnb jQuery
 */

$(function(){

  if( page == 'sub' ){

    $('.gnb').addClass('sub');

  } else {

    $('.gnb-depth1-link').on('mouseenter', function(){

      $(this).next('.gnb-depth2-wrap').addClass('on');

    });

    $('.gnb-depth1-link').on('mouseleave', function(){

      $(this).next('.gnb-depth2-wrap').removeClass('on');

    });

    $('.gnb-depth2-wrap').on('mouseenter', function(){
      $(this).addClass('on');
    });


    $('.gnb-depth2-wrap').on('mouseleave', function(){
      $(this).removeClass('on');
    });

    $('.gnb-depth2-link').on('click', function(){

      $(this).parents('.gnb-depth2-wrap').addClass('on');

    });

  }



});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBnbmIgalF1ZXJ5XHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBpZiggcGFnZSA9PSAnc3ViJyApe1xyXG5cclxuICAgICQoJy5nbmInKS5hZGRDbGFzcygnc3ViJyk7XHJcblxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQodGhpcykubmV4dCgnLmduYi1kZXB0aDItd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5nbmItZGVwdGgxLWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAkKHRoaXMpLm5leHQoJy5nbmItZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQodGhpcykucGFyZW50cygnLmduYi1kZXB0aDItd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
