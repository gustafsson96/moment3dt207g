import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Connection error:', err));
  
  // Routes placeholder
  app.get('/', (req, res) => {
    res.send('API is running');
  });

// Test
const testSchema = new mongoose.Schema({ name: String });
const Test = mongoose.model('Test', testSchema);

app.post('/test', async (req, res) => {
  const doc = new Test({ name: req.body.name });
  await doc.save();
  res.send('Saved!');
});
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
