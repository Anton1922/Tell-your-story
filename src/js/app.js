'use strict';

const form = document.querySelector('.mailpoet_form');
const inputName = form.querySelector('input[type="text"].mailpoet_text');
const inputEmail = form.querySelector('input[type="email"].mailpoet_text');
//const buttonContainer = form.querySelector('.mailpoet_paragraph.last');

inputName.placeholder = 'Введите имя';
inputEmail.placeholder = 'Электронная почта';

//buttonContainer.insertAdjacentHTML = ('beforeend', '<div class="join-subscribe__privacy-policy">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a href="https://less-homeless.com//wp-content/uploads/2020/02/Политика-конфиденциальности.docx" class="join-subscribe__privacy-policy-link" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a></div>');