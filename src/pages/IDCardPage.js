import { useContext } from "react";
import { UserContext } from '../context/UserContext'
import { useNavigate } from "react-router-dom";
import assets  from "../assets/assets";




const IDCardPage = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();


  const handlePrint = () =>{
    window.print();
  } 
    
  

  


  return (
    <div>
      <div  className="photo" >
      <img src={assets.school} alt=""  />
      <h1> FEDERAL UNIVERSITY OF KASHERE</h1>
      <br />
      <h2>GOMBE STATE</h2>
      <br />
      <h3>P.M.B,0182,Gombe State</h3>
      <br />
      <h4>STUDENTS IDENTITY CARD</h4>
       
      
      </div>
      <div className="details">
      {userData.image && (
        <img src={userData.image} alt="User" />
      )}
      <p>Name: {userData.name}</p>
      <p>Matric No: {userData.matric} </p>
      <p>Faculty/Dept: {userData.faculty} </p>
      <p>Prog/Studies: {userData.program} </p>
      <p>State of Origin: {userData.state} </p>
      <p>B/Group: {userData.blood} </p> {userData.image && ( <img src={userData.image} alt="User"  /> ) }
      <p>Expected Yr Of Graduation: {userData.expect} </p> <p>Holder's Sign</p>
      </div>
      <button onClick={handlePrint} >Print / Download your IDcard</button>
      <button onClick={() =>
        navigate('/exam-card')} > Go To Exam Card </button> 

    </div>
  );
};

export default IDCardPage;