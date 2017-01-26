$.fn.fixElementRelativeToWindow = function(options) {

	// This is the easiest way to have default options.
	var settings = $.extend({
		// These are the defaults.
		horizontal: false,
		vertical: false,
        fromOffsetTop: false,
        fromOffsetBottom:false,
        stickToBottom:false,
        customOffsetLeft: 0,
		elemOffsetBottom: 0,
	}, options );

    var elem = this;
    var elementOffsetLeft = elem.offset().left;
    var lastScrollLeft = 0;
    var	elemOffsetTop = elem.offset().top;

	// function to fix element when horizontally scrolled.
    function fixElementOnHorizontalScroll () {

    	var documentScrollLeft = $(document).scrollLeft();
        if (documentScrollLeft >= lastScrollLeft) {
        	var left = documentScrollLeft - elementOffsetLeft + settings.customOffsetLeft;
        	elem.css('left', -left);
        }
    }

	// function to fix element when vertically scrolled.
    function fixElementOnVerticalScroll () {

        if (settings.fromOffsetTop) {
    	    var scrollTop = $(document).scrollTop() - elemOffsetTop;
        }else if (settings.fromOffsetBottom) {
            var scrollTop = $(document).scrollTop() - $(document).height() + settings.elemOffsetBottom;
        }
	    elem.css("top", -scrollTop);
    }

    // function to fix element to bottom of the window.
    function fixToBottomOfWindow() {
        var scrollTop = $(document).scrollTop() + $(window).outerHeight() - elem.outerHeight();
        elem.css("top", -scrollTop);
    }

    $(window).scroll(function() {

    	if (settings.horizontal) {
	    	// function to fix element when horizontally scrolled.
	    	fixElementOnHorizontalScroll();
    	}

        if (settings.vertical) {
        	// function to fix element when vertically scrolled.
	    	fixElementOnVerticalScroll();
        }

        if (settings.stickToBottom) {
            // function to fix element to bottom of the window.
            fixToBottomOfWindow();
        }
    });

    $(window).on('resize', function(event) {
        fixElementOnHorizontalScroll();
    });

    function initElemPosition (){
    	if (settings.horizontal) {
	    	// function to fix element when horizontally scrolled.
	    	fixElementOnHorizontalScroll();
    	}

        if (settings.vertical) {
        	// function to fix element when vertically scrolled.
	    	fixElementOnVerticalScroll();
        }

        if (settings.stickToBottom) {
            // function to fix element to bottom of the window.
            fixToBottomOfWindow();
        }
    }

    initElemPosition();
}