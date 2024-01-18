window.onload = function() {
    const messages = [
      "Welcome to the best calculator ever built!",
      "Right now we are experiencing some performance issues.",
      "But no worries, our best brogrammer is debugging the shit out of it!",
      "The rest of us are writing these messages.",
      "I think we fixed it!",
      "Have a great day!"
    ];

    for (let i = 0; i < messages.length; i++) {
      setTimeout(function() {
        alert(messages[i]);
      }, (i + 1) * 1000); // Delay each alert by 1 second (1000 milliseconds)
    }
  };