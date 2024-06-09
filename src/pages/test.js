import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import MyCustomFont from '../fonts/TiroDevanagariHindi-Regular.ttf';
import Bgimg from '../assets/img/bg.png'

Font.register({
  family: 'Tiro',
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
  board: {
    textAlign: 'center',
    paddingTop: '8px'
  },
  hindiTitle: {
    fontFamily: 'Tiro',
    color: 'green',
    marginBottom: '-6px',
    fontSize: '16px'
  },
  englishTitle: {
    color: 'green',
    fontSize: "12px",
    fontWeight: "bold",
    paddingBottom: '6px'
  },
  doctype: {
    fontFamily: 'Tiro',
    color: 'green',
    fontSize: '12px',
  },
  hindiText: {
    fontFamily: 'Tiro',
    color: 'black',
    fontSize: "10px"
  },
  contentText: {
    fontSize: '10px',
    color: 'black',
    paddingLeft: '12px',
    paddingBottom: '14px'
  },
  backgroundImage: {
    position: 'absolute',
    width: '40px',
    height: 'auto',
    top: 0,
    left: 0,
  },
  keys: {
    position: 'absolute',
    left: '12px'
  },
  values1: {
    position: 'absolute',
    left: '130px',
    top: '-16px'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subjectRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '8px',
    paddingRight: '8px'
  }

});

const Report = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.mainblock}>
        <View style={styles.board}>
          <Text style={styles.hindiTitle}>{data.boardHindi}</Text>
          <Text style={styles.englishTitle}>{data.boardEnglish}</Text>
          <Text style={styles.doctype}>{data.doctype}</Text>
        </View>
        <View style={{ paddingTop: "8px" }}>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.keys]}>{data.nameKey}</Text>
          </View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.values1]}>{data.nameValue}</Text>
          </View>
        </View>
        <View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.keys]}>{data.motherKey}</Text>
          </View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.values1]}>{data.motherValue}</Text>
          </View>
        </View>
        <View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.keys]}>{data.fatherKey}</Text>
          </View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.values1]}>{data.fatherValue}</Text>
          </View>
        </View>
        <View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.keys]}>{data.dobKey}</Text>
          </View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.values1]}>{data.dobValue}</Text>
          </View>
        </View>
        <View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.keys]}>{data.categoryKey}</Text>
          </View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.values1]}>{data.categoryValue}</Text>
          </View>
        </View>
        <View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.keys]}>{data.nationalityKey}</Text>
          </View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.values1]}>{data.nationalityValue}</Text>
          </View>
        </View>
        <View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.keys]}>{data.regKey}</Text>
          </View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.values1]}>{data.regValue}</Text>
          </View>
        </View>
        <View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.keys]}>{data.schoolKey}</Text>
          </View>
          <View style={styles.contentText}>
            <Text style={[styles.hindiText, styles.values1]}>{data.schoolValue}</Text>
          </View>
        </View>
        <View style={styles.subjectRow}>
        
        <View style={styles.testKey}>
          <Text style={[styles.hindiText]}>{data.subject1Key}</Text>
        </View>
        <View style={styles.testKey}>
          <Text style={[styles.hindiText]}>{data.subject2Key}</Text>
        </View>
        <View style={styles.testKey}>
          <Text style={[styles.hindiText]}>{data.subject3Key}</Text>
        </View>
        <View style={styles.testKey}>
          <Text style={[styles.hindiText]}>{data.subject4Key}</Text>
        </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Report;