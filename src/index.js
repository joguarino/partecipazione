import $ from 'jquery';

$(() => {
	$('#font').on('change', (event) => {
		var font = event.target.value;
		$('#partecipazione').removeClass().addClass(font);
	});
});
