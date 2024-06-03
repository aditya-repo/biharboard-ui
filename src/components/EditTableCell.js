import React, { useEffect, useRef, useState } from 'react'


const EditableTableCell = ({ initialValue }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef(null);


    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setIsEditing(false);
        }
    };

  const handleBlur = () => {
    setIsEditing(false);
    // onSave(value);
  };
  
    return (
        <td onDoubleClick={handleDoubleClick}>
            {isEditing ? (
                <input
                    type="text" style={{ marginLeft: "-8px" }} className='block py-2 px-2 font-normal leading-6 text-gray-900'
                    value={value}
                    ref={inputRef}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onBlur={handleBlur} // Revert back to cell view if focus is lost
                />
            ) : (
                value
            )}
        </td>
    );
};


export default EditableTableCell;