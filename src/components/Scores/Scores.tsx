import "./Scores.scss"

import { PDFDocument } from '../../types/pdf';
//import music from "../../assets/documents/MarShawn.pdf"
import { PDFSelector } from '../PDFSelector/PDFSelector';
import { PDFViewer } from '../PDFViewer/PDFViewer';
//import { samplePDFs } from '../../assets/documents/samplePDFs';
import { useState } from 'react';

const Scores = () => {
    const [selectedPDF, setSelectedPDF] = useState<PDFDocument | null>(null);
    return (
        <div className="scores" id="scores">
            <h2>Scores</h2>
            <div className="h-screen bg-gray-100 flex">
                <PDFSelector
                    //pdfs={samplePDFs}
                    selectedPDF={selectedPDF}
                    onSelectPDF={setSelectedPDF}
                />
                <PDFViewer selectedPDF={selectedPDF} />
            </div>
        </div>
    )
}
export default Scores