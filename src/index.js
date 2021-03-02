import $ from 'jquery';

$(() => {
	$('#font').on('change', (event) => {
		var font = event.target.value;
		$('#partecipazione').removeClass().addClass(font);
		$('#piega').removeClass().addClass(font);
		$('#font-numeri').val(font);
	});

	$('#font-numeri').on('change', (event) => {
		var font = event.target.value;
		$('.num').removeClass().addClass('num').addClass(font);
	});
});
