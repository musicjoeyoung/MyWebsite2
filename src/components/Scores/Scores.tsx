import "./Scores.scss"

import { useEffect, useState } from 'react';

import { PDFDocument } from '../../types/pdf';
//import music from "../../assets/documents/MarShawn.pdf"
import { PDFSelector } from '../PDFSelector/PDFSelector';
import { PDFViewer } from '../PDFViewer/PDFViewer';
import { Work } from '../../types/works';
import worksData from '../../assets/data/works.json';

const Scores = () => {
    const [selectedPDF, setSelectedPDF] = useState<PDFDocument | null>(null);
    const [works, setWorks] = useState<Work[]>([]);

    useEffect(() => {
        setWorks(worksData as Work[]);
    }, []);

    return (
        <div className="scores" id="scores">
            <h2>Scores</h2>
            <div className="h-screen bg-gray-100 flex">
                <PDFSelector
                    //pdfs={samplePDFs}
                    selectedPDF={selectedPDF}
                    onSelectPDF={setSelectedPDF}
                />
                <PDFViewer selectedPDF={selectedPDF} works={works} />
            </div>
        </div>
    )
}
export default Scores