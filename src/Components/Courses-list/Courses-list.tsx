interface Iprops {
  list: string[];
}
const CoursesList = (props: Iprops) => {
  return (
    <>
      <ul>
        {/* //! the time that you type map keep in mind we have to add a key list to
        //! each element and you must add the key on the root element and the root
        //! element here is li */}
        {props.list.map((item,index) => (
          <li key={index + item}><b>{item}</b> </li>
          
          
        ))}
      </ul>
    </>
  );
};
export default CoursesList;
