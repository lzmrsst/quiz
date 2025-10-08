document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "¿Qué es la espasticidad?",
            questionImage: "https://via.placeholder.com/300x150.png?text=Neurona+Motora",
            answers: [
                { text: "Disminución del tono muscular que causa debilidad.", image: "https://via.placeholder.com/100x80.png?text=Músculo+Flácido", correct: false },
                { text: "Aumento excesivo del tono muscular con rigidez.", image: "https://via.placeholder.com/100x80.png?text=Músculo+Rígido", correct: true },
                { text: "Movimientos involuntarios, rítmicos y oscilatorios.", image: "https://via.placeholder.com/100x80.png?text=Temblor", correct: false },
                { text: "Falta de coordinación en los movimientos voluntarios.", image: "https://via.placeholder.com/100x80.png?text=Ataxia", correct: false }
            ],
            feedback: "Respuesta incorrecta. La espasticidad se caracteriza por un **aumento** del tono muscular (hipertonía), lo que provoca rigidez. La disminución del tono se conoce como flacidez o hipotonía. ¡Inténtalo de nuevo!"
        },
        {
            question: "¿Cuál de las siguientes es una causa común de espasticidad en niños?",
            questionImage: "https://via.placeholder.com/300x150.png?text=Cerebro+Infantil",
            answers: [
                { text: "Una dieta baja en carbohidratos.", image: "https://via.placeholder.com/100x80.png?text=Comida", correct: false },
                { text: "Falta de oxígeno al nacer (asfixia perinatal).", image: "https://via.placeholder.com/100x80.png?text=Bebé+Neonato", correct: true },
                { text: "Exceso de estimulación sensorial.", image: "https://via.placeholder.com/100x80.png?text=Luces+y+Sonidos", correct: false },
                { text: "Infecciones virales como el resfriado.", image: "https://via.placeholder.com/100x80.png?text=Virus", correct: false }
            ],
            feedback: "No es la causa más común. La espasticidad a menudo resulta de un daño en las áreas del cerebro que controlan el movimiento. Piensa en qué evento crítico durante el nacimiento podría causar tal daño."
        },
        {
            question: "La flacidez o hipotonía se caracteriza principalmente por:",
            questionImage: "https://via.placeholder.com/300x150.png?text=Tono+Muscular",
            answers: [
                { text: "Contracciones musculares sostenidas.", image: "https://via.placeholder.com/100x80.png?text=Distonía", correct: false },
                { text: "Movimientos rápidos y bruscos.", image: "https://via.placeholder.com/100x80.png?text=Corea", correct: false },
                { text: "Músculos blandos, débiles y con poca resistencia.", image: "https://via.placeholder.com/100x80.png?text=Hipotonía", correct: true },
                { text: "Rigidez muscular que dificulta el movimiento.", image: "https://via.placeholder.com/100x80.png?text=Espasticidad", correct: false }
            ],
            feedback: "Esa descripción no corresponde a la flacidez. El prefijo 'hipo' significa 'bajo'. La hipotonía es, por lo tanto, un tono muscular bajo, lo que resulta en debilidad. Vuelve a leer las opciones."
        },
        {
            question: "¿Cuál es una intervención adecuada para niños con flacidez?",
            questionImage: "https://via.placeholder.com/300x150.png?text=Terapia+Física",
            answers: [
                { text: "Técnicas de relajación para disminuir el tono.", image: "https://via.placeholder.com/100x80.png?text=Relajación", correct: false },
                { text: "Ejercicios de resistencia y control postural.", image: "https://via.placeholder.com/100x80.png?text=Fortalecimiento", correct: true },
                { text: "Inmovilización de las articulaciones.", image: "https://via.placeholder.com/100x80.png?text=Férula", correct: false },
                { text: "Medicamentos que bloquean señales nerviosas.", image: "https://via.placeholder.com/100x80.png?text=Medicina", correct: false }
            ],
            feedback: "Esta intervención no es la ideal. Si los músculos están débiles (hipotónicos), el objetivo principal es **fortalecerlos** y mejorar el control sobre ellos, no relajarlos o inmovilizarlos. Busca la opción que se enfoque en activar la musculatura."
        },
        {
            question: "La ataxia afecta principalmente:",
            questionImage: "https://via.placeholder.com/300x150.png?text=Cerebelo",
            answers: [
                { text: "La fuerza para levantar objetos.", image: "https://via.placeholder.com/100x80.png?text=Fuerza", correct: false },
                { text: "La coordinación de los movimientos voluntarios.", image: "https://via.placeholder.com/100x80.png?text=Coordinación", correct: true },
                { text: "El tono muscular en reposo.", image: "https://via.placeholder.com/100x80.png?text=Tono", correct: false },
                { text: "La velocidad de los reflejos.", image: "https://via.placeholder.com/100x80.png?text=Reflejo", correct: false }
            ],
            feedback: "Incorrecto. La ataxia no es un problema de fuerza, sino de 'torpeza' y falta de precisión. Afecta la capacidad del cerebro para organizar y ejecutar movimientos de manera fluida y controlada. Intenta de nuevo."
        },
        {
            question: "¿Cuál de las siguientes afirmaciones describe mejor la distonía?",
            questionImage: "https://via.placeholder.com/300x150.png?text=Postura+Anormal",
            answers: [
                { text: "Pérdida completa de la sensibilidad.", image: "https://via.placeholder.com/100x80.png?text=Anestesia", correct: false },
                { text: "Movimientos retorcidos y contracciones prolongadas.", image: "https://via.placeholder.com/100x80.png?text=Torsión", correct: true },
                { text: "Movimientos rítmicos y oscilatorios en reposo.", image: "https://via.placeholder.com/100x80.png?text=Temblor+en+Reposo", correct: false },
                { text: "Sensación de hormigueo constante.", image: "https://via.placeholder.com/100x80.png?text=Parestesia", correct: false }
            ],
            feedback: "Esa no es la mejor descripción. La característica principal de la distonía son las **posturas anormales** y movimientos de torsión provocados por contracciones musculares sostenidas e involuntarias. Busca la opción que refleje esto."
        },
        {
            question: "Los movimientos bruscos, rápidos e involuntarios que parecen “bailarines” son característicos de:",
            questionImage: "https://via.placeholder.com/300x150.png?text=Movimiento+Fluido",
            answers: [
                { text: "Coreas.", image: "https://via.placeholder.com/100x80.png?text=Danza", correct: true },
                { text: "Ataxia.", image: "https://via.placeholder.com/100x80.png?text=Torpeza", correct: false },
                { text: "Espasticidad.", image: "https://via.placeholder.com/100x80.png?text=Rigidez", correct: false },
                { text: "Temblores.", image: "https://via.placeholder.com/100x80.png?text=Oscilación", correct: false }
            ],
            feedback: "Respuesta incorrecta. La clave es la palabra 'bailarines'. De hecho, el término 'corea' deriva de la palabra griega para 'danza', describiendo movimientos fluidos, impredecibles y no rítmicos."
        },
        {
            question: "¿Qué tipo de intervención es útil para tratar los temblores?",
            questionImage: "https://via.placeholder.com/300x150.png?text=Control+Motor+Fino",
            answers: [
                { text: "Ejercicios de precisión y técnicas de relajación.", image: "https://via.placeholder.com/100x80.png?text=Precisión", correct: true },
                { text: "Estimulación eléctrica de alta frecuencia.", image: "https://via.placeholder.com/100x80.png?text=Estimulación", correct: false },
                { text: "Inmovilización completa de la extremidad.", image: "https://via.placeholder.com/100x80.png?text=Inmovilización", correct: false },
                { text: "Cirugía para cortar conexiones nerviosas.", image: "https://via.placeholder.com/100x80.png?text=Cirugía", correct: false }
            ],
            feedback: "Esa no es la estrategia más funcional. Para los temblores, el objetivo es mejorar el control fino del movimiento y reducir la amplitud de la oscilación. Piensa en qué actividades ayudarían a calmar el sistema nervioso y a refinar el control motor."
        },
        {
            question: "La disquinesia se define como:",
            questionImage: "https://via.placeholder.com/300x150.png?text=Movimientos+Anormales",
            answers: [
                { text: "La ausencia total de movimiento (parálisis).", image: "https://via.placeholder.com/100x80.png?text=Parálisis", correct: false },
                { text: "Conjunto de movimientos anormales e involuntarios.", image: "https://via.placeholder.com/100x80.png?text=Espasmos", correct: true },
                { text: "Dolor muscular crónico sin lesión.", image: "https://via.placeholder.com/100x80.png?text=Dolor", correct: false },
                { text: "Lentitud extrema para iniciar movimientos.", image: "https://via.placeholder.com/100x80.png?text=Bradicinesia", correct: false }
            ],
            feedback: "Incorrecto. Analiza la palabra: 'dis' significa anormal o difícil, y 'quinesia' se refiere al movimiento. Por lo tanto, disquinesia es un término general para los **movimientos anormales**. Busca la definición más amplia."
        },
        {
            question: "Una causa común de distonía es:",
            questionImage: "https://via.placeholder.com/300x150.png?text=Corteza+Motora",
            answers: [
                { text: "Una lesión directa en las fibras musculares.", image: "https://via.placeholder.com/100x80.png?text=Músculo+Lesionado", correct: false },
                { text: "Disfunción en los ganglios basales.", image: "https://via.placeholder.com/100x80.png?text=Ganglios+Basales", correct: true },
                { text: "Una hernia discal en la columna cervical.", image: "https://via.placeholder.com/100x80.png?text=Columna+Vertebral", correct: false },
                { text: "Deficiencias nutricionales de vitamina C o D.", image: "https://via.placeholder.com/100x80.png?text=Vitaminas", correct: false }
            ],
            feedback: "Esa no es la causa principal. La distonía es un trastorno del control del movimiento que se origina en el cerebro, específicamente en las estructuras profundas encargadas de regular los comandos motores. ¿Cuál de las opciones se refiere a esta área del cerebro?"
        }
    ];

    let currentQuestionIndex = 0;
    let answeredIncorrectly = [];

    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const endScreen = document.getElementById('end-screen');
    
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const retryButton = document.getElementById('retry-button');

    const questionCounter = document.getElementById('question-counter');
    const questionText = document.getElementById('question-text');
    const questionImage = document.getElementById('question-image');
    const answersArea = document.getElementById('answers-area');

    const feedbackModal = document.getElementById('feedback-modal');
    const feedbackText = document.getElementById('feedback-text');

    startButton.addEventListener('click', startQuiz);
    restartButton.addEventListener('click', startQuiz);
    retryButton.addEventListener('click', () => feedbackModal.style.display = 'none');

    function startQuiz() {
        currentQuestionIndex = 0;
        answeredIncorrectly = [];
        showScreen('quiz-screen');
        displayQuestion();
    }

    function displayQuestion() {
        answersArea.innerHTML = '';
        const currentQuestion = quizData[currentQuestionIndex];

        questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${quizData.length}`;
        questionText.textContent = currentQuestion.question;
        questionImage.src = currentQuestion.questionImage;

        currentQuestion.answers.forEach(answer => {
            const answerCard = document.createElement('div');
            answerCard.classList.add('answer-card');
            
            const answerImg = document.createElement('img');
            answerImg.src = answer.image;
            answerImg.alt = `Ilustración para ${answer.text}`;
            
            const answerP = document.createElement('p');
            answerP.textContent = answer.text;
            
            answerCard.appendChild(answerImg);
            answerCard.appendChild(answerP);
            
            answerCard.addEventListener('click', (e) => selectAnswer(e.currentTarget, answer.correct));
            answersArea.appendChild(answerCard);
        });
    }

    function selectAnswer(element, isCorrect) {
        // Evitar doble clic
        if (answeredIncorrectly.includes(element)) return;

        if (isCorrect) {
            element.classList.add('correct');
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < quizData.length) {
                    displayQuestion();
                } else {
                    showScreen('end-screen');
                }
            }, 1500);
        } else {
            element.classList.add('incorrect');
            answeredIncorrectly.push(element);
            feedbackText.innerHTML = quizData[currentQuestionIndex].feedback;
            feedbackModal.style.display = 'flex';
        }
    }

    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

});
