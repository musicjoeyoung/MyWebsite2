import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './PDFViewer.scss';

import { ChevronLeft, ChevronRight, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import React, { useCallback, useState } from 'react';

import { PDFDocument } from '../../types/pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PDFViewerProps {
    selectedPDF: PDFDocument | null;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ selectedPDF }) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPagePair, setCurrentPagePair] = useState<number>(1);
    const [scale, setScale] = useState<number>(0.8);
    const [loading, setLoading] = useState<boolean>(false);

    const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setCurrentPagePair(1);
        setLoading(false);
    }, []);

    const onDocumentLoadStart = useCallback(() => {
        setLoading(true);
    }, []);

    const goToPreviousPages = useCallback(() => {
        setCurrentPagePair(prev => Math.max(1, prev - 2));
    }, []);

    const goToNextPages = useCallback(() => {
        setCurrentPagePair(prev => Math.min(numPages - 1, prev + 2));
    }, [numPages]);

    const zoomIn = useCallback(() => {
        setScale(prev => Math.min(2, prev + 0.1));
    }, []);

    const zoomOut = useCallback(() => {
        setScale(prev => Math.max(0.3, prev - 0.1));
    }, []);

    const resetZoom = useCallback(() => {
        setScale(0.8);
    }, []);

    if (!selectedPDF) {
        return (
            <div className="pdf-viewer__no-pdf">
                <div className="pdf-viewer__no-pdf-content">
                    <div className="pdf-viewer__no-pdf-icon-container">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="pdf-viewer__no-pdf-title">No PDF Selected</h3>
                    <p className="pdf-viewer__no-pdf-description">Choose a document from the library to start reading</p>
                </div>
            </div>
        );
    }

    const leftPage = currentPagePair;
    const rightPage = currentPagePair + 1;
    const canGoBack = currentPagePair > 1;
    const canGoForward = currentPagePair + 1 < numPages;

    return (
        <div className="pdf-viewer">
            <div className="pdf-viewer__header">
                <div className="pdf-viewer__header-content">
                    <div className="pdf-viewer__header-info">
                        <h1>{selectedPDF.name}</h1>
                        <p>
                            Pages {leftPage}{rightPage <= numPages ? `-${rightPage}` : ''} of {numPages}
                        </p>
                    </div>

                    <div className="pdf-viewer__header-controls">
                        <div className="pdf-viewer__zoom-controls">
                            <button
                                onClick={zoomOut}
                                className="pdf-viewer__zoom-controls-button"
                                title="Zoom Out"
                            >
                                <ZoomOut />
                            </button>
                            <span className="pdf-viewer__zoom-controls-percentage">
                                {Math.round(scale * 100)}%
                            </span>
                            <button
                                onClick={zoomIn}
                                className="pdf-viewer__zoom-controls-button"
                                title="Zoom In"
                            >
                                <ZoomIn />
                            </button>
                            <button
                                onClick={resetZoom}
                                className="pdf-viewer__zoom-controls-button pdf-viewer__zoom-controls-reset"
                                title="Reset Zoom"
                            >
                                <RotateCcw />
                            </button>
                        </div>

                        <button
                            onClick={goToPreviousPages}
                            disabled={!canGoBack}
                            className="pdf-viewer__nav-button"
                        >
                            <ChevronLeft />
                            Previous
                        </button>
                        <button
                            onClick={goToNextPages}
                            disabled={!canGoForward}
                            className="pdf-viewer__nav-button"
                        >
                            Next
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            <div className="pdf-viewer__content">
                {loading && (
                    <div className="pdf-viewer__loading">
                        <div className="pdf-viewer__loading-content">
                            <div className="pdf-viewer__loading-spinner"></div>
                            <span>Loading PDF...</span>
                        </div>
                    </div>
                )}

                <div className="pdf-viewer__document-container">
                    <Document
                        file={selectedPDF.url}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadStart={onDocumentLoadStart}
                        loading={
                            <div className="pdf-viewer__loading-content">
                                <div className="pdf-viewer__loading-spinner"></div>
                                <span>Loading PDF...</span>
                            </div>
                        }
                        error={
                            <div className="pdf-viewer__error">
                                <p className="pdf-viewer__error-title">Error loading PDF</p>
                                <p className="pdf-viewer__error-message">
                                    This PDF cannot be loaded due to CORS restrictions or the file may be unavailable.
                                </p>
                                <div className="pdf-viewer__error-details">
                                    <p>URL: {selectedPDF.url}</p>
                                    <p>Try using a PDF hosted on the same domain or with proper CORS headers.</p>
                                </div>
                            </div>
                        }
                    >
                        <div className="pdf-viewer__pages-container">
                            <div className="pdf-viewer__page-wrapper">
                                <Page
                                    pageNumber={leftPage}
                                    scale={scale}
                                    className="max-w-none"
                                    loading={
                                        <div className="pdf-viewer__page-loading">
                                            <div className="pdf-viewer__loading-spinner"></div>
                                        </div>
                                    }
                                />
                            </div>

                            {rightPage <= numPages && (
                                <div className="pdf-viewer__page-wrapper">
                                    <Page
                                        pageNumber={rightPage}
                                        scale={scale}
                                        className="max-w-none"
                                        loading={
                                            <div className="pdf-viewer__page-loading">
                                                <div className="pdf-viewer__loading-spinner"></div>
                                            </div>
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </Document>
                </div>
            </div>
        </div>
    );
};