
jQuery(document).ready(function () {

	jQuery('body').css('overflowY', 'hidden');
	jQuery.waitForImages.hasImgProperties = ['background', 'backgroundImage'];
	jQuery('body').waitForImages(function () {
		// All descendant images have loaded, now slide up.
		//                        alert("done");
		jQuery(".page-mask").fadeOut(100);
		jQuery('body').css('overflowY', 'auto');
	});

}); //ready

/*----------------------------------------------------*/
/*	Hover Overlay
/*----------------------------------------------------*/

jQuery(document).ready(function () {


	jQuery(".down-button").click(function () {
		jQuery(".down-button .icon-current").toggleClass("fa fa-angle-up fa fa-angle-down");
	});

	jQuery("[data-toggle='tooltip']").tooltip();

});

jQuery(document).ready(function () {
	jQuery(".main-header").sticky({ topSpacing: 0 });
});
