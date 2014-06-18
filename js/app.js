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
			tr.append($('<td/>').addClass('footable-first-column').append($('<span/>').addClass('footable-toggle')).text(tense.name));
			tr.append($('<td/>').text(

				_person +
				get(tense.afterPron, person) + ' ' +
				_verb[tense.verb] +
				get(tense.afterVerb, person) + ' ' +
				_complement

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