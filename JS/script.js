setTimeout(() => {
    document.body.classList.remove("preload");
}, 500);

const btnRules = document.querySelector('.rules_btn');
const btnClose = document.querySelector('.close_btn');
const modalRules = document.querySelector('modal');


btnRules.addEventListener('click', ()=> {
    modalRules.classList.toggle('show_modal')
})

btnClose.addEventListener('click', ()=> {
    modalRules.classList.toggle('show_modal')
})