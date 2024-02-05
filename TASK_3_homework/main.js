let product = [
    {
        name: "Телевизор",
        price: 128799,
        inStoke: true,
        brand: "LG",
        specifocations: {
            smartTV: true,
            inch: 65,
            color: "Black"
        },
        discount: {
            percentage: 25,
            expirationDate: "27.02.2024"
        }
        
    }
];

let customer = [
    {
        name: "Britney",
        budget: 109000
    }
];


let personBudget = customer["budget"]; //бюджет покупателя
let personName = customer["name"]; //имя покупателя
let pointInStoke = product["inStoke"]; //наличие товара
let pointName = product["name"]; //что за товар (телевизор)
let pointBrand = product["brand"]; //бренд товара
let pointColor = product["specifocations"]["color"]; //цвет товара
let pointSmart = product["specifocations"]["smartTV"]; //есть ли смарт тв
let pointInch = product["specifocations"]["inch"]; //дюймы экрана товара (телевизора)

let productDiscount = product["price"] * (100 - product["discount"][percentage])/100; //цена товара со скидкой



if (personBudget >= productDiscount) {
    console.log(`Бюджет ${personName} позволяет купить выбранный товар`);
    if (pointInStoke === true) {
        console.log(`${pointName}, стоимость с учетом скидки ${productDiscount} руб., в наличии, бренд: ${pointBrand}`);
        console.log(`Цвет: ${pointColor}, наличие smart TV: ${pointSmart}, экран дюймов: ${pointInch}`);
    }
    else {
        console.log("Но товара, к сожалению, нет в наличии");
    }
    
}
else if (personBudget >= productDiscount) {
    let enoughMoney = productDiscount - personBudget; //сколько не хватает для покупки
    console.log(`К сожалению, ${personName} не хватает enoughMoney руб. для покупки желаемого товара, даже с учётом скидки`);
}

