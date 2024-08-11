async function getRandomThought() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/YourUsername/YourRepo/main/random-thoughts.json');
        const data = await response.json();
        const thoughts = data.thoughts;
        const randomIndex = Math.floor(Math.random() * thoughts.length);
        return thoughts[randomIndex];
    } catch (error) {
        console.error('Error fetching random thoughts:', error);
        return "Couldn't fetch a thought. Maybe I thought too hard.";
    }
}

async function displayRandomThought() {
    const randomThought = await getRandomThought();
    document.getElementById('random-thought').textContent = randomThought;
}

displayRandomThought();

async function displayLatestThought() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/YourUsername/YourRepo/main/random-thoughts.json');
        const data = await response.json();
        const latestThought = data.thoughts[0];
        document.getElementById('latest-thought').textContent = latestThought;
    } catch (error) {
        console.error('Error fetching latest thought:', error);
        document.getElementById('latest-thought').textContent = "Couldn't fetch the latest thought.";
    }
}

displayLatestThought();
