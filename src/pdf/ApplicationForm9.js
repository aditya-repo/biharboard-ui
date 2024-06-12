import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import MyCustomFont from '../fonts/TiroDevanagariHindi-Regular.ttf';
// import Dummy from '../assets/img/dummy.png'
import Logo from '../assets/img/board.png'
// import Photo from '../assets/img/photo2.jpg'

Font.register({
    family: 'Tiro',
    src: MyCustomFont
});


const styles = StyleSheet.create({
    mainblock: {
        border: '0.5px solid black',
        height: '100%',
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
    english: {
        paddingTop: "12px",
        fontSize: "16px",
        fontFamily: "Tiro",
    },
    hindi: {
        fontFamily: 'Tiro',
        fontSize: '9px',
        paddingTop: "6px"
    },
    instructionSection: {
        border: "0.5px solid black",
        padding: "8px",
        width: "55%",
        paddingBottom: '4px'
    },
    instruction: {
        fontFamily: 'Tiro',
        fontSize: '7px',
    },
    body: {
        paddingLeft: 28
    },
    stduentData:{
        paddingLeft:108,
        position: 'absolute',
        top: 0
    },
    fontHindi:{
        fontFamily: 'Tiro',
        fontSize: '9px',
    }
});

const Report = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={{ marginBottom: 4 }}>
                <View style={styles.upperblock}>
                    <View style={{ position: "absolute", top: "12px", left: "24px", width: "44px" }}><Image src={Logo} /></View>
                </View>
                <View style={styles.board}>
                    <View style={{height: 100, width: 76, border: "0.5px solid black", position: 'absolute', top: 40, right:48}}></View>
                    <Text style={styles.english}>BIHAR SCHOOL EXAMINATION BOARD, PATNA</Text>
                    <Text style={styles.hindi}>ONLINE REGISTRATION/PERMISSION APPLICATION FORM</Text>
                    <Text style={styles.hindi}>FOR THE SECONDARY EXAM, 2025 (SESSION 2024-25) </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={styles.instructionSection}>
                            <Text style={styles.instruction}>1. PLEASE FILL THE FORM IN ENGLISH BLOCK LETTERS AND EACH WORD WILL BE </Text>
                            <Text style={styles.instruction}>SEPERATED BY A BLANK BOX. 2. PLEASE TICK (√) THE APPROPRIATE BOX.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <View>
                        <Text style={styles.hindi}>1- Category: </Text>
                        <Text style={styles.hindi}>2- School Code: </Text>
                        <Text style={[styles.hindi, {paddingBottom:8, paddingTop:8}]}>2- School Name: </Text>
                        <View>
                            <Text style={styles.hindi}>4- विद्यार्थी का नामः </Text>
                            <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}> &nbsp;&nbsp;&nbsp;(हिन्दी में) </Text>
                            <Text style={[styles.hindi, { paddingTop: 0, paddingLeft: 12 }]}>Student's Name:</Text>
                            <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}> (In English)</Text>
                        </View>
                        <View>
                            <Text style={styles.hindi}>5- माता का नामः </Text>
                            <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}> &nbsp;&nbsp;&nbsp;(हिन्दी में) </Text>
                            <Text style={[styles.hindi, { paddingTop: 0, paddingLeft: 12 }]}>Mother's Name:</Text>
                            <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}> (In English)</Text>
                        </View>
                        <View>
                            <Text style={styles.hindi}>6- पिता का नामः </Text>
                            <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}> &nbsp;&nbsp;&nbsp;(हिन्दी में) </Text>
                            <Text style={[styles.hindi, { paddingTop: 0, paddingLeft: 12 }]}>Father's Name:</Text>
                            <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}> (In English)</Text>
                        </View>
                    </View>
                    <View style={styles.stduentData}>
                    <View></View>
                    <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2,paddingRight:'48px'}}><Text style={[styles.fontHindi,{paddingRight: "8px",paddingTop: '4px'}]}>REGULAR</Text><Tile piece={1} /></View>
                    
                    <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2}}><Text style={[styles.fontHindi,{paddingRight: "8px",paddingTop: '4px'}]}>PRIVATE</Text><Tile piece={1} /></View>
                    </View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2}}><Tile piece={5} /></View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2,paddingBottom:0, marginBottom: -1}}><Tile piece={32} /></View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2,paddingTop:0}}><Tile piece={32} /></View>
                        <View style={{border: '0.5px solid black', height:18, margin: "2px 2px"}}></View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2,paddingBottom:0, marginBottom: -1}}><Tile piece={32} /></View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2,paddingTop:0}}><Tile piece={32} /></View>
                        <View style={{border: '0.5px solid black', height:18, margin: "2px 2px"}}></View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2,paddingBottom:0, marginBottom: -1}}><Tile piece={32} /></View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2,paddingTop:0}}><Tile piece={32} /></View>
                        <View style={{border: '0.5px solid black', height:18, margin: "2px 2px"}}></View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2,paddingBottom:0, marginBottom: -1}}><Tile piece={32} /></View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 4, padding: 2,paddingTop:0}}><Tile piece={32} /></View>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);
const Tile = ({ piece }) => {
    const tiles = [];
    for (let col = 0; col < piece; col++) {
        tiles.push(
            <View style={{ border: "0.5px solid black", height: 14, width: 14, marginRight: -1, }}></View>
        );
    }
    return tiles
}

export default Report;

