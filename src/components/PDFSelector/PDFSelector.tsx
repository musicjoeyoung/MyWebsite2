import './PDFSelector.scss';

import { ChevronRight, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

import { PDFDocument } from '../../types/pdf';
import React from 'react';
import axios from 'axios';

interface PDFSelectorProps {
    pdfs: PDFDocument[];
    selectedPDF: PDFDocument | null;
    onSelectPDF: (pdf: PDFDocument) => void;
}

export const PDFSelector: React.FC<PDFSelectorProps> = ({
    pdfs,
    selectedPDF,
    onSelectPDF,
}) => {

    const [scores, setScores] = useState<PDFDocument[]>([]);

    useEffect(() => {
        fetchPDFs();
    }, []);

    const fetchPDFs = async () => {
        try {
            const response = await axios.get<PDFDocument[]>('https://josephmyoung-back.musicjoeyoung.workers.dev/api/pdfs');
            setScores(response.data);
            console.log("Fetched PDFs:", response.data);
        } catch (error) {
            console.error("Error fetching PDFs:", error);
        }
    };

    return (
        <div className="pdf-selector">
            <div className="pdf-header">
                <h2 className="pdf-title">
                    <FileText className="pdf-icon" />
                    PDF Library
                </h2>
                <p className="pdf-subtitle">Select a document to view</p>
            </div>

            <ul className="pdf-list">
                {scores.length === 0 ? (
                    <li className="pdf-empty">No PDFs available.</li>
                ) : (
                    scores.map((score) => (
                        <li key={score.id} className="pdf-list-item">
                            <button
                                onClick={() => onSelectPDF(score)}
                                className={`pdf-button ${selectedPDF?.id === score.id ? 'selected' : ''}`}
                            >
                                {score.name}
                            </button>
                        </li>
                    ))
                )}
            </ul>

            <div className="pdf-grid">
                {scores.map((score) => {
                    const doc = {
                        id: score.id,
                        name: (score as any).filename ?? (score as any).name ?? 'Untitled',
                        url: `https://josephmyoung-back.musicjoeyoung.workers.dev/api/pdfs/${score.id}/file`,
                        description: (score as any).description,
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
                                    {doc.description && (
                                        <p className="pdf-card-desc">
                                            {doc.description}
                                        </p>
                                    )}
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
