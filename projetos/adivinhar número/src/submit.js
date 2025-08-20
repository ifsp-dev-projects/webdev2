document.getElementById("game_play").addEventListener("submit", function(forms) {
    forms.preventDefault();

    game("guess");

    document.getElementById("game_play").reset();
});
