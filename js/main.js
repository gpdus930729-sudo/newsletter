$(document).scroll(function() {

	//위로가기 버튼 스크롤
	if ($(this).scrollTop() > 300){
		$('.btn_top').show();
	} else{
		$('.btn_top').hide();
	}

});

$(document).ready(function() {

	//위로가기 버튼
	$('.btn_top').click(function(){
		$('html, body').animate({scrollTop : 0}, 500);
		return false;
	});

});



//메뉴 스크롤
function scrto(id){
	var to = 0;
	if(id != '')to = $('#'+id).offset().top-40;
	$('html, body').animate({scrollTop: to}, 500);	
}

$(function(){
	var $header = $('.header_wrap'); //헤더를 변수에 넣기
	var $page = $('.main_wrap'); //색상이 변할 부분
	var $window = $(window);
	var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기

	$window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
	pageOffsetTop = $page.offset().top;
	});

	$window.on('scroll', function(){ //스크롤시
	var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
	$header.toggleClass('down', scrolled); //클래스 토글
	});
});