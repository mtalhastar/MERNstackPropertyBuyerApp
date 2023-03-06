
const express = require('express');
const router = express.Router();
const {getProperty,
      createProperty,
      updateProperty,
      deleteProperty,
       getAProperty} =require('../controllers/PropertyController')
router.route('/').get(getProperty).post(createProperty)
router.route('/:id').put(updateProperty).delete(deleteProperty)
router.route('/:id').get(getAProperty)
module.exports = router;


