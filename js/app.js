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

	function configOptions() {
	}

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

			// Tense
			tr.append($('<td/>').addClass('footable-first-column').append($('<span/>').addClass('footable-toggle')).text(tense.name));

			// Positive
			tr.append($('<td/>').html(

				_person +
				' <span class="after-pron">' + _afterPron + '</span> ' +
				_verb[tense.verb] +
				'<span class="after-verb">' + _afterVerb + '</span> ' +
				'<span class="complement">' + _complement + '</span>'

			));

			// Negative
			tr.append($('<td/>').html(

				_person + ' ' +
				// '<span class="negative">' + get(tense.negative, person) + '</span> ' +
				'<span class="after-pron">' + get(tense.negative, person) + '</span> ' +
				_verb[((tense.noTense) ? 0 : tense.verb)] +
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
			tr.append($('<td/>').addClass('past').html(

				'<span class="after-pron">' + ((_question) ? _question : _afterPronT1) + '</span> ' +
				_person +
				' <span class="after-pron">' + _afterPronT2 + '</span> ' +
				_verb[((tense.noTense) ? 0 : tense.verb)] +
				'<span class="after-verb">' + ((_afterVerb !== 's') ? _afterVerb : '') + '</span> ' +
				'<span class="complement">' + _complement + '</span>'

			));

			container.append(tr);
		}

		$('.footable').footable();
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