// Using filter method.......
const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];

let fil= employees.filter(function( val){
	   
	   return val.age>30;
})
 console.log(fil)
  
  