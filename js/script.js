console.log('script started')

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
}