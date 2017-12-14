// JSON : JS Object Notation. A standard way to format data
// AJax : asynchornous javascript and xml . A client side technique to get  data from server without having to refresh

function picture() {
    console.log('Show Plane');
}

function status() {
    console.log('In Service');
}

function zoom() {
    console.log('Zoom Picture');
}

$(document).ready(function() {
    // $('button').on('click', picture); // callback: click handler the button, call picture function
    // $('button').on('click', status); // callback:  + call status function
    // how do you turn off these event?   jQuery OBJECT METHOD: off(<event name></event>)
    // $('button').off('click'); // removes all of the callbacks

    ////////////////////////////////////


    // how do you turn off 1 of these events?   declare a namespace   click.image:picture   click.details:status  mouseover.image:zoom
    $('button').on('click.image', picture);
    $('button').on('click.details', status);
    $('button').on('mouseover.image', zoom);
    //$('button').off('click.image'); // this turns off 'click.image'
    $('button').off('.image'); // this turns off both click.iamge and mouseover.image 
    // jQuery OBJECT METHOD:  trigger(<event name>)
    //   $('button').trigger('click'); // similar to if the user clicked the button. Clicking without clicking
    // $('button').trigger('click.details');

});