let college = [
    {
        name: "Harry",
        age: 18,
        group: "ИС-2-1",
        studID: 542398,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "Философия", "МДК-02-01"],
        cash: 589,
        isStudent: true
    },
    {
        name: "Ron",
        age: 19,
        group: "ССА-3-2",
        studID: 324615,
        typeLearning: "Заочная",
        task: ["БЖ", "МДК-03-02", "Право", "Психология"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Damn", 
        age:  32, 
        isKurator: true,
        kuratorGroup: "ИС-2-2",
        kafedra: "ПОВТ",
        typeLearning: "Очная",
        lesson: ["МДК-02-02", "МДК-02-02", "МДК-04-01", "МДК-03-03"],
        isStudent: false 
    },
    {
        name: "Bob", 
        age:  37, 
        isKurator: true,
        kuratorGroup: "ИС-2-1",
        kafedra: "Инф. технологии",
        typeLearning: "Очная",
        lesson: ["МДК-02-01", "МДК-02-03", "МДК-04-02", "МДК-03-01"],
        isStudent: false 
    }
];

let count = 1;
let personName = college[count]["name"];
let personAge = college[count]["age"];
let personCash = college[count]["cash"];
let pointIsStudent = college[count]["isStudent"];
let pointisKurator = college[count]["isKurator"];
let pointkuratorGroup = college[count]["kuratorGroup"];

if (pointIsStudent === true) {
    console.log(`Вы выбрали студента ${personName}`);
    if (personAge >= 18) {
        console.log(`Студент ${personName} совершеннолетний, ему ${personAge}`);
    }
    else {
        console.log(`Студент ${personName} не совершеннолетний, ему ${personAge}`);
    }

    if (personCash >= 4500) {
        console.log(`Студент ${personName} получает повышенную стипендию, ${personCash} руб.`);
    }
    else if (personCash < 4500 && personCash > 0) {
        console.log(`Студент ${personName} не получает обычную стипендию, ${personCash} руб.`);
    }
    else {
        console.log(`Студент ${personName} не получает стипендию.`);
    }
}
else if (pointIsStudent === false) {
    console.log(`Вы выбрали преподавателя ${personName}`);
    if (pointisKurator === true) {
        console.log(`Преподаватель ${personName} куратор группы ${pointkuratorGroup}`);
    }
}