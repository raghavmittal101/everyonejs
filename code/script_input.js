if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'hello *text': function(text) {       document.getElementById('check');
        check.innerHTML = text; }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  
  var type = function(text) {
        document.getElementById('check');
        check.innerHTML = text;
    }
}