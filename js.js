// Encryption Range
const encryptionRange = document.getElementById('encryptionRange');
const encryptionValue = document.getElementById('encryptionValue');

encryptionRange.addEventListener('input', function() {
    encryptionValue.textContent = this.value + '-bit';
});

// Form validation
(function () {
    'use strict'

    // Получаем все формы для применения пользовательской валидации Bootstrap
    var forms = document.querySelectorAll('.needs-validation')

    // Проходим по ним и предотвращаем отправку
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();
