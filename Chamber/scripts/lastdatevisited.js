// For the last visit
let lastVisitDate;
const date = Date.now();
if (window.localStorage.getItem('last-visit-date'))
{
    lastVisitDate = window.localStorage.getItem('last-visit-date');
} else {
    lastVisitDate = date;
}

const secondSinceLastVisit = Math.floor((date - lastVisitDate) / 1000);
console.log(1);
const daysSinceLastVisit = Math.floor((secondSinceLastVisit / 86400)); // (60*60*24) is the seconds in a day.
console.log(1);
// document.querySelector('#seconds-ago').textContent = secondSinceLastVisit;
console.log(document.querySelector('#days-ago'));
document.querySelector('#days-ago').textContent = daysSinceLastVisit;
window.localStorage.setItem('last-visit-date', date);
console.log(secondSinceLastVisit);