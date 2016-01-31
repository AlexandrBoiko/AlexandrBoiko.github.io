(function() {
	var _exits = [].slice.call(document.querySelectorAll('.alert-exit'));
	_exits.forEach(function(ele) {
		ele.addEventListener("click", function() {
			var _parent = this.parentNode;
			_parent.className = _parent.className + " display-none";
		});
	});
})();

$(document).ready(function() {
	$('#nav').burgerMenu({
		buttonBg: 'white',
		lineColor: '#000',
		menuBackground: 'rgba(255, 255, 255, 0.5)',
		linkBackground: '#000',
		linkColor: '#ce07d9',
		linkBorderBottom: 'none'
	});
});

$(window).scroll(function() {
	$('.mov').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 200) {
			$(this).addClass('wobble');
		}
	});
});
