import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormBuilder from './components/FormBuilder';
import FormList from './components/FormList';
import FormViewer from './components/FormViewer';
import '../src/styles/App.css';

const App = () => {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    fetchForms();
  }, []);

  // Fetch all forms from the backend
  const fetchForms = async () => {
    try {
      const response = await axios.get('/api/forms'); // No need for formData here
      setForms(response.data);
    } catch (error) {
      console.error('Error fetching forms:', error);
    }
  };

  // Handle form submission (create a new form)
  const handleFormSubmit = async (formData) => {
    try {
      await axios.post('/api/forms', formData); // Send formData to the backend
      fetchForms(); // Refresh the list of forms
    } catch (error) {
      console.error('Error creating form:', error);
    }
  };

  // Handle form response submission
  const handleResponseSubmit = async (formId, responses) => {
    try {
      await axios.post(`/api/forms/${formId}/responses`, responses); // Send responses to the backend
      alert('Response submitted successfully!');
    } catch (error) {
      console.error('Error submitting response:', error);
    }
  };

  return (
    <div className="App">
      <h1>No-Code Form Builder</h1>
      <FormBuilder onSubmit={handleFormSubmit} />
      <FormList forms={forms} onEdit={setSelectedForm} onDelete={fetchForms} />
      {selectedForm && (
        <FormViewer
          form={selectedForm}
          onSubmit={(responses) => handleResponseSubmit(selectedForm._id, responses)}
        />
      )}
    </div>
  );
};

export default App;