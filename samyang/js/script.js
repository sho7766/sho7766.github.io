var swiper = new Swiper(" .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// var swiper = new Swiper(".right .mySwiper", {
//   slidesPerView: 1,
//   direction: "vertical",
//   loop: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

let lastScrollTop = 0;
delta = 15;
$(window).scroll(function (e) {
  let st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && lastScrollTop > 0) {
    $("header").css("top", "-70px");
  } else {
    $("header").css("top", "0px");
  }
  lastScrollTop = st;
});

$(".drop_box,.dimmed").css("display", "none");
$(".menu .lines").click(function () {
  $(".drop_box,.dimmed").css("display", "block");
  $(".img1").show().siblings().hide();
  $(".sub_menu > div").hide();
  $(window).scroll(function () {
    $("html,body").css("display", "fixed");
  });
});
$("header.white .close").click(function () {
  $(".drop_box,.dimmed").css("display", "none");
});

// 메인 메뉴 호버시 서브메뉴와 이미지 체인지
$(".g").mouseenter(function () {
  $(".group").show().siblings().hide();
  $(".img1").show().siblings().hide();
});
$(".bu").mouseenter(function () {
  $(".drop_box .business").show().siblings().hide();
  $(".img2").show().siblings().hide();
});
$(".br").mouseenter(function () {
  $(".brands").show().siblings().hide();
  $(".img3").show().siblings().hide();
});
$(".i").mouseenter(function () {
  $(".ir").show().siblings().hide();
  $(".img4").show().siblings().hide();
});
$(".e").mouseenter(function () {
  $(".esg").show().siblings().hide();
  $(".img5").show().siblings().hide();
});
$(".n").mouseenter(function () {
  $(".news").show().siblings().hide();
  $(".img6").show().siblings().hide();
});
$(".c").mouseenter(function () {
  $(".careers").show().siblings().hide();
  $(".img7").show().siblings().hide();
});

//

// let mIdx = $(".main_menu li").index();
// let sIdx = $(".sub_menu > div").index();
// console.log(mIdx);
// $(".main_menu li")
//   .eq(mIdx)
//   .mouseenter(function () {
//     $(".sub_menu > div")
//       .eq(sIdx)
//       .css("display", "flex")
//       .siblings()
//       .css("display", "none");
//   });

$(".lang div p").eq(0).css("color", "#000");
$(".lang div p").click(function () {
  $(this).css("color", "#000").siblings().css("color", "#848484");
});
