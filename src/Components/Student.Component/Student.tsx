import CoursesList from "../Courses-list/Courses-list";
import "./Student.css";
import { IStudents } from "../../types";
import { useState } from "react";
interface Iprops extends IStudents {
  OnAbsentsChange: (name: string, change: number) => void;
}
// interface Iprops {
//   name: string;
//   age: number;
//   IsGraduated: boolean;
//   CoursesList:string[];
// }
const Student = (props: Iprops) => {
  // console.log(props.name);
  const [Absents, setAbsents] = useState(0); // start with 0 or another number

  const addAbsent = () => {
    setAbsents(Absents + 1); //! why we don't do this becasue react gather set updates togethor at make all of them at one time to prevent making too many re-renders and make probs with the  CPU
    // setAbsents((oldValue) => oldValue + 1); //! This way is better why to keep updated with you with the last value
    props.OnAbsentsChange(props.name, +1);
  };
  const removeAbsent = () => {
    if (Absents - 1 >= 0) {
      setAbsents(Absents - 1);
    }
    props.OnAbsentsChange(props.name, -1);
    // setAbsents((oldValue) => oldValue - 1); //! This way is better
  };
  const reset = () => {
    setAbsents(0);
    props.OnAbsentsChange(props.name, - Absents);
  };
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
      <div>
        <button onClick={removeAbsent}>-</button> <b>Absent: {Absents}</b>
        <button onClick={addAbsent}>+</button>
        <button style={{ width: "50px" }} onClick={reset}>
          resset
        </button>
      </div>

      <CoursesList list={props.CoursesList} />
      <hr />
    </div>
  );
};
export default Student;
