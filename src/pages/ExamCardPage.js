import {useContext} from 'react';
import { UserContext } from '../context/UserContext';
import assets from '../assets/assets'
import { useLocation } from 'react-router-dom';

const ExamCardPage = () => {
  const {state} = useLocation();
  const {courses} = state;



  const { userData } = useContext(UserContext);

  const handlePrint = () => {
    window.print();
  }

  return (
    <div>
      <div>
      <img src={assets.school} alt='school' />
      <h1> FEDERAL UNIVERSITY OF KASHERE
        <br />
              FACULTY OF {userData.faculty}
              <br />
              DEPARTMENT OF {userData.program}
              <br />
              EXAMINATION CARD
      </h1>
      {userData.semester} , {userData.session}
      {userData.image && (
        <img src={userData.image} alt='User' style={{width: '{sx:50px} 150px', height: '{sx:30px} 150px', objectFit: 'cover {sx:cover}'  }} />
      )}
      <p>Course: { userData.course }</p>
      <p>Level: {userData.leve} </p>
      <p>Date: {userData.expect} </p>
      <p>Reg.No: {userData.matric} </p>
      <p>Name: {userData.name} </p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>Course</th>
              <th>CourseCode</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {course.courseName} </td>
                <td> {course.courseCode} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handlePrint} ></button>
      

    </div>
    
  );
};
export default ExamCardPage;