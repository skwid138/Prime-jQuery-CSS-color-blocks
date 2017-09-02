console.log('sourced script.js');
// var logTests = true;

function onReady() {
    console.log('jQuery ready');
    //click event for 'color-button' class
    $('.color-button').on('click', appendCube);
    // click event to remove color block from dom
    $('.container').on('click', '.color-cube', removeCube)
}
function appendCube() {
    // append a div of class 'color-cube' to the 'container' div
    var $createCube = $("<div>", { class: 'color-cube' });
    var $color = $(this).data('color');
    var $spanName = $('#' + $color);
    var count = parseInt($spanName.text());

    // use 'data-color' from clicked button as new cube's color
    $createCube.append().css('background-color', $color);
    
    // each 'span' should have a count of how many of it's cube are on the page (red, yellow, green, blue)
   $spanName.append().text(count + 1);

    $('.container').append($createCube);
}

function removeCube( ) {
    var $color = $(this).data('color');
    var $spanName = $('#' + $color);
    var count = Number ($spanName.text());

    $spanName.append().text(count - 1);

    $(this).remove();

    


}

function removeAll () {
    var $color = $(this).data('color');
    var $spanName = $('#' + $color);

    $('.container').children($spanName).remove()
}


$(document).ready(onReady);




