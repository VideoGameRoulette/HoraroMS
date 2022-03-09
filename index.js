require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/schedule', async (req, res) => {
    const { data: schedule } = await axios.get(`https://horaro.org/-/api/v1/schedules/${process.env.HORARO_ID}`);
    return res.json(schedule.data);
});

app.get('/api/schedule/:id', async (req, res) => {
    const { id } = req.params;
    const { data: schedule } = await axios.get(`https://horaro.org/-/api/v1/schedules/${id}`);
    return res.json(schedule.data);
});

app.listen(PORT, () => console.log('Horaro Microservice listening on http://localhost:' + PORT))