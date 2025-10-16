import CoursesList from "../Courses-list/Courses-list";
import "./Student.css";
import { IStudents } from "../../types";
import { useState } from "react";
interface Iprops extends IStudents{}
// interface Iprops {
//   name: string;
//   age: number;
//   IsGraduated: boolean;
//   CoursesList:string[];
// }
const Student = (props: Iprops) => {
  // console.log(props.name);
const [Absents, setAbsents] = useState(0); // start with 0 or another number

 const addAbsent = ()=>{
  setAbsents(Absents + 1)
 }

  return (
    <div className="st-wrapper">
      <div>
        <b>Student:</b> {props.name.toUpperCase() + "!"}
      </div>
      <div>
        <b>Age:</b>
        {props.age}
      </div>
      <div>
        <b>IsGraduated:</b> {props.IsGraduated ? "Yes" : "No"}
      </div>
      <div><b>Absent: {Absents}</b> <button onClick={addAbsent}>Click</button> </div>
      
      <CoursesList list={props.CoursesList}/>
      <hr />
    </div>
  );
};
export default Student;
