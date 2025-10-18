export interface PDFDocument {
    id: string;
    filename: string;
    storageKey: string;
    name?: string;  // Added for display purposes
    url?: string;   // Added for viewing
}