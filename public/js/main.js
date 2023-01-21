let myFirstInput = document.getElementsByTagName('input')[0];
console.log(myFirstInput);

function firstInp() {
    myFirstInput.style.backgroundColor="blue";
}

myFirstInput.addEventListener("focus",firstInp);

///////////////////////////////////


let myDosInput = document.getElementsByTagName('input')[1];
console.log(myDosInput);

function dosInp() {
    myDosInput.style.backgroundColor="blue";
}
myDosInput.addEventListener("focus",dosInp);


function dosInp2() {
    myDosInput.style.backgroundColor="white";
}
myDosInput.addEventListener("focusout",dosInp2)

/////////////////////////////////////////

let para1 = document.getElementsByClassName('premierParagraphe')[0];
console.log(para1);
let para2 = document.getElementsByClassName('secondParagraphe')[0];
console.log(para2);
let para3 = document.getElementsByClassName('dernierParagraphe')[0];
console.log(para3);
let btn1 = document.getElementsByClassName('buttonExo')[0];
console.log(btn1);

btn1.addEventListener('click', function() {
    para1.innerText= para2.innerText
    para3.innerText= para2.innerText
})

//////////////////////////////////////////

let nico = document.getElementById('exo4');
console.log(nico);
let inp3 = document.getElementsByTagName('input')[2];
console.log(inp3);
let btn2 = document.getElementsByTagName('button')[1];
console.log(btn2);

btn2.addEventListener('click',function() {
    nico.innerHTML = inp3.value
})

///////////////////////////////////////////

let btn3 =  document.getElementsByTagName('button')[2];
console.log(btn3);
let img1 = document.getElementsByTagName('img')[0];
console.log(img1);

btn3.addEventListener('click', function() {
    img1.src="./src/image/tartine.png"
})

//////////////////////////////////////////

let img2 = document.getElementsByTagName('img')[1];
console.log(img2);

let img3 = document.getElementsByTagName('img')[2];
console.log(img3);

let spath;

img2.addEventListener('click', function() {
        spath = img2.src
})


img3.addEventListener('click', function() {
    img3.src = spath

})

////////////////////////////////////////

let para1exo7 = document.getElementsByTagName('p')[5];
let para2exo7 = document.getElementsByTagName('p')[6];
let btn4 =  document.getElementsByTagName('button')[3];
let temp;

btn4.addEventListener('click', function() {
    let temp =  para1exo7.textContent
    para1exo7.textContent = para2exo7.textContent
    para2exo7.textContent = temp

})

