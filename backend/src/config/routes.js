import { Router } from "express";
import usersRouter from "../modules/users/api/routes.js";
import resourcesRouter from "../modules/resource/api/routes.js";
import classroomsRouter from "../modules/classroom/api/routes.js";
import classRouter from "../modules/class/api/routes.js";
import emailRouter from "../modules/email/api/routes.js";
import calendarRouter from "../modules/calendar/api/routes.js";

const router = Router()

// http://localhost:8080/api/

router.use('/users/', usersRouter)
router.use('/classroom/', classroomsRouter)
router.use('/class/', classRouter)
router.use('/resources/', resourcesRouter)
router.use('/send-email', emailRouter)
router.use('/calendar', calendarRouter)
router.get('/pruebas', async (req, res, next) => {res.send("Prueba Pruebas")});


export default router