// src/components/EditableTable.js
import React, { useState } from 'react';

const EditableTable = () => {
    const [data, setData] = useState([
        { name: 'John Doe', age: 30, city: 'New York' },
        { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
        { name: 'Mike Johnson', age: 35, city: 'Chicago' }
    ]);

    const [editIdx, setEditIdx] = useState(null);
    const [editField, setEditField] = useState({});

    const handleDoubleClick = (idx, field, value) => {
        setEditIdx(idx);
        setEditField({ field, value });
    };

    const handleChange = (e) => {
        setEditField({ ...editField, value: e.target.value });
    };

    const handleKeyPress = (e, idx, field) => {
        if (e.key === 'Enter' || e.type === 'blur') {
            const updatedData = [...data];
            updatedData[idx][field] = editField.value;
            setData(updatedData);
            setEditIdx(null);
            setEditField({});
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {Object.keys(row).map((field) => (
                            <td key={field} onDoubleClick={() => handleDoubleClick(idx, field, row[field])}>
                                {editIdx === idx && editField.field === field ? (
                                    <input
                                        type="text"
                                        value={editField.value}
                                        onChange={handleChange}
                                        onBlur={(e) => handleKeyPress(e, idx, field)}
                                        onKeyPress={(e) => handleKeyPress(e, idx, field)}
                                    />
                                ) : (
                                    row[field]
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EditableTable;
