const mode = document.querySelector('.mode');

mode.addEventListener('click', (e) => {
    if (!mode.classList.contains('day')) {
        mode.classList.add('day');
        document.documentElement.style.setProperty('--calc', '#d1c8c8');
        document.documentElement.style.setProperty('--buttons', '#e6e5e5');
        document.documentElement.style.setProperty('--divs', '#e2e2e2');
        document.documentElement.style.setProperty('--colour', '#646464');
        document.documentElement.style.setProperty('--font', '#1f1f20');
        document.documentElement.style.setProperty('--cleaner', '#d8abab');

    }
    else if (mode.classList.contains('day')) {
        mode.classList.remove('day');
        document.documentElement.style.setProperty('--calc', '#100f11');
        document.documentElement.style.setProperty('--buttons', '#1f1f20');
        document.documentElement.style.setProperty('--divs', '#1d1d1f');
        document.documentElement.style.setProperty('--colour', '#fdfdfc');
        document.documentElement.style.setProperty('--font', '#d1c8c8');
        document.documentElement.style.setProperty('--cleaner', '#1d1c1c');

    }
});


const calc = document.querySelector(".calc");
const calculation = calc.querySelector(".calculation");
const answer = calc.querySelector(".answer");

const lengthModerator = () => {
    const power = 17;
    if (calculation.textContent.length > power) {
        calculation.textContent = '';
    }
}

calc.addEventListener('click', (e) => {
    //number input
    if (e.target.classList.contains('num')) {
        calculation.textContent += parseFloat(e.target.textContent);
        lengthModerator();
    }
    //operator input
    if (e.target.classList.contains('arith')) {
        // if(content.substr(content.length-2,content.length-1))                               // add regex for validation
            calculation.textContent += e.target.textContent;
        // console.log(e.target);
    }
    //clear screen
    if (e.target.classList.contains('clear')) {
        const deleter = calc.querySelector('.deleter');
        // console.log(deleter);
        deleter.classList.add('cleaner');
        setTimeout(() => {
            answer.textContent = '';
            calculation.textContent = '';
            deleter.classList.remove('cleaner');
        }, 600);
    }
    //backspace
    if(e.target.classList.contains('delete')){
        calculation.textContent= calculation.textContent.substring(0,calculation.textContent.length-1);
    }
    //answer
    if (e.target.classList.contains('eql')) {
        try {
            answer.textContent = parseFloat(eval(calculation.textContent)).toFixed(2);
            calculation.textContent=answer.textContent;
        }
        catch (e) {
            answer.textContent = 'ERROR';
            calculation.textContent = ' ';
        }
    }

})

//keypress
document.addEventListener('keydown', (e) => {
    if (e.key.match(/[0-9]/)){
        calculation.textContent += parseInt(e.key);
    }
    if (e.key === 'Enter') {
        if (calculation.textContent.length > 0) {
            try {
                answer.textContent = parseFloat(eval(calculation.textContent)).toFixed(2);
                calculation.textContent=answer.textContent;
            }
            catch (e) {
                answer.textContent = 'ERROR';
                calculation.textContent = ' ';
            }
        }
    }

   
    if(e.key=='Delete'){
        const deleter = calc.querySelector('.deleter');
        // console.log(deleter);
        deleter.classList.add('cleaner');
        setTimeout(() => {
            answer.textContent = '';
            calculation.textContent = '';
            deleter.classList.remove('cleaner');
        }, 600);
    }
    if(e.key==='Backspace')
    calculation.textContent= calculation.textContent.substring(0,calculation.textContent.length-1);
    lengthModerator();
})


