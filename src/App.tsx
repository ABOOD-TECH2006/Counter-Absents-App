import "./App.css";
import Student from "./Components/Student.Component/Student";
import { IStudents } from "./types";
import { useState } from "react";
import React from "react";
function App() {
  const Courses_List: string[] = ["HTML", "CSS", "REACT"];
  const InitialList: Array<IStudents> = [
    {
      id: "123",
      CoursesList: Courses_List,
      age: 20,
      IsGraduated: true,
      name: "abood",
    },
    {
      id: "456",
      CoursesList: [
        "HARVARD CS50",
        "SOFTWARE ENGINEERING",
        "UI UX",
        "English Language",
        "English Language",
      ],
      age: 16,
      IsGraduated: false,
      name: "Modmod",
    },
    {
      id: "789",
      CoursesList: Courses_List,
      age: 19,
      IsGraduated: true,
      name: "MOHAMMED",
    },
    {
      id: "101122",
      CoursesList: Courses_List,
      age: 12,
      IsGraduated: false,
      name: "ALI",
    },
  ];
  const [studentsList, SetstudentsList] = useState<IStudents[]>(InitialList);
  const [TotalAbsents,SetTotalAbsents] = useState(0)
  const removeFirstStudent = () => {
    const newList = [...studentsList];
    newList.shift();
    SetstudentsList(newList);
  };
  const removeLastStudent = () => {
    const newList = [...studentsList];
    newList.pop();
    SetstudentsList(newList);
  };
   const HandleAbsentsChange = (name:string,change:number)=>{
    console.log("OnAbsentsChange");
    console.log(`The Name Is: ${name} and the Absents Is : ${change}`);
    SetTotalAbsents(TotalAbsents + change)
    
   }
  return (
      <div className="App">
        <h1 style={{ color: "lightgreen" }}>Welcome to GSG React Course</h1>
          <button onClick={removeFirstStudent} style={{ width: "150px" }}>
            remove First Student
          </button>
          <button onClick={removeLastStudent} style={{ width: "150px" }}>
            remove Last Student
          </button>
          <br />
          <b>Total Absents : {TotalAbsents}</b>
        {studentsList.map((student, index) => (
          <Student
            key={index + student.toString()}
            id={student.id}
            CoursesList={student.CoursesList}
            age={student.age}
            IsGraduated={student.IsGraduated}
            name={student.name}
            OnAbsentsChange={HandleAbsentsChange}
          />
        ))}
      </div>
  );
}

export default App;
