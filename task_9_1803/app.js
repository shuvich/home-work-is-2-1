const calculate = () => {
    const inputMaterial_1_1 = parseInt(document.querySelector('#material-1-1').value); //h1; .title; #grade-5
    const inputMaterial_1_2 = parseInt(document.querySelector('#material-1-2').value);
    const inputMaterial_2_1 = parseInt(document.querySelector('#material-2-1').value);
    const inputMaterial_2_2 = parseInt(document.querySelector('#material-2-2').value);
    const inputMaterial_3_1 = parseInt(document.querySelector('#material-3-1').value);
    const inputMaterial_3_2 = parseInt(document.querySelector('#material-3-2').value);
    const inputMaterial_4_1 = parseInt(document.querySelector('#material-4-1').value);
    const inputMaterial_4_2 = parseInt(document.querySelector('#material-4-2').value);
    
    if (isNaN(inputMaterial_1_1) || isNaN(inputMaterial_1_2) || isNaN(inputMaterial_2_1) || isNaN(inputMaterial_2_2) || isNaN(inputMaterial_3_1) || isNaN(inputMaterial_3_2) || isNaN(inputMaterial_4_1) || isNaN(inputMaterial_4_2)) {
        alert("Заполните все поля!");
        return;
    }

    const individualResult = {
        '1': (inputMaterial_1_1 * inputMaterial_1_2).toFixed(2),
        '2': (inputMaterial_2_1 * inputMaterial_2_2).toFixed(2),
        '3': (inputMaterial_3_1 * inputMaterial_3_2).toFixed(2),
        '4': (inputMaterial_4_1 * inputMaterial_4_2).toFixed(2),
    };

    let resultSum = parseInt(individualResult[1]) + parseInt(individualResult[2]) + parseInt(individualResult[3]) + parseInt(individualResult[4]);
    console.log(resultSum);

    const resultDiv = document.querySelector('#result');

    resultDiv.innerHTML = `
        <p>Итоговая сумма: ${resultSum}<p>
    `;

    // resultDiv.innerHTML = `
    //     <p>Цемент: ${percentages[1]}%<p>
    //     <p>Крипичи: ${percentages[2]}%<p>
    //     <p>Доски: ${percentages[3]}%<p>
    //     <p>Работники: ${percentages[4]}%<p>
    // `;


}