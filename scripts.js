// Language Switcher Logic
const langButtons = document.querySelectorAll('.language-switch button');
const translatableElements = document.querySelectorAll('[data-en][data-gr]');

langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.id.split('-')[0]; // 'en' or 'gr'

    translatableElements.forEach(element => {
      element.textContent = element.getAttribute(`data-${lang}`);
    });
  });
});
