const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

// Form event listener
form.addEventListener('submit', e => {
    e.preventDefault();
    // setting the score to 0 to begin with
    let score = 0;
    // cycle through the answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // Check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        } 
    });
    // console.log(score);

    // Show results on page

    scrollTo(0,0);

    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    // Animating the score
    let output = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);


});

// Setting and stopping an interval

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i === 5){
//         clearInterval(timer);
//     }
// }, 1000);

