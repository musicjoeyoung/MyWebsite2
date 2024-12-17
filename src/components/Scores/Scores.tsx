import "./Scores.scss"

import PDFViewer from "../PDFViewer/PDFViewer"
import music from "../../assets/documents/MarShawn.pdf"

const Scores = () => {

    return (
        <div className="scores" id="scores">
            <h2>Scores</h2>
            <PDFViewer pdfUrl={music} />
        </div>
    )
}
export default Scores