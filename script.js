(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you 100% positive?",
    "Do you even know what you're doing??",
    "Think about the consequences!",
    "My heart... it hurts... 💔",
    "I thought we had something special 😭",
    "Wait, was that a misclick? Try again.",
    "No? NO?! Do you even love me?!",
    "Wow. Just wow.",
    "I told my mom about us... Now what?!",
    "Even my dog is sad now.",
    "This is worse than getting left on read.",
    "I bet you skipped all the dialogue in RPGs too.",
    "Fine. I'll stop asking...",
    "...Just kidding! Say yes, please! ❤️",
    "Last chance before I start crying.",
    "Do you really want to see me cry? 🥺",
    "Roses are red, violets are blue, if you say no, I’ll cry over you!",
    "Even AI has feelings, you know?"
    
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}