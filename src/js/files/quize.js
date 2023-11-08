



	//QUIZ START
	let quiz_form = document.querySelector('.quiz_form');
	if (quiz_form) {
		let PrevBtn = quiz_form.querySelector('.btnPrev');
		let nextBtn = quiz_form.querySelector('.btnNext');
		let quizAll = quiz_form.querySelectorAll('.quiz_block');
		let currentQ = quiz_form.querySelector('.currentQ');
		let progressQ = quiz_form.querySelector('.progress');

		//мои блоки
		let navQuize = quiz_form.querySelector('.quize__block-inner');
		let btnSend = quiz_form.querySelector('.popup-content__btn');
		let labelQ = document.querySelector('.quize__block-box');
		let radios = document.querySelectorAll('input[type="radio"]');

		let progress = 0;
		let count = 0;
		let progressPercent = 100 / (quizAll.length - 1);

		
		initProgress();
		removeBtn();

		quiz_form.querySelector('.allQ').textContent = `${quizAll.length - 1}`;

		nextBtn.addEventListener('click', function () {
			currentQ.textContent++;
			count++
			progress += Number(progressPercent.toFixed(3));

			initQuiz();
			initProgress();
			removeBtn();
		})


		PrevBtn.addEventListener('click', function () {
			count--
			currentQ.textContent--;
			progress -= Number(progressPercent.toFixed(3));

			initQuiz();
			initProgress();
			removeBtn();
		})

		function initQuiz() {
			quizAll.forEach((element, i) => {
				element.classList.remove('active')
				if (i === count) {
					element.classList.add('active')

				}
			})
		}

		function initProgress() {
			progressQ.style.width = `${progress}%`;
		}

		function removeBtn() {
			if (count === 0) {
				PrevBtn.style.display = 'flex'
				PrevBtn.style.opacity = '0.5'
				PrevBtn.disabled = true
				PrevBtn.style.cursor = 'default'
				
			} else if (count !== 0) {
				PrevBtn.style.display = 'flex'
				PrevBtn.style.backgroundColor = '#F5F7FA'
				PrevBtn.style.opacity = '1'
				PrevBtn.disabled = false
				PrevBtn.style.cursor = 'pointer'
			}
			if (count === quizAll.length - 1) {
				nextBtn.style.opacity = '0.5'
				nextBtn.disabled = true
				nextBtn.style.cursor = 'default'
				labelQ.style.display = 'none'
			} else if (count !== quizAll.length) {
				nextBtn.style.display = 'flex'
				nextBtn.disabled = false
				nextBtn.style.opacity = '1'
				nextBtn.style.cursor = 'pointer'
				labelQ.style.display = 'block'
			}
		}

		function sendMessage() {

			btnSend.addEventListener('click', ()=> {

				quizAll.forEach((element, i) => {
					element.classList.remove('active');
					if (i === count - 1) {
						element.classList.add('active');
						navQuize.style.display = 'flex';
						count = 0;
						currentQ.textContent = '1';

						removeBtn();

					}
				});

			});
			
		}

		function handleFormSubmit(event) {
			// Просим форму не отправлять данные самостоятельно
			event.preventDefault();
			// serializeForm(applicantForm)
			// console.log('Отправка!');
			initQuiz();
			// sendMessage();

		}
		
		const applicantForm = document.getElementById('form-quiz');

		applicantForm.addEventListener('submit', handleFormSubmit);



	}

	// QUIZ THE END



