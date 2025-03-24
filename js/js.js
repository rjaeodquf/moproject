var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
  autoplay: {
      delay: 1500,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderBullet : function (index, className) {  // className이 기본값이 들어가게 필수 설정
  return '<a href="#" class="' + className + '">' + (index + 1) + '</a>'
    },
    renderFraction: function (currentClass, totalClass) { // type이 fraction일 때 사용
        return '<span class="' + currentClass + '"></span> ' + '<strong>&#8739;</strong> ' + '<span class="' + totalClass + '"></span>';
    }
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});