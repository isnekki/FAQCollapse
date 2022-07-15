const FAQs = [
    {
        question: 'What is 1+1?',
        answer: '2'
    },
    {
        question: 'What is the capital city of the Philippines?',
        answer: 'Manila'
    },
    {
        question: 'How many months are in a year?',
        answer: '12'
    },
    {
        question: 'When does a leap year occur?',
        answer: 'Every 4 years.'
    },
    {
        question: 'What tech stack was used for this project?',
        answer: 'HTML, CSS, and Javascript!'
    }
]

const faqContainer = document.querySelector('.faqContainer')

const toggleFAQ = (e) => {
    e.preventDefault()
    e.target.parentElement.parentElement.classList.toggle('closed') 
    e.target.classList.toggle('close')
}

FAQs.forEach(FAQ => {
    const faqDiv = document.createElement('div')
    faqDiv.classList.add('faqDiv', 'closed')

    const faqQuestionDiv = document.createElement('div')
    faqQuestionDiv.classList.add('faqQuestionDiv')

    const faqQuestion = document.createElement('p')
    faqQuestionDiv.classList.add('faqQuestion')
    faqQuestion.textContent = FAQ.question

    const faqExpandButton = document.createElement('button')
    faqExpandButton.classList.add('faqExpandButton')
    faqExpandButton.addEventListener('click', toggleFAQ)

    const faqAnswer = document.createElement('p')
    faqAnswer.classList.add('faqAnswer')
    faqAnswer.textContent = FAQ.answer

    faqQuestionDiv.appendChild(faqQuestion)
    faqQuestionDiv.appendChild(faqExpandButton)

    faqDiv.appendChild(faqQuestionDiv)
    faqDiv.appendChild(faqAnswer)

    faqContainer.appendChild(faqDiv)
})