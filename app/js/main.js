$(document).ready(function() {
	var navOffHeight = $('.page-nav').offset();
	var pageHeader = $('.page-header');
	var headerHeight = $('.page-header').height();
	var page = $('body');
	$(window).scroll(function() {
		var scrollVal = $(this).scrollTop();
		if ( scrollVal >= navOffHeight.top) {
			page.addClass('scrolling');
			pageHeader.css({height: headerHeight +'px'});
		} else {
			page.removeClass('scrolling');
			pageHeader.removeAttr('style');
		}
	});

	var asideLink = $('.link-aside');
	var asidePosts = $('.hot-news');
	var asideClose = $('.icon-close');
	var mainNavLink = $('.link-m-nav');
	asideLink.on('click', function(){
		var linkPost = $(this).attr('data-post');
		asideClose.attr('class','icon-close');
		$('.tags-nav').removeClass('open');

		if (!$(this).hasClass('current')) {
			asidePosts.removeClass('open');
			asideLink.removeClass('current');
			$(this).addClass('current');
			$('.' + linkPost).addClass('open');
			asideClose.addClass('open').addClass(linkPost);
		} else {
			$(this).removeClass('current');
			$('.' + linkPost).removeClass('open');
		}
	});
	asideClose.on('click', function(){
		$(this).parents('aside').find('.open').removeClass('open');
		$(this).removeClass('open');
		asideLink.removeClass('current');
	});
	mainNavLink.on('click', function(){
		$(this).toggleClass('current');
		$('.page-nav ul').toggleClass('expand');
	})
});
