// -------------------- Question 1------------------------

// var itemArray =[
//     {name:"juice",price:"50",quantity:"3"},
    
//     {name:"cookie",price:"30",quantity:"9"},
     
//     {name:"shirt",price:"880",quantity:"1"},
//     {name:"pen",price:"100",quantity:"2"}
// ];
// var grandTotalPrice=0;
// for(var item in itemArray){
//     console.log("Total Price of "+itemArray[item].name+" = "+itemArray[item].price*itemArray[item].quantity);
//     grandTotalPrice+= itemArray[item].price*itemArray[item].quantity;
// }
// console.log("Total price of All items = "+grandTotalPrice);


// -------------------- Question 2------------------------

// var data ={
//     name:"Haris",
//     email:undefined,
//     password:undefined,
//     age:18,
//     gender:'M',
//     city:"Karachi",
//     country:"Pakistan"
// };
// console.log("Age is a property = "+data.hasOwnProperty("age"));
// console.log("Country is a property = "+data.hasOwnProperty("country"));
// console.log("FirstName is a property = "+data.hasOwnProperty("FirstName"));
// console.log("LastName is a property = "+data.hasOwnProperty("LastName"));

// -------------------- Question 3------------------------

// function Question3(name,gender,age){
//     this.name=name;
//     this.gender=gender;
//     this.age=age;
// }
// var record1=new question3("Haris","Male",21);
// var record2=new question3("Zeshaan","Male",23);
// var record3=new question3("zohaira","Female",25);

// console.log("Data 1 \n"+"Name = "+record1.name+", Age = "+record1.age+", Gender = "+record1.gender);
// console.log("Data 2 \n"+"Name = "+record2.name+", Age = "+record2.age+", Gender = "+record2.gender);
// console.log("Data 3 \n"+"Name = "+record3.name+", Age = "+record3.age+", Gender = "+record3.gender);


// -------------------- Question 4------------------------

// function Population(name,gender,education,profession){
//     this.name=name;
//     this.education=education;
//     this.gender=gender;
//     this.profession=profession;
// }

// function Func(){
// var M=document.getElementById("M");
// var F=document.getElementById("F");
// var G=document.getElementById("edu1");
// var U=document.getElementById("edu2");
// var p=document.getElementById("pro1");
// var Gov=document.getElementById("pro2");
// if(M.checked==true)
// {
//     var person1=new Population("Haris",M.value);
// }
// else if(F.checked==true)
// {
//     var person2=new Population("Romaisa",F.value);
// }
// else if(G.checked==true)
// {
//     person1.education=G.value;
// }
// else if(U.checked==true)
// {
//     person2.education=U.value;
// }
// else if(P.checked==true)
// {
//     person1.profession=P.value;
// }
// else if(Gov.checked==true)
// {
//     person2.profession=Gov.value;
// }
// }
