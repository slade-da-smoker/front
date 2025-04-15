import { useEffect, useState } from "react";
import axios from 'axios';

const PDFPreview = () => {
    const [pdfs, setPdfs] = useState([]);

    useEffect(() => {
        const fetchPDFs = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/pdfs');
                setPdfs(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchPDFs();
    }, []);

    return (
        <div>
            <h3>Uploaded PDFs</h3>
            {pdfs.map((pdf) => (
               <div key={pdf._id}>
                <p>{pdf.originalName}</p>
                <iframe src={`http://localhost:5000${pdf.filePath}`} width='100%'
                 frameborder="0"
                 height='500px'
                 title={pdf.originalName} />
               </div>
            ) )}
        </div>
    );
};
export default PDFPreview;