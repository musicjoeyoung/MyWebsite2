import './PDFSelector.scss';

import { ChevronRight, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

import { PDFDocument } from '../../types/pdf';
import React from 'react';
import axios from 'axios';

interface PDFSelectorProps {
    selectedPDF: PDFDocument | null;
    onSelectPDF: (pdf: PDFDocument) => void;
}

export const PDFSelector: React.FC<PDFSelectorProps> = ({
    selectedPDF,
    onSelectPDF,
}) => {

    const [scores, setScores] = useState<PDFDocument[]>([]);
    const [scoresInViewport, setScoresInViewport] = useState(false);

    useEffect(() => {
        fetchPDFs();
    }, []);

    useEffect(() => {
        const scoresElement = document.getElementById('scores');
        if (!scoresElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScoresInViewport(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        observer.observe(scoresElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    const fetchPDFs = async () => {
        try {
            const response = await axios.get<PDFDocument[]>('https://josephmyoung-back.musicjoeyoung.workers.dev/api/pdfs');
            setScores(response.data);
            //console.log("Fetched PDFs:", response.data);
        } catch (error) {
            console.error("Error fetching PDFs:", error);
        }
    };

    return (
        <div className={`pdf-selector ${scoresInViewport ? 'scores-visible' : ''}`}>
            <div className="pdf-header">
                <h2 className="pdf-title">
                    <FileText className="pdf-icon" />
                    PDF Library
                </h2>
                <p className="pdf-subtitle">Select a document to view</p>
            </div>



            <div className="pdf-grid" id="scores">
                {scores.map((score) => {
                    const doc: PDFDocument = {
                        id: score.id,
                        filename: score.filename,
                        storageKey: score.storageKey,
                        name: score.filename ?? 'Untitled',
                        url: `https://josephmyoung-back.musicjoeyoung.workers.dev/api/pdfs/${score.id}/file`,
                    };

                    return (
                        <button
                            key={score.id}
                            onClick={() => onSelectPDF(doc)}
                            className={`pdf-card ${selectedPDF?.id === score.id ? 'selected' : ''}`}
                        >
                            <div className="pdf-card-inner">
                                <div className="pdf-meta">
                                    <h3 className="pdf-card-title">{doc.name}</h3>

                                </div>
                                <ChevronRight className={`chevron ${selectedPDF?.id === score.id ? 'chev-selected' : ''}`} />
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
