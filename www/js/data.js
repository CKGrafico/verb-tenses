(function(g) {

	g.verbs = [
		// regular
		['play', 'played', 'played'],
		// irregular
		['drink', 'drank', 'drunk'],
		// to be
		['be', 'be', 'been'],
	];

	g.persons = [
		'I',
		'You',
		'He'
	];

	g.complements = [
		'football',
		'coffe',
		'their friend'
	];

	var tenses = [
		{
			name: 'Present Simple',
			verb: 0,
			afterVerb: ['', '', 's'],
			negative: ['don\'t', 'don\'t', 'doesn\'t'],
			question: ['Do', 'Do', 'Does'],
			toBe: ['am', 'are', 'is'],
			toBeNegative: ['am not', 'aren\'t', 'isn\'t'],
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim diam, sollicitudin ac nisi vel, bibendum faucibus enim. Proin quis nibh euismod, aliquet mi quis, condimentum quam. Aenean sapien nunc, lobortis in feugiat non, congue vitae eros. Phasellus sit amet turpis sodales, aliquam ligula eget, elementum mauris. Vivamus vitae leo at ligula suscipit fermentum. Nunc vitae elit sit amet neque accumsan pharetra. Phasellus vel nunc tincidunt, pretium est eget, luctus nunc. Aenean et tincidunt lacus, a gravida erat. In placerat aliquet elit id pharetra. Maecenas pulvinar, sem sit amet blandit rhoncus, risus arcu ullamcorper odio, in euismod libero lectus vel massa. Nam ac malesuada erat. Nunc at luctus enim, a consequat elit. Duis non mauris urna. Sed quis dolor malesuada, imperdiet orci ut, malesuada sapien. Duis pharetra sit amet lacus sed pulvinar. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vestibulum sapien sagittis velit pulvinar ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec viverra pretium metus, non adipiscing purus dignissim ut. Morbi eu libero feugiat, eleifend lorem vel, blandit urna. Proin a diam et nibh interdum consequat. Nunc rhoncus malesuada nibh nec condimentum. Sed nec sapien vitae est vehicula convallis in gravida orci. Nunc tempus sem et erat posuere suscipit. Phasellus quis aliquet velit.'
		},

		{
			name: 'Past Simple',
			verb: 1,
			negative: ['didn\'t', 'didn\'t', 'didn\'t'],
			question: ['Did', 'Did', 'Did'],
			noTense: true,
			toBe: ['were', 'were', 'was'],
			toBeNegative: ['weren\'t', 'weren\'t', 'wasn\'t']
		},

		{
			name: 'Future Simple',
			verb: 0,
			afterPron: ['will', 'will', 'will'],
			negative: ['won\'t', 'won\'t', 'won\'t']

		},

		{
			name: 'Future Simple \'going to\'',
			verb: 0,
			afterPron: ['am going to', 'are going to', 'is going to'],
			negative: ['am not going to', 'aren\'t going to', 'isn\'t going to']
		},

		{
			name: 'Present Continuous',
			verb: 0,
			afterPron: ['am', 'are', 'is'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['am not', 'aren\'t', 'isn\'t']
		},

		{
			name: 'Past Continuous',
			verb: 0,
			afterPron: ['were', 'were', 'was'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['weren\'t', 'weren\'t', 'wasn\'t']
		},

		{
			name: 'Future Continuous',
			verb: 0,
			afterPron: ['will be', 'will be', 'will be'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['won\'t be', 'won\'t be', 'won\'t be']
		},

		{
			name: 'Present Perfect',
			verb: 2,
			afterPron: ['have', 'have', 'has'],
			negative: ['haven\'t', 'haven\'t', 'hasn\'t']
		},

		{
			name: 'Past Perfect',
			verb: 2,
			afterPron: ['had', 'had', 'had'],
			negative: ['hadn\'t', 'hadn\'t', 'hadn\'t']
		},

		{
			name: 'Future Perfect',
			verb: 2,
			afterPron: ['will have', 'will have', 'will has'],
			negative: ['won\'t have', 'won\'t have', 'won\'t has']
		},

		{
			name: 'Present Perfect Continuous',
			verb: 0,
			afterPron: ['have been', 'have been', 'has been'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['haven\'t been', 'haven\'t been', 'hasn\'t been']
		},

		{
			name: 'Past Perfect Continuous',
			verb: 0,
			afterPron: ['had been', 'had been', 'had been'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['hadn\'t been', 'hadn\'t been', 'hadn\'t been']
		},

		{
			name: 'Future Perfect Continuous',
			verb: 0,
			afterPron: ['will have been', 'will have been', 'will has been'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['won\'t have been', 'won\'t have been', 'won\'t has been']
		}
	];

	g.tenses = tenses;
})(this);