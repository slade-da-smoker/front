import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EformPage() {
        const [courseName,setCourseName] = useState('');
        const [courseCode, setCourseCode] = useState('');
        const [courses,setCourses] = useState([]);
        const [pdf, setPdf] = useState(null);

        const handleChange = (e) => {
            setPdf(e.target.files[0]);
        }

        const handleUpload = async () => {
            if (!pdf) return alert('Please select a PDF file');
            const formData = new FormData();
            formData.append('pdf', pdf);

            try {
                const res = await axios.post('http://localhost:5000/api/upload/pdf', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                alert('PDF uploaded successfully: ' + res.data.path );
            } catch(err) {
                alert('Upload failed: ' + err.response?.data?.msg || err.message );
            }
        };

        const navigate = useNavigate();


        const handleAddCourse = () => {
            if (courseName.trim() !== '' && courseCode.trim() !== '') {
                setCourses([ ...courses,
                    { courseName, courseCode}
                ]);
                setCourseName('');
                setCourseCode('');
            }
        };

        const handleViewCourses = () => {
            navigate('/exam-card', {state: { courses }});
        };

        return (
            <div>
                <input type="text" value={courseName} onChange={(event) => setCourseName(event.target.value)}
                placeholder="Enter course name" required />
                <input type="text" value={courseCode} onChange={(event) => setCourseCode(event.target.value)}
                placeholder="Enter Course code" />
                <button onClick={handleAddCourse} > Add Course </button>
                <button onClick={handleViewCourses} > View Courses </button>
                <div>
                    <input type="file" accept="application/pdf" onChange={handleChange} />
                    <button onClick={handleUpload}>Upload PDF</button>
                </div>
            </div>
        );
}

export default EformPage;