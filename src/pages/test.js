import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import MyCustomFont from '../fonts/TiroDevanagariHindi-Regular.ttf'

Font.register({
  family: 'Tiro Devanagari',
  src: MyCustomFont
});

console.log();

const styles = StyleSheet.create({
  mainblock: {
    border: '1px solid black',
    height: '50%'
  },
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
  board:{
    textAlign: 'center'
  },
  hindiText: {
    fontFamily: 'R',
    fontWeight: 'regular'
  }
});

const Report = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.mainblock}>
        <View style={styles.board}>
          <Text style={styles.hindiText}>बिहार विद्यालय परीक्षा समिति,पटना</Text>
          <Text style={styles.title}>{data.boardEnglish}</Text>
        </View>
        <View style={styles.section}>
          <Text>Content: {data.content}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Report;