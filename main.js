const parentContainer =  document.querySelector('.read-more-container2');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn2');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text2');

    currentText.classList.toggle('read-more-text--show2');

    current.textContent = current.textContent.includes('Read More') ? "Read More..." : "Female actors";

})

const parentContainer2 =  document.querySelector('.read-more-container');

parentContainer2.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read More..." : "Male actors";
})

const parentContainer3 =  document.querySelector('.read-more-container3');

parentContainer3.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn3');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text3');

    currentText.classList.toggle('read-more-text--show3');

    current.textContent = current.textContent.includes('Read More') ? "Read More..." : " Meet the team";

})

const parentContainer4 =  document.querySelector('.read-more-container4');

parentContainer4.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn4');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text4');

    currentText.classList.toggle('read-more-text--show4');

    current.textContent = current.textContent.includes('Read More') ? "Read More..." : " Child Actors";

})

const parentContainer5 =  document.querySelector('.read-more-container5');

parentContainer5.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn5');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text5');

    currentText.classList.toggle('read-more-text--show5');

    current.textContent = current.textContent.includes('Read More') ? "Read More..." : " Contact US";

})