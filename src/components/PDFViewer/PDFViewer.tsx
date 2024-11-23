import "./PDFViewer.scss"
import '@react-pdf-viewer/core/lib/styles/index.css';

import { Viewer, Worker } from "@react-pdf-viewer/core";

//import music from "../../assets/documents/Short Term Memory 22OCT19 - Score.pdf"
import music2 from "../../assets/documents/MarShawn.pdf"
import packageJson from '../../../package.json';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];


const PDFViewer = () => {
    const pageNavigation = pageNavigationPlugin();
    const { CurrentPageLabel } = pageNavigation;
    const { NumberOfPages } = pageNavigation;

    return (
        <div>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>

                <Viewer fileUrl={music2} plugins={[pageNavigation]} />
            </Worker>

            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                Page <CurrentPageLabel /> of <NumberOfPages />
            </div>
        </div>
    )
}
export default PDFViewer