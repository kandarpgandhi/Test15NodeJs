const express = require('express')
const app = express()
const studentsRoutes = require('./routes/students')
const coursesRoutes = require('./routes/courses')

app.use('/', studentsRoutes)
app.use('/', coursesRoutes)

app.get('/', (req, res) => {
    res.end('Welcome to the Student & Course Portal API!')
})

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(3000, () => {
    console.log('Server is running')
})