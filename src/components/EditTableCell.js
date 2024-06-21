import React, { useEffect, useRef, useState } from 'react'
const URL = 'http://localhost:4040/student/'
 
const EditableTableCell = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(props.initialValue);
    const [field, setField] = useState(props.fieldName);
    const inputRef = useRef(null);

    const handleDoubleClick = () => {
        setIsEditing(true);
    }

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            setIsEditing(false);
            const data = {[field]:value}
            await saveData(URL, data);
        }
    }

  const handleBlur = async () => {
    setIsEditing(false);
    const data = {[field]:value}
    await saveData(URL, data);

    console.log(field);
  }

  const saveData = async (url, data) => {
    const apipath = `${url}${props.studentid}`
    try {
      const response = await fetch(apipath, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
}
  
    return (
        <td onDoubleClick={handleDoubleClick}>
            {isEditing ? (
                <input
                    type="text" style={{ marginLeft: "-8px" }} className='block py-2 px-2 font-normal leading-6 text-gray-900'
                    value={value}
                    ref={inputRef}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onBlur={handleBlur}
                />
            ) : (
                value
            )}
        </td>
    );
};


export default EditableTableCell;