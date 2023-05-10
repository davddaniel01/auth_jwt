const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    let { user, password } = req.body;
    
    if(user == process.env.USER && password == process.env.PASSWORD) {  
        const id = 1;

        // Montar o token JWT para enviar para o usuário
        const token =  jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300 // Tempo de expiração 5 min
        });

        return res.json({status: 'Ok', user_id: id, token: token});

    } else {
        return res.status(500).json({status: 'Error', message: 'Usuário ou senha incorretos!'})
    }
}

exports.home = (req, res) => {
    res.json("Página Home")
}