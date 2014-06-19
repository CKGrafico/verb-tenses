(function(g) {

	g.verbs = [
		// regular
		['play', 'played', 'played'],
		// irregular
		['drink', 'drank', 'drunk'],
		// to be
		[]
	];

	g.persons = [
		'I',
		'You',
		'He'
	];

	g.complements = [
		'football',
		'coffe',
		''
	];

	var tenses = [
		{
			name: 'Present Simple',
			verb: 0,
			afterVerb: ['', '', 's'],
			negative: ['don\'t', 'don\'t', 'doesn\'t']
		},

		{
			name: 'Past Simple',
			verb: 1,
			negative: ['didn\'t', 'didn\'t', 'didn\'t']
		},

		{
			name: 'Future Simple',
			verb: 0,
			afterPron: [' will', ' will', ' will'],
			negative: ['won\'t', 'won\'t', 'won\'t']

		},

		{
			name: 'Future Simple \'going to\'',
			verb: 0,
			afterPron: [' am going to', ' are going to', ' is going to'],
			negative: ['am not going to', 'aren\'t going to', 'isn\'t going to']
		},

		{
			name: 'Present Continuous',
			verb: 0,
			afterPron: [' am', ' are', ' is'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['am not', 'aren\'t', 'isn\'t']
		},

		{
			name: 'Past Continuous',
			verb: 0,
			afterPron: [' were', ' were', ' was'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['weren\'t', 'weren\'t', 'wasn\'t']
		},

		{
			name: 'Future Continuous',
			verb: 0,
			afterPron: [' will be', ' will be', ' will be'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['won\'t', 'won\'t', 'won\'t']
		},

		{
			name: 'Present Perfect',
			verb: 2,
			afterPron: [' have', ' have', ' has'],
			negative: ['haven\'t', 'haven\'t', 'hasn\'t']
		},

		{
			name: 'Past Perfect',
			verb: 2,
			afterPron: [' had', ' had', ' had'],
			negative: ['hadn\'t', 'hadn\'t', 'hadn\'t']
		},

		{
			name: 'Future Perfect',
			verb: 2,
			afterPron: [' will have', ' will have', ' will has'],
			negative: ['won\'t have', 'won\'t have', 'won\'t has']
		},

		{
			name: 'Present Perfect Continuous',
			verb: 0,
			afterPron: [' have been', ' have been', ' has been'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['haven\'t been', 'haven\'t been', 'hasn\'t been']
		},

		{
			name: 'Past Perfect Continuous',
			verb: 0,
			afterPron: [' had been', ' had been', ' had been'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['hadn\'t been', 'hadn\'t been', 'hadn\'t been']
		},

		{
			name: 'Future Perfect Continuous',
			verb: 0,
			afterPron: [' will have been', ' will have been', ' will has been'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['won\'t have been', 'won\'t have been', 'won\'t has been']
		}
	];

	g.tenses = tenses;
})(this);