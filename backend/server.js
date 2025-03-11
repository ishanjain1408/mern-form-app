const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const formRoutes = require('./src/routes/formRoutes');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');
const router = express.Router();
const formController = require('./src/controllers/formController');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
connectDB();
app.use(express.json());

app.use('/api/users', userRoutes);



app.get('/', (req, res) => {
    res.send('Hello, MERN Stack!');
  });

  router.post('/forms', formController.createForm);

app.use('/api', formRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = router;