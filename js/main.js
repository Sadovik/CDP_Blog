jQuery(document).ready(function($) {
	//open/close lateral filter
	$('.cd-filter-trigger').on('click', function () {
		triggerFilter(true);
	});
	$('.cd-filter .cd-close').on('click', function () {
		triggerFilter(false);
	});

	function triggerFilter($bool) {
		var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-gallery')]);
		elementsToTrigger.each(function () {
			$(this).toggleClass('filter-is-visible', $bool);
		});
	}

	//close filter dropdown inside lateral .cd-filter 
	$('.cd-filter-block h4').on('click', function () {
		$(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
	});
});
