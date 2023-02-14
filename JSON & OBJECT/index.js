// var Student1 = {
//     Name: "Fiz",
//     id: 1,
//     Crr_Student : true ,
//     subject : ["Eng","CSE-111","Ban"],
//     Section: {
//         Main: [80,60,70],
//         Math:"A+",
//         CSE_111:"A"
//     }
// }
// var Student2 = {
//     Name: "Shakib",
//     id: 2,
//     Crr_Student : true ,
//     subject : ["Eng","CSE-111","Ban"],
//     Section: {
//         Main: [60,80,90],
//         Math:"A+",
//         CSE_111:"A"
//     }
// }

// console.log(Student2.Section.Main[2]);
//console.log(Student1.Section.Main[1]);
// console.log(Student1.Name);
// console.log(Student1.Crr_Student);
// console.log(Student1.subject[1]);

// function All_Student_details(Name,Dept,sub,id){
//     this.myname = Name , 
//     this.MyDept = Dept ,
//     this.Mysub = sub ,
//     this.MyId = id  
//     this.output = function(){
//         console.log("Student Name = "+this.myname);
//         console.log(" Student Dept = "+this.MyDept);
//         console.log(" Student sub = "+this.Mysub);
//          console.log(" Student Id = "+this.MyId);
//     }
// }

// var std1 = new All_Student_details("Fiz","CSE",["ban","eng","phy","cam"],73);
// var std2 = new All_Student_details("Tamim","BBA",["ban","eng","Bus","cam"],78);

// std1.output();
// std2.output();


// JSON starts here 

// var MyData = require('./index.json');
// console.log(MyData.person[1].AGE);

// var StudentData = require('./Student.json');
// console.log(StudentData.Student_details[0].Email);
// console.log(StudentData.Student_details[0].Language[4]);
// console.log(StudentData.Student_details[0].Teams[0].Name);
// console.log(StudentData.Student_details[0].CGPA);
// convert 
// var data = {
//     Name:"Fiz",
//     id:1,
//     Student:true 
// }
// console.log(JSON.stringify(data));

// console.log(JSON.parse('{"Name":"fiz","dept":"cse","id":1}'));