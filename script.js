// console.log("ahoj světe");
// alert("Pozdrav z Javasriptu");
const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
];
const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];
//console.log(CATEGORIES.find(el=>el.name=="society").color);

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
// const factsList = document.querySelector("ul");
const factsList = document.querySelector(".facts-list");

//console.log(factsList);
//Clear and Create DOM elements: Render facts in list
factsList.innerHTML="";

//Load data from Supabase
loadFacts();

//Project URL from Supabase:
//https://mmawxoeqqzchugydftpq.supabase.co
//Project Api Keys from Supabase
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tYXd4b2VxcXpjaHVneWRmdHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNzI0MjEsImV4cCI6MjAzMTY0ODQyMX0.XnykOw2Af-4KBKjnowumyzraechoT2YjeHokhjlacK8

async function loadFacts(){
    const res = await fetch("https://mmawxoeqqzchugydftpq.supabase.co/rest/v1/facts", {
        headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tYXd4b2VxcXpjaHVneWRmdHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNzI0MjEsImV4cCI6MjAzMTY0ODQyMX0.XnykOw2Af-4KBKjnowumyzraechoT2YjeHokhjlacK8",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tYXd4b2VxcXpjaHVneWRmdHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNzI0MjEsImV4cCI6MjAzMTY0ODQyMX0.XnykOw2Af-4KBKjnowumyzraechoT2YjeHokhjlacK8",    
        }
    });
    const data = await res.json();
    //console.log(data);
    //const filteredData = data.filter(fact=>fact.category === "society");
    //createFactList(filteredData);
    createFactList(data);
};

//createFactList(initialFacts);

/*factsList.insertAdjacentHTML("afterbegin", "<li>1-Jonas</li>");
factsList.insertAdjacentHTML("afterbegin", "<li>2-Mike</li>");
factsList.insertAdjacentHTML("beforeend", "<li>3-Before end</li>");*/

function createFactList(dataArray) {  
    const htmlArr = dataArray.map(
        fact=>'<li class="fact">' +
            '<p>' + fact.text + 
            '<a class="source" href=' + fact.source + 'target="_blank">(Source)</a>' +
            '</p>' +
            //'<span class="tag" style="background-color: #3b82f6;">' + fact.category + '</span>' +
            '<span class="tag" style="background-color: ' + CATEGORIES.find(el=>el.name===fact.category).color + ';">' + fact.category + '</span>' +
            '<div class="vote-buttons">' +
                '<button>👍 ' + fact.votesInteresting + '</button>' +
                '<button>🤯 ' + fact.votesMindblowing + '</button>' + 
                '<button>⛔️ ' + fact.votesFalse + '</button>' +
            '</div>' +
        '</li>'
    );
    //console.log(htmlArr);
    const html = htmlArr.join("");
    // console.log(html);
    factsList.insertAdjacentHTML("beforeend", html);
};


//Toggle form visibility
btn.addEventListener('click', function(){
    // console.log("Click");
    // console.log(btn);
    // console.log(form.classList);
    if(form.classList.contains("hidden")){
        form.classList.remove('hidden');
        btn.textContent = "Close";
    } else {
        form.classList.add("hidden");
        btn.textContent = "Share a fact"; 
    ;}
})

console.log([7, 64, 6, -23, 11].filter(el=>el > 10));
console.log([7, 64, 6, -23, 11].find(el=>el > 10));

/*
let votesInteresting = 23;
let votesMindlowing = 5;
const text = "Lisabon is the capital of Portugal";

votesInteresting = votesInteresting +1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindlowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);
console.log("Fact is correct?:", isCorrect);
console.log("Fact is correct?: " + isCorrect);
*/
/*
function calcFactAge(year) {
    // const currentYear = 2024;
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    if (age>=0) return age;
    else return 'Imposible year, must be less or equal ' + currentYear;
}
const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2028));

const calcFactAge3 = (year) => 2024 - year //stejná funkce jaako pod
const calcFactAge2 = (year) => new Date().getFullYear() >= year? new Date().getFullYear() - year:"Rok musí být menší než " + new Date().getFullYear();
console.log(calcFactAge2(2015));
console.log(calcFactAge2(2028));
/*
const mesto = "Praha";
const str1 = 'Město "${mesto}"';
const str11 = 'Město ' + mesto;
const str111 = 'Město ' + (mesto=="Praha" ? "ano":"ne");
const str2 = "Město ${mesto}";
const str22 = "Město " + mesto;
console.log(str1);
console.log(str11);
console.log(str111);
console.log(str2);
console.log(str22);
*/

//const fact = ['Lisabon is the capital of Portugal', 2015, true];
//console.log(fact[fact.length-1]);
/*
//převod polí na proměnné:
const [text, createdIn, isCorrect] = fact;
console.log(text);
console.log(createdIn);
*/
//let fact2 = ['Lisabon is the capital of Portugal', 2015, true];
//console.log(fact2);
//přidání položky
// 1. metoda
//fact2 = [...fact2, "society"];
// 2. metoda
//fact2[fact2.length]="society"
// 3. metoda
//fact2.push("society");
//4.metoda
//fact2=fact2.concat("society", "další");
//console.log(fact2);
/*
const factObj = {
    text: "Lisabon is the capital of Portugal",
    category: "society",
    createdIn: 2015,
    isCorrect: true,
    createSummary: function(){
        //return 'The fact ${this.text}'; //nefunguje? W7?
        return 'The fact ' + this.text + 'is from the category ' + this.category.toUpperCase();
    }
};
/*
console.log(factObj);
console.log(factObj.text);
console.log(factObj["text"]);
const {category, isCorrect} = factObj;
console.log(category);
console.log(factObj.createSummary());
*/
/*const newFact = [...fact, "society"];
console.log(newFact);

// [2, 4, 6, 8].forEach(function (el) {
//     console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
//     return el*10;
// });
const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];
// CATEGORIES.forEach(function(el){
//     console.log(el);
// });
const allCategories = CATEGORIES.map(el => el.name);
console.log(allCategories);

const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
];

function calcFactAge(year) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    if (age>=0) return age;
    else return 'Imposible year, must be less or equal ' + currentYear;
}

const factAges = initialFacts.map(el=>calcFactAge(el.createdIn));
console.log(factAges);
*/


