window.onload = function() {
    const messages = [
      "Hello!",
      "Welcome to the best calculator ever built!",
      "Right now we are experiencing some performance issues.",
      "But we are debugging the shit out of this rn.",
      "The whole team is trying to solve the issue.",
      "Just a few more seconds.",
      "Our best programmer is working on it.",
      "The rest of us are writing these messages",
      "I think we fixed it!",
      "Have a great day!"
    ];

    for (let i = 0; i < messages.length; i++) {
      setTimeout(function() {
        alert(messages[i]);
      }, (i + 1) * 1000); // Delay each alert by 1 second (1000 milliseconds)
    }
  };