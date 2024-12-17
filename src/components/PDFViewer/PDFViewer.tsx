import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Viewer, Worker } from '@react-pdf-viewer/core';

import React from 'react';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import packageJson from "../../../package.json";
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];


interface PDFViewerProps {
    pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const zoomPluginInstance = zoomPlugin();

    /*     return (
            <div className="h-[calc(100vh-16rem)] bg-white rounded-lg shadow-lg p-4">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>        <Viewer
                    fileUrl={pdfUrl}
                    plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
                    defaultScale={1.2}
                />
                </Worker>
            </div>
        );
    }; */
    return (
        <div className="h-[calc(100vh-16rem)] bg-white rounded-lg shadow-lg p-4">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                <div className="flex justify-between mb-2">
                    <GoToPreviousPage>
                        {(props) => (
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={props.onClick}
                                disabled={props.isDisabled}
                            >
                                Previous
                            </button>
                        )}
                    </GoToPreviousPage>
                    <GoToNextPage>
                        {(props) => (
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={props.onClick}
                                disabled={props.isDisabled}
                            >
                                Next
                            </button>
                        )}
                    </GoToNextPage>
                </div>
                <Viewer
                    fileUrl={pdfUrl}
                    plugins={[defaultLayoutPluginInstance, zoomPluginInstance, pageNavigationPluginInstance]}
                    defaultScale={1.2}
                />
            </Worker>
        </div>
    );
};
export default PDFViewer;


