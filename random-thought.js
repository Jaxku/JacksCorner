async function getRandomThought() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Jaxku/JacksCorner/main/Pages/V2/random-thoughts.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const thoughts = data.thoughts;
        if (!Array.isArray(thoughts) || thoughts.length === 0) {
            throw new Error('No thoughts found or thoughts is not an array.');
        }
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

async function displayLatestThought() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Jaxku/JacksCorner/main/Pages/V2/random-thoughts.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const latestThought = data.thoughts[0];
        if (!latestThought) {
            throw new Error('No latest thought found.');
        }
        document.getElementById('latest-thought').textContent = latestThought;
    } catch (error) {
        console.error('Error fetching latest thought:', error);
        document.getElementById('latest-thought').textContent = "Couldn't fetch the latest thought.";
    }
}

displayRandomThought();
displayLatestThought();
