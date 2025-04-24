# Moment 3 DT207G Part 1

This project makes up the first part of my contribution for Moment 3 - NoSQL-DATABASER in the course Backend-baserad webbutveckling (DT207G) at Mittuniversitetet, Sundsvall. 

## Installation

This API uses MongoDB Atlas. For installation, follow these steps:

1. Clone the repository: git clone url
2. Navigate into the project folder: cd your-project-folder-name
3. Ensure that Node.js is installed. Install necessary dependencies by running: npm install.
4. Create a .env file and add in your database credentials.
5. 
6. 

The installation script will create the following: 

| Column Name     | Data Type            | Description                   | Nullable |
|-----------------|----------------------|-------------------------------|----------|
| TEST            | TEST                 | TEST                          | Test     |
| TEST            | TEST                 | TEST                          | Test     | 

## Use API

| Method     | End Point   | Description  |
|------------|-------------|---------|
| GET        | /test       | Get all work experiences.|
| POST       | /test       | Add a new work experience.|
| PUT        | /test/:id/  | Update a work experience by id.|
| DELETE     | /test/:id/  | Delete a work experience by id. |

A work_experience object is sent/returned as a JSON object. An example is presented below:

{ <br>
    "company_name": "Tech Corp",<br>
    "job_title": "Software Developer",<br>
    "location": "Stockholm",<br>
    "start_date": "2023-01-10",<br>
    "end_date": "2025-01-10",<br>
    "description": "Developed and maintained software applications."
    <br>
  }

Additional notes: 
* 1
* 2





