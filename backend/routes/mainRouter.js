const express = require("express");
const router = express.Router()

//events
const postEvent = require("../controllers/event/createEvent")
const getEvents = require("../controllers/event/getEvents")
const getEvent = require("../controllers/event/getEvent")
const updateEvent = require('../controllers/event/updateEvent')
const deleteEvent = require('../controllers/event/deleteEvent')

//users
const getUsers = require('../controllers/users/getUsers')
const createUser = require('../controllers/users/createUser')
const userLogin = require('../controllers/users/userLogin')

//task
const createTask = require('../controllers/task/createTask')
const deleteTask = require('../controllers/task/deleteTask')
const getAllTasks = require('../controllers/task/getAllTasks')
const getTaskById = require('../controllers/task/getTaskById')
const updateTask = require('../controllers/task/updateTask')



router.get('/get-events', getEvents)
router.get('/get-events/:userId', getEvent)
router.post('/create-event', postEvent)
router.put('/update-event/:id', updateEvent)
router.delete('/delete-event/:id', deleteEvent)


router.get('/get-users', getUsers)
router.post('/new-user', createUser)
router.get('/user', userLogin)

router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);



module.exports = router;