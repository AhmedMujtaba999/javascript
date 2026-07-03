
        let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
        document.querySelector('.js-display-calculation').innerHTML = ` ${calculation} `;

        function updateCalculation(value) {
            calculation = calculation + value;
            localStorage.setItem('calculation', JSON.stringify(calculation));
            document.querySelector('.js-display-calculation').innerHTML = ` ${calculation} `;
        }

        function calculateResult() {
            calculation = String(eval(calculation));
            localStorage.setItem('calculation', JSON.stringify(calculation));
            document.querySelector('.js-display-calculation').innerHTML = ` ${calculation} `;
        }

        function clearCalculation() {
            calculation = '';
            localStorage.removeItem('calculation');
           document.querySelector('.js-display-calculation').innerHTML = ` ${calculation} `;
        }