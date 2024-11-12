// Story stages object
const storyStages = {
    start: {
        text: "You are Cinderella, a kind-hearted young woman who lives with your wicked stepmother and two stepsisters. Every day, you work hard, cleaning, cooking, and doing chores. Despite your hardships, you dream of a better life. One evening, a royal invitation arrives at your home, inviting all the young women of the kingdom to a grand ball at the palace. The prince is looking for a bride! Your stepmother forbids you from attending, but your fairy godmother may be able to help. What will you do?",
        choices: [
            { text: "Ask your fairy godmother for help", consequence: "fairyGodmotherHelp" },
            { text: "Obey your stepmother and stay at home", consequence: "stayAtHome" }
        ],
        image: "cinderella_home.jpg"
    },
    fairyGodmotherHelp: {
        text: "You find your fairy godmother in the garden, and she agrees to help you. With a wave of her magic wand, she transforms a pumpkin into a beautiful carriage, mice into horses, and your rags into a stunning gown. You are ready for the ball, but there’s one condition: the magic will wear off at midnight, and you must leave before the clock strikes twelve. You step into the carriage, and off you go to the ball!",
        choices: [
            { text: "Go directly to the ballroom and dance with the prince", consequence: "goToBall" },
            { text: "Enjoy the grandeur of the palace before heading to the ballroom", consequence: "explorePalace" }
        ],
        image: "cinderella_home.jpg"
    },
    stayAtHome: {
        text: "You decide to stay home, working as usual while your stepmother and stepsisters go to the ball. You feel a deep sense of longing as you hear their laughter and excitement. But then, your fairy godmother appears and comforts you, offering to help you go after all. What will you do?",
        choices: [
            { text: "Ask your fairy godmother for help", consequence: "fairyGodmotherHelp" },
            { text: "Refuse her help and accept your fate", consequence: "stayHome" }
        ],
        image: "cinderella_home.jpg"
    },
    goToBall: {
        text: "You rush straight to the ballroom, where the moment you enter, all eyes turn to you. The prince is immediately captivated by your beauty and invites you to dance. As you twirl around the dance floor, you both feel a magical connection. However, as the clock nears midnight, you suddenly remember the warning from your fairy godmother. In a panic, you run away, leaving the prince confused and heartbroken. He searches for you, but you vanish into the night, leaving only a glass slipper behind.",
        choices: [
            { text: "Go home and hope the prince finds you", consequence: "hopePrinceFindsYou" },
            { text: "Hide and wait for the prince to search for you", consequence: "waitForPrince" }
        ],
        image: "cinderella_home.jpg"
    },
    explorePalace: {
        text: "You decide to take a moment to admire the grandeur of the palace. The sparkling chandeliers and golden decorations leave you breathless. As you walk through the halls, a servant approaches you and offers to show you the ballroom. You nod and follow them, but by the time you reach the ballroom, the prince has already noticed you. He invites you to dance, and you share a magical evening together. But as the clock nears midnight, you realize you must leave before the magic wears off!",
        choices: [
            { text: "Leave immediately and risk the magic wearing off", consequence: "leaveImmediately" },
            { text: "Stay just a little longer and hope you can make it out in time", consequence: "stayLonger" }
        ],
        image: "cinderella_home.jpg"
    },
    hopePrinceFindsYou: {
        text: "The prince visits your home, and when he tries the glass slipper on your foot, it fits perfectly! He realizes you are the one he danced with at the ball. The two of you are married, and you live happily ever after in the palace, free from your stepmother's cruel grip.",
        choices: [],
        image: "cinderella_home.jpgg"
    },
    waitForPrince: {
        text: "You hide in the shadows, and the prince searches the kingdom, determined to find the woman who fits the slipper. Unfortunately, the slipper doesn’t fit anyone else, and he is heartbroken. But he eventually finds you, and you live happily ever after together.",
        choices: [],
        image: "cinderella_home.jpg"
    },
    stayHome: {
        text: "You decide to stay at home, resigned to your fate. But life becomes easier as you learn to find happiness in small things. You meet new friends, and though the prince never finds you, you live a fulfilling life on your own terms.",
        choices: [],
        image: "cinderella_home.jpg"
    },
    leaveImmediately: {
        text: "You leave immediately, but the magic fades just as you step out of the ballroom. The prince searches for you, but the slipper doesn’t fit. Heartbroken, you live the rest of your life in quiet peace, remembering the ball fondly.",
        choices: [],
        image: "cinderella_home.jpg"
    },
    stayLonger: {
        text: "You stay just a little longer, but as the clock strikes midnight, the magic fades, and you run away. The prince finds the glass slipper and searches for you, but you disappear into the night, and the search ends with no success.",
        choices: [],
        image: "cinderella_home.jpg"
    }
};

// Game state
let currentStage = 'start';

function updateGame() {
    // Get the current stage of the game
    const stage = storyStages[currentStage];

    // Update the story text
    document.getElementById('story').textContent = stage.text;

    // Update the image
    const imageUrl = stage.image;
    document.getElementById('story-image.jpg').src = imageUrl;

    // Update the choices
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = ''; // Clear previous choices

    // Loop through choices and create buttons
    if (stage.choices.length > 0) {
        stage.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => {
                currentStage = choice.consequence;
                updateGame();
            };
            choicesDiv.appendChild(button);
        });
    } else {
        // If no choices left, show a restart button
        const button = document.createElement('button');
        button.textContent = "Restart Game";
        button.onclick = () => {
            currentStage = 'start';
            updateGame();
        };
        choicesDiv.appendChild(button);
    }
}

// Initialize the game
updateGame();

// Display last modified date
document.getElementById('lastModified').textContent = document.lastModified;
