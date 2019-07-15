import Home from '../index.html'
import Styles from './scss/app.scss'
import 'bootstrap'
require('expose-loader?$!jquery');


console.log("working");

$(function(){
    $(document).scroll(function(){
    let $nav = $("#headerNav");
    $nav.toggleClass("scrolled",$(this).scrollTop() > $nav.height());
  })
});

// $(function(){
// 	$(window).scroll(function(){
// 		let top1 = $(this).scrollTop();
// 		if(top1>300){
// 			$("#backToTop").stop().fadeIn().css("display","block");
// 		}else{
// 			$("#backToTop").stop().fadeOut();
// 		}
// 	});

// 	$("#backToTop").click(function(){
// 		$(" body, html").animate({
// 			scrollTop:0
// 		},300);
// 	});	
// });
