function finish() {
    var progress = document.getElementsByClassName('progress')
    for (let i=0;i<progress.length;i++) {
        if (!progress[i].classList.contains('finish')) progress[i].classList.add('finish')
    }
    animateValue(0, 100, 3000)
}

function animateValue(start, end, duration) {
    if (start === end) return;
    var range = start - end;
    var current = start;
    var decreasement = end > start ? -1 : 1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var progress = document.getElementsByClassName('progress')
    var timer = setInterval(function() {
        current -= decreasement;
        for (let i=0;i<progress.length;i++) {
            progress[i].firstElementChild.firstElementChild.innerHTML = current;
        }
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}