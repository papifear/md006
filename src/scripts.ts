import $ from 'jquery';
import sum from './utils/sum/sum';

const buttons = document.querySelectorAll('button');
const squares = document.querySelectorAll<HTMLElement>('div.square');
const inputBox = document.querySelector("input")
const textBox = document.querySelector("p.input-text")

buttons[0].addEventListener('click', button1)
squares[0].addEventListener('mouseover', square1MouseOn)
buttons[1].addEventListener('click', button2)
buttons[2].addEventListener('click', button3)
buttons[3].addEventListener('click', button4)
buttons[4].addEventListener('click', button5)
squares[4].addEventListener('mouseover', square5MouseOn)
squares[4].addEventListener('mouseout', square5MouseOut)
buttons[5].addEventListener('click', button6)
buttons[6].addEventListener('click', button7)
inputBox.addEventListener('input', onInput)

function onInput() {
    textBox.innerHTML = this.value;
}

function button1(){
    squares[0].style.backgroundColor = "#E2CF22";
}

function square1MouseOn(){
    squares[0].style.backgroundColor = "red";
}

function button2(){
    squares[1].innerHTML = "FAIL";
}

function button3(){
    squares[2].style.visibility = "hidden";
}

let button4Visible: boolean = true;
function button4(){
    if (button4Visible) {
        squares[3].style.visibility = "hidden";
        button4Visible = false;
    } else {
        squares[3].style.visibility = "visible";
        button4Visible = true;
    }
}

function getRandomDifferent(arr: string[], last: string = undefined) {
    if (arr.length === 0) {
      return null;
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      let num = 0;
      do {
        num = Math.floor(Math.random() * arr.length);
      } while (arr[num] === last);
      return arr[num];
    }
}
const colors = ["#017187", "#5C0187B5", "#8711018F", "#01870EA1", "#E2CF22"];
function button5(){
    squares[4].style.backgroundColor = getRandomDifferent(colors);
}

let mousedOn: boolean = false;

function square5Timer(){
    /*while (mousedOn == true) {
        let count = 0;

        const intervalId = setInterval(() => {
            count++;
            squares[4].innerHTML = count.toString();
    
            if (count === 10) {
                clearInterval(intervalId);
            }
        }, 1000);
    }*/
}

function square5MouseOn(){
    mousedOn = true;
    square5Timer();
}

function square5MouseOut(){
    mousedOn = false;
}

function button6(){
    let count = 0;

    const intervalId = setInterval(() => {
        count++;
        squares[5].innerHTML = count.toString();

        if (count === 10) {
            clearInterval(intervalId);
        }
    }, 3000);
}

function button7(){
    squares.forEach(square => {
        square.style.backgroundColor = "#18D5E1"
    });
    document.body.style.background = "#000000";
}






