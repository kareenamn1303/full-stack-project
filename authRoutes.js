const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, addUser, getDetails, deleteRecord } = require('../controllers/authControllers');

router.use(
    cors({
        credentials : true,
        origin : 'http://localhost:3000'
    })
);

router.get('/',test);
router.get('/getDetails', getDetails);
router.post('/addUser',addUser);
router.post('/deleteRecord',deleteRecord);

module.exports = router;