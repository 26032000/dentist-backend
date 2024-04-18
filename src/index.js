const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

const dentistRoutes = require('./routes/dentistRoutes');
const patientRoutes = require('./routes/patientRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const treatmentRoutes = require('./routes/treatmentRoute');
const faqRoute=require('./routes/faqRoutes');
const inventoryRoute = require('./routes/inventoryRoutes');
const userRoutes=require('./routes/userRoutes');

const errorHandler = require('./middleware/errorhandler');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas

const username = 'Barrack'; 
const encodedPassword = encodeURIComponent('Barrack!@#');
const connectionString = `mongodb+srv://${username}:${encodedPassword}@dentistry-cluster.tc5kdop.mongodb.net/Dentistry`;

mongoose.connect(connectionString)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use('/api/dentists', dentistRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/treatments', treatmentRoutes);
app.use('/api/faqs',faqRoute);
app.use('/api/inventory', inventoryRoute);
app.use('/auth', userRoutes);

app.use(errorHandler);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
