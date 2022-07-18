const words = ["standing", "girl", "pot", 'doubt', 'egg', 'downtown', 'jobless', 'thunder', 'elite', 'team', 'actor' ]
let slider = document.getElementById("bar");
let progress = document.getElementById("progress");
let btn = document.getElementById("button");
let witBar = parseInt(window.getComputedStyle(progress).width);
let witProgress = parseInt(window.getComputedStyle(slider).width);
let result = Math.round((witBar/witProgress)*100)


function move() {
    setInterval(addFrame, 100);
    function addFrame() {
        if (result < 100) {
            result = result + 5;
            progress.style.width = result + "%";
            progress.innerHTML = result + "%"
        }
       
    }
}

btn.addEventListener('click', function(){
    move();
})

document.getElementById("searchbar").addEventListener('input', (event) => {
    console.log(event)
    let inputwords = [];
    if (event.target.value) {
        inputwords = words.filter( word => word.includes(event.target.value));
        inputwords = inputwords.map(word => `<li>${word}</li>`)
    }
    showComplete(inputwords);
})

function showComplete(inputwords) {
    const renderhtml = !inputwords.length ? '' : inputwords.join('');
    document.querySelector('ul').innerHTML = renderhtml; 

}


