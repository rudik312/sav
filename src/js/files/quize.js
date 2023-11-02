// import { flsModules } from "./modules.js";



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
		// console.log(progressPercent)
		
		initProgress();
		removeBtn();

		quiz_form.querySelector('.allQ').textContent = `${quizAll.length - 1}`;

		nextBtn.addEventListener('click', function () {
			currentQ.textContent++;
			count++
			progress += Number(progressPercent.toFixed(3));
			// console.log(progress)
			initQuiz();
			initProgress();
			removeBtn();
		})


		PrevBtn.addEventListener('click', function () {
			count--
			currentQ.textContent--;
			progress -= Number(progressPercent.toFixed(3));
			console.log(progress)
			initQuiz();
			initProgress();
			removeBtn();
		})

		function initQuiz() {
			quizAll.forEach((element, i) => {
				element.classList.remove('active')
				if (i === count) {
					element.classList.add('active')
					// console.log(count);
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
				navQuize.style.justifyContent ='flex-end'
				navQuize.style.paddingTop ='20px'
				// quiz_form.style.rowGap = '0'
			} else if (count !== quizAll.length) {
				nextBtn.style.display = 'flex'
				nextBtn.disabled = false
				nextBtn.style.opacity = '1'
				nextBtn.style.cursor = 'pointer'
				console.log(count);
				labelQ.style.display = 'block'
				navQuize.style.justifyContent = 'space-between'
				navQuize.style.paddingTop ='0'
				// quiz_form.style.rowGap = '160px'
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
						// console.log(count); // вывод 3
						removeBtn();
						// initQuiz();
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



		// function checkValidity(event) {
		// 	const formNode = event.target.form
		// 	const isValid = formNode.checkValidity()
		
		// 	formNode.querySelector('.popup-content__btn').disabled = !isValid
		// }
		
		// applicantForm.addEventListener('.quize__block-input', checkValidity)
		


		// function serializeForm(formNode) {
		// 	const { elements } = formNode
	
		// 	const data = new FormData()
		
		// 	Array.from(elements)
		// 		.filter((item) => !!item.name)
		// 		.forEach((element) => {
		// 			const { name, type } = element
		// 			const value = type === 'radio' ? element.checked : element.value
		// 			// console.log({ name, value })
		// 			data.append(name, value)
		// 		})
				

		// 		console.log(Array.from(data.entries()))

		// 	return data
		// }



		// end if (quiz_form)
	}

	// QUIZ THE END


	// for (let radio of radios) {
	// 	if (radio.checked) {
	// 		console.log(radio.value);
	// 	}
	// }

	// for (let i = 0; i < inputs.length; i++) {
	// 	const item = inputs[i];
	// 	if (item.classList.contains('_form-error')) {
	// 		console.log(item);
	// 	}
	// }

