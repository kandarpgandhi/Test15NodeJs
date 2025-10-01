const express = require('express')
const routes = express.Router()

const courses = [

    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

routes.get('/courses', (req, res) => {
    const names = courses.map(c => c.name).join(', ');
    res.send(`Courses: ${names}`);
})

routes.get('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (course) {
        res.send(`Course: ${course.name}, Description: ${course.description}`);
    } else {
        res.status(404).send('Course not found');
    }
})

module.exports = routes;