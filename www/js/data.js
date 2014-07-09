-(function(g) {

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
			text: [
				{
					title: 'Permanent situations',
					content: 'She works in a bank.'
				},

				{
					title: 'Generally true',
					content: 'The sun rises in the east.'
				},

				{
					title: 'Habits',
					content: 'I play tennis every Tuesday.'
				},

				{
					title: 'Future Timetables',
					content: 'Our train leaves at 11 am.'
				},

				{
					title: 'Future after when, until, ...',
					content: 'I won\'t go until it stops raining.'
				}
			]
		},

		{
			name: 'Past Simple',
			verb: 1,
			negative: ['didn\'t', 'didn\'t', 'didn\'t'],
			question: ['Did', 'Did', 'Did'],
			noTense: true,
			toBe: ['were', 'were', 'was'],
			toBeNegative: ['weren\'t', 'weren\'t', 'wasn\'t'],
			text: [
				{
					title: 'Finished events in the past with no connection to the present',
					content: 'Leonardo painted the Mona Lisa.'
				},

				{
					title: 'With a finished time word ',
					content: 'I went to the cinema yesterday.'
				},

				{
					title: 'For stories / lists of events',
					content: 'Yesterday I went to the library, met a friend for lunch, and played tennis.'
				},

				{
					title: 'Details of news',
					content: 'I\'ve been on holiday. I went to Spain and Portugal.'
				},

				{
					title: 'As part of the second conditional',
					content: 'If she knew his number, she would call him.'
				}
			]
		},

		{
			name: 'Future Simple',
			verb: 0,
			afterPron: ['will', 'will', 'will'],
			negative: ['won\'t', 'won\'t', 'won\'t'],
			text: [
				{
					title: 'A decision at the moment of speaking',
					content: 'A: "I\'m cold." B: "I\'ll close the window."'
				},

				{
					title: 'Prediction based on opinion',
					content: 'I think the Conservatives will win the next election.'
				},

				{
					title: 'A future fact',
					content: 'The sun will rise at 7am.'
				},

				{
					title: 'Promises / requests / refusal / willingness',
					content: 'I\'ll help you with your homework.'
				},

				{
					title: 'In the same way as the future continuous, but with state verbs',
					content: 'I\'ll be at the station when you arrive.'
				}
			]

		},

		{
			name: 'Future Simple \'going to\'',
			verb: 0,
			afterPron: ['am going to', 'are going to', 'is going to'],
			negative: ['am not going to', 'aren\'t going to', 'isn\'t going to'],
			text: [
				{
					title: 'Future plans made before the moment of speaking',
					content: 'A: "We\'ve run out of milk." B: "I know, I\'m going to buy some."'
				},

				{
					title: 'Prediction based on present evidence',
					content: 'Look at those boys playing football! They\'re going to break the window.'
				},
			]
		},

		{
			name: 'Present Continuous',
			verb: 0,
			afterPron: ['am', 'are', 'is'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['am not', 'aren\'t', 'isn\'t'],
			text: [
				{
					title: 'Happening now',
					content: 'Julie is sleeping at the moment.'
				},

				{
					title: 'Temporary situations',
					content: 'I\'m staying a friend for a few days.'
				},

				{
					title: 'Annoying habits',
					content: 'You\'re always losing your keys!'
				},

				{
					title: 'Definite future plants',
					content: 'I\'m meeting my father later.'
				},

				{
					title: 'Changing situations',
					content: 'The weather is improving.'
				}
			]
		},

		{
			name: 'Past Continuous',
			verb: 0,
			afterPron: ['were', 'were', 'was'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['weren\'t', 'weren\'t', 'wasn\'t'],
			text: [
				{
					title: 'A continuous action in the past which is interrupted by another action or a time',
					content: 'I was taking a bath when the telephone rang.'
				},

				{
					title: 'Background information, to give atmosphere to a story',
					content: ' The birds were singing, the sun was shining and in the cafes people were laughing and chatting.'
				},

				{
					title: 'An annoying and repeated action in the past, usually with "always"',
					content: 'He was always leaving the tap running.'
				},

				{
					title: 'For two actions which happened at the same time in the past',
					content: 'I was watching TV and he was reading.'
				}
			]
		},

		{
			name: 'Future Continuous',
			verb: 0,
			afterPron: ['will be', 'will be', 'will be'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['won\'t be', 'won\'t be', 'won\'t be'],
			text: [
				{
					title: 'A continuous action in the future which is interrupted by a time or by another action',
					content: 'I\'ll be waiting when you arrive.'
				},

				{
					title: 'A complete action in the future that will happen in the normal course of events',
					content: 'The Government will be making a statement later. '
				},

				{
					title: 'To make a guess about the present',
					content: 'My mother will be working now.'
				}
			]
		},

		{
			name: 'Present Perfect',
			verb: 2,
			afterPron: ['have', 'have', 'has'],
			negative: ['haven\'t', 'haven\'t', 'hasn\'t'],
			text: [
				{
					title: 'Unfinished actions or situations',
					content: 'I have known Julie for ten years.'
				},

				{
					title: 'Finished actions or situations',
					content: 'I have been to Mexico.'
				}
			]
		},

		{
			name: 'Past Perfect',
			verb: 2,
			afterPron: ['had', 'had', 'had'],
			negative: ['hadn\'t', 'hadn\'t', 'hadn\'t'],
			text: [
				{
					title: 'A completed action before something else in the past',
					content: 'When we arrived, the film had started.'
				},

				{
					title: 'To explain or give a reason for something in the past',
					content: 'It had snowed in the night, so the bus didn\'t arrive.'
				},

				{
					title: 'Something that started in the past and continued up to another action in the past',
					content: 'When he graduated, he had been in London for six years.'
				},

				{
					title: 'As part of the third conditional',
					content: 'If I had known you were ill, I would have visited you.'
				}
			]
		},

		{
			name: 'Future Perfect',
			verb: 2,
			afterPron: ['will have', 'will have', 'will has'],
			negative: ['won\'t have', 'won\'t have', 'won\'t has'],
			text: [
				{
					title: 'To talk about an action that will finish before a certain time in the future, but we don\'t know exactly when',
					content: 'By 10 o\'clock I will have finished my homework.'
				}
			]
		},

		{
			name: 'Present Perfect Continuous',
			verb: 0,
			afterPron: ['have been', 'have been', 'has been'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['haven\'t been', 'haven\'t been', 'hasn\'t been'],
			text: [
				{
					title: 'To say how long for unfinished actions which started in the past and continue to the present',
					content: 'I have been living in London for two years.'
				},

				{
					title: 'Actions which have just stopped and have a result',
					content: 'I\'m so tired, I have been studying.'
				}
			]
		},

		{
			name: 'Past Perfect Continuous',
			verb: 0,
			afterPron: ['had been', 'had been', 'had been'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['hadn\'t been', 'hadn\'t been', 'hadn\'t been'],
			text: [
				{
					title: 'Something that started in the past and continued up to another action or event ',
					content: 'She had been working at that company for a year when she met James.'
				},

				{
					title: 'Cause of something in the past',
					content: 'The pavement was wet, it had been raining.'
				}
			]
		},

		{
			name: 'Future Perfect Continuous',
			verb: 0,
			afterPron: ['will have been', 'will have been', 'will has been'],
			afterVerb: ['ing', 'ing', 'ing'],
			negative: ['won\'t have been', 'won\'t have been', 'won\'t has been'],
			text: [
				{
					title: 'With a time word, to talk about an action which starts before a time in the future and continues up to that time',
					content: 'In April 2009, I will have been teaching here for two years.'
				}
			]
		}
	];

	g.tenses = tenses;
})(this);