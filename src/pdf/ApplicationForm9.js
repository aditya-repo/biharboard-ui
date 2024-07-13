import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import MyCustomFont from "../fonts/TiroDevanagariHindi-Regular.ttf";
// import Dummy from '../assets/img/dummy.png'
import Logo from "../assets/img/board.png";
// import Photo from '../assets/img/photo2.jpg'

Font.register({
  family: "Tiro",
  src: MyCustomFont,
});

const styles = StyleSheet.create({
  mainblock: {
    border: "0.5px solid black",
    height: "100%",
    backgroundColor: "white",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 4,
    paddingBottom: 4,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  board: {
    textAlign: "center",
    paddingTop: "8px",
  },
  hindiTitle: {
    fontFamily: "Tiro",
    color: "green",
    marginBottom: "-6px",
    fontSize: "16px",
  },
  english: {
    paddingTop: "12px",
    fontSize: "16px",
    fontFamily: "Tiro",
  },
  hindi: {
    fontFamily: "Tiro",
    fontSize: "9px",
    paddingTop: "6px",
  },
  instructionSection: {
    border: "0.5px solid black",
    padding: "8px",
    width: "55%",
    paddingBottom: "4px",
  },
  instruction: {
    fontFamily: "Tiro",
    fontSize: "7px",
  },
  body: {
    paddingLeft: 28,
  },
  declaration: {
    paddingLeft: 18,
  },
  bodyMargin: {
    paddingLeft: 28,
  },
  stduentData: {
    paddingLeft: 108,
    position: "absolute",
    top: 0,
  },
  contentMargin: {
    paddingLeft: 48,
    position: "absolute",
    top: 0,
  },
  fontHindi: {
    fontFamily: "Tiro",
    fontSize: "9px",
  },
  topLeft: {
    position: "absolute",
    top: 10,
    left: 4,
    padding: 3,
    border: "1px solid black",
    borderRadius: "50%",
  },
  topRight: {
    position: "absolute",
    top: 10,
    right: 4,
    padding: 3,
    border: "1px solid black",
    borderRadius: "50%",
  },
  bottomLeft: {
    position: "absolute",
    top: 814,
    left: 4,
    padding: 3,
    border: "1px solid black",
    borderRadius: "50%",
  },
  bottomRight: {
    position: "absolute",
    top: 814,
    right: 4,
    padding: 3,
    border: "1px solid black",
    borderRadius: "50%",
  },
});

const URL = "http://localhost:4040/barcode/";

const Report = ({ barcodeid }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <View style={styles.topLeft}></View>
        <View style={styles.topRight}></View>
        <View style={styles.bottomLeft}></View>
        <View style={styles.bottomRight}></View>
      </View>
      <View style={{ marginBottom: 4 }}>
        <View style={styles.upperblock}>
          <View
            style={{
              position: "absolute",
              top: "12px",
              left: "24px",
              width: "44px",
            }}
          >
            <Image src={Logo} />
          </View>
        </View>
        <View style={styles.upperblock}>
          <View
            style={{
              position: "absolute",
              top: "70",
              left: "18px",
              width: "70px",
            }}
          >
            <Image src={`${URL}${barcodeid}.png`} />
          </View>
        </View>
        <View style={styles.board}>
          <View
            style={{
              height: 95,
              width: 90,
              border: "1px solid black",
              position: "absolute",
              top: 35,
              right: 35,
            }}
          ></View>
          <View
            style={{
              height: 15,
              width: 90,
              border: "0.5px solid black",
              position: "absolute",
              top: 130,
              right: 35,
            }}
          ></View>
          <Text style={styles.english}>
            BIHAR SCHOOL EXAMINATION BOARD, PATNA
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 145,
              right: 45,
              fontSize: "7px",
            }}
          >
            Signature of Students
          </Text>
          <Text style={styles.hindi}>
            ONLINE REGISTRATION/PERMISSION APPLICATION FORM
          </Text>
          <Text style={styles.hindi}>
            FOR THE SECONDARY EXAM, 2026 (SESSION 2025-26){" "}
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={styles.instructionSection}>
              <Text style={styles.instruction}>
                1. PLEASE FILL THE FORM IN ENGLISH BLOCK LETTERS AND EACH WORD
                WILL BE{" "}
              </Text>
              <Text style={styles.instruction}>
                SEPERATED BY A BLANK BOX. 2. PLEASE TICK (√) THE APPROPRIATE
                BOX.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.hindi}>1- Category: </Text>
            <Text style={styles.hindi}>2- School Code: </Text>
            <Text style={[styles.hindi, { paddingBottom: 8, paddingTop: 18 }]}>
              3- School Name:{" "}
            </Text>
            <View>
              <Text style={[styles.hindi, { paddingTop: 12 }]}>
                4- विद्यार्थी का नामः{" "}
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}>
                {" "}
                &nbsp;&nbsp;&nbsp;(हिन्दी में){" "}
              </Text>
              <Text style={[styles.hindi, { paddingTop: 0, paddingLeft: 12 }]}>
                Student's Name:
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}>
                {" "}
                (In English)
              </Text>
            </View>
            <View>
              <Text style={[styles.hindi, { paddingTop: 12 }]}>
                5- माता का नामः{" "}
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}>
                {" "}
                &nbsp;&nbsp;&nbsp;(हिन्दी में){" "}
              </Text>
              <Text style={[styles.hindi, { paddingTop: 0, paddingLeft: 12 }]}>
                Mother's Name:
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}>
                {" "}
                (In English)
              </Text>
            </View>
            <View>
              <Text style={[styles.hindi, { paddingTop: 12 }]}>
                6- पिता का नामः{" "}
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}>
                {" "}
                &nbsp;&nbsp;&nbsp;(हिन्दी में){" "}
              </Text>
              <Text style={[styles.hindi, { paddingTop: 0, paddingLeft: 12 }]}>
                Father's Name:
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 0 }]}>
                {" "}
                (In English)
              </Text>
            </View>
            <View>
              <Text style={[styles.hindi, { paddingTop: 11 }]}>
                7- Date Of Birth:
              </Text>
            </View>
            <View>
              <Text style={[styles.hindi, { paddingTop: 11 }]}>8- Gender:</Text>
            </View>
            <View>
              <Text style={[styles.hindi, { paddingTop: 11 }]}>
                10- Caste Category:
              </Text>
            </View>
            <View>
              <Text style={[styles.hindi, { paddingTop: 9 }]}>
                11- Differently abled:
              </Text>
            </View>
            <View>
              <Text style={[styles.hindi, { paddingTop: 8 }]}>
                12- Religion:
              </Text>
            </View>
            <View>
              <Text style={[styles.hindi, { paddingTop: 8 }]}>13- Area:</Text>
            </View>
            <View>
              <Text style={[styles.hindi, { paddingTop: 8 }]}>
                15- Mobile No:
              </Text>
            </View>
          </View>
          <View style={styles.stduentData}>
            <View></View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 4,
                  padding: 2,
                  paddingRight: "48px",
                }}
              >
                <Text
                  style={[
                    styles.fontHindi,
                    { paddingRight: "8px", paddingTop: "4px" },
                  ]}
                >
                  REGULAR
                </Text>
                <Tile piece={1} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 4,
                  padding: 2,
                }}
              >
                <Text
                  style={[
                    styles.fontHindi,
                    { paddingRight: "8px", paddingTop: "4px" },
                  ]}
                >
                  PRIVATE
                </Text>
                <Tile piece={1} />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
              }}
            >
              <Tile piece={5} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingBottom: 0,
                marginBottom: -1,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingTop: 0,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "2px 2px",
                width: 426,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingBottom: 0,
                marginBottom: -1,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingTop: 0,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "2px 2px",
                width: 426,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingBottom: 0,
                marginBottom: -1,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingTop: 0,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "2px 2px",
                width: 426,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingBottom: 0,
                marginBottom: -1,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingTop: 0,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
              }}
            >
              <Tile piece={6} />
              <Text
                style={[
                  styles.fontHindi,
                  { paddingLeft: "8px", paddingTop: "4px" },
                ]}
              >
                (DD/MM/YYYY){" "}
              </Text>
              <Text
                style={[
                  styles.fontHindi,
                  { paddingLeft: "24px", paddingTop: "4px" },
                ]}
              >
                Please tick (√) the appropriate box
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingRight: "48px",
              }}
            >
              <Text
                style={[
                  styles.fontHindi,
                  { paddingRight: "4px", paddingTop: "4px" },
                ]}
              >
                MALE
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "12px",
                  },
                ]}
              >
                FEMALE
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "12px",
                  },
                ]}
              >
                TRANS
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "48px",
                  },
                ]}
              >
                9. Nationality: &nbsp;&nbsp;&nbsp;&nbsp;Indian
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "12px",
                  },
                ]}
              >
                Other
              </Text>
              <Tile piece={1} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingRight: "48px",
              }}
            >
              <Text
                style={[
                  styles.fontHindi,
                  { paddingRight: "4px", paddingTop: "4px" },
                ]}
              >
                GENERAL
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "18px",
                  },
                ]}
              >
                EBC
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "24px",
                  },
                ]}
              >
                BC
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "24px",
                  },
                ]}
              >
                SC
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "24px",
                  },
                ]}
              >
                ST
              </Text>
              <Tile piece={1} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingRight: "48px",
              }}
            >
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "8px",
                  },
                ]}
              >
                No
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "24px",
                  },
                ]}
              >
                Yes:{" "}
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "24px",
                  },
                ]}
              >
                Specify if yes:{" "}
              </Text>
              <FlatTile piece={1} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingRight: "48px",
              }}
            >
              <Text
                style={[
                  styles.fontHindi,
                  { paddingRight: "4px", paddingTop: "4px" },
                ]}
              >
                Hindu
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "18px",
                  },
                ]}
              >
                Muslim
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "18px",
                  },
                ]}
              >
                Sikh
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "18px",
                  },
                ]}
              >
                Jain
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "18px",
                  },
                ]}
              >
                Baudha
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "18px",
                  },
                ]}
              >
                Christ
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "18px",
                  },
                ]}
              >
                Other
              </Text>
              <Tile piece={1} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingRight: "48px",
              }}
            >
              <Text
                style={[
                  styles.fontHindi,
                  { paddingRight: "4px", paddingTop: "4px" },
                ]}
              >
                Rural
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "12px",
                  },
                ]}
              >
                Urban
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "48px",
                  },
                ]}
              >
                14. Marital Status: &nbsp;&nbsp;&nbsp;&nbsp;Married
              </Text>
              <Tile piece={1} />
              <Text
                style={[
                  styles.fontHindi,
                  {
                    paddingRight: "4px",
                    paddingTop: "4px",
                    paddingLeft: "12px",
                  },
                ]}
              >
                Unmarried
              </Text>
              <Tile piece={1} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
              }}
            >
              <Tile piece={10} />
            </View>
          </View>
          <View
            style={{
              border: "1px solid black",
              height: 114,
              width: "512",
              marginTop: "6",
              marginLeft: "-4",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                borderRight: "1px solid black",
                width: 256,
                height: 120,
                marginTop: -1,
                padding: 4,
                paddingTop: 0,
              }}
            >
              <Text style={[styles.hindi, { fontSize: 9 }]}>
                16- कृपया "आधार नंबर" अंकित करें।
              </Text>
              <Text style={[styles.hindi, { fontSize: 8, paddingTop: 0 }]}>
                (यदि विद्यार्थी को "आधार नम्बर" आवंटित नहीं हुआ है, तो
                विद्यार्थी के द्वारा इस आशय की घोषणा स्तंभ-17 में की जानी आवश्यक
                होगी कि उन्हें "आधार नंबर" आवंटित नहीं हुआ है)
              </Text>
              <Text style={[styles.hindi, { fontSize: 9 }]}>
                PLEASE MENTION "AADHAR NUMBER"
              </Text>
              <Text style={[styles.hindi, { fontSize: 8, paddingTop: 0 }]}>
                (If the student has not enrolled in Aadhar and doesn't have
                "Aadhar number" then he/she is required to submit declaration in
                column 17 that he/she has not been enrolled in Aadhar and has
                not got "Aadhar number".)
              </Text>
            </View>
            <View style={{ margin: "auto" }}>
              <View style={{ flexDirection: "row" }}>
                <Tile piece={12} />
              </View>
              <Text style={[styles.hindi, { paddingLeft: 85, paddingTop: 4 }]}>
                आधार नंबर
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 74, paddingTop: 0 }]}>
                Adhaar Number
              </Text>
            </View>
          </View>
          <View
            style={{
              border: "1px solid black",
              borderTop: "none",
              height: 174,
              width: "512",
              marginLeft: "-4",
              flexDirection: "row",
            }}
          >
            <View style={{ paddingLeft: 8 }}>
              <Text style={styles.hindi}>17-</Text>
            </View>
            <View style={{ paddingLeft: 8, width: "484" }}>
              <Text style={[styles.hindi, { fontSize: 9 }]}>
                यदि विद्यार्थी के द्वारा उपर्युक्त स्तंभ-16 में "आधार नंबर"
                अंकित नहीं किया गया है, तो उनके द्वारा निम्नांकित घोषणा की जाएगी
                :-{" "}
              </Text>
              <Text style={[styles.hindi, { paddingTop: 2 }]}>
                (कृपया नोट करें कि यहाँ किसी भी तरह की गलत घोषणा के लिए
                विद्यार्थी के विरूद्ध कार्रवाई की जा सकेगी तथा "आधार नम्बर" नहीं
                होने के संबंध में इस मिथ्या/गलत घोषणा के कारण उनका अभ्यर्थित्व
                रद्द किया जा सकता है)
              </Text>
              <Text
                style={[
                  styles.hindi,
                  { textDecoration: "underline", fontSize: 9, paddingTop: 0 },
                ]}
              >
                घोषणा :- मैं, एतद् द्वारा घोषित करता/करती हूँ कि मैंने "आधार
                नम्बर" आवंटित करने के लिए आवेदन नहीं किया है तथा मुझे "आधार
                नम्बर" आवंटित नहीं हुआ है। मैं यह भी समझता / समझती हूँ कि मेरे
                द्वारा की गई इस मिथ्या / गलत घोषणा के आधार पर मेरा अभ्यर्थित्व
                रद्द किया जा सकता है।
              </Text>

              <Text style={[styles.hindi, { fontSize: 8 }]}>
                If student has not given "Aadhar number" in column 16 above,
                then following declaration should be given by the student:-
              </Text>
              <Text style={[styles.hindi, { paddingTop: 2 }]}>
                (Please note that any WRONG DECLARATION made here, may invite
                action against the candidate and his/her candidature may be
                cancelled due to making falseful declaration about non-allotment
                of "Aadhar number")
              </Text>
              <Text
                style={[
                  styles.hindi,
                  { textDecoration: "underline", fontSize: 9, paddingTop: 4 },
                ]}
              >
                DECLARATION :- I, hereby declare that I have not enrolled in
                Aadhar and have not got any "Aadhar number". I also understand
                that any false declaration made by me in this regard may have
                consequence of cancellation of my candidature.
              </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <View style={{ paddingRight: 24 }}>
                  <Text
                    style={[
                      styles.hindi,
                      { fontSize: 8, paddingTop: 16, paddingLeft: 8 },
                    ]}
                  >
                    विद्यार्थी का हस्ताक्षर
                  </Text>
                  <Text style={[styles.hindi, { fontSize: 8, paddingTop: 0 }]}>
                    Signature of Student
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View>
        <View style={styles.topLeft}></View>
        <View style={styles.topRight}></View>
        <View style={styles.bottomLeft}></View>
        <View style={styles.bottomRight}></View>
      </View>
      <View style={{ marginBottom: 4, marginTop: 30 }}>
        <View style={styles.body}>
          <View>
            <Text style={[styles.hindi, { marginBottom: 12, marginTop: 6 }]}>
              18- Email ID:{" "}
            </Text>
            <Text style={[styles.hindi, { marginBottom: 34, marginTop: 6 }]}>
              19- Address:{" "}
            </Text>
            <Text style={[styles.hindi, { paddingBottom: 6, paddingTop: 12 }]}>
              20- Bank A/C No:{" "}
            </Text>
            <Text style={[styles.hindi, { paddingBottom: 8, paddingTop: 2 }]}>
              21- IFSC Code:{" "}
            </Text>
            <Text style={[styles.hindi, { paddingTop: 4 }]}>
              22. Name of Bank{" "}
            </Text>
            <Text style={[styles.hindi, { paddingTop: 16 }]}>
              23. Two Identification{" "}
            </Text>
            <Text style={[styles.hindi, { paddingTop: 4, paddingLeft: 16 }]}>
              Marks of Student{" "}
            </Text>
            <View>
              <Text style={[styles.hindi, { paddingTop: 12 }]}>
                24- Subjects Offered:{" "}
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 5 }]}>
                {" "}
                i- M.I.L.:
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 9 }]}>
                {" "}
                ii- S.I.L.:
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 9 }]}>
                {" "}
                iii- Compulsory:
              </Text>
              <Text style={[styles.hindi, { paddingTop: 0, paddingLeft: 24 }]}>
                For Visually
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 24, paddingTop: 0 }]}>
                {" "}
                Impared
              </Text>
              <Text style={[styles.hindi, { paddingLeft: 12, paddingTop: 9 }]}>
                {" "}
                iv- Optional:
              </Text>
            </View>
          </View>
          <View style={styles.stduentData}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingBottom: 0,
                marginBottom: -1,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingTop: 0,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingBottom: 0,
                marginBottom: -2,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingBottom: 0,
                marginBottom: -2,
              }}
            >
              <Tile piece={25} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingTop: 0,
              }}
            >
              <Tile piece={15} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 4,
                  padding: 2,
                  marginTop: 1,
                }}
              >
                <Text
                  style={[
                    styles.fontHindi,
                    { paddingRight: "4px", paddingTop: "4px", paddingLeft: 23 },
                  ]}
                >
                  Pincode :{" "}
                </Text>
                <Tile piece={6} />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
                paddingTop: 6,
              }}
            >
              <Tile piece={22} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 4,
                padding: 2,
              }}
            >
              <Tile piece={11} />
            </View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "2px 2px",
                width: 426,
              }}
            ></View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "4px 2px 1px 12px",
                width: 416,
              }}
            ></View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "0px 2px 1px 12px",
                width: 416,
              }}
            ></View>
            <View style={{ paddingLeft: 8 }}>
              <Text style={styles.hindi}>
                (Note: Tick any one option in the subject section 24.i, ii & iv){" "}
              </Text>
            </View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "1px 2px",
                width: 426,
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>Hindi</Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>Urdu</Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Bangla
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Maithili
                  </Text>
                  <Tile piece={1} />
                </View>
              </View>
            </View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "1px 2px",
                width: 426,
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Sanskrit
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    HIN (NLH)
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Arabic
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Persian
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Bhojpuri
                  </Text>
                  <Tile piece={1} />
                </View>
              </View>
            </View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "1px 2px 0px 2px",
                width: 426,
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>Math</Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Science
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Soc. Science
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    English
                  </Text>
                  <Tile piece={1} />
                </View>
              </View>
            </View>
            <View
              style={{
                border: "0.5px solid black",
                height: 20,
                margin: "0px 2px 1px 2px",
                width: 426,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Home Science (In lieu of Mathematics)
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Music (In lieu of Science)
                  </Text>
                  <Tile piece={1} />
                </View>
              </View>
            </View>
            <View
              style={{
                border: "0.5px solid black",
                height: 60,
                margin: "1px 2px 1px 2px",
                width: 426,
                paddingTop: 4,
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Adv. Math
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Arabic
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Commerce
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>Dance</Text>
                  <Tile piece={1} />
                </View>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Economics
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Fine Arts
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Home Sci.
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Maithili
                  </Text>
                  <Tile piece={1} />
                </View>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>Music</Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Persian
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}>
                    Sanskrit
                  </Text>
                  <Tile piece={1} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 6,
                    paddingRight: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.hindi, { paddingRight: 6 }]}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 4, marginTop: 36 }}>
        <View style={styles.bodyMargin}>
          <View>
            <Text style={styles.hindi}>25.</Text>
          </View>
        </View>
        <View style={[styles.contentMargin, { width: 530 }]}>
          <View>
            <Text style={[styles.hindi, { fontSize: 10 }]}>
              व्यवसायिक शिक्षा अन्तर्गत निम्नांकित विषयों/ ट्रेडो के पढ्न पाठ्न
              के व्यवस्था के लिए प्रत्येक जिले के कुछ विद्यालयों को चिन्हित किया
              गया है, जिनकी सूची समिति के पोर्टल/वेबसाइट पर प्रदर्शित की गयी है।
              अतः उन चिन्हित विद्यालयों में इस विषय / ट्रेड का अध्ययन कर रहे,
              छात्र/छात्रा के द्वारा ही निम्नलिखित से किसी एक का चयन कर परीक्षा
              में शामिल होना अनिवार्य है।
            </Text>
          </View>
          <View
            style={{
              border: "0.5px solid black",
              height: 40,
              margin: "1px 2px 1px 2px",
              width: 488,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 6,
                  paddingRight: 6,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.hindi, { paddingRight: 6 }]}>
                  Security
                </Text>
                <Tile piece={1} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 6,
                  paddingRight: 6,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.hindi, { paddingRight: 6 }]}>
                  Beautician
                </Text>
                <Tile piece={1} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 6,
                  paddingRight: 6,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.hindi, { paddingRight: 6 }]}>Tourism</Text>
                <Tile piece={1} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 6,
                  paddingRight: 6,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.hindi, { paddingRight: 6 }]}>
                  Automobile
                </Text>
                <Tile piece={1} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 6,
                  paddingRight: 6,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.hindi, { paddingRight: 6 }]}>
                  Retail Management
                </Text>
                <Tile piece={1} />
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 6,
                  paddingRight: 6,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.hindi, { paddingRight: 6 }]}>
                  Electronics & H/W
                </Text>
                <Tile piece={1} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 6,
                  paddingRight: 6,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.hindi, { paddingRight: 6 }]}>
                  Beauty & Wellness
                </Text>
                <Tile piece={1} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 6,
                  paddingRight: 6,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.hindi, { paddingRight: 6 }]}>Telecom</Text>
                <Tile piece={1} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 6,
                  paddingRight: 6,
                  alignItems: "center",
                }}
              >
                <Text style={[styles.hindi, { paddingRight: 6 }]}>IT/ITes</Text>
                <Tile piece={1} />
              </View>
            </View>
          </View>
          <View>
            <Text style={[styles.hindi, { fontSize: 10 }]}>
              राज्य/जिला के अन्य विद्यालयों के छात्र/छात्राओं के द्वारा इन
              विषयों का चयन नहीं किया जाएगा।
            </Text>
          </View>
          <View>
            <Text style={[styles.hindi, { textAlign: "center", fontSize: 12 }]}>
              घोषणा
            </Text>
          </View>
          <View
            style={{
              border: "0.5px solid black",
              height: 95,
              margin: "1px 2px 1px 2px",
              width: 488,
              borderRadius: 8,
            }}
          >
            <Text style={[styles.hindi, { padding: 8 }]}>
              प्रमाणित किया जाता है कि इस आवेदन पत्र में दी गई सूचनाएँ पूरी तरह
              से इसमें कहीं पर भी किसी प्रकार के संशोधन की आवश्यकता नही है। जो
              भी सुधार एवं लिए गए हैं।
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 12,
              }}
            >
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <View
                  style={{
                    width: 140,
                    height: 75,
                    border: "0.5px solid black",
                  }}
                ></View>
                <Text style={styles.hindi}>Signature of Parent/Guardian</Text>
              </View>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <View
                  style={{
                    width: 140,
                    height: 75,
                    border: "0.5px solid black",
                  }}
                ></View>
                <Text style={styles.hindi}>Student's Signature in Hindi</Text>
              </View>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <View
                  style={{
                    width: 140,
                    height: 75,
                    border: "0.5px solid black",
                  }}
                ></View>
                <Text style={styles.hindi}>Student's Signature in English</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              border: "0.5px solid black",
              height: 95,
              margin: "8px 2px 1px 2px",
              width: 488,
              borderRadius: 8,
            }}
          >
            <Text style={[styles.hindi, { padding: 8 }]}>
              प्रमाणित किया जाता है कि इस आवेदन पत्र में दी गई सूचनाएँ पूरी तरह
              से इसमें कहीं पर भी किसी प्रकार के संशोधन की आवश्यकता नही है। जो
              भी सुधार एवं लिए गए हैं।
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 12,
              }}
            >
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <View
                  style={{
                    width: 180,
                    height: 75,
                    border: "0.5px solid black",
                  }}
                ></View>
                <Text style={[styles.hindi, { paddingLeft: "36px" }]}>
                  Signature & Stamp of Principal
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 8,
              border: "0.5px solid black",
              width: 488,
              marginTop: 12,
              marginLeft: 2,
            }}
          >
            <Text style={[styles.hindi, { fontSize: 10 }]}>
              (Note: Tick any one option in the subject section 24.i, ii & iv){" "}
            </Text>
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
      <View
        style={{
          border: "0.5px solid black",
          height: 17,
          width: 18,
          marginRight: -1,
        }}
      ></View>
    );
  }
  return tiles;
};
const FlatTile = ({ piece }) => {
  const tiles = [];
  for (let col = 0; col < piece; col++) {
    tiles.push(
      <View
        style={{ border: "0.5px solid black", height: 17, width: 220 }}
      ></View>
    );
  }
  return tiles;
};

export default Report;
