// Получаем кнопку и поля ввода
const formButton = document.querySelector('.form-button');
const formInputs = document.querySelectorAll('.form-input');

// Функция для валидации формы
function validateForm(event) {
    // Предотвращаем отправку формы по умолчанию
    event.preventDefault();

    // Переменная для отслеживания заполненности формы
    let isFormValid = true;

    // Проходимся по каждому полю ввода
    for (let i = 0; i < formInputs.length; i++) {
        const input = formInputs[i];

        // Проверяем, заполнено ли поле
        if (input.value.trim() === '') {
            // Если поле не заполнено, устанавливаем флаг isFormValid в false
            isFormValid = false;
            break; // Прерываем цикл, так как форма уже недействительна
        }
    }

    // Если форма недействительна, выводим сообщение
    if (!isFormValid) {
        alert('Пожалуйста, заполните все поля');
    } else {
        // Если форма действительна, можно выполнить другие действия, например, отправку формы
        // form.submit();
    }
}

// Назначаем обработчик события клика на кнопку формы
formButton.addEventListener('click', validateForm);