(()=>{(function(){"use strict";function a(){var s=$(".banner_slider");if(s.length){s.on("init",function(o,t){var i=$(".b_slide").find("[data-animation]");e(i)}),s.on("beforeChange",function(o,t,i,n){var l=$('.b_slide[data-slick-index="'+n+'"]').find("[data-animation]");e(l)});function e(o){var t="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";o.each(function(){var i=$(this),n=i.data("delay"),l="animated "+i.data("animation");i.css({"animation-delay":n,"-webkit-animation-delay":n}),i.addClass(l).one(t,function(){i.removeClass(l)})})}}}a(),$(function(){$(".dynamic-header .main_header").length&&$(window).on("scroll",function(){var e=$(window).scrollTop();e>=2?$(".dynamic-header .main_header").addClass("dark_bg"):$(".dynamic-header .main_header").removeClass("dark_bg")}),$(window).on("scroll",function(){var e=$(window).scrollTop();$(".main_menu_list li a").on("each",function(){var o=$(this),t=$($(this).attr("href")).offset().top-80,i=$(o.attr("href")).outerHeight();t<=e&&t+i>e?($(o).parent().siblings().find("a").removeClass("active"),$(o).addClass("active")):$(o).removeClass("active")})}),$('a[href^="#"]').on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-77},1e3,"linear")}),$(window).on("scroll",function(){$(this).scrollTop()>=50?$(".scrollUp").fadeIn(200):$(".scrollUp").fadeOut(200)}),$(".scrollUp").on("click",function(){$("body,html").animate({scrollTop:0},800)}),$(window).scroll(s);function s(){var e=jQuery(".love_counter");if(e.length){var o=e.offset().top,t=e.outerHeight(),i=jQuery(window).height();jQuery(window).scrollTop()>o+t-i&&(jQuery(window).off("scroll",s),jQuery(".love_count").each(function(){var n=jQuery(this);jQuery({Counter:0}).animate({Counter:n.text()},{duration:2e3,easing:"swing",step:function(){n.text(Math.ceil(this.Counter))}})}))}}$(".go_down_arrow i.fa, .sliding_link").on("click",function(){$("html, body").animate({scrollTop:$("#main_body").offset().top},800)}),$(".banner_slider").slick({dots:!1,infinite:!0,speed:2e3,slidesToShow:1,arrows:!1,autoplay:!0,slidesToScroll:1,responsive:[{breakpoint:767,settings:{dots:!1}}]}),$("#portfoliolist").slick({dots:!0,infinite:!0,speed:500,slidesToShow:3,arrows:!1,autoplay:!0,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".testi_slider").slick({dots:!0,infinite:!0,speed:500,slidesToShow:3,arrows:!1,autoplay:!0,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".partners_slider").slick({dots:!1,infinite:!0,speed:600,autoplaySpeed:900,slidesToShow:5,arrows:!1,autoplay:!0,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(document).ready(function(){$(".scroll_down").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$("#about").offset().top-77},"slow")}),$(".sliding_link").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},800)}),$("#portfoliolist .portfolio_item, #portfoliolist1 .portfolio_item, .galleryList .gallery_item").magnificPopup({delegate:"a",gallery:{enabled:!0},type:"image"}),$(".menu-bar").on("click",function(){$(this).addClass("active"),$(".main_menu").addClass("opened")}),$(".close_menu, .nav-link").on("click",function(){$(".menu-bar").removeClass("active"),$(".main_menu").removeClass("opened")})})}),WOW&&new WOW().init()})();})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBQb3J0Zm9saW8gdGFic1xuICAvLyB2YXIgcG9ydGZvbGlvbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW9saXN0Jyk7XG4gIC8vIHZhciBwb3J0Zm9saW9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb190YWJzJyk7XG4gIC8vIGlmIChwb3J0Zm9saW9saXN0KSB7XG4gIC8vICAgbWl4aXR1cChwb3J0Zm9saW9saXN0LCB7XG4gIC8vICAgICBjb250cm9sczoge1xuICAvLyAgICAgICBzY29wZTogJ2xvY2FsJ1xuICAvLyAgICAgfSxcbiAgLy8gICAgIHNlbGVjdG9yczoge1xuICAvLyAgICAgICB0YXJnZXQ6ICcucG9ydGZvbGlvJ1xuICAvLyAgICAgfSxcbiAgLy8gICAgIGxvYWQ6IHtcbiAgLy8gICAgICAgZmlsdGVyOiAnLmRlc2lnbnMsIC5kZXZlbG9wbWVudCwgLnNlbywgLm1hcmtldGluZydcbiAgLy8gICAgIH1cbiAgLy8gICB9KTsgLy8uZmlsdGVyKCcuZmlsdGVyJyk7XG4gIC8vIH1cblxuICAvLyB2YXIgcG9ydGZvbGlvbGlzdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9ydGZvbGlvbGlzdDEnKTtcbiAgLy8gaWYgKHBvcnRmb2xpb2xpc3QxLmxlbmd0aCkge1xuICAvLyAgIG1peGl0dXAocG9ydGZvbGlvbGlzdDEsIHtcbiAgLy8gICAgIHNlbGVjdG9yczoge1xuICAvLyAgICAgICB0YXJnZXQ6ICcucG9ydGZvbGlvJ1xuICAvLyAgICAgfSxcbiAgLy8gICAgIGxvYWQ6IHtcbiAgLy8gICAgICAgZmlsdGVyOiAnLnlvZ2EsIC5maXRuZXNzLCAuZ3ltLCAucnVubmluZydcbiAgLy8gICAgIH1cbiAgLy8gICB9KS5maWx0ZXIoJy5maWx0ZXInKTtcbiAgLy8gfVxuXG4gIC8vIHZhciBwb3J0Zm9saW9saXN0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb3J0Zm9saW9saXN0MicpO1xuICAvLyBpZiAocG9ydGZvbGlvbGlzdDIubGVuZ3RoKSB7XG4gIC8vICAgbWl4aXR1cChwb3J0Zm9saW9saXN0Miwge1xuICAvLyAgICAgc2VsZWN0b3JzOiB7XG4gIC8vICAgICAgIHRhcmdldDogJy5wb3J0Zm9saW8nXG4gIC8vICAgICB9LFxuICAvLyAgICAgbG9hZDoge1xuICAvLyAgICAgICBmaWx0ZXI6ICcuYnJlYWtmYXN0LCAubHVuY2gsIC5kaW5uZXIsIC5zbmFjaydcbiAgLy8gICAgIH1cbiAgLy8gICB9KS5maWx0ZXIoJy5maWx0ZXInKTtcbiAgLy8gfVxuXG4gIC8vIHZhciBwb3J0Zm9saW9saXN0MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb3J0Zm9saW9saXN0MycpO1xuICAvLyBpZiAocG9ydGZvbGlvbGlzdDMubGVuZ3RoKSB7XG4gIC8vICAgbWl4aXR1cChwb3J0Zm9saW9saXN0Mywge1xuICAvLyAgICAgc2VsZWN0b3JzOiB7XG4gIC8vICAgICAgIHRhcmdldDogJy5wb3J0Zm9saW8nXG4gIC8vICAgICB9LFxuICAvLyAgICAgbG9hZDoge1xuICAvLyAgICAgICBmaWx0ZXI6ICcuY2FyZGlvbG9neSwgLmRlbnRhbCwgLnN1cmdlcmllcywgLnBhdG9sb2d5J1xuICAvLyAgICAgfVxuICAvLyAgIH0pLmZpbHRlcignLmZpbHRlcicpO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gbWFpblNsaWRlcigpIHtcbiAgICB2YXIgQmFzaWNTbGlkZXIgPSAkKCcuYmFubmVyX3NsaWRlcicpO1xuXG4gICAgaWYgKEJhc2ljU2xpZGVyLmxlbmd0aCkge1xuICAgICAgQmFzaWNTbGlkZXIub24oJ2luaXQnLCBmdW5jdGlvbihlLCBzbGljaykge1xuICAgICAgICB2YXIgJGZpcnN0QW5pbWF0aW5nRWxlbWVudHMgPSAkKCcuYl9zbGlkZScpLmZpbmQoJ1tkYXRhLWFuaW1hdGlvbl0nKTtcbiAgICAgICAgZG9BbmltYXRpb25zKCRmaXJzdEFuaW1hdGluZ0VsZW1lbnRzKTtcbiAgICAgIH0pO1xuICAgICAgQmFzaWNTbGlkZXIub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGUsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuICAgICAgICB2YXIgJGFuaW1hdGluZ0VsZW1lbnRzID0gJCgnLmJfc2xpZGVbZGF0YS1zbGljay1pbmRleD1cIicgKyBuZXh0U2xpZGUgKyAnXCJdJykuZmluZCgnW2RhdGEtYW5pbWF0aW9uXScpO1xuICAgICAgICBkb0FuaW1hdGlvbnMoJGFuaW1hdGluZ0VsZW1lbnRzKTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBkb0FuaW1hdGlvbnMoZWxlbWVudHMpIHtcbiAgICAgICAgdmFyIGFuaW1hdGlvbkVuZEV2ZW50cyA9ICd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJztcbiAgICAgICAgZWxlbWVudHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciAkYW5pbWF0aW9uRGVsYXkgPSAkdGhpcy5kYXRhKCdkZWxheScpO1xuICAgICAgICAgIHZhciAkYW5pbWF0aW9uVHlwZSA9ICdhbmltYXRlZCAnICsgJHRoaXMuZGF0YSgnYW5pbWF0aW9uJyk7XG4gICAgICAgICAgJHRoaXMuY3NzKHtcbiAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiAkYW5pbWF0aW9uRGVsYXksXG4gICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24tZGVsYXknOiAkYW5pbWF0aW9uRGVsYXlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkdGhpcy5hZGRDbGFzcygkYW5pbWF0aW9uVHlwZSkub25lKGFuaW1hdGlvbkVuZEV2ZW50cywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygkYW5pbWF0aW9uVHlwZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1haW5TbGlkZXIoKTtcblxuICAkKGZ1bmN0aW9uKCkge1xuICAgIC8vIGhlYWRlciBGaXhlZCBjbGFzc1xuICAgIGlmICgkKFwiLmR5bmFtaWMtaGVhZGVyIC5tYWluX2hlYWRlclwiKS5sZW5ndGgpIHtcbiAgICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZiAoc2Nyb2xsID49IDIpIHtcbiAgICAgICAgICAkKFwiLmR5bmFtaWMtaGVhZGVyIC5tYWluX2hlYWRlclwiKS5hZGRDbGFzcyhcImRhcmtfYmdcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJChcIi5keW5hbWljLWhlYWRlciAubWFpbl9oZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJkYXJrX2JnXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBoZWFkZXIgTWVudSBTY3JvbGwgZG93biBqc1xuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHNjcm9sbFBvcyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICQoJy5tYWluX21lbnVfbGlzdCBsaSBhJykub24oXCJlYWNoXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBjdXJyZW50VG9wID0gICQoJCh0aGlzKS5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCAtIDgwO1xuICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9ICQoY3VycmVudEVsZW1lbnQuYXR0cihcImhyZWZcIikpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIGlmICggY3VycmVudFRvcCA8PSBzY3JvbGxQb3MgJiYgKGN1cnJlbnRUb3AgKyBjdXJyZW50SGVpZ2h0KSA+IHNjcm9sbFBvcyApIHtcbiAgICAgICAgICAkKGN1cnJlbnRFbGVtZW50KS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ2EnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgJChjdXJyZW50RWxlbWVudCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgJChjdXJyZW50RWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJ2FbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKCQodGhpcykuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AgLSA3NyxcbiAgICAgICAgfSxcbiAgICAgICAgMTAwMCxcbiAgICAgICAgJ2xpbmVhcidcbiAgICAgIClcbiAgICB9KTtcblxuICAgIC8vIFNjcm9sbCB1cCBqc1xuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpe1xuICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gNTApIHtcbiAgICAgICAgJCgnLnNjcm9sbFVwJykuZmFkZUluKDIwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuc2Nyb2xsVXAnKS5mYWRlT3V0KDIwMCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuc2Nyb2xsVXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3AgOiAwXG4gICAgICB9LCA4MDApO1xuICAgIH0pO1xuXG4gICAgLy8gQ291bnRlciBqc1xuICAgICQod2luZG93KS5zY3JvbGwoc3RhcnRDb3VudGVyKTtcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZXIoKSB7XG4gICAgICB2YXIgJGxvdmVDb3VudGVyID0galF1ZXJ5KCcubG92ZV9jb3VudGVyJyk7XG5cbiAgICAgIGlmICgkbG92ZUNvdW50ZXIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBoVCA9ICRsb3ZlQ291bnRlci5vZmZzZXQoKS50b3AsXG4gICAgICAgICAgICBoSCA9ICRsb3ZlQ291bnRlci5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgd0ggPSBqUXVlcnkod2luZG93KS5oZWlnaHQoKTtcblxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBoVCtoSC13SCkge1xuICAgICAgICAgIGpRdWVyeSh3aW5kb3cpLm9mZihcInNjcm9sbFwiLCBzdGFydENvdW50ZXIpO1xuICAgICAgICAgIGpRdWVyeSgnLmxvdmVfY291bnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgICAgIGpRdWVyeSh7IENvdW50ZXI6IDAgfSkuYW5pbWF0ZSh7IENvdW50ZXI6ICR0aGlzLnRleHQoKSB9LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICBlYXNpbmc6ICdzd2luZycsXG4gICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy50ZXh0KE1hdGguY2VpbCh0aGlzLkNvdW50ZXIpICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTG9hZGVyIEpzXG4gICAgLy8gJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbigpe1xuICAgIC8vICAgJChcIi5sb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBnbyBkb3duXG4gICAgJChcIi5nb19kb3duX2Fycm93IGkuZmEsIC5zbGlkaW5nX2xpbmtcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJChcIiNtYWluX2JvZHlcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCA4MDApO1xuICAgIH0pO1xuXG5cbiAgICAvLyBiYW5uZXIgc2xpZGVyIGpzXG4gICAgJCgnLmJhbm5lcl9zbGlkZXInKS5zbGljayh7XG4gICAgICBkb3RzOiBmYWxzZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDIwMDAsXG4gICAgICAvLyBmYWRlOnRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICBhdXRvcGxheTp0cnVlLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG5cblxuICAgIC8vIHBvcmZsb2lvIHNsaWRlciAganNcbiAgICAkKCcjcG9ydGZvbGlvbGlzdCcpLnNsaWNrKHtcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAvLyBmYWRlOnRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICBhdXRvcGxheTp0cnVlLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA0NzksXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG5cbiAgICB9KVxuXG5cbiAgICAvLyBUZWFtcyBzbGlkZXIganNcbiAgICAvLyAkKCcudGVhbV9saXN0Jykuc2xpY2soe1xuICAgIC8vICAgZG90czogZmFsc2UsXG4gICAgLy8gICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAvLyAgIHNwZWVkOiA1MDAsXG4gICAgLy8gICAvLyBmYWRlOnRydWUsXG4gICAgLy8gICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgLy8gICBhcnJvd3M6dHJ1ZSxcbiAgICAvLyAgIGF1dG9wbGF5OnRydWUsXG4gICAgLy8gICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAvLyAgIHJlc3BvbnNpdmU6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAvLyAgICAgICBzZXR0aW5nczoge1xuICAgIC8vICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIC8vICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgLy8gICAgICAgc2V0dGluZ3M6IHtcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgYnJlYWtwb2ludDogNDc5LFxuICAgIC8vICAgICAgIHNldHRpbmdzOiB7XG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgXVxuICAgIC8vIH0pXG5cbiAgICAvLyByZWxhdGVkIGl0ZW1zIHNsaWRlciBqc1xuICAgIC8vICQoJy5yZWxhdGVkX2l0ZW1zX3NsaWRlcicpLnNsaWNrKHtcbiAgICAvLyAgIGRvdHM6IHRydWUsXG4gICAgLy8gICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAvLyAgIHNwZWVkOiA1MDAsXG4gICAgLy8gICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgLy8gICBhcnJvd3M6ZmFsc2UsXG4gICAgLy8gICBhdXRvcGxheTp0cnVlLFxuICAgIC8vICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgLy8gICByZXNwb25zaXZlOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgLy8gICAgICAgc2V0dGluZ3M6IHtcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgIC8vICAgICAgIHNldHRpbmdzOiB7XG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGJyZWFrcG9pbnQ6IDQ3OSxcbiAgICAvLyAgICAgICBzZXR0aW5nczoge1xuICAgIC8vICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIC8vICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIF1cbiAgICAvLyB9KVxuXG4gICAgLy8gdGVzdGltb25pYWxzIHNsaWRlciAganNcbiAgICAkKCcudGVzdGlfc2xpZGVyJykuc2xpY2soe1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgIGFycm93czpmYWxzZSxcbiAgICAgIGF1dG9wbGF5OnRydWUsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNDc5LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG5cbiAgICAvLyBQYXJ0bmVycyBzbGlkZXIgIGpzXG4gICAgJCgnLnBhcnRuZXJzX3NsaWRlcicpLnNsaWNrKHtcbiAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNjAwLFxuICAgICAgYXV0b3BsYXlTcGVlZDogOTAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgYXJyb3dzOmZhbHNlLFxuICAgICAgYXV0b3BsYXk6dHJ1ZSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNDc5LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG5cbiAgICAvLyBNYWluIFNsaWRlciBTbGlkZSBhbmltYXRpb25cbiAgICAvLyBpZiAoJChcIi5iX3NsaWRlXCIpLmhhc0NsYXNzKFwiLnNsaWNrLWFjdGl2ZVwiKSApIHtcbiAgICAvLyAgICQodGhpcykuZmluZChcIi53b3dcIikucmVtb3ZlQ2xhc3MoJ3dvdycpO1xuICAgIC8vIH1cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNjcm9sbCBEb3duIGpzXG4gICAgICAkKCcuc2Nyb2xsX2Rvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKCcjYWJvdXQnKS5vZmZzZXQoKS50b3AgLSA3NywgfSwnc2xvdycpXG4gICAgICB9KTtcblxuICAgICAgJCggXCIuc2xpZGluZ19saW5rXCIgKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCBldmVudCApe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKCQodGhpcykuYXR0cihcImhyZWZcIikpLm9mZnNldCgpLnRvcCB9LCA4MDApO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHBvcnRmb2xpbyBwb3B1cCBqc1xuICAgICAgJCgnI3BvcnRmb2xpb2xpc3QgLnBvcnRmb2xpb19pdGVtLCAjcG9ydGZvbGlvbGlzdDEgLnBvcnRmb2xpb19pdGVtLCAuZ2FsbGVyeUxpc3QgLmdhbGxlcnlfaXRlbScpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW1hZ2UnXG4gICAgICB9KTtcblxuICAgICAgLy8gLy8gcG9ydGZvbGlvIHBvcHVwIGpzXG4gICAgICAvLyAkKCcuZ2V0X3F1b3RlJykubWFnbmlmaWNQb3B1cCh7fSk7XG5cblxuICAgICAgLy8gJCgnLm9wZW4tcG9wdXAtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgLy8gICB0eXBlOidpbmxpbmUnLFxuICAgICAgLy8gICBtaWRDbGljazogdHJ1ZVxuICAgICAgLy8gfSk7XG5cbiAgICAgIC8vIG1vYmlsZSBtZW51IHRvZ2dsZVxuICAgICAgJChcIi5tZW51LWJhclwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5tYWluX21lbnUnKS5hZGRDbGFzcygnb3BlbmVkJyk7XG4gICAgICB9KTtcbiAgICAgICQoXCIuY2xvc2VfbWVudSwgLm5hdi1saW5rXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcubWVudS1iYXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5tYWluX21lbnUnKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKFdPVykge1xuICAgIG5ldyBXT1coKS5pbml0KCk7XG4gIH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiTUFBQSxBQUFDLFlBQ0MsYUF1REEsYUFDRSxHQUFJLEdBQWMsRUFBRSxrQkFFcEIsR0FBSSxFQUFZLFFBQ2QsRUFBWSxHQUFHLE9B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cEIsQ0FDRSxXQUFZLElBQ1osU0FBVSxDQUNSLGFBQWMsRUFDZCxlQUFnQixJQUdwQixDQUNFLFdBQVksSUFDWixTQUFVLENBQ1IsYUFBYyxFQUNkLGVBQWdCLElBR3BCLENBQ0UsV0FBWSxJQUNaLFNBQVUsQ0FDUixhQUFjLEVBQ2QsZUFBZ0IsT0E4RXhCLEVBQUUsaUJBQWlCLE1BQU0sQ0FDdkIsS0FBTSxHQUNOLFNBQVUsR0FDVixNQUFPLElBQ1AsYUFBYyxFQUNkLE9BQU8sR0FDUCxTQUFTLEdBQ1QsZUFBZ0IsRUFDaEIsV0FBWSxDQUNWLENBQ0UsV0FBWSxJQUNaLFNBQVUsQ0FDUixhQUFjLEVBQ2QsZUFBZ0IsSUFHcEIsQ0FDRSxXQUFZLElBQ1osU0FBVSxDQUNSLGFBQWMsRUFDZCxlQUFnQixJQUdwQixDQUNFLFdBQVksSUFDWixTQUFVLENBQ1IsYUFBYyxFQUNkLGVBQWdCLE9BT3hCLEVBQUUsb0JBQW9CLE1BQU0sQ0FDMUIsS0FBTSxHQUNOLFNBQVUsR0FDVixNQUFPLElBQ1AsY0FBZSxJQUNmLGFBQWMsRUFDZCxPQUFPLEdBQ1AsU0FBUyxHQUNULGVBQWdCLEVBQ2hCLFdBQVksQ0FDVixDQUNFLFdBQVksSUFDWixTQUFVLENBQ1IsYUFBYyxFQUNkLGVBQWdCLElBR3BCLENBQ0UsV0FBWSxJQUNaLFNBQVUsQ0FDUixhQUFjLEVBQ2QsZUFBZ0IsSUFHcEIsQ0FDRSxXQUFZLElBQ1osU0FBVSxDQUNSLGFBQWMsRUFDZCxlQUFnQixJQUdwQixDQUNFLFdBQVksSUFDWixTQUFVLENBQ1IsYUFBYyxFQUNkLGVBQWdCLE9BV3hCLEVBQUUsVUFBVSxNQUFNLFdBRWhCLEVBQUUsZ0JBQWdCLEdBQUcsUUFBUyxTQUFTLEdBQ3JDLEVBQUUsaUJBQ0YsRUFBRSxjQUFjLFFBQVEsQ0FBQyxVQUFXLEVBQUUsVUFBVSxTQUFTLElBQU0sSUFBTSxVQUd2RSxFQUFHLGlCQUFrQixHQUFHLFFBQVMsU0FBVSxHQUN6QyxFQUFNLGlCQUNOLEVBQUUsY0FBYyxRQUFRLENBQUUsVUFBVyxFQUFFLEVBQUUsTUFBTSxLQUFLLFNBQVMsU0FBUyxLQUFPLE9BSS9FLEVBQUUsK0ZBQStGLGNBQWMsQ0FDN0csU0FBVSxJQUNWLFFBQVMsQ0FDUCxRQUFTLElBRVgsS0FBTSxVQWFSLEVBQUUsYUFBYSxHQUFHLFFBQVMsV0FDekIsRUFBRSxNQUFNLFNBQVMsVUFDakIsRUFBRSxjQUFjLFNBQVMsWUFFM0IsRUFBRSwwQkFBMEIsR0FBRyxRQUFTLFdBQ3RDLEVBQUUsYUFBYSxZQUFZLFVBQzNCLEVBQUUsY0FBYyxZQUFZLGdCQUs5QixLQUNGLEdBQUksT0FBTSIsCiAgIm5hbWVzIjogW10KfQo=
