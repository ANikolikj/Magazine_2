var __QUIZ = {
    'campaign': '?utm_source=schluetersche.de&utm_medium=charakter-quiz&utm_campaign=onlinemarketing-persönlichkeit',
	'intro' : {
		'title' : 'Welcher Onlinemarketing-Typ sind Sie?',
		'text' : 'Finden Sie heraus, was Sie antreibt und was Sie besonders macht!',
		// 'image' : 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    'questionnaire': {
        'currentQuestion': 0,
        'numberOfQuestions': 4,
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
                'question': 'Mit welcher Maßnahme wollen Sie Ihre Erfolgsbasis sichern?',
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
            }
        }
    },
    'results': {
        'numberOfTypes': 3,
        'questionScore': [],
        'finalScore': [0, 0, 0],
        'types': {
            '1': {
                'name': 'A',
                'text': 'Sie wollen den Umsatz Ihres Unternehmens steigern. Dabei setzen Sie auf Bestandskunden, aber auch auf Neukunden. Sie wollen Kontaktanlässe schaffen, um bestehenden oder potentiellen Kunden Ihr Angebot zu präsentieren.',
                'href': 'types/der_umsatzorientierte.html'
            },
            '2': {
                'name': 'B',
                'text': 'Kundenzufriedenheit ist Ihnen wichtig. Sie wollen die Interessen der Kunden genau kennen, verstehen und die Zufriedenheit messen. In ihrem Auftreten setzen Sie auf Vertrauen und Zuverlässigkeit.',
                'href': 'types/der_kundenorientierte.html'
            },
            '3': {
                'name': 'C',
                'text': 'Sie wissen, wie der Markt funktioniert. Sie wollen über Trends und Entwicklungen informiert sein und haben Ihre Konkurrenten stets im Blick. Online ist Ihre Stärke.',
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
		QUIZElement('quiz_progress').innerText = 'Frage ' + __QUIZ.questionnaire.currentQuestion + ' von ' + __QUIZ.questionnaire.numberOfQuestions;

		do {
			choices += '<li><label><input type="radio" name="block" onclick="QUIZDoSomething(' + question + ', ' + choice + ')"><span>' + __QUIZ.questionnaire.questions[question].choices[choice].text + '</span></label></li>';
			choice++;
		} while(typeof __QUIZ.questionnaire.questions[question].choices[choice] != 'undefined')

			QUIZElement('quiz_choices').innerHTML = choices;

		if(question < __QUIZ.questionnaire.numberOfQuestions) {
			QUIZElement('quiz_next').innerText = 'Weiter';
		}
		else {
			QUIZElement('quiz_next').innerText = 'Zum Ergebnis';
		}
	}
	else {
		// QUIZElement('quiz_image').src = __QUIZ.intro.image;
		QUIZElement('quiz_question').innerText = __QUIZ.intro.title;
		QUIZElement('quiz_text').innerText = __QUIZ.intro.text;
		QUIZElement('quiz_next').innerText = 'Los geht\'s!';
	}
}

QUIZShowChoices();


