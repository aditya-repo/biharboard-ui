import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import MyCustomFont from '../fonts/TiroDevanagariHindi-Regular.ttf';
import Dummy from '../assets/img/dummy.png'
import Logo from '../assets/img/board.png'
import Photo from '../assets/img/photo2.jpg'

Font.register({
  family: 'Tiro',
  src: MyCustomFont
});


const styles = StyleSheet.create({
  mainblock: {
    border: '1px solid grey',
    height: '50%',
    backgroundColor: 'white'
  },
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 4,
    paddingBottom: 4
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
  hindiNote: {
    fontFamily: 'Tiro',
    color: 'black',
    fontSize: "9px",
    paddingLeft: "8px"
  },
  subValue: {
    fontFamily: 'Tiro',
    color: 'black',
    fontSize: "10px", justifyContent: 'center', flexDirection: 'row',
    paddingTop: "8px"
  },
  subValue2: {
    fontFamily: 'Tiro',
    color: 'black',
    fontSize: "10px", justifyContent: 'center', flexDirection: 'row',
    paddingTop: "2px"
  },
  contentText: {
    fontSize: '10px',
    color: 'black',
    paddingLeft: '12px',
    paddingBottom: '10px'
  },
  contentTextRight: {
    fontSize: '10px',
    color: 'black',
    paddingBottom: '10px',
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
    top: '-12px'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subjectRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  signSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "32px 16px 4px 16px"
  },
  upperblock: {
    border: "1px solid black"
  }

});

const Report = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={{marginBottom: 4}}>
      <View style={styles.upperblock}>

        <View style={styles.board}>
          <Text style={styles.hindiTitle}>{data.boardHindi}</Text>
          <Text style={styles.englishTitle}>{data.boardEnglish}</Text>
          <Text style={styles.doctype}>{data.doctype}</Text>
          <View style={{ position: "absolute", top: "8px", left: "24px", width: "44px" }}><Image src={Logo} /></View>
        </View>
        <View style={{ paddingTop: "8px" }}>
          <View style={{ position: "absolute", top: "8px", right: "12px", width: "56px" }}><Image src={Photo} /></View>
          <View style={{ position: "absolute", top: "4px", left: "140px", width: "240px", transform: "rotate(-20deg)", opacity: "0.1" }}><Image src={Dummy} /></View>
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
        <View style={{ flexDirection: "row", }}>
          <View style={{ width: "50%" }}>
            <View style={styles.contentText}>
              <Text style={[styles.hindiText, styles.keys]}>{data.dobKey}</Text>
            </View>
            <View style={styles.contentText}>
              <Text style={[styles.hindiText, styles.values1]}>{data.dobValue}</Text>
            </View>
          </View>
          <View style={{ width: "40%", flexDirection: "row", justifyContent: 'flex-start' }}>
            <Text style={[styles.hindiText]}>{data.genderKey}</Text>
            <Text style={[styles.hindiText, { paddingLeft: "16px" }]}>{data.genderValue}</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", }}>
            <View style={{ width: "50%" }}>
              <View style={styles.contentText}>
                <Text style={[styles.hindiText, styles.keys]}>{data.categoryKey}</Text>
              </View>
              <View style={styles.contentText}>
                <Text style={[styles.hindiText, styles.values1]}>{data.categoryValue}</Text>
              </View>
            </View>
            <View style={{ width: "40%", flexDirection: "row", justifyContent: 'flex-start' }}>
              <Text style={[styles.hindiText]}>{data.casteKey}</Text>
              <Text style={[styles.hindiText, { paddingLeft: "16px" }]}>{data.casteValue}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <View style={{ width: "50%" }}>
              <View style={styles.contentText}>
                <Text style={[styles.hindiText, styles.keys]}>{data.nationalityKey}</Text>
              </View>
              <View style={styles.contentText}>
                <Text style={[styles.hindiText, styles.values1]}>{data.nationalityValue}</Text>
              </View>
            </View>
            <View style={{ width: "40%", flexDirection: "row", justifyContent: 'flex-start' }}>
              <Text style={[styles.hindiText]}>{data.religionKey}</Text>
              <Text style={[styles.hindiText, { paddingLeft: "16px" }]}>{data.religionValue}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", }}>
          <View style={{ width: "50%" }}>
            <View style={styles.contentText}>
              <Text style={[styles.hindiText, styles.keys]}>{data.regKey}</Text>
            </View>
            <View style={styles.contentText}>
              <Text style={[styles.hindiText, styles.values1]}>{data.regValue}</Text>
            </View>
            </View>
            <View style={{ width: "40%", flexDirection: "row", justifyContent: 'flex-start' }}>
              <Text style={[styles.hindiText]}>{data.yearKey}</Text>
              <Text style={[styles.hindiText, { paddingLeft: "16px" }]}>{data.yearValue}</Text>
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
            <View style={[styles.subValue]}> <Text>{data.subject1Value}</Text></View>

          </View>
          <View style={styles.testKey}>
            <Text style={[styles.hindiText]}>{data.subject2Key}</Text>
            <View style={[styles.subValue]}> <Text>{data.subject2Value}</Text></View>
          </View>
          <View style={styles.testKey}>
            <Text style={[styles.hindiText]}>{data.subject3Key}</Text>
            <View style={[styles.subValue]}> <Text>{data.subject3Value1}</Text></View>
            <View style={[styles.subValue2]}> <Text>{data.subject3Value2}</Text></View>
            <View style={[styles.subValue2]}> <Text>{data.subject3Value3}</Text></View>
          </View>
          <View style={styles.testKey}>
            <Text style={[styles.hindiText]}>{data.subject4Key}</Text>
          </View>
        </View>
        <Text style={{ borderBottom: "1px solid black", paddingTop: "6px" }}></Text>
        <View style={styles.signSection}>
          <Text style={styles.hindiText}>{data.principalSign}</Text>
          <Text style={styles.hindiText}>{data.examinerSign}</Text>
        </View>
      </View>
      <View style={{marginBottom: 4}}>
        <Text style={styles.hindiNote}>{data.note1}</Text>
        <Text style={styles.hindiNote}>{data.note2}</Text>
        <Text style={styles.hindiNote}>{data.note3}</Text>
      </View>
    </View>
    <View>
      <View style={styles.upperblock}>

        <View style={styles.board}>
          <Text style={styles.hindiTitle}>{data.boardHindi}</Text>
          <Text style={styles.englishTitle}>{data.boardEnglish}</Text>
          <Text style={styles.doctype}>{data.doctype}</Text>
          <View style={{ position: "absolute", top: "8px", left: "24px", width: "44px" }}><Image src={Logo} /></View>
        </View>
        <View style={{ paddingTop: "8px" }}>
          <View style={{ position: "absolute", top: "8px", right: "12px", width: "56px" }}><Image src={Photo} /></View>
          <View style={{ position: "absolute", top: "4px", left: "140px", width: "240px", transform: "rotate(-20deg)", opacity: "0.1" }}><Image src={Dummy} /></View>
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
        <View style={{ flexDirection: "row", }}>
          <View style={{ width: "50%" }}>
            <View style={styles.contentText}>
              <Text style={[styles.hindiText, styles.keys]}>{data.dobKey}</Text>
            </View>
            <View style={styles.contentText}>
              <Text style={[styles.hindiText, styles.values1]}>{data.dobValue}</Text>
            </View>
          </View>
          <View style={{ width: "40%", flexDirection: "row", justifyContent: 'flex-start' }}>
            <Text style={[styles.hindiText]}>{data.genderKey}</Text>
            <Text style={[styles.hindiText, { paddingLeft: "16px" }]}>{data.genderValue}</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", }}>
            <View style={{ width: "50%" }}>
              <View style={styles.contentText}>
                <Text style={[styles.hindiText, styles.keys]}>{data.categoryKey}</Text>
              </View>
              <View style={styles.contentText}>
                <Text style={[styles.hindiText, styles.values1]}>{data.categoryValue}</Text>
              </View>
            </View>
            <View style={{ width: "40%", flexDirection: "row", justifyContent: 'flex-start' }}>
              <Text style={[styles.hindiText]}>{data.casteKey}</Text>
              <Text style={[styles.hindiText, { paddingLeft: "16px" }]}>{data.casteValue}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <View style={{ width: "50%" }}>
              <View style={styles.contentText}>
                <Text style={[styles.hindiText, styles.keys]}>{data.nationalityKey}</Text>
              </View>
              <View style={styles.contentText}>
                <Text style={[styles.hindiText, styles.values1]}>{data.nationalityValue}</Text>
              </View>
            </View>
            <View style={{ width: "40%", flexDirection: "row", justifyContent: 'flex-start' }}>
              <Text style={[styles.hindiText]}>{data.religionKey}</Text>
              <Text style={[styles.hindiText, { paddingLeft: "16px" }]}>{data.religionValue}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", }}>
          <View style={{ width: "50%" }}>
            <View style={styles.contentText}>
              <Text style={[styles.hindiText, styles.keys]}>{data.regKey}</Text>
            </View>
            <View style={styles.contentText}>
              <Text style={[styles.hindiText, styles.values1]}>{data.regValue}</Text>
            </View>
            </View>
            <View style={{ width: "40%", flexDirection: "row", justifyContent: 'flex-start' }}>
              <Text style={[styles.hindiText]}>{data.yearKey}</Text>
              <Text style={[styles.hindiText, { paddingLeft: "16px" }]}>{data.yearValue}</Text>
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
            <View style={[styles.subValue]}> <Text>{data.subject1Value}</Text></View>

          </View>
          <View style={styles.testKey}>
            <Text style={[styles.hindiText]}>{data.subject2Key}</Text>
            <View style={[styles.subValue]}> <Text>{data.subject2Value}</Text></View>
          </View>
          <View style={styles.testKey}>
            <Text style={[styles.hindiText]}>{data.subject3Key}</Text>
            <View style={[styles.subValue]}> <Text>{data.subject3Value1}</Text></View>
            <View style={[styles.subValue2]}> <Text>{data.subject3Value2}</Text></View>
            <View style={[styles.subValue2]}> <Text>{data.subject3Value3}</Text></View>
          </View>
          <View style={styles.testKey}>
            <Text style={[styles.hindiText]}>{data.subject4Key}</Text>
          </View>
        </View>
        <Text style={{ borderBottom: "1px solid black", paddingTop: "6px" }}></Text>
        <View style={styles.signSection}>
          <Text style={styles.hindiText}>{data.principalSign}</Text>
          <Text style={styles.hindiText}>{data.examinerSign}</Text>
        </View>
      </View>
      <View style={{paddingTop: "2px"}}>
        <Text style={styles.hindiNote}>{data.note1}</Text>
        <Text style={styles.hindiNote}>{data.note2}</Text>
        <Text style={styles.hindiNote}>{data.note3}</Text>
      </View>
    </View>
    </Page>
  </Document>
);

export default Report;