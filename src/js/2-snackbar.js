import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.currentTarget.elements.delay.value);
  const state = event.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delayValue => {
      iziToast.success({
        title: '✅',
        message: `Fulfilled promise in ${delayValue}ms`,
        position: 'topRight',
        icon: '',
      });
    })
    .catch(delayValue => {
      iziToast.error({
        title: '❌',
        message: `Rejected promise in ${delayValue}ms`,
        position: 'topRight',
        icon: '',
      });
    });

  event.currentTarget.reset();
});
