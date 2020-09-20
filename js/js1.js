//this is jquery
$(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carousel-btn').on('click', function () {
        if ($('#carousel-btn').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carousel-btn').children('span').removeClass('fa-pause');
            $('#carousel-btn').children('span').addClass('fa-play');
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carousel-btn').children('span').removeClass('fa-play');
            $('#carousel-btn').children('span').addClass('fa-pause');
        }
    });

    $('#loginform').on('click', function () {
        $('#loginmodal').modal('show');
    });
    $('#cancellogin').on('click', function () {
        $('#loginmodal').modal('hide');
    });


    $('#reserveform').on('click', function () {
        $('#formid').modal('show');
    });
    $('#cancelform').on('click', function () {
        $('#formid').modal('hide');
    });

   $('.close').on('click' ,()=>{
    $('#loginmodal').modal('hide');
    $('#formid').modal('hide');
   })

});
