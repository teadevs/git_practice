var thoughts = [
    "The sky is blue because it'd be weird to say 'I wonder why it's eggplant shades'.",
    "Charlie Watts had the right idea punching Mick Jagger for being a prat.",
    "Every time I sit in the park, I worry the birds are watching me like I'm the zoo to them.",
    "Drink enough vodka and you're getting your vegetables for the day.",
    "I don't think it matters what software you use. Your design is going to suck without criticism.",
    "How much coffee is too much coffee? I'm not sure we should answer that for ourselves."
  ];
  
  var currentIndex = -1; // Initialize to -1 to start with the first thought on the first click.
  
  function randomThought() {
    // Increment the index to get the next thought
    currentIndex = (currentIndex + 1) % thoughts.length;
    
    // Display the thought
    document.getElementById('txtbox').value = thoughts[currentIndex];
  }
  
  randomThought(); // Display the first thought initially
  