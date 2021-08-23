//HOMEWORK-1 
const name=prompt('Введите имя: ');
const sName=prompt('Введите фамилию: ');
let age=prompt('Введите возраст: ');
age=Number(age);

const user = {
 name: name,
 sName: sName,
 age: age
};

console.log(user);


let useNum1;
let i=1;

function myFunkLes2(){
  useNum1 = +prompt("Введите любое число: ");
  
  while (i < useNum1) {
    if (i%4) {
      console.log (i);
    }
    i++;
  }
  console.log(useNum1);
}

btnLes2.onclick=myFunkLes2;


//part-2

let number = prompt("Введите целое неотрицательное число:");
if (number !== null && !isNaN(number) && +number >= 0 && number !== "") {
    number = +number;
    let i = 1;
    let factorial = 1;
    while (i <= number) {
        factorial *= i;
        i++;
    }
    console.log(factorial);
}
else {
console.log("Вы ввели неправильное число или нажали кнопку 'отмена'");
}


//part-3-4

let number = prompt("Введите число:");
let power = prompt("Введите степень числа (дробная часть будет отброшена):");
let result = 1;
if (number !== null && !isNaN(number) && power !== null && !isNaN(power) && number !== "" && power !== "") {
  power = +power;
  number = +number;
  if (power < 0) {
    for (let i = -1; i >= power; i-- ) {
      result *= number;
    }
    result = 1 / result;
  }
  else if (power > 0) {
    for (let i = 1; i <= power; i++ ) {
      result *= number;
    }
  }
  console.log(result);
}
else {
  console.log("Данные были введены не верно")
}

//part-5

let rand = Math.floor(1 + Math.random() * 10);
let number;
while(true) {
    number = prompt("Введите число:");
    if (number == rand) {
        console.log("Верно!");
        break;
    }
    else if (number === null) {
        console.log("Отменено");
        break;
    }
console.log("Вы не угадали!")
}



//HOMEWORK-3

//part-1
function checkAge () {
 let age = prompt( "Введите ваш возраст:");
 age > 18 ? alert( "Успешно!" ) : checkAge()
}

checkAge();

  //part-2
  function add(x, y) {
   return x + y;
}

 function subtract(x, y) {
   return x - y;
}

 function divide(x, y) {
   return x/y;
}

 function multiply(x, y) {
   return x*y;
}

console.log(add(6, 9));
console.log(subtract(6, 9));
console.log(divide(6, 9));
console.log(multiply(6, 9));


//part-3
const add = addCreator();
const add5 = addCreator(5);
const add6 = addCreator(6);

console.log(add());
console.log(add(2));
console.log(add5(3));
console.log(add6(3));
console.log(addCreator(1)(3));

function addCreator(base = 0) {
    return function (step = 1) {
        return base + step;
    }
}


//part-4 дополнительное задание не делала, т.к. не разобралась до конца


//HOMEWORK-4
const developers = [
 {
     index:0,
     name:"Брендан Эйх",
     work: "специалист в области информатики, программист, технический директор"
 },
 {
     index:2,
     name: "Джеймс Гослинг",
     work: "специалист в области информационных технологий"
 },
 {
     index:3,
     name: "Бьёрн Страуструп",
     work: "программист"
 }
]

const data = [
 {
     name:"JavaScript",
     year: 1995,
     filenameExtensions: "js, mjs",
     influencedBy: ["AWK", "C", "HyperTalk", "Java", "Lua", "Perl", "Python", "Scheme", "Self"],
     affectedBy: ["ActionScript", "AtScript", "CoffeeScript", "Dart", "JScript .NET", "LiveScript", "Objective-J", "Opa", "QML", "Raku", "TypeScript"],
     developerIndex:0,
 },
 {
     name:"Java",
     year: 1995,
     filenameExtensions: "java, class, jar, jad, jmod",
     influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
     affectedBy: ["Ada 2005", "BeanShell", "C#", "Chapel", "Clojure", "ECMAScript", "Fantom", "Gambas", "Groovy", "Hack", "Haxe", "J#", "Kotlin", "PHP", "Python", "Scala", "Seed7", "Vala"],
     developerIndex: 2,
 },
 {
     name:"C++",
     year: 1983,
     filenameExtensions: "cc, cpp, cxx, c, c++, h, hpp, hh, hxx, h++",
     influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
     affectedBy: ["Ada", "C", "Modula-2", "Simula"],
     developerIndex: 3,
 },
];

let delay = 10;
alert(`Информация будет выведена через ${delay} секунд в консоль!`);
for (let i = 0; i < delay; i++) {
 let step;
 step = i*1000;
 let timer = setTimeout(() => {
     console.log(delay - i)
 }, step);
};
let launch = setTimeout(() => {
 for (let i = 0; i < 3; i++) {
     console.log(` `);
     printLanguageStory(i);
 }
}, (delay*1000));

function printLanguageStory (languageNumber) {
 let languageName = data[languageNumber].name;
 let languageYearOfRelease = data[languageNumber].year;
 let languageDeveloperName = developers[languageNumber].name;
 let languageDeveloperWork = developers[languageNumber].work;
 let languageFileExtensions = "." + data[languageNumber].filenameExtensions.split(", ").join(", .");
 let languagesInfluencedByQty = data[languageNumber].influencedBy.length;
 let languagesInfluencedBy = languagesInfluencedByQty > 4 ? 
     data[languageNumber].influencedBy.slice(0, 4).join(", ") + " и другие языки программирования" : 
     data[languageNumber].influencedBy.join(", ");
 let languagesAffectedBy = data[languageNumber].affectedBy.join(", ");
 console.log(`${languageName} - язык программирования, выпущенный в ${languageYearOfRelease} году.`);
 console.log(`Автором языка программирования стал ${languageDeveloperName} - ${languageDeveloperWork}.`);
 console.log(`Файлы программ, написанных на ${languageName}, могут иметь расширения ${languageFileExtensions}.`);
 console.log(`${languageName} испытал влияние ${languagesInfluencedByQty} языков программирования: ${languagesInfluencedBy}.`);
 console.log(`${languageName} повлиял на ${languagesAffectedBy}.`);
}; 



