// -----------------------------------
// Quiz data
// -----------------------------------

const quizQuestions = [
    {
        id: "experience",
        question: "How much experience do you have with lasers?",
        instructions: "Choose the option that best describes your experience.",
        safetyTip: "Even low-powered lasers should be handled carefully.",
        answers: [
            {
                text: "I am completely new",
                value: "beginner"
            },
            {
                text: "I know some basic safety rules",
                value: "some"
            },
            {
                text: "I have used low-powered lasers before",
                value: "experienced"
            }
        ]
    },
    {
        id: "use",
        question: "Where do you plan to use your laser most?",
        instructions: "Choose the option that best matches your main interest.",
        safetyTip: "Never aim a laser at people, animals, vehicles, or aircraft.",
        answers: [
            {
                text: "Indoor educational demonstrations",
                value: "indoors"
            },
            {
                text: "Outdoor astronomy pointing",
                value: "astronomy"
            },
            {
                text: "Visual effects and color exploration",
                value: "visual"
            },
            {
                text: "Electronics and optics experiments",
                value: "experiments"
            }
        ]
    },
    {
        id: "wavelength",
        question: "Which visible laser color interests you most?",
        instructions: "Select a wavelength to move the marker across the spectrum.",
        safetyTip: "Laser brightness is affected by both wavelength and output power.",
        answers: [
            {
                text: "Violet — 405 nm",
                value: 405
            },
            {
                text: "Blue — 450 nm",
                value: 450
            },
            {
                text: "Green — 520 nm",
                value: 520
            },
            {
                text: "Green — 532 nm",
                value: 532
            },
            {
                text: "Yellow — 589 nm",
                value: 589
            },
            {
                text: "Red — 638 nm",
                value: 638
            }
        ]
    },
    {
        id: "priority",
        question: "What matters most to you?",
        instructions: "Choose the feature you are most interested in learning about.",
        safetyTip: "A more visible beam does not necessarily mean a higher-powered beam.",
        answers: [
            {
                text: "Strong visibility at low power",
                value: "visibility"
            },
            {
                text: "Interesting color",
                value: "color"
            },
            {
                text: "Learning about laser technology",
                value: "technology"
            },
            {
                text: "Simple beginner-friendly operation",
                value: "simplicity"
            }
        ]
    },
    {
        id: "safety",
        question: "Which safety approach best describes you?",
        instructions: "Choose the answer that most closely matches your plans.",
        safetyTip: "Always follow manufacturer instructions and applicable laws.",
        answers: [
            {
                text: "I want the lowest practical output",
                value: "lowest"
            },
            {
                text: "I will use a controlled environment",
                value: "controlled"
            },
            {
                text: "I want to learn about protective eyewear",
                value: "eyewear"
            },
            {
                text: "I want general safety education",
                value: "education"
            }
        ]
    }
];


// -----------------------------------
// Laser recommendation data
// -----------------------------------

const laserOptions = [
    {
        name: "Violet Laser",
        wavelength: 405,
        color: "Violet",
        power: "1–5 mW",
        laserClass: "Class 2 or Class 3R",
        label: "Great for Fluorescence Experiments",
        uses: ["indoors", "experiments", "visual"],
        priorities: ["color", "technology"],
        description:
            "Violet light is near the edge of the visible spectrum and can make some materials fluoresce. It is an interesting educational choice for controlled indoor experiments.",
        visibility:
            "Violet light usually appears dimmer to the human eye than green light at the same measured output.",
        eyewear:
            "Use only certified protective eyewear rated for the laser's specific wavelength and optical density when required.",
        safety:
            "Avoid direct eye exposure. Violet light can appear less bright than it actually is, so visual brightness should never be used to judge safety."
    },
    {
        name: "Blue Laser",
        wavelength: 450,
        color: "Blue",
        power: "1–5 mW",
        laserClass: "Class 2 or Class 3R",
        label: "Great for Color Exploration",
        uses: ["indoors", "visual", "experiments"],
        priorities: ["color", "technology"],
        description:
            "Blue lasers provide a vivid visible color and can be useful for learning about wavelength, optics, and beam characteristics in a controlled setting.",
        visibility:
            "Blue light is clearly visible but generally appears less bright than green light at an equal output.",
        eyewear:
            "Protective eyewear must be certified for the appropriate blue wavelength range and required optical density.",
        safety:
            "Never stare into the beam or view a reflection. Use the lowest practical output for educational activities."
    },
    {
        name: "Green Laser",
        wavelength: 520,
        color: "Green",
        power: "1–5 mW",
        laserClass: "Class 2 or Class 3R",
        label: "Great for Beginners",
        uses: ["indoors", "astronomy", "visual"],
        priorities: ["visibility", "simplicity"],
        description:
            "Green light is highly visible to the human eye, allowing a low-output beam to appear bright without requiring high power.",
        visibility:
            "Green wavelengths are among the most visible portions of the spectrum to human vision.",
        eyewear:
            "Use certified protective eyewear rated for the exact wavelength and output when the manufacturer's guidance requires it.",
        safety:
            "Avoid direct eye exposure, reflective surfaces, vehicles, and aircraft. Outdoor use requires extra awareness of the surroundings."
    },
    {
        name: "Green Laser",
        wavelength: 532,
        color: "Green",
        power: "1–5 mW",
        laserClass: "Class 2 or Class 3R",
        label: "Excellent Visibility",
        uses: ["astronomy", "visual", "indoors"],
        priorities: ["visibility", "simplicity"],
        description:
            "A 532 nm green laser is highly visible and is commonly associated with educational demonstrations and astronomy pointing.",
        visibility:
            "The human eye is especially sensitive to green light, so this wavelength can appear bright at relatively low output.",
        eyewear:
            "Protective eyewear should be certified for 532 nm and have the optical density required for the specific device.",
        safety:
            "Never point a green laser toward aircraft, vehicles, people, animals, or reflective surfaces."
    },
    {
        name: "Yellow Laser",
        wavelength: 589,
        color: "Yellow",
        power: "1–5 mW",
        laserClass: "Class 2 or Class 3R",
        label: "Unique Visible Color",
        uses: ["indoors", "visual"],
        priorities: ["color", "technology"],
        description:
            "Yellow lasers provide a less common visible color and can be interesting for wavelength and color demonstrations.",
        visibility:
            "Yellow light is readily visible, although availability and technology can differ from more common red, green, and blue lasers.",
        eyewear:
            "Use eyewear that is specifically certified for the listed wavelength and required optical density.",
        safety:
            "Do not assume an uncommon color is safer. Follow the same beam-control practices used with other visible lasers."
    },
    {
        name: "Red Laser",
        wavelength: 638,
        color: "Red",
        power: "1–5 mW",
        laserClass: "Class 2 or Class 3R",
        label: "Simple and Familiar",
        uses: ["indoors", "experiments", "astronomy"],
        priorities: ["simplicity", "technology"],
        description:
            "Red lasers are familiar, widely used, and useful for introductory optics, alignment, and educational demonstrations.",
        visibility:
            "Red light is easy to identify but appears less bright than green light at the same measured output.",
        eyewear:
            "Any protective eyewear should be certified for the appropriate red wavelength range and required optical density.",
        safety:
            "Use the lowest practical output and avoid direct or reflected exposure to the eyes."
    }
];


// -----------------------------------
// Application state
// -----------------------------------

let currentQuestionIndex = 0;
let selectedRecommendation = null;

const userAnswers = {};


// -----------------------------------
// Select page elements
// -----------------------------------

const welcomeScreen = document.querySelector("#home");
const quizScreen = document.querySelector("#quiz");
const resultScreen = document.querySelector("#result");
const learnScreen = document.querySelector("#learn");
const restartScreen = document.querySelector("#restart");
const aboutSection = document.querySelector("#about");

const startQuizButton = document.querySelector("#start-quiz-button");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");

const questionProgress = document.querySelector("#question-progress");
const questionHeading = document.querySelector("#question-heading");
const questionInstructions = document.querySelector("#question-instructions");
const answerOptions = document.querySelector("#answer-options");
const quizSafetyTip = document.querySelector("#quiz-safety-tip");

const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");

const learnMoreButton = document.querySelector("#learn-more-button");
const restartResultButton = document.querySelector("#restart-result-button");
const restartQuizButton = document.querySelector("#restart-quiz-button");
const backHomeButton = document.querySelector("#back-home-button");
const backToResultButton = document.querySelector("#back-to-result-button");
const learnBackButton = document.querySelector("#learn-back-button");

const resultName = document.querySelector("#result-name");
const resultLabel = document.querySelector("#result-label");
const resultWavelength = document.querySelector("#result-wavelength");
const resultPower = document.querySelector("#result-power");
const resultClass = document.querySelector("#result-class");
const resultExplanation = document.querySelector("#result-explanation");
const resultSafety = document.querySelector("#result-safety");

const learnHeading = document.querySelector("#learn-heading");
const learnDescription = document.querySelector("#learn-description");
const learnWavelength = document.querySelector("#learn-wavelength");
const learnPower = document.querySelector("#learn-power");
const learnClass = document.querySelector("#learn-class");
const learnVisibility = document.querySelector("#learn-visibility");
const learnEyewear = document.querySelector("#learn-eyewear");

const themeButton = document.querySelector("#theme-button");
const menuButton = document.querySelector("#menu-button");
const navigationLinks = document.querySelector("#navigation-links");
const currentYear = document.querySelector("#current-year");


// -----------------------------------
// Screen navigation
// -----------------------------------

function showScreen(screenToShow) {
    const screens = [
        welcomeScreen,
        quizScreen,
        resultScreen,
        learnScreen,
        restartScreen
    ];

    screens.forEach((screen) => {
        screen.hidden = screen !== screenToShow;
    });

    aboutSection.hidden = screenToShow !== welcomeScreen;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// -----------------------------------
// Start and display quiz
// -----------------------------------

function startQuiz() {
    currentQuestionIndex = 0;

    Object.keys(userAnswers).forEach((key) => {
        delete userAnswers[key];
    });

    showScreen(quizScreen);
    displayQuestion();
}

function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const savedAnswer = userAnswers[question.id];

    questionProgress.textContent =
        `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;

    questionHeading.textContent = question.question;
    questionInstructions.textContent = question.instructions;
    quizSafetyTip.textContent = question.safetyTip;

    updateProgressBar();
    displayAnswerButtons(question, savedAnswer);
    updateNavigationButtons(savedAnswer);
}


// -----------------------------------
// Dynamically create answer buttons
// -----------------------------------

function displayAnswerButtons(question, savedAnswer) {
    answerOptions.innerHTML = "";

    question.answers.forEach((answer) => {
        const button = document.createElement("button");

        button.type = "button";
        button.classList.add("answer-option");
        button.textContent = answer.text;

        if (savedAnswer === answer.value) {
            button.classList.add("selected");
            button.setAttribute("aria-pressed", "true");
        } else {
            button.setAttribute("aria-pressed", "false");
        }

        button.addEventListener("click", () => {
            selectAnswer(question.id, answer.value, button);
        });

        answerOptions.appendChild(button);
    });
}


// -----------------------------------
// Select an answer
// -----------------------------------

function selectAnswer(questionId, answerValue, selectedButton) {
    userAnswers[questionId] = answerValue;

    const buttons = answerOptions.querySelectorAll(".answer-option");

    buttons.forEach((button) => {
        button.classList.remove("selected");
        button.setAttribute("aria-pressed", "false");
    });

    selectedButton.classList.add("selected");
    selectedButton.setAttribute("aria-pressed", "true");

    nextButton.disabled = false;
}


// -----------------------------------
// Progress bar
// -----------------------------------

function updateProgressBar() {
    const progressPercentage =
        ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    progressFill.style.width = `${progressPercentage}%`;

    progressTrack.setAttribute(
        "aria-valuenow",
        String(currentQuestionIndex + 1)
    );
}


// -----------------------------------
// Previous and next navigation
// -----------------------------------

function updateNavigationButtons(savedAnswer) {
    previousButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = savedAnswer === undefined;

    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextButton.innerHTML =
            `See Recommendation <span aria-hidden="true">→</span>`;
    } else {
        nextButton.innerHTML =
            `Next Question <span aria-hidden="true">→</span>`;
    }
}

function goToNextQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (userAnswers[currentQuestion.id] === undefined) {
        return;
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex += 1;
        displayQuestion();
    } else {
        calculateRecommendation();
    }
}

function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex -= 1;
        displayQuestion();
    }
}


// -----------------------------------
// Recommendation calculation
// -----------------------------------

function calculateRecommendation() {
    const preferredWavelength = userAnswers.wavelength;

    const exactWavelengthMatch = laserOptions.find((laser) => {
        return laser.wavelength === preferredWavelength;
    });

    if (exactWavelengthMatch) {
        selectedRecommendation = exactWavelengthMatch;
    } else {
        selectedRecommendation = findHighestScoringLaser();
    }

    displayRecommendation(selectedRecommendation);
}

function findHighestScoringLaser() {
    const scoredLasers = laserOptions.map((laser) => {
        let score = 0;

        if (laser.uses.includes(userAnswers.use)) {
            score += 2;
        }

        if (laser.priorities.includes(userAnswers.priority)) {
            score += 2;
        }

        if (
            userAnswers.experience === "beginner" &&
            laser.priorities.includes("simplicity")
        ) {
            score += 1;
        }

        if (
            userAnswers.safety === "lowest" &&
            laser.power === "1–5 mW"
        ) {
            score += 1;
        }

        return {
            laser,
            score
        };
    });

    return scoredLasers.reduce((bestMatch, currentMatch) => {
        if (currentMatch.score > bestMatch.score) {
            return currentMatch;
        }

        return bestMatch;
    }).laser;
}


// -----------------------------------
// Display recommendation
// -----------------------------------

function displayRecommendation(laser) {
    resultName.textContent = laser.name;
    resultLabel.textContent = laser.label;
    resultWavelength.textContent = `${laser.wavelength} nm`;
    resultPower.textContent = laser.power;
    resultClass.textContent = laser.laserClass;
    resultExplanation.textContent = laser.description;
    resultSafety.textContent = laser.safety;

    populateLearnScreen(laser);
    showScreen(resultScreen);
}

function populateLearnScreen(laser) {
    learnHeading.textContent =
        `${laser.name} (${laser.wavelength} nm)`;

    learnDescription.textContent = laser.description;

    learnWavelength.textContent =
        `${laser.wavelength} nanometers, commonly perceived as ${laser.color.toLowerCase()} light.`;

    learnPower.textContent =
        `${laser.power} is used here as a low-output educational example.`;

    learnClass.textContent =
        `${laser.laserClass} products still require responsible handling and careful beam control.`;

    learnVisibility.textContent = laser.visibility;
    learnEyewear.textContent = laser.eyewear;
}


// -----------------------------------
// Restart and home functions
// -----------------------------------

function showRestartScreen() {
    showScreen(restartScreen);
}

function restartQuiz() {
    startQuiz();
}

function returnHome() {
    currentQuestionIndex = 0;
    selectedRecommendation = null;

    Object.keys(userAnswers).forEach((key) => {
        delete userAnswers[key];
    });
    showScreen(welcomeScreen);
}


// -----------------------------------
// Theme controls
// -----------------------------------

function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    const darkThemeEnabled =
        document.body.classList.contains("dark-theme");

    themeButton.innerHTML = darkThemeEnabled
        ? '<span aria-hidden="true">☾</span>'
        : '<span aria-hidden="true">☀</span>';

    themeButton.setAttribute(
        "aria-label",
        darkThemeEnabled
            ? "Switch to light theme"
            : "Switch to dark theme"
    );
}


// -----------------------------------
// Mobile navigation
// -----------------------------------

function toggleMobileMenu() {
    const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
        "aria-expanded",
        String(!isOpen)
    );

    navigationLinks.classList.toggle("menu-open");
}

function closeMobileMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    navigationLinks.classList.remove("menu-open");
}


// -----------------------------------
// Event listeners
// -----------------------------------

startQuizButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", goToNextQuestion);
previousButton.addEventListener("click", goToPreviousQuestion);

learnMoreButton.addEventListener("click", () => {
    showScreen(learnScreen);
});

backToResultButton.addEventListener("click", () => {
    showScreen(resultScreen);
});

learnBackButton.addEventListener("click", () => {
    showScreen(resultScreen);
});

restartResultButton.addEventListener("click", showRestartScreen);
restartQuizButton.addEventListener("click", restartQuiz);
backHomeButton.addEventListener("click", returnHome);

themeButton.addEventListener("click", toggleTheme);
menuButton.addEventListener("click", toggleMobileMenu);

navigationLinks.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) {
        return;
    }

    closeMobileMenu();

    const target = link.getAttribute("href");

    if (target === "#home") {
        event.preventDefault();
        returnHome();
    }

    if (target === "#quiz") {
        event.preventDefault();
        startQuiz();
    }

    if (target === "#learn") {
        event.preventDefault();

        if (selectedRecommendation) {
            showScreen(learnScreen);
        } else {
            startQuiz();
        }
    }
});


// -----------------------------------
// Initial page setup
// -----------------------------------

currentYear.textContent = new Date().getFullYear();

showScreen(welcomeScreen);