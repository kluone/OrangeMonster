// 
$(document).ready(function () {
  $(".input-clear").hide();
  $(".search-input").focus(function () {
    $(".input-clear").show();
  });

  $(".search-input").blur(function () {
    if ($(this).val() == '') {
      $(".input-clear").hide();
    }
  });
  $(".input-clear").click(function () {
    $('.search-input').val('');
    $(this).hide();
  });
  //轮播图
  var count = 0;
  var banner = {}
  var pointBgc = function (index) {
    $(".banner-list>li[value='"+index+"']").addClass('active');
    for (var i = 0; i <= 3; i++) {
      if (i != index&&$(".banner-list>li[value='"+i+"']").hasClass('active')){
        $(".banner-list>li[value='"+i+"']").removeClass('active');
      }
    }
  }
  $(".prev").click(function () {
    clearInterval(banner.t)
    count -= 1;
    if (count < 0) {
      count = 3;
    }
    pointBgc(count);
    $(".banner-inner").animate({
      left: "-" + count * 100 + "%"
    }, 500);
    banner.t = setInterval(func, 4000);
  });

  $(".next").click(function () {
    clearInterval(banner.t)
    count += 1;
    if (count > 3) {
      count = 0;
    }
    pointBgc(count);
    $(".banner-inner").animate({
      left: "-" + count * 100 + "%"
    }, 500);
    banner.t = setInterval(func, 4000);
  });

  $(".banner-list li").click(function () {
    clearInterval(banner.t);
    count = parseInt($(this).attr("value"));
    pointBgc(count);
    $(".banner-inner").animate({
      left: "-" + count * 100 + "%"
    }, 500);
    banner.t = setInterval(func, 4000);
  });

  var func = function () {
    count++;
    if (count > 3) {
      count = 0;
      clearInterval(banner.t);
      banner.t = setInterval(func, 4000);
    }
    pointBgc(count);
    $(".banner-inner").animate({
      left: "-" + count * 100 + "%"
    }, 500);
  };

  banner.t = setInterval(func, 4000);
  
 
});