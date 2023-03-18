const averageGrade = (note1,note2,note3,note4,note5) => {
    return "Tu promedio es:" + (note1+note2+note3+note4+note5)/5;
} 

/* Funcion anonima, que no tiene nombre (n, index) => {
        sumNotes += n;}*/

const getAverageV2 = (...n) => {
    let sumNotes = 0;
    n.forEach((grade, index) => {
        sumNotes += grade;
    });
    return (sumNotes) / n.length;
}

const getAverageV3 = (...n) => {
    let sumNotes = 0;
    n.forEach((grade) => {
        sumNotes += grade;
    });
    return (sumNotes) / n.length;
}

const getAverageV4 = (...n) => {
    let sumNotes = 0;
    n.map((grade) => {
        sumNotes += grade;
    });
    return (sumNotes) / n.length;
}