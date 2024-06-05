import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Report from './test';

const GeneratePdf = () => {
    const data = {
        boardEnglish: "BIHAR SCHOOL EXAMINATION BOARD, PATNA",
        boardHindi: "बिहार विद्यालय परीक्षा समिति,पटना",
        doctype: "डमी पंजीकरण पत्रक (DUMMY REGISTRATION CARD) - 2023",
    };

    return (
        <div>
            <h1>PDF Report Generator</h1>      
            <PDFViewer width="100%" height="1000">
                <Report data={data} />
            </PDFViewer>
        </div>
    );
};

export default GeneratePdf;
