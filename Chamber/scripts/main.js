// //local storage
// localStorage.setItem('msg1', 'Hello Permanant');
// sessionStorage.setItem('msg2','hello again');

// console.log(localStorage.getItem('msg1'));



let visit_heading = document.querySelector('.visited');

let now_date = new Date();


let stored_date = localStorage.getItem('last_visited');

let last_date = new Date(stored_date);

if(!stored_date){
    visit_heading.textContent = "Welcome";
}
else{
    let diff_time = now_date.getTime() - last_date.getTime();

    let diff_day = Math.round(diff_time/(1000 * 60 * 60 * 24));

    visit_heading.textContent = diff_day + ' days since your last visit';
}

// // Hamburger menu
// localStorage.setItem('last_visited', now_date);

// let button1 = document.querySelector('.btn');


// function show() {
// button1.classList.toggle('newstyle');
// }

// button1.addEventListener('click', show);


// Todays Date

let tdate = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(tdate);
document.querySelector('#date-today').textContent = fullDate;




