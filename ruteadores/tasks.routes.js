import { Router } from "express"
import * as tasksCtrl from '../controladores/tasks.controllers.js'

const router = Router()

router.get('/', tasksCtrl.findAllUsers);

router.post('/', tasksCtrl.createUsers);

router.get('/done', tasksCtrl.findAllDoneUser);

router.get('/:id', tasksCtrl.findOneUser);

router.delete('/:id', tasksCtrl.deleteUser);

router.put('/:id', tasksCtrl.updateUser);


export default router;