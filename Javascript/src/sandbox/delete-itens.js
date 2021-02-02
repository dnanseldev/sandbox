let pl = document.querySelectorAll('#people-list .btn-delete');

pl.forEach(btn=>{

    btn.addEventListener('click', e=>{
       // console.log(btn.parentElement.parentElement);
        const li = btn.parentElement;
        li.parentElement.removeChild(li);
        console.log('Success');
    });
});