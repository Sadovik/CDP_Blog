$(document).ready(function() {
	var navOffHeight = $('.page-nav').offset();
	var pageHeader = $('.page-header');
	var headerHeight = $('.page-header').height();
	var page = $('body');
	var classes = {
		winInScroll: 'scrolling',
		openOnMobile: 'open',
		currentOnMobile: 'current',
		expandOnMobile: 'expand'
	}

	$(window).scroll(function() {
		var scrollVal = $(this).scrollTop();
		if ( scrollVal >= navOffHeight.top) {
			page.addClass(classes.winInScroll);
			pageHeader.css({height: headerHeight +'px'});
		} else {
			page.removeClass(classes.winInScroll);
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
		$('.tags-nav').removeClass(classes.openOnMobile);

		if (mainNavLink.hasClass(classes.currentOnMobile)) {
			mainNavLink.toggleClass(classes.currentOnMobile);
			$('.page-nav ul').toggleClass(classes.expandOnMobile);
		}

		if (!$(this).hasClass(classes.currentOnMobile)) {
			asidePosts.removeClass(classes.openOnMobile);
			asideLink.removeClass(classes.currentOnMobile);
			$(this).addClass(classes.currentOnMobile);
			$('.' + linkPost).addClass(classes.openOnMobile);
			asideClose.addClass(classes.openOnMobile).addClass(linkPost);
		} else {
			$(this).removeClass(classes.currentOnMobile);
			$('.' + linkPost).removeClass(classes.openOnMobile);
		}
	});

	asideClose.on('click', function(){
		$(this).parents('aside').find(classes.openOnMobile).removeClass(classes.openOnMobile);
		$(this).removeClass(classes.openOnMobile);
		asideLink.removeClass(classes.currentOnMobile);
	});

	mainNavLink.on('click', function(){
		if (!asideLink.hasClass(classes.currentOnMobile)) {
			$(this).toggleClass(classes.currentOnMobile);
			$('.page-nav ul').toggleClass(classes.expandOnMobile);
		} else {
			$(this).toggleClass(classes.currentOnMobile);
			$('.page-nav ul').toggleClass(classes.expandOnMobile);
			asideLink.removeClass(classes.currentOnMobile);
			asidePosts.removeClass(classes.openOnMobile);
			$('.tags-nav').removeClass(classes.openOnMobile);
			asideClose.attr('class','icon-close');
		}
	});

	$(window).resize(function() {
		if (mainNavLink.hasClass(classes.currentOnMobile) || asideLink.hasClass(classes.currentOnMobile)) {
			console.log(1);
			mainNavLink.removeClass(classes.currentOnMobile);
			$('.page-nav ul').removeClass(classes.expandOnMobile);
			asideLink.removeClass(classes.currentOnMobile);
			asidePosts.removeClass(classes.openOnMobile);
			$('.tags-nav').removeClass(classes.openOnMobile);
			asideClose.attr('class','icon-close');
		}
	});
});
