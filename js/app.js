(function(g, $) {

	var person = 1;
	var verb = 0;

	// On change an input
	$('.config__person').on('change', function() {
		person = parseInt($(this).val(), 10);
		processTenses();
		processPreview();
	});

	$('.config__verb').on('change', function() {
		verb = parseInt($(this).val(), 10);
		processTenses();
		processPreview();
	});

	$('.config__filters').on('submit', function(e) {
		e.preventDefault();
		var footableFilter = $('.footable').data('footable-filter');
		footableFilter.filter($('.config__filter').val());
	});

	$('.footable').on('click', '.button__info', function() {
		vex.dialog.alert($(this).data('info'));
	});

	function processTenses() {
		var _verb = g.verbs[verb];
		var _person = g.persons[person];
		var _complement = g.complements[verb];
		var tenses = g.tenses;
		var container = $('.footable tbody');
		container.html('');

		for (var i = 0; i < tenses.length; i++) {
			var tense = tenses[i];
			var tr = $('<tr/>');
			var _afterPron = get(tense.afterPron, person);
			var _afterVerb = get(tense.afterVerb, person);
			var _isToBe = _verb[0] === 'be';

			// Tense
			tr.append($('<td/>').addClass('footable-first-column').append($('<span/>').addClass('footable-toggle')).text(tense.name));

			// Positive
			tr.append($('<td/>').html(

				' <span class="person">' + _person + '</span> ' +
				' <span class="after-pron">' + _afterPron + '</span> ' +
				((_isToBe && tense.toBe) ? ' <span class="after-pron">' + tense.toBe[person] + '</span> ' : _verb[tense.verb]) +
				'<span class="after-verb">' + ((_afterVerb === 's' && _isToBe) ? '' : _afterVerb) + '</span> ' +
				'<span class="complement">' + _complement + '</span>'

			));

			// Negative
			var _nVerb = _verb[((tense.noTense) ? 0 : tense.verb)];
			tr.append($('<td/>').html(

				' <span class="person">' + _person + '</span> ' +
				((_isToBe && tense.toBeNegative) ? '' : ('<span class="after-pron">' + get(tense.negative, person) + '</span> ')) +
				((_isToBe && tense.toBeNegative) ? '<span class="after-pron">' + tense.toBeNegative[person] + '</span> ' : _nVerb) +
				'<span class="after-verb">' + ((_afterVerb !== 's') ? _afterVerb : '') + '</span> ' +
				'<span class="complement">' + _complement + '</span>'

			));

			// Question
			_question = get(tense.question, person);
			var _afterPronT1 = _afterPron.substr(0,_afterPron.indexOf(' '));
			var _afterPronT2 = _afterPron.substr(_afterPron.indexOf(' ')+1);
			// only one word
			if(_afterPronT2 && !_afterPronT1) {
				_afterPronT1 = _afterPronT2;
				_afterPronT2 = '';
			}
			// to be
			var _afterQuestion;
			if(_isToBe && tense.toBe) {
				_afterQuestion = tense.toBe[person];
			}else{
				_afterQuestion = ((_question) ? _question : _afterPronT1);
			}

			var _verbQuestion = _verb[((tense.noTense) ? 0 : tense.verb)];

			tr.append($('<td/>').addClass('past').html(

				'<span class="after-pron after-pron-1">' + _afterQuestion + '</span> ' +
				((_person === 'I') ? ' <span class="person">' + _person + '</span> '  : (' <span class="person person-2">' +_person + '</span> ')) +
				' <span class="after-pron">' + _afterPronT2 + '</span> ' +
				((_isToBe && tense.toBe) ? '' : _verbQuestion) +
				'<span class="after-verb">' + ((_afterVerb !== 's') ? _afterVerb : '') + '</span> ' +
				'<span class="complement">' + _complement + ' ?</span>'

			));

			// More info
			tr.append($('<td/>').addClass('footable-last-column').append($('<button/>').text('More info').addClass('button__info').data('info', tense.info)));

			container.append(tr);
		}
		$('.footable').footable();
		$('.footable').trigger('footable_redraw');
	}

	function processPreview() {
		$('.config__preview').text( g.persons[person] + ' / ' + g.verbs[verb][0] + ' / ' + g.complements[verb]);
	}

	// because object in JS...
	function get(a, b) {
		if (a) {
			return a[b] || '';
		}
		return '';
	}

	processTenses();
})(this, jQuery);

/*
container.append('
				<tr>
					<td class="footable-first-column"><span class="footable-toggle"></span>Present Simple</td>
					<td>positive</td>
					<td>negative</td>
					<td>question</td>
					<td class="comment">comment</td>
				</tr>
			');
 */