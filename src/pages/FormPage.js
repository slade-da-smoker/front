import React from 'react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'




const FormPage = () => {
    const {setUserData} = useContext(UserContext);
    const [formData,setFormData] = useState({
        passport:'',
        name:'',
        matric:'',
        faculty:'',
        program:'',
        state:'',
        blood:'',
        expect: Date,
        sign: '',
        session: '',
        semester: '',
        level : '',
        course: ''
    });



    

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]:e.target.value});
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, image: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(formData);
        navigate('/id-card');
    };

    

  return (
    <form  onSubmit={handleSubmit}>
        <label >
            upload a sample passport: <input type='file' accept='image/*' name='passport' onChange={handleImageChange} required />
        </label>
        <br/>
        <label >
            Names: <input  name='name' placeholder='full name' onChange={handleChange} required />
        </label>
        <br/>
        <label >
            Matric No: <input  name='matric' placeholder='registration number' onChange={handleChange} required />
        </label>
        <br/>
        <label >
            Faculty/Dept: <input  name='faculty' placeholder='faculty / department' onChange={handleChange} required />
        </label>
        <br/>
        <label >
            Prog/Studies: <input  name='program' placeholder='program of study' onChange={handleChange} required />
        </label>
        <br/>
        <label >
            State of Origin: <input  name='state' placeholder='state of origin' onChange={handleChange} required />
        </label>
        <br/>
        <label >
            B/Group: <input  name='blood' placeholder='your blood group' onChange={handleChange} required />
        </label>
        <br/>
        <label >
            Expected Yr Of Graduation: <input type='date' name='expect' placeholder='full name' onChange={handleChange} required />
        </label>
        <label >
            <input type='file' name='sign' accept='image/*' placeholder='picture of your signature' onChange={handleImageChange} required />
            <br />
            Holder's Sign
        </label>
        <br/>
        <label >
            session: <input  name='session' placeholder='current academic session' onChange={handleChange} required />
        </label>
        <br/>
        <label >
            semester: <input  name='semester' placeholder='currrent semest' onChange={handleChange} required />
        </label>
        <br/>
        <label >
            course: <input  name='course' placeholder='course of study' onChange={handleChange} required />
        </label>
        <br/>
        <label >
            level: <input  name='level' placeholder='your current level' onChange={handleChange} required />
        </label>
        <br/>
        
        <button type='submit' >Generate ID</button>
    </form>
  )
}

export default FormPage;