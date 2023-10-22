const div = [...document.querySelectorAll("#title")];
function t (e){
    setTimeout(5000);
    e.classList.toggle('activate');
}
div.map(elem =>{
    elem.addEventListener('click', e =>{
        r = elem.parentNode;
        console.log(r);
        t(r);
        a = r.querySelector('#arrow');
        a.classList.toggle('Aarrow');
    })
})
