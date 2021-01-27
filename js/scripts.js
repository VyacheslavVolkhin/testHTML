window.onload = function () {

	//popup menu toggle
	let menuButtonToggle = document.querySelectorAll('.js-btn-toggle');
	let menuCloses = document.querySelectorAll('.js-popup-wrap:not(.no-close)');
	let menuClassOpen = document.querySelectorAll('[data-class-open]');
	let menuBody = document.querySelector('body');
	let menuBodyClass = "";
	for (let key in menuButtonToggle) {
		if (menuButtonToggle.hasOwnProperty(key)) {
			menuButtonToggle[key].onclick = function() {
				for (let menuClassesKeys in menuClassOpen) {
					if (menuClassOpen.hasOwnProperty(menuClassesKeys)) {
						menuBody.classList.remove(menuClassOpen[menuClassesKeys].getAttribute('data-class-open'));
					}
				}
				if (this.classList.contains('active')) {
					this.classList.remove('active')
				} else {
					for (let menuKey in menuCloses) {
						if (menuCloses.hasOwnProperty(menuKey)) {
							menuCloses[menuKey].querySelector('.js-btn-toggle').classList.remove('active');
						}
					}
					this.classList.add('active')
					if (this.parentElement.hasAttribute('data-class-open')) {
						menuBody.classList.add(this.parentElement.getAttribute('data-class-open'));
					}
				}
				return false;
			}
		}
	}
	document.addEventListener('click', function(event) {
		let menuBlock='js-popup-block';
		let menuButton='js-btn-toggle';
		let className = event.target
		if (!event.target.classList.contains(menuBlock) && !event.target.classList.contains(menuButton)) {
			for (let menuKey in menuCloses) {
				if (menuCloses.hasOwnProperty(menuKey)) {
					menuCloses[menuKey].querySelector('.js-btn-toggle').classList.remove('active');
				}
			}
			for (let menuClassesKeys in menuClassOpen) {
				if (menuClassOpen.hasOwnProperty(menuClassesKeys)) {
					menuBody.classList.remove(menuClassOpen[menuClassesKeys].getAttribute('data-class-open'));
				}
			}
		}
	})
}




$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};


	//img to bg
	$('.js-bg-box').each(function() {
		var picUrl = $(this).find('.js-bg-photo').attr('src');
		$(this).css('background-image', 'url('+picUrl+')');
		$(this).find('.js-bg-photo').hide();
	})


	//items toggle
	$('.js-btn-items-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').parents('.js-items-wrap').find('.js-items-toggle').slideUp(200);
		} else {
			$(this).addClass('active').parents('.js-items-wrap').find('.js-items-toggle').slideDown(200);
		}
		return false;
	})



	//btn tgl
	$('.js-btn-tgl').on('click', function() {
		$(this).toggleClass('active');
		return false;
	})
	
	
	//popup block






	
	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})
	
});