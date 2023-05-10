const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const loginController = require('../controllers/loginController.js')

router.post('/login', loginController.login);
router.get('/home', verifyJWT, loginController.home);

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];

    if(!token) {
        return res.status(401).json({status: 'error', message: 'Nenhum token gerado'});
    }

    // Verifica o token do usuário
    jwt.verify(token, process.env.SECRET, function(err, decoded){
        if(err) {
            return res.status(500).json({status: 'error', message: 'Falha ao autenticar o token'});
        }

        req.userId = decoded.id;
        next();
    });
}

module.exports = router;