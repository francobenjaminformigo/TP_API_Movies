const express = require('express');
const router = express.Router();
const actorsAPIController = require('../../controllers/api/actorsAPIController');


router.get('/api/actors', actorsAPIController.list);
router.get('/api/actors/:id', actorsAPIController.detail);
router.get('/api/actors/:id/movies', actorsAPIController.actorMovies);


router.post('/api/actors/create', actorsAPIController.create);
router.put('/api/actors/update/:id', actorsAPIController.update);
router.delete('/api/actors/delete/:id', actorsAPIController.destroy);

module.exports = router;