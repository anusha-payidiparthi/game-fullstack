const User = require('../models/user-model')

createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide details',
        })
    }

    User.find({ email: body.email }, function (err, data) {
        if (err) {
            return res.json({
                success: false,
                error: 'error occured!!!',
            })
        }

        if (data.length <= 0) {
            const user = new User(body)

            if (!user) {
                return res.status(400).json({ success: false, error: err })
            }

            user
                .save()
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        message: 'User created!',
                    })
                })
                .catch(error => {
                    return res.status(400).json({
                        error,
                        message: 'User not created!',
                    })
                })
        } else {
            return res.json({
                success: false,
                error: 'Email existed already !!! Please Login to continue !!!',
            })
        }
    });

}


loginUser = (req, res) => {
    const body = req.body;


    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide details',
        })
    }

    User.find({ email: body.email }, function (err, result) {

        if (err) {
            return res.json({
                success: false,
                error: 'error occured!!!',
            })
        }

        if (result && result.length === 1 && body.password === result[0].password) {
            const data = result[0];
            const dataObject = {
                name: data.name,
                email: data.email,
                user_id: data._id,
                games: data.games
            };
            console.log('****************', dataObject);
            return res.status(200).json({
                success: true,
                message: 'Login Success!!!',
                data: dataObject
            });

        } else {
            return res.status(200).json({
                success: false,
                message: 'Credentials not matched',
            })
        }
    });
}


module.exports = {
    createUser,
    loginUser
}