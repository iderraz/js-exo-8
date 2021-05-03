/*exo1*/ 
let salut = "salut";
let tabExo = ["hello", salut, 10, 20, false];
console.log(tabExo);

/*exo2*/ 
console.log(tabExo.length);

/*exo3*/ 
tabExo.pop(),
console.log(tabExo);

/*exo4*/ 
tabExo.shift();
console.log(tabExo);

/*exo5*/
tabExo.push("hey", "ho");
console.log(tabExo);

/*exo6*/ 
tabExo.unshift("wesh","les", "potos");
console.log(tabExo);

/*exo7*/ 
console.log(tabExo.reverse());

/*exo8*/ 

let boite = ["objet1", " objet2"]
alert(boite);
console.log(boite);

boite.unshift(" objet0");
alert(boite);

boite.push(" item1", " item2", " item3");
alert(boite);

console.log(boite.slice(3));

boite.splice(1,0, "ajout")


alert(boite.length);

boite.splice(5,2);
boite.splice(0,5);
alert(boite);
console.log(boite);

