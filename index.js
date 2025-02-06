const cont = document.querySelector(".container");

const careers = ['Computer Science Student','Software Developer','Front-end Developer']

let careerindx=0;
let charidx=1;

updateText()
function updateText(){
    cont.innerHTML=`<h1>${careers[careerindx].slice(0,charidx)}</h1>`
    charidx++;
    if(charidx===careers[careerindx].length+1)
    {
        careerindx++;
        charidx=1;
    }
    if(careerindx==careers.length)
    careerindx=0;
    setTimeout(updateText, 200);
}

