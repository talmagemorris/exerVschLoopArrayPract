var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]
for(let x = 0; x < peopleWhoWantToSeeMadMaxFuryRoad.length; x++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[x].age >= 18){
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " Is Old Enough");
    }else {
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " Is Not Old Enough");
    } 
}
