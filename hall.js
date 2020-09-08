var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var hallEffect = new Gpio(17, 'in', 'both'); //use GPIO pin 27 as input, and 'both' button presses, and releases should be handled

console.log("Running...");

hallEffect.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  console.log("Hall effect val:" +  value);
});

function unexportOnClose() { //function to run when exiting program
    hallEffect.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c