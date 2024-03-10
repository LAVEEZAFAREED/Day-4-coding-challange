//Day 4 coding challange
// Question 1: Choose two of the program you've written,and add at least one comment to each.if the program
//are straightfarward at this point,just add your name and the current data at the top of each program file.
//Then,write one sentence describing what the program does.
//Laveeza, 2024-03-10
//This program prints a personal message.
var myName = "Laveeza";
console.log("Hello ".concat(myName, ",would you like to learn some typescript today"));
//Question 2: Store the name of a few of your friends in an array called names.Print each person's name by accessing each element in the list,one at a time
var names = ["Arshmah", "Areeba", "Alishba"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Question 3:Greetings:Use the array from Exercise 2.Instead of just printing each person's name,print a message to them.
var Names = ["Arshmah,Areeba,Alishba"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", will you come to the birthday party tomorrow?"));
}
