const jokeAdvice = {
    jokes: [
        "The first time I got a universal remote control, I thought to myself, This changes everything.",
        "Just got fired from my job as a set designer. I left without making a scene.",
        "Refusing to go to the gym is a form of resistance training.",
        "My friend’s bakery burned down last night. Now his business is toast",
        "Four fonts walk into a bar. The bartender says, Hey! We dont want your type in here!",
        "The man who survived both mustard gas and pepper spray is a seasoned veteran now."
    ],
    cheerUp: [
        'everything will be okay',
        'you got this',
        'take a deep breath',
        `it's okay to feel`,
        `You'll be okay`,
        `It'll be alright`
    ],
    tryThis: [
        'meditating',
        'eating something tasty',
        'taking a walk',
        'talking to a friend',
        'making some tea',
        'buying yourself flowers'
    ]
};

function generateRandomMessage(category) {
    const messages = jokeAdvice[category];
    if (!messages) {
        return "Try again.";
    }
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function displayRandomMessage() {
    const joke = generateRandomMessage("jokes");
    const cheerUp = generateRandomMessage("cheerUp");
    const tryThis = generateRandomMessage("tryThis");
    
    const combinedMessage = `Here's a good joke for you: ${joke} <br> You know, ${cheerUp}. <br>Have you tried ${tryThis} ?`;
    console.log(combinedMessage);
    answerBox.innerHTML = combinedMessage;
}





//Button Logic Area

const bigButton = document.getElementById("bigButton");
const answerBox = document.getElementById("answerBox");


bigButton.addEventListener("click", function() {
    displayRandomMessage();
});