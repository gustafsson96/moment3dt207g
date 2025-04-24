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

// Work Experience schema
const workExperienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: false
    }
});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema);


// Route to collect work experience data
app.get("/work_experience", async (req, res) => {
    try {
        let result = await WorkExperience.find({});
        return res.json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Route to add a new work experience 
app.post('/work_experience', async (req, res) => {
    try {
        const newEntry = new WorkExperience(req.body);
        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        return res.status(400).json(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
