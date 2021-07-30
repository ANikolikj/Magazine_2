var __QUIZ = {
    'campaign': '?utm_source=schluetersche.de&utm_medium=charakter-quiz&utm_campaign=onlinemarketing-persönlichkeit',
	'intro' : {
		'title' : '',
		'text' : 'Dags att ta reda på om du hade varit den busigaste ponnyn i stallet!',
		// 'image' : 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    'questionnaire': {
        'currentQuestion': 0,
        'numberOfQuestions': 7,
        'questions': {
            '1': {
                'question': 'Vad är det roligaste pranket du vet?',
                // 'image': 'https://images.unsplash.com/photo-1503551723145-6c040742065b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'choices': {
                    '1': {
                        'text': 'De pranken JAG utsätts för!',
                        'score': [1, 0, 0]
                    },
                    '2': {
                        'text': 'Att hoppa fram från ett hörn och skrämmas!',
                        'score': [0, 1, 0]
                    },
                    '3': {
                        'text': 'Pruttkuddsprank är megaroliga!',
                        'score': [0, 0, 1]
                    }
                }
            },
            '2': {
                'question': 'Hur tror du att rideleverna i stallet hade pratat om dig om du var en ponny?',
                // 'image': 'https://images.unsplash.com/photo-1488903809927-48c9b4e43700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80',
                'choices': {
                    '1': {
                        'text': '”Jag älskar hen! Hen är superdupersnäll!”',
                        'score': [1, 0, 0]
                    },
                    '2': {
                        'text': '”Man vet aldrig vad hen är på för humör!”',
                        'score': [0, 1, 0]
                    },
                    '3': {
                        'text': '”Man kan alltid räkna med bus när det kommer till hen!”',
                        'score': [0, 0, 1]
                    }
                }
            },
            '3': {
                'question': 'Om du varit ponny för en dag … Vad av följande hade du gjort?',
                // 'image': 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'choices': {
                    '1': {
                        'text': 'Jag hade velat vara med på ridlekis!',
                        'score': [1, 0, 0]
                    },
                    '2': {
                        'text': 'Vägrat ta ett endaste steg. Jag hade begärt vila!',
                        'score': [0, 1, 0]
                    },
                    '3': {
                        'text': 'En och annan bockning hade jag nog testat på.',
                        'score': [0, 0, 1]
                    }
                }
            },
            '4': {
                'question': 'Vilken ponnyras gillar du allra bäst?',
                // 'image': 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'choices': {
                    '1': {
                        'text': 'Dartmoorponny',
                        'score': [1, 0, 0]
                    },
                    '2': {
                        'text': 'Connemara',
                        'score': [0, 1, 0]
                    },
                    '3': {
                        'text': 'Shetlandsponny',
                        'score': [0, 0, 1]
                    }
                }
            },
            '5': {
                'question': 'Dags för hoppning. Vilken ponny hade du varit?',
                // 'image': 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'choices': {
                    '1': {
                        'text': '<img id="quiz_image" src="imgs/PF2201-14-15_Getty_fall.jpg" alt="image a">',
                        'score': [1, 0, 0]
                    },
                    '2': {
                        'text': '<img id="quiz_image" src="imgs/PF2201-14-15_Getty_jump.jpg" alt="image b">',
                        'score': [0, 1, 0]
                    },
                    '3': {
                        'text': '<img id="quiz_image" src="imgs/PF2201-14-15_Getty_run.jpg" alt="image c">',
                        'score': [0, 0, 1]
                    }
                }
            },
            '6': {
                'question': 'Vilka ponnyer i stallet tycker du oftast bäst om?',
                // 'image': 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'choices': {
                    '1': {
                        'text': 'De snälla, lugna och mysiga ponnyerna.',
                        'score': [1, 0, 0]
                    },
                    '2': {
                        'text': 'Jag älskar fart och ponnyer som alltid överraskar på ett eller annat sätt.',
                        'score': [0, 1, 0]
                    },
                    '3': {
                        'text': 'Jag gillar ponnyer som är en utmaning och jag dras ofta till de hästar som andra är lite rädd för att rida.',
                        'score': [0, 0, 1]
                    }
                }
            },
            '7': {
                'question': 'Vilken bild är mest ”du”?',
                // 'image': 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'choices': {
                    '1': {
                        'text': '<img id="quiz_image" src="imgs/PF2201-14-15_Getty_yay.jpg" alt="image a">',
                        'score': [1, 0, 0]
                    },
                    '2': {
                        'text': '<img id="quiz_image" src="imgs/PF2201-14-15_Getty_beta.jpg" alt="image b">',
                        'score': [0, 1, 0]
                    },
                    '3': {
                        'text': '<img id="quiz_image" src="imgs/PF2201-14-15_Getty_friends.jpg" alt="image c">',
                        'score': [0, 0, 1]
                    }
                }
            }
        }
    },
    'results': {
        'numberOfTypes': 3,
        'questionScore': [],
        'finalScore': [0, 0, 0],
        'types': {
            '1': {
                'name': 'FLest A - läromästarponnyn!',
                'text': 'Du är precis som ponnyerna du älskar att rida och alltså en äkta läromästare! Du har ett lugnt temperament och ställer sällan till bus. Du t ycker det är mycket roligare att bli utsatt för et t riktigt bra bus, än at t skoja med andra.',
                'href': 'types/der_umsatzorientierte.html'
            },
            '2': {
                'name': 'Flest B - en mixponny!',
                'text': 'Du är en riktig luring! Dig vet man liksom inte riktigt var man har. Ena dagen är du hur chill som helst för att dagen efter vakna upp på värsta bästa bushumöret. Du är med andra ord en härlig mix av läromästarponnyn och den busiga shettisen.',
                'href': 'types/der_kundenorientierte.html'
            },
            '3': {
                'name': 'Flest C – busiga shettisen!',
                'text': 'Du är ett riktigt busfrö precis som shettisar ofta kan vara. Hade du varit en ponny hade du garanterat smitit från hagen typ dagligen, brutit dig in i foderkammaren och haft en tradition att bocka åtminstone en gång under ridturen!',
                'href': 'types/der_online-verkaeufer.html'
            }
        }

    }
};

function QUIZElement(id) {
	return document.getElementById(id);
}

function QUIZDoSomething(question, choice) {
	if(QUIZElement('quiz_next').disabled) {
		QUIZElement('quiz_next').disabled = false;
	}

	__QUIZ.results.questionScore = __QUIZ.questionnaire.questions[question].choices[choice].score;
}

function QUIZNext() {
	if(__QUIZ.questionnaire.currentQuestion === __QUIZ.questionnaire.numberOfQuestions) {
		var characterType = __QUIZ.results.finalScore.indexOf(Math.max(...__QUIZ.results.finalScore)) + 1;
		//window.location.href = __QUIZ.results.types[characterType].href + __QUIZ.campaign;
		var resultHTML = '<h3>' + __QUIZ.results.types[characterType].name + '</h3>' + '<p>' + __QUIZ.results.types[characterType].text + '</p>';
		QUIZElement('quiz_result').innerHTML = resultHTML;
	}
	else {
		for(var i = 0; i < __QUIZ.results.questionScore.length; i++) {
			__QUIZ.results.finalScore[i] += __QUIZ.results.questionScore[i];
		}
		__QUIZ.questionnaire.currentQuestion += 1;
		QUIZShowChoices();
		QUIZElement('quiz_next').disabled = true;
	}
}

function QUIZShowChoices() {
	var question = __QUIZ.questionnaire.currentQuestion;
	var choices = '';
	var choice = 1;

	if(question != 0) {
		QUIZElement('quiz_text').innerText = '';
		// QUIZElement('quiz_image').src = __QUIZ.questionnaire.questions[question].image;
		QUIZElement('quiz_question').innerText = __QUIZ.questionnaire.questions[question].question;
		QUIZElement('quiz_progress').innerText = 'Vraag ' + __QUIZ.questionnaire.currentQuestion + ' van ' + __QUIZ.questionnaire.numberOfQuestions;

		do {
			choices += '<li><label><input type="radio" name="block" onclick="QUIZDoSomething(' + question + ', ' + choice + ')"><span>' + __QUIZ.questionnaire.questions[question].choices[choice].text + '</span></label></li>';
			choice++;
		} while(typeof __QUIZ.questionnaire.questions[question].choices[choice] != 'undefined')

			QUIZElement('quiz_choices').innerHTML = choices;

		if(question < __QUIZ.questionnaire.numberOfQuestions) {
			QUIZElement('quiz_next').innerText = 'Nasta';
		}
		else {
			QUIZElement('quiz_next').innerText = 'Skicka in';
		}
	}
	else {
		// QUIZElement('quiz_image').src = __QUIZ.intro.image;
		QUIZElement('quiz_question').innerText = __QUIZ.intro.title;
		QUIZElement('quiz_text').innerText = __QUIZ.intro.text;
		QUIZElement('quiz_next').innerText = 'Start!';
	}
}

QUIZShowChoices();


