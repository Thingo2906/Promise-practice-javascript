let number = 40
let URL = `http://numbersapi.com/${number}?json`;
$.getJSON(URL, function(res){
    fact=res
    console.log(fact)
},err =>{console.log(err)});

let numbers =[10, 3, 20]
$.getJSON(`http://numbersapi.com/${numbers}?json`).then(data =>
      console.log(data));

let fourFacts =[]
for (let i=0; i<5; i++){
    fourFacts.push($.getJSON(URL))
};
Promise.all(fourFacts)
       .then(data =>{
        for (res of data){
            $("body").append(`<p>${res.text}</p>`)
        }})
    




