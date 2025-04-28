import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

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
        required: [true, "Company name is required"]
    },
    job_title: {
        type: String,
        required: [true, "Job title is required"]
    },
    start_date: {
        type: Date,
        required: [true, "Start date is required"]
    },
    end_date: {
        type: Date,
        required: false
    }
});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema);

// Routing 

app.get('/', (req, res) => {
    res.send('Welcome to the Work Experience API!');
});

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
        const newWorkExperience = new WorkExperience(req.body);
        const savedWorkExperience = await newWorkExperience.save();
        res.status(201).json(savedWorkExperience);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// Route to update a work experience
app.put('/work_experience/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedWorkExperience = await WorkExperience.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedWorkExperience) {
            return res.status(404).json({ message: "Work experience not found" });
        }
        res.json(updatedWorkExperience);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// Route to delete a work experience
app.delete('/work_experience/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedWorkExperience = await WorkExperience.findByIdAndDelete(id);
        if (!deletedWorkExperience) {
            return res.status(404).json({ message: "Work experience not found" });
        }
        res.json({ message: 'Work experience deleted successfully' });
    } catch (error) {
        return res.status(400).json(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
