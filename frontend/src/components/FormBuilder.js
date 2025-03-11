import React, { useState } from 'react';
import '../styles/FormBuilder.css';

const FormBuilder = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    setFields([...fields, { type, label: '', options: [], required: false }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, fields });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Field Label"
            value={field.label}
            onChange={(e) => {
              const newFields = [...fields];
              newFields[index].label = e.target.value;
              setFields(newFields);
            }}
            required
          />
        </div>
      ))}
      <button type="button" onClick={() => addField('text')}>Add Text Field</button>
      <button type="button" onClick={() => addField('dropdown')}>Add Dropdown</button>
      <button type="submit">Save Form</button>
    </form>
  );
};

export default FormBuilder;