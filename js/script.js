console.log('script started')

<<<<<<< HEAD
var functionIsRunning = false;

function menuOpen() {
    document.getElementById("viewport").classList.toggle('open');
    if (!functionIsRunning) {
        functionIsRunning = true;
        console.log('function worked');
    } else if (!functionIsRunning) {
        functionIsRunning = false;
        console.log('function stoped to work');
    }
=======
function openMenu() {
    document.documentElement.classList.toggle('menu-open');
}

const works = true;

if (works) {
    console.log('function openMenu worked');
} else {
    console.log('function openMenu doesnt worked');
>>>>>>> main
}