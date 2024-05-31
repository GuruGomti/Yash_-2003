const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = 
    highScores.map(score => {
        console.log(highScores);
    })
    .join("");








