const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/forms', formController.createForm);

router.get('/forms', formController.getAllForms);

router.get('/forms/:id', formController.getFormById);

router.put('/forms/:id', formController.updateForm);

router.delete('/forms/:id', formController.deleteForm);

router.post('/forms/:id/responses', formController.submitResponse);

module.exports = router;