
// SLAPTAŽODIS:
// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."
// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"

function checkPassword (originalPassword) {

let password = originalPassword.trim() //trim f-ja ignoruoja tarpus. ieskot google "trim string", kaip pvz siuo atveju galetu buti 3 raides slaptazodyje ir 14 tarpu.
let passwordLength = password.length 

if (!password.includes('#')){
    console.log('Slaptažodis privalo turėti grotažymes')
}   else if (passwordLength < 16) {
    console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
}   else if (passwordLength < 21) {
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
}   else {
    console.log('Slaptažodis tinkamas')
}
}
//  checkPassword ('jadgsvljdhsvghsaldjhfg')
//  checkPassword ('kajhgdsfjlhgsss#')
//  checkPassword ('kjhkjh')

// AMŽIUS:
// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.4. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// 9. Panaudoti prompt funkciją amžiui įvesti.

function checkAge (age) {

if (isNaN(age)){
    console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
} else if (age < 0) {
    console.log('įvestas amžius yra per mažas')
} else if (age < 6) {
    console.log('į mokyklą neina.')
} else if (age < 7) {
    console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (age < 10) {
    console.log('Pradinukas')
} else if (age < 11) {
    console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (age < 14) {
    console.log('Pagrindinė')
} else if (age < 15) {
    console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (age < 18) {
    console.log('Gimnazija')
} else if (age < 19) {
    console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (age < 120) {
    console.log('Mokyklą baigė')
} else {
    console.log('Įvestas amžius yra per didelis')
} 
}

// checkAge (14)
// checkAge (80)
// checkAge ('hello')


// GALVOSŪKIS: sukurti galvosūkį su keletu klausimu

// PIRMAS LYGIS:

// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

function firstGameLevel(playerAnswer11, playerAnswer12) {

// Artimiausia nuo Žemės esanti Žvaigždė?
    let correctAnswer11 = 'sun'
    let correctAnswer12 = 579


if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi.')
  } else if (correctAnswer12 === playerAnswer12) {
    console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
  } else if (correctAnswer11 === playerAnswer11) {
    console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
  } else {
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
  }
}

// firstGameLevel('moon', 485)
// firstGameLevel('sun', 579)

function secondGameLevel(playerAnswer1, playerAnswer2){
// ANTRAS LYGIS
let correctAnswer1 = 1
let correctAnswer2 = 1

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

if (correctAnswer1 === playerAnswer1 && correctAnswer2 === playerAnswer2) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi.')
  } else if (correctAnswer2 === playerAnswer2) {
    console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
  } else if (correctAnswer1 === playerAnswer1) {
    console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
  } else {
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
  }
}

// secondGameLevel(2, 2)
// secondGameLevel(2, 1)
// secondGameLevel(1, 1)


//   TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.
function thirdGameLevel (playerAnswer1, playerAnswer2, playerAnswer3) {

let correctAnswer1 = 1
let correctAnswer2 = 1
let correctAnswer3 = 1


let answer1 = correctAnswer1 === playerAnswer1
let answer2 = correctAnswer2 === playerAnswer2
let answer3 = correctAnswer3 === playerAnswer3

let output = ''

if (answer1 && answer2 && answer3) {
  output = 'Patekai: visi teisingi'
} else if (answer1 && answer2) {
  output = 'Patekai: bet trečias neteisingas'
} else if (answer1 && answer3) {
  output = 'Patekai: bet antras neteisingas'
} else if (answer2 && answer3) {
  output = 'Patekai: bet pirmas neteisingas'
} else if (answer1) {
  output = 'Nepatekai: bet pirmas teisingas'
} else if (answer2) {
  output = 'Nepatekai: bet antras teisingas'
} else if (answer3) {
  output = 'Nepatekai: bet trečias teisingas'
} else {
  output = 'Nepatekai: visi neteisingi :('
}

console.log(output)
}

// thirdGameLevel(1, 2, 3)
// thirdGameLevel(1, 1, 1)
// thirdGameLevel(2, 1, 1)

// PASISVEIKINIMAS:
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

function greeting(time, isLoggedIn = false, userName = '', isBirthday = false){

let greetingText = ''
let nameText = ''
let birthdayText = ' '

if (time >= 5 && time < 13) {
    greetingText = 'Good Morning'
}   else if (time >= 13 && time < 19) {
    greetingText = 'Good Afternoon'
}   else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
    greetingText = 'Good Evening'
}   else {
    greetingText = 'Hello'
}

if (isLoggedIn && userName !== '') {
  nameText = `, ${userName}`
}

if (isLoggedIn && isBirthday)
    birthdayText = ' and have a great Birthday'



let greetingOutput = greetingText + nameText + birthdayText

console.log(greetingOutput)
}
greeting(10, true, 'John', false)
greeting(13)
greeting(17, true, 'John', true)