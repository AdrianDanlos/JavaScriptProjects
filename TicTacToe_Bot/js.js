//GLOBAL VARIABLES
var cells = $(".cell");
var allChecked; //To check game over
var playDone;
var cellsCrossed = [];
//MAIN CODE MAIN CODE MAIN CODE MAIN CODE MAIN CODE MAIN CODE MAIN CODE MAIN CODE MAIN CODE MAIN CODE 
//AFTER THE HUMAN PLAYS SOMETHING
cells.click(function() {
    //If cell is free add check on player click
    if ($(this).css("background-image") == "none") {
        $(this).css("background-image", 'url("img/check.png")');
        //Bot move starts
        getCrossedCells();
        if (cellsCrossed.length > 0) {
            //WIN THROUGH CENTER. If we have any outer cross and the center cell is a cross too we check for possible win. 2 crosses, looking for 3rd.
            if ($('.5').css("background-image").includes('cross')) {
                centerAlgorithm();
            }
            //WIN TRHOUGH SIDES. If we have any outer cross and an adjacent cell is a cross we check for possible win. 2 crosses, looking for 3rd.
            else {
                sidesAlgorithm();
            }
        }
        //Reset Array
        cellsCrossed = [];
    }
});
//CHECK STATE OF CANVAS AND GET ALL CROSSED CELLS (EXCEPT CENTER ONE). WE FILL THE ARRAY.
function getCrossedCells() {
    cells.each(function() {
        if (!$(this).hasClass("5") & $(this).css("background-image").includes('cross')) {
            cellsCrossed.push($(this).attr('class').split(' ')[1]);
        }
    })
}
//Looking for a win through CENTER ALGORITHM
function centerAlgorithm(nCell) {
    for (let i = 0; i < cellsCrossed.length & !playDone; i++) {
        console.log(cellsCrossed[i]);
        let distanceToCenter = 5 - cellsCrossed[i];
        let nextToCheck = 5 + distanceToCenter;
        console.log("next to check: " + nextToCheck);
        if ($(`.${nextToCheck}`).css("background-image") == "none") {
            console.log("gano");
            $(`.${nextToCheck}`).css("background-image", 'url("img/cross.png")');
            playDone = true;
        }
    }
    //reset variable
    playDone = false;
}

function sidesAlgorithm() {
    for (let i = 0; i < cellsCrossed.length & !playDone; i++) {
        console.log("entro princip");
        console.log(cellsCrossed[i]);
        switch (cellsCrossed[i]) {
            case '1':
                console.log('entro 1');
                if ($('.2').css('background-image').includes('cross')) {
                    if ($('.3').css('background-image') == 'none') {
                        $('.3').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.3').css('background-image').includes('cross')) {
                    if ($('.2').css('background-image') == 'none') {
                        $('.2').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                if ($('.4').css('background-image').includes('cross')) {
                    if ($('.7').css('background-image') == 'none') {
                        $('.7').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.7').css('background-image').includes('cross')) {
                    if ($('.4').css('background-image') == 'none') {
                        $('.4').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                break;
            case '2':
                console.log('entro 2');
                if ($('.1').css('background-image').includes('cross')) {
                    if ($('.3').css('background-image') == 'none') {
                        $('.3').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.3').css('background-image').includes('cross')) {
                    if ($('.1').css('background-image') == 'none') {
                        $('.1').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                break;
            case '3':
                console.log('entro 3');
                if ($('.2').css('background-image').includes('cross')) {
                    if ($('.1').css('background-image') == 'none') {
                        $('.1').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.1').css('background-image').includes('cross')) {
                    if ($('.2').css('background-image') == 'none') {
                        $('.2').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                if ($('.6').css('background-image').includes('cross')) {
                    if ($('.9').css('background-image') == 'none') {
                        $('.9').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.9').css('background-image').includes('cross')) {
                    if ($('.6').css('background-image') == 'none') {
                        $('.6').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                break;
            case '4':
                console.log('entro 4');
                if ($('.1').css('background-image').includes('cross')) {
                    if ($('.7').css('background-image') == 'none') {
                        $('.7').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.7').css('background-image').includes('cross')) {
                    if ($('.1').css('background-image') == 'none') {
                        $('.1').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                break;
            case '6':
                console.log('entro 6');
                if ($('.3').css('background-image').includes('cross')) {
                    if ($('.9').css('background-image') == 'none') {
                        $('.9').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.9').css('background-image').includes('cross')) {
                    if ($('.3').css('background-image') == 'none') {
                        $('.3').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
            case '7':
                console.log('entro 7');
                if ($('.1').css('background-image').includes('cross')) {
                    if ($('.4').css('background-image') == 'none') {
                        $('.4').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.4').css('background-image').includes('cross')) {
                    if ($('.1').css('background-image') == 'none') {
                        $('.1').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                if ($('.8').css('background-image').includes('cross')) {
                    if ($('.9').css('background-image') == 'none') {
                        $('.9').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.9').css('background-image').includes('cross')) {
                    if ($('.8').css('background-image') == 'none') {
                        $('.8').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                break;
            case '8':
                console.log('entro 8');
                if ($('.7').css('background-image').includes('cross')) {
                    if ($('.9').css('background-image') == 'none') {
                        $('.9').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.9').css('background-image').includes('cross')) {
                    if ($('.7').css('background-image') == 'none') {
                        $('.7').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
            case '9':
                console.log('entro 9');
                if ($('.7').css('background-image').includes('cross')) {
                    if ($('.8').css('background-image') == 'none') {
                        $('.8').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.8').css('background-image').includes('cross')) {
                    if ($('.7').css('background-image') == 'none') {
                        $('.7').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                if ($('.3').css('background-image').includes('cross')) {
                    if ($('.6').css('background-image') == 'none') {
                        $('.6').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                } else if ($('.6').css('background-image').includes('cross')) {
                    if ($('.3').css('background-image') == 'none') {
                        $('.3').css("background-image", 'url("img/cross.png")');
                        playDone = true;
                        break;
                    }
                }
                break;
        }
    }
    playDone = false;
}
//Display game over
cells.click(function() {
    cells.each(function() {
        if ($(this).css("background-image") == "none") {
            allChecked = false;
            return false;
        } else {
            allChecked = true;
        }
    });
    if (allChecked) {
        $('#gameOver').css('visibility', 'visible');
    }
});
//Clear game
$("body").keydown(function() {
    if (event.keyCode == 13) {
        cells.css("background-image", "none");
        $('#gameOver').css('visibility', 'hidden');
    }
});
//var cellN = $(this).attr('class').split(' ')[1];