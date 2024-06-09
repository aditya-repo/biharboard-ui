import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

// Register the Hindi font
Font.register({
  family: 'Noto Sans Devanagari',
  src: 'https://fonts.gstatic.com/s/notosansdevanagari/v25/TuG7UUFzXI5FBtUq5a8bjKYTZjtRU6Sgv3NaV_SNmI0b8QQCQmHN5TV_9qo.woff2',
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  hindiText: {
    fontFamily: 'Noto Sans Devanagari',
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.hindiText}>नमस्ते दुनिया</Text>
      </View>
    </Page>
  </Document>
);

const Users = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleClick = () => {
    setShowPDF(true);
  };

  return (
    <div>
      <button onClick={handleClick}>View PDF</button>
      {showPDF && (
        <div style={{ height: '100vh' }}>
          <PDFViewer width="100%" height="100%">
            <MyDocument />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default Users;