const express = require('express');
const router = express.Router();
const expositorController = require('../controllers/ExpositorController');

router.post('/expositores', expositorController.crearExpositor);
router.get('/expositores', expositorController.obtenerExpositores);
router.get('/expositores/:id', expositorController.obtenerExpositorPorId);
router.put('/expositores/:id', expositorController.actualizarExpositor);
router.delete('/expositores/:id', expositorController.eliminarExpositor);

module.exports = router;
