'use strict';

function createClock(elementID, elementHeight){


    // ******************** creating layout - BEGIN ********************

    let clockElement = document.getElementById(elementID);
    clockElement.style.height = elementHeight;
    clockElement.style.width = 'fit-content';
    
    for (let i = 0; i < 8; i++) {
        let cell = document.createElement('div');

        switch (i) {
            case 0:
                cell.classList = 'cell';
                cell.id = 'hour1';
                break;
            case 1:
                cell.classList = 'cell';
                cell.id = 'hour0';
                break;
            case 2:
                cell.classList = 'cell semicolon';
                cell.id = 'semicolon1';
                break;
            case 3:
                cell.classList = 'cell';
                cell.id = 'min1';
                break;
            case 4:
                cell.classList = 'cell';
                cell.id = 'min0';
                break;
            case 5:
                cell.classList = 'cell semicolon';
                cell.id = 'semicolon0';
                break;
            case 6:
                cell.classList = 'cell';
                cell.id = 'sec1';
                break;
            case 7:
                cell.classList = 'cell';
                cell.id = 'sec0';
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

    // ******************** creating layout - END ********************

}

export { createClock };