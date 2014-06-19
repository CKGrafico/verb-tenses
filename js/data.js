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
			afterVerb: ['', '', 's']
		},

		{
			name: 'Past Simple',
			verb: 1
		},

		{
			name: 'Future Simple',
			verb: 0,
			afterPron: [' will', ' will', ' will'],
		},

		{
			name: 'Future Simple \'going to\'',
			verb: 0,
			afterPron: [' am going to', ' are going to', ' is going to'],
		},

		{
			name: 'Present Continuous',
			verb: 0,
			afterPron: [' am', ' are', ' is'],
			afterVerb: ['ing', 'ing', 'ing']
		},

		{
			name: 'Past Continuous',
			verb: 0,
			afterPron: [' were', ' were', ' was'],
			afterVerb: ['ing', 'ing', 'ing']
		},

		{
			name: 'Future Continuous',
			verb: 0,
			afterPron: [' will be', ' will be', ' will be'],
			afterVerb: ['ing', 'ing', 'ing']
		},

		{
			name: 'Present Perfect',
			verb: 2,
			afterPron: [' have', ' have', ' has']
		},

		{
			name: 'Past Perfect',
			verb: 2,
			afterPron: [' had', ' had', ' had']
		},

		{
			name: 'Future Perfect',
			verb: 2,
			afterPron: [' will have', ' will have', ' will has']
		},

		{
			name: 'Present Perfect Continuous',
			verb: 0,
			afterPron: [' have been', ' have been', ' has been'],
			afterVerb: ['ing', 'ing', 'ing']
		},

		{
			name: 'Past Perfect Continuous',
			verb: 0,
			afterPron: [' had been', ' had been', ' had been'],
			afterVerb: ['ing', 'ing', 'ing']
		},

		{
			name: 'Future Perfect Continuous',
			verb: 0,
			afterPron: [' will have been', ' will have been', ' will has been'],
			afterVerb: ['ing', 'ing', 'ing']
		}
	];

	g.tenses = tenses;
})(this);