function mapStudentData(studentData) {
    const mappedData = [
      { id: 1, column: "01", name: "Category", value: studentData.category, field: "category", shortcut: null },
      { id: 2, column: "02", name: "School Code", value: studentData.schoolcode, field: "schoolcode", shortcut: null },
      { id: 3, column: "03", name: "School Name", value: studentData.schoolname, field: "schoolname", shortcut: null },
      { id: 4, column: "04", name: "Name", value: studentData.name, field: "name", shortcut: null },
      { id: 5, column: "04", name: "Name (Hindi)", value: studentData.namehindi, field: "namehindi", shortcut: null },
      { id: 6, column: "05", name: "Mother", value: studentData.mother, field: "mother", shortcut: null },
      { id: 7, column: "05", name: "Mother (Hindi)", value: studentData.motherhindi, field: "motherhindi", shortcut: null },
      { id: 8, column: "06", name: "Father", value: studentData.father, field: "father", shortcut: null },
      { id: 9, column: "06", name: "Father (Hindi)", value: studentData.fatherhindi, field: "fatherhindi", shortcut: null },
      { id: 10, column: "07", name: "Date of Birth", value: studentData.dob, field: "dob", shortcut: null },
      { id: 11, column: "08", name: "Gender", value: studentData.gender, field: "gender", shortcut: { 1: "MALE", 2: "FEMALE" } },
      { id: 12, column: "09", name: "Nationality", value: studentData.nationality, field: "nationality", shortcut: { 1: "INDIAN", 2: "OTHERS" } },
      { id: 13, column: "10", name: "Caste", value: studentData.caste, field: "caste", shortcut: { 1: "GENERAL", 2: "EBC", 3: 'BC', 4:'SC', 5:'ST' } },
      { id: 14, column: "11", name: "Disability", value: studentData.disability, field: "disability", shortcut: {1: 'NO', 2: 'YES'} },
      { id: 15, column: "11", name: "Disability Reason", value: studentData.disabilityreason, field: "disabilityreason", shortcut: null },
      { id: 16, column: "12", name: "Religion", value: studentData.religion, field: "religion", shortcut: {1: 'HINDU', 2: 'MUSLIM', 3: 'SIKH', 4: 'CHRISTIAN', 5: 'BUDDHA', 6: 'JAIN'} },
      { id: 17, column: "13", name: "Area", value: studentData.area, field: "area", shortcut: {1: 'RURAL', 2: 'URBAN'} },
      { id: 18, column: "14", name: "Marital Status", value: studentData.maritalstatus, field: "maritalstatus", shortcut: {1:'MARRIED', 2: 'UNMARRIED'} },
      { id: 19, column: "15", name: "Mobile", value: studentData.phone, field: "phone", shortcut: null },
      { id: 20, column: "16", name: "Adhaar", value: studentData.adhaar, field: "adhaar", shortcut: null },
      { id: 21, column: "17", name: "Adhaar Status", value: studentData.adhaarstatus, field: "adhaarstatus", shortcut: null },
      { id: 22, column: "18", name: "Email", value: studentData.email, field: "email", shortcut: null },
      { id: 23, column: "19", name: "Address", value: studentData.address, field: "address", shortcut: null },
      { id: 24, column: "19", name: "Pincode", value: studentData.pincode, field: "pincode", shortcut: null },
      { id: 25, column: "20", name: "Bank Account", value: studentData.bankaccount, field: "bankaccount", shortcut: null },
      { id: 26, column: "21", name: "IFSC", value: studentData.ifsc, field: "ifsc", shortcut: null },
      { id: 27, column: "22", name: "Bank Name", value: studentData.bankname, field: "bankname", shortcut: null },
      { id: 28, column: "23", name: "Identity Mark 1", value: studentData.identitymark1, field: "identitymark1", shortcut: null },
      { id: 29, column: "23", name: "Identity Mark 2", value: studentData.identitymark2, field: "identitymark2", shortcut: null },
      { id: 30, column: "24", name: "MIL", value: studentData.mil, field: "mil", shortcut: {1: 'Hindi', 2: 'Urdu', 3: 'Bangla', 4: 'Maithili'} },
      { id: 31, column: "24", name: "SIL", value: studentData.sil, field: "sil", shortcut: {1:'Sanskrit',2: 'HIN(NIH)', 3:'Arabic', 4: 'Persian'} },
      { id: 32, column: "24", name: "Visual Impaired", value: studentData.visualimpared, field: "visualimpared", shortcut: {1: 'Math', 2: 'Science',3: 'Soc. Science', 4: 'English'} },
      { id: 33, column: "24", name: "Optional", value: studentData.optional, field: "optional", shortcut: {1: 'Adv. Math', 2: 'Arabic',3: 'Commerce', 4: 'Economics', 5: 'Fine Arts', 6: 'Home Sci',7: 'Music', 8:'Persian', 9:'Sanskrit'}  },
      { id: 34, column: "25", name: "Vocational", value: studentData.vocational, field: "vocational", shortcut: {1: 'Security', 2: 'Beautician',3: 'Tourism', 4: 'Automobile', 5: 'Retail Management', 6: 'Electronics & H/W',7: 'Beauty & Wellness ', 8:'Telecom'}  }
    ];
  
    return mappedData;
  }

  export default mapStudentData