'use strict';
/***Create drag-and-drop element in form 'share story'***/

var drpopZone = document.querySelector('.story-connect__form');
console.log('drpopZone', drpopZone);
var containerButtons = document.querySelector('.story-connect__container-buttons');
console.log('containerButtons', containerButtons);
var form = document.querySelector('#story-form');
console.log('form', form);
var containerOpacity = 1;
var formOpacity = 0;

function removeContainer() {
  if (containerOpacity < 0) {
    containerButtons.style.display = 'none';
    return showForm();
  } else {
    containerButtons.style.opacity = containerOpacity;
    containerOpacity -= 0.1;
    setTimeout(removeContainer, 60);
  }
}

function showForm() {
  form.style.display = 'flex';

  if (formOpacity > 1) {
    return;
  } else {
    form.style.opacity = formOpacity;
    formOpacity += 0.1;
    setTimeout(showForm, 60);
  }
}

containerButtons.addEventListener('click', function (e) {
  e.preventDefault();
  form.style.opacity = 0;
  var target = e.target;

  if (target.classList.contains('story-connect__button')) {
    removeContainer();
  }
});
//# sourceMappingURL=index.js.map
