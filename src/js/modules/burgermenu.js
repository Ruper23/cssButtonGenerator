export function burger() {
  let burgIcon = document.querySelector('.burger__icon');
  let burgMenu = document.querySelector('.nav__links');
  const bodyFixed = document.querySelector('body')
  if (burgIcon) {

    burgIcon.addEventListener("click", function (e) {
      burgMenu.classList.toggle('active');
      burgIcon.classList.toggle('active');
      bodyFixed.classList.toggle('active');

    })
  }
  burgMenu.addEventListener('click', e => {
    if (e.target) {
      burgMenu.classList.toggle('active');
      burgIcon.classList.toggle('active');
      bodyFixed.classList.toggle('active');
    }
  });

}
