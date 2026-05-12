import { PDFDocument } from '../../types/pdf';

export const samplePDFs: PDFDocument[] = [
    {
        id: '1',
        filename: 'MarShawn.pdf',
        storageKey: 'sample-research-paper',
        name: 'Sample Research Paper',
        url: './MarShawn.pdf',
        description: 'A sample research document'
    },
    {
        id: '2',
        filename: 'tracemonkey-pldi-09.pdf',
        storageKey: 'technical-documentation',
        name: 'Technical Documentation',
        url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
        description: 'Technical documentation example'
    },
    {
        id: '3',
        filename: 'c4611_sample_explain.pdf',
        storageKey: 'user-manual',
        name: 'User Manual',
        url: 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf',
        description: 'Sample user manual'
    }
];