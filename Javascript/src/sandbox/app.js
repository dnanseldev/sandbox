var booklist = document.getElementsByClassName('name');

/*
Array.from(booklist).forEach(el => {

    console.log(el.innerText);
});
*/

var booklistAprim = document.querySelectorAll('#book-list .name');

booklistAprim.forEach(el => {
    console.log(el.innerText);
});
