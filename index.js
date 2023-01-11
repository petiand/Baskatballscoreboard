
let scoreH = document.getElementById("homeScore");
let countH = 0;

function addHome1() {
    countH +=1
    scoreH.textContent = countH;
}

function addHome2() {
    countH +=2
    scoreH.textContent = countH;
}

function addHome3() {
    countH +=3
    scoreH.textContent = countH;
}

let scoreG = document.getElementById("scoreGuest");
let countG = 0;

function addGuest1() {
    countG +=1
    scoreG.textContent = countG;
}

function addGuest2() {
    countG +=2
    scoreG.textContent = countG;
}

function addGuest3() {
    countG +=3
    scoreG.textContent = countG;
}

let m = document.getElementById("min");
let s = document.getElementById("sec");
let mcount = 0, scount = 0;
let p = document.getElementById("pause")
halfCheck = false;

function pauseCheck() { 
 p = true
}
function start() {
    const timer = setInterval(add, 1000)
    
	function add () {
            if (mcount === 40 || p === true) {
                clearInterval(timer)
                p = false
                console.log(p)
            } else {
                    if (scount === 60) {
                        mcount += 1;
                        scount = 0;
                        m.innerText = mcount;
                        s.innerText = scount;
                    } else {
                        scount +=1;
                        s.innerText = scount;
                    }
            }
        }
}