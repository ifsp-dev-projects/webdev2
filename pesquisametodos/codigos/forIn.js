//codigo simples
const colors = ["Ciano", "Verde", "Dourado", "Magenta"];

for (const index in colors) {
    console.log(`Cor na posição ${index}: ${colors[index]}`);
}


//codigo elaborado
const studentGrades = {
    Matemática: 8,
    Português: 7,
    História: 6,
    Geografia: 9,
    Ciências: 5
};

function showGrades() {
    console.log("Notas do aluno:");
    for (const subject in studentGrades) {
        console.log(`- ${subject}: ${studentGrades[subject]}`);
    }
    console.log("\n");
}

function calculateGrades() {
    let sum = 0;
    let totalSubjects = 0;

    for (const subject in studentGrades) {
        sum += studentGrades[subject];
        totalSubjects++;
    }

    const averageGrade = sum / totalSubjects;
    console.log(`Média do aluno: ${averageGrade.toFixed(2)}\n`);
    return averageGrade;
}


function checkPerformance() {
    const averageGrade = calculateGrades();

    console.log("Desempenho por matéria:");
    for (const subject in studentGrades) {
        const grade = studentGrades[subject];
        const status = grade >= averageGrade ? "Acima da média" : "Abaixo da média";
        console.log(`- ${subject}: ${grade} → ${status}`);
    }
    console.log("\n");
}


showGrades();
calculateGrades();
checkPerformance();
