//Day 4 coding challange
// Question 1: Choose two of the program you've written,and add at least one comment to each.if the program
//are straightfarward at this point,just add your name and the current data at the top of each program file.
//Then,write one sentence describing what the program does.

//Laveeza, 2024-03-10
//This program prints a personal message.
var myname: string = "Laveeza";
console.log(`Hello ${myName},would you like to learn some typescript today`);

//Question 2: Store the name of a few of your friends in an array called names.Print each person's name by accessing each element in the list,one at a time
var names: string[] = ["Arshmah","Areeba","Alishba"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} 

//Question 3:Greetings:Use the array from Exercise 2.Instead of just printing each person's name,print a message to them.
var  Names: string[] = ["Arshmah,Areeba,Alishba"];
for (let name of names) {
    console.log(`Hello ${name}, will you come to the birthday party tomorrow?`);
}
