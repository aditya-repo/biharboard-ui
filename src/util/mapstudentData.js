function mapStudentData(studentData) {
    const mappedData = [
      { id: 1, column: "01", name: "Student UID", value: studentData.studentuid, field: "studentuid" },
      { id: 2, column: "02", name: "Student Type", value: studentData.studenttype, field: "studenttype" },
      { id: 3, column: "03", name: "Form Type", value: studentData.formtype, field: "formtype" },
      { id: 4, column: "04", name: "Category", value: studentData.category, field: "category" },
      { id: 5, column: "05", name: "School Code", value: studentData.schoolcode, field: "schoolcode" },
      { id: 6, column: "06", name: "School Name", value: studentData.schoolname, field: "schoolname" },
      { id: 7, column: "07", name: "Name", value: studentData.name, field: "name" },
      { id: 8, column: "08", name: "Name (Hindi)", value: studentData.namehindi, field: "namehindi" },
      { id: 9, column: "09", name: "Father", value: studentData.father, field: "father" },
      { id: 10, column: "10", name: "Father (Hindi)", value: studentData.fatherhindi, field: "fatherhindi" },
      { id: 11, column: "11", name: "Mother", value: studentData.mother, field: "mother" },
      { id: 12, column: "12", name: "Mother (Hindi)", value: studentData.motherhindi, field: "motherhindi" },
      { id: 13, column: "13", name: "Date of Birth", value: studentData.dob, field: "dob" },
      { id: 14, column: "14", name: "Gender", value: studentData.gender, field: "gender" },
      { id: 15, column: "15", name: "Caste", value: studentData.caste, field: "caste" },
      { id: 16, column: "16", name: "Nationality", value: studentData.nationality, field: "nationality" },
      { id: 17, column: "17", name: "Disability", value: studentData.disability, field: "disability" },
      { id: 18, column: "18", name: "Religion", value: studentData.religion, field: "religion" },
      { id: 19, column: "19", name: "Area", value: studentData.area, field: "area" },
      { id: 20, column: "20", name: "Marital Status", value: studentData.maritalstatus, field: "maritalstatus" },
      { id: 21, column: "21", name: "Phone", value: studentData.phone, field: "phone" },
      { id: 22, column: "22", name: "Adhaar", value: studentData.adhaar, field: "adhaar" },
      { id: 23, column: "23", name: "Adhaar Status", value: studentData.adhaarstatus, field: "adhaarstatus" },
      { id: 24, column: "24", name: "Email", value: studentData.email, field: "email" },
      { id: 25, column: "25", name: "Address", value: studentData.address, field: "address" },
      { id: 26, column: "26", name: "Pincode", value: studentData.pincode, field: "pincode" },
      { id: 27, column: "27", name: "Bank Account", value: studentData.bankaccount, field: "bankaccount" },
      { id: 28, column: "28", name: "IFSC", value: studentData.ifsc, field: "ifsc" },
      { id: 29, column: "29", name: "Bank Name", value: studentData.bankname, field: "bankname" },
      { id: 30, column: "30", name: "Identity Mark 1", value: studentData.identitymark1, field: "identitymark1" },
      { id: 31, column: "31", name: "Identity Mark 2", value: studentData.identitymark2, field: "identitymark2" },
      { id: 32, column: "32", name: "MIL", value: studentData.mil, field: "mil" },
      { id: 33, column: "33", name: "SIL", value: studentData.sil, field: "sil" },
      { id: 34, column: "34", name: "Visual Impaired", value: studentData.visualimpared, field: "visualimpared" },
      { id: 35, column: "35", name: "Optional", value: studentData.optional, field: "optional" },
      { id: 36, column: "36", name: "Vocational", value: studentData.vocational, field: "vocational" }
    ];
  
    return mappedData;
  }

  export default mapStudentData