// Дані для FAQ питань
const questionsData = [
    { 
        number: "01", 
        question: "Що таке StreamVibe?", 
        answer: "StreamVibe - це стрімінг-сервіс, який дозволяє вам дивитися фільми та серіали за запитом." 
    },
    { 
        number: "02", 
        question: "Скільки коштує StreamVibe?", 
        answer: "StreamVibe пропонує різні плани підписки, починаючи від $9.99 на місяць." 
    },
    { 
        number: "03", 
        question: "Який контент доступний на StreamVibe?", 
        answer: "StreamVibe пропонує велику бібліотеку фільмів, серіалів та документальних фільмів." 
    },
    { 
        number: "04", 
        question: "Як я можу дивитися StreamVibe?", 
        answer: "StreamVibe доступний на різних пристроях: смартфонах, планшетах, Smart TV та ноутбуках." 
    },
    { 
        number: "05", 
        question: "Як зареєструватися в StreamVibe?", 
        answer: "Зареєструватися в StreamVibe просто: оберіть план підписки та створіть обліковий запис." 
    },
    { 
        number: "06", 
        question: "Що таке безкоштовний пробний період?", 
        answer: "StreamVibe пропонує безкоштовний пробний період для нових користувачів." 
    },
    { 
        number: "07", 
        question: "Як зв'язатися зі службою підтримки?", 
        answer: "Ви можете зв'язатися з нашою службою підтримки через розділ 'Підтримка' на сайті." 
    },
    { 
        number: "08", 
        question: "Які способи оплати приймає StreamVibe?", 
        answer: "StreamVibe приймає кредитні картки, дебетові картки та PayPal." 
    }
];

function createQuestions() {
    const container = document.getElementById('questionsContainer');
    if (!container) return;
    
    const firstCol = document.createElement('div');
    const secondCol = document.createElement('div');
    secondCol.className = 'second-chapter';
    
    questionsData.forEach((question, index) => {
        const questionEl = document.createElement('div');
        questionEl.className = 'question-card';
        questionEl.innerHTML = `
            <div class="box-question">
                <div class="container-question">
                    <div class="box-number-question">
                        <p>${question.number}</p>
                    </div>
                    <h3>${question.question}</h3>
                </div>
                <div class="toggle-menu">
                    <img class="close-icon d-none" src="./assets/icons/close-icon.svg" alt="Закрити відповідь">
                    <img class="open-icon" src="./assets/icons/open-icon.svg" alt="Відкрити відповідь">
                </div>
            </div>
            <p class="answer regular-text d-none">${question.answer}</p>
        `;
        
        if (index < 4) {
            firstCol.appendChild(questionEl);
            if (index < 3) firstCol.appendChild(document.createElement('hr'));
        } else {
            secondCol.appendChild(questionEl);
            if (index < 7) secondCol.appendChild(document.createElement('hr'));
        }
    });
    
    container.appendChild(firstCol);
    container.appendChild(secondCol);
}

document.addEventListener('click', function(e) {
    const toggleMenu = e.target.closest('.toggle-menu');
    const boxQuestion = e.target.closest('.box-question');
    
    if (toggleMenu || boxQuestion) {
        const questionCard = (toggleMenu || boxQuestion).closest('.question-card');
        if (questionCard) {
            const closeIcon = questionCard.querySelector('.close-icon');
            const openIcon = questionCard.querySelector('.open-icon');
            const answer = questionCard.querySelector('.answer');
            
            if (closeIcon && openIcon && answer) {
                const isOpen = !answer.classList.contains('d-none');
                
                if (isOpen) {
                    answer.classList.add('d-none');
                    closeIcon.classList.add('d-none');
                    openIcon.classList.remove('d-none');
                } else {
                    answer.classList.remove('d-none');
                    closeIcon.classList.remove('d-none');
                    openIcon.classList.add('d-none');
                }
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', createQuestions);