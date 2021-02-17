import WOW from "wow.js";
import $ from "jquery";
import "slick-carousel";
import { createFocusTrap } from "focus-trap";

let wow = new WOW({
  boxClass: "animation",
  animateClass: "animate__animated",
  offset: 100,
  mobile: true,
  live: true,
});
wow.init();

// let header = document.querySelector(".main-header");
// function stickyHeader() {
//   if (window.scrollY > 500) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// }

function throttle(func, time) {
    let isThrottled = false;
    return function () {
      if (isThrottled) return;
      let ctx = this;
      let args = arguments;
      func.apply(ctx, args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, time);
    };
  }

  window.addEventListener("scroll", throttle(stickyHeader, 300));




var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});

// Выпадающий список

$(function() {
	$(".selectlink-control").click(function(){
		var $menu_popup = $(this).next();
		$menu_popup.slideToggle(200, function(){
			$('.selectlink ul').not($menu_popup).slideUp(200);
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
 
	$(document).on('click', function(e){
		if (!$(e.target).closest('.selectlink').length){
			$('body').removeClass('body_pointer');
			$('.selectlink ul').slideUp(200);
		}
	});
});

// Гамбургер

let mobileBtn = document.querySelector(".btn-mobile");
let headerNav = document.querySelector(".main-header__nav");
function mobileMenuOpen() {
  mobileBtn.classList.add("is-open");
  mobileBtn.classList.add("animate__animated");
  headerNav.classList.add("is-open");
  headerNav.classList.add("animate__animated");
  document.body.classList.add("ov-h");
}

function mobileMenuClose() {
  document.body.classList.remove("ov-h");
  mobileBtn.classList.remove("is-open");
  mobileBtn.classList.remove("animate__animated");
  headerNav.classList.remove("is-open");
  headerNav.classList.remove("animate__animated");
}

mobileBtn.addEventListener("click", function (e) {
  if (mobileBtn.classList.contains("is-open")) {
    mobileMenuClose();
  } else {
    mobileMenuOpen();
  }
});

headerNav.addEventListener("click", () => {
  if (headerNav.classList.contains("is-open")) {
    mobileMenuClose();
  }
});




window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // modalClose();
    mobileMenuClose();
  }
});

// Скролл шапки

let header = document.querySelector(".main-header");
function stickyHeader() {
  if (window.scrollY > 500) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}