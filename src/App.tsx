import "./App.css";
import Student from "./Components/Student.Component/Student";
import {IStudents} from "./types"
function App() {

  const Courses_List: string[] = ["HTML", "CSS", "REACT"];
  const studentsList: Array<IStudents> = [
    { id:"123" ,
      CoursesList: Courses_List,
      age: 20,
      IsGraduated: true,
      name: "abood",
    },
    { id:"456" ,
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
    { id:"789" ,
      CoursesList: Courses_List,
      age: 19,
      IsGraduated: true,
      name: "MOHAMMED",
    },
    { id:"101122" ,
      CoursesList: Courses_List,
      age: 12,
      IsGraduated: false,
      name: "ALI",
    },
  ];

  

  return (
    <div className="App">
      
      <h1 style={{ color: "lightgreen" }}>Welcome to GSG React Course</h1>
      {studentsList.map((student, index) => (
        <Student
          key={index + student.toString()}
          id={student.id}
          CoursesList={student.CoursesList}
          age={student.age}
          IsGraduated={student.IsGraduated}
          name={student.name}
        />
        
      ))}
    </div>
  );
}

export default App;
