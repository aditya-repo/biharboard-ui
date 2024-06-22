import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Report from '../../pdf/ApplicationForm9';
import { useParams } from 'react-router-dom';

// const data = {
//     boardEnglish: "BIHAR SCHOOL EXAMINATION BOARD, PATNA",
//     boardHindi: "बिहार विद्यालय परीक्षा समिति, पटना",
//     doctype: "डमी पंजीकरण पत्रक (DUMMY REGISTRATION CARD) - 2023",
//     nameKey: "1. छात्र / छात्रा का नामः",
//     nameValue: "Aditya Raj",
//     motherKey: "2. माता का नामः",
//     motherValue: "Babita Devi",
//     fatherKey: "3. पिता का नाम:",
//     fatherValue: "Batoran Das",
//     dobKey: "4. जन्म तिथिः",
//     dobValue: "31 June, 2024",
//     genderKey: "5. लिंग: ",
//     genderValue: "Male",
//     categoryKey: "6. नियमित / स्वतंत्र : ",
//     categoryValue: "Regular",
//     casteKey: "7. जाति:",
//     casteValue: "(a) जाति : EBC (b) दिव्यांगता का प्रकारः NO",
//     nationalityKey: "8. राष्ट्रीयता:",
//     nationalityValue: "Indian",
//     religionKey: "9. धर्म:",
//     religionValue: "Hinduism",
//     regKey: "10. पंजीयन संख्या:",
//     regValue: "XXXX-XXXX-XX",
//     yearKey: "11. वर्ष:",
//     yearValue: "2023",
//     schoolKey: "12. विद्यालय का नामः",
//     schoolValue: "63029-KD HIGH SCHOOL MALINAGAR SAMASTIPUR",
//     subjectKey: "13. विषय : ",
//     subject1Key: '13. विषय :   (A) मातृभाषा (MIL)',
//     subject1Value: 'HINDI',
//     subject2Key: '(B) द्वितीय भारतीय भाषा (SIL)',
//     subject2Value: 'SANSKRIT',
//     subject3Key: '(C) अनिवार्य विषय (COM. SUB)',
//     subject3Value1: 'MATHEMATICS',
//     subject3Value2: 'SCIENCE',
//     subject3Value3: 'SOCIAL SCIENCE, ENGLISH',
//     subject4Key: '(D) ऐच्छिक (OPT. SUB)',
//     subject1value: '(A) मातृभाषा (MIL)',
//     subjectValue: "63029-KD HIGH SCHOOL MALINAGAR SAMASTIPUR",
//     note1: "1. इस Dummy Registration Card में छात्र/छात्रा के अंकित विवरण में यदि कोई त्रुटि पाई जाती हो तो छायाप्रति में वांछित सुधार कर अपने हस्ताक्षर के साथ प्रधानाध्यापक को ऑनलाइन सुधार हेतु तुरन्त उपलब्ध करायेंगे।",
//     note2: "2. सामान्य/दिव्याग (दृष्टिबाधित इत्यादि) छात्र/छात्रा उमी पंजीयन कार्ड के स्तंभ-7 के (b) में अंकित दिव्यांगता का प्रकार की प्रविष्टि को अवश्य जाँच कर लें। यदि इसमें त्रुटि हो, तो संशोधन कर/करा ते।",
//     note3: "3. यह Dummy Registration Card किसी भी शैक्षणिक गतिविधि के लिए अनुमान्य नहीं होगा।",
//     note4: "4. मूल पंजीयन कार्ड जारी होने के बाद किसी भी प्रकार का त्रुटि सुधार नहीं किया जाएगा।",
//     principalSign: "विद्यालय प्रधान का हस्ताक्षर एवं मुहर",
//     examinerSign: "परीक्षा नियंत्रक"

// };

const ApplicationForm = () => {
    // Use useParams to get the id parameter from the URL
    const { id } = useParams();
    console.log(id);

    return (
        <PDFViewer width="100%" height="1000">
            <Report  barcodeid={id} />
        </PDFViewer>
    );
};

export default ApplicationForm;