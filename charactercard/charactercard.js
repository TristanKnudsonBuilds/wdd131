const character = {
    name: "The Disciple",
    class: "Dark Aether Entity",
    level: 55,
    health: 100,

    attacked() {
        this.health -= 20;

        if (this.health < 0) {
            this.health = 0;
        }

        displayCharacter();
    },

    levelUp() {
        this.level++;
        displayCharacter();
    }
};

function displayCharacter() {
    document.getElementById("name").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
}

function attack() {
    character.attacked();
}

function levelUp() {
    character.levelUp();
}

displayCharacter();