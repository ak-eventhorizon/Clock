'use strict';

function createLayout(elementID, elementHeight){
    let clockElement = document.getElementById(elementID);
    clockElement.style.height = elementHeight;
    clockElement.style.width = 'fit-content';
    
    for (let i = 0; i < 8; i++) {
        let cell = document.createElement('div');

        switch (i) {
            case 0:
                cell.classList = 'cell';
                cell.id = 'hour0';
                break;
            case 1:
                cell.classList = 'cell';
                cell.id = 'hour1';
                break;
            case 2:
                cell.classList = 'cell semicolon';
                cell.id = 'semicolon0';
                break;
            case 3:
                cell.classList = 'cell';
                cell.id = 'min0';
                break;
            case 4:
                cell.classList = 'cell';
                cell.id = 'min1';
                break;
            case 5:
                cell.classList = 'cell semicolon';
                cell.id = 'semicolon1';
                break;
            case 6:
                cell.classList = 'cell';
                cell.id = 'sec0';
                break;
            case 7:
                cell.classList = 'cell';
                cell.id = 'sec1';
                break;
        }
        // соотношение ширины ячейки к заданной высоте - 3:5
        cell.style.width = `${clockElement.clientHeight * (3/5)}px`;

        let up = document.createElement('div');
        up.classList = 'up';
        up.style.width = `${clockElement.clientHeight * (3/5)}px`;
        up.style.height = `${clockElement.clientHeight * (3/5)}px`;
        up.style.borderWidth = `${clockElement.clientHeight * (1/5)}px`; // толщина границы 1/5

        let down = document.createElement('div');
        down.classList = 'down';
        down.style.width = `${clockElement.clientHeight * (3/5)}px`;
        down.style.height = `${clockElement.clientHeight * (3/5)}px`;
        down.style.borderWidth = `${clockElement.clientHeight * (1/5)}px`;


        cell.appendChild(up);
        cell.appendChild(down);

        clockElement.appendChild(cell);
    }
}



function refreshView(){
    
    let currentTime = new Date();
    let cellClass = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let currentTimeObj = {};

    currentTimeObj.h0 = currentTime.getHours().toString().padStart(2, '0')[0];
    currentTimeObj.h1 = currentTime.getHours().toString().padStart(2, '0')[1];

    currentTimeObj.m0 = currentTime.getMinutes().toString().padStart(2, '0')[0];
    currentTimeObj.m1 = currentTime.getMinutes().toString().padStart(2, '0')[1];

    currentTimeObj.s0 = currentTime.getSeconds().toString().padStart(2, '0')[0];
    currentTimeObj.s1 = currentTime.getSeconds().toString().padStart(2, '0')[1];

    let elemHour0 = document.getElementById('hour0');
    elemHour0.classList = `cell ${cellClass[+currentTimeObj.h0]}`;
    let elemHour1 = document.getElementById('hour1');
    elemHour1.classList = `cell ${cellClass[+currentTimeObj.h1]}`;

    let elemMin0 = document.getElementById('min0');
    elemMin0.classList = `cell ${cellClass[+currentTimeObj.m0]}`;
    let elemMin1 = document.getElementById('min1');
    elemMin1.classList = `cell ${cellClass[+currentTimeObj.m1]}`;

    let elemSec0 = document.getElementById('sec0');
    elemSec0.classList = `cell ${cellClass[+currentTimeObj.s0]}`;
    let elemSec1 = document.getElementById('sec1');
    elemSec1.classList = `cell ${cellClass[+currentTimeObj.s1]}`;
}



function createClock(elementID, elementHeight){

    createLayout(elementID, elementHeight);

    setInterval(refreshView, 1000);

}



export { createClock };