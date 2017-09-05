console.log('sourced script.js');
var logTest = true;
var noTest = false;

function onReady() {
    console.log('jQuery ready');
    //click event for 'color-button' class
    $('.color-button').on('click', appendCube);
    // click event to remove color block from dom
    // $('.container').on('click', '.color-cube', removeCube);
    // listener for buttons on the cubes
    $('.container').on('click', '.deleteCube', removeButton);
}
function appendCube() {
    // append a div of class 'color-cube' to the 'container' div
    var $color = $(this).data('color');
    var $createCube = $('<div class="color-cube" data-color="' + $color + '">');
    // $(<div>).data('color', value); // setter - setting the value
    var $spanName = $('#' + $color);
    var count = $spanName.text();
    if (noTest) console.log('count ->', count);
    if (noTest) console.log('$spanName->', $spanName);
    if (noTest) console.log('$color->', $color);

    // use 'data-color' from clicked button as new cube's color
    $createCube.append().css('background-color', $color);

    //pro mode append button to cube
    $createCube.append('<button class="deleteCube">Remove</button>');
    
    // each 'span' should have a count of how many of it's cube are on the page (red, yellow, green, blue)
    $spanName.text(parseInt(count)+ 1);

    // I could use count data to do the addition and subtraction, but I think text() would be easier
    $spanName.data('count', count);
    // if (noTest) console.log(".data('count')", $spanName.data('count'));


    $('.container').append($createCube);
}

function removeCube( ) {
    if(logTest) console.log('this ->', this);
    if (logTest) console.log('this data-color ->', $(this).data('color')); // getter - getting the value 

    var $color = $(this).data('color'); 
    var $spanName = $('#' + $color);
    var count = $spanName.text();
    if (noTest) console.log('$color->', $color);
    if (noTest) console.log('$spanName->', $spanName);
    if (noTest) console.log('count ->', count);

    // removes the cube div
    $(this).remove();
    // incriments count - down 1
    $spanName.text(parseInt(count) - 1);
   
}

function removeButton() {
    var $color = $(this).parent().data('color');
    var $spanName = $('#' + $color);
    var count = $spanName.text();

    // removes the cube div
    $(this).parent().remove();
    // incriments count - down 1
    $spanName.text(parseInt(count) - 1);
}


$(document).ready(onReady);
