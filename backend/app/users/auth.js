module.exports = function (User, router, jwt, Sequelize, dbConnection, bcrypt, Dictionary, saltRounds) {

    //START LOGIN USER
    router.route('/login') // to login an existing user

        .get(async (req, res) => { // GET
            res.status(401).json({ message: Dictionary.not_autorized('es') })
        })

        .post(async (req, res) => { // POST
            let user;
            let pass;
            let username;
            try {
                username = req.body.email.replace(/(')/g, '\'');
                pass = req.body.password.replace(/(')/g, '\'');
            } catch (error) {
                if (process.env.devmode) return res.status(200).json({ message: error.stack || error.message, err: true })
                return res.status(200).json({ message: Dictionary.unknown_error('es'), err: true })
            }

            dbConnection.transaction({ isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED }, async (t) => {
                const hash = await User.findOne({ where: { username: username }, attributes:['password'], transaction: t });
                const compare = await bcrypt.compare(pass, hash.password);
                if(!compare) throw new Error(Dictionary.wrong_user_pass('es'))
                const data = await User.findOne({ where: { username: username }, attributes:['id','username'], transaction: t });
                return data
            }).then((user)=>{
                if (!user) {
                    return res.status(401).json({ message: Dictionary.wrong_user_pass('es'), err: true });
                } else {
                    return res.status(200).json(user);
                }
            }).catch((err)=>{
                if (process.env.devmode) return res.status(401).json({ message: err.stack || err.message, err: true })
                return res.status(401).json({ message: Dictionary.wrong_user_pass('es'), err: true })
            })
        })

        .put(async (req, res) => { // PUT
            res.status(401).json({ message: Dictionary.not_autorized('es') })
        })

        .delete(async (req, res) => { // DELETE
            res.status(401).json({ message: Dictionary.not_autorized('es') })
        })
    //END LOGIN USER


    //START REGISTER USER
    router.route('/register') // to register a new user.

        .get((req, res) => { // GET
            res.status(401).json({ message: Dictionary.not_autorized('es') })
        })

        .post(async (req, res) => { // POST
            try {
                const createdUser = await dbConnection.transaction({ isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED }, async (t) => {
                    const username = req.body.email.replace(/(')/g, '\'');
                    const pass = req.body.password.replace(/(')/g, '\'');
                    const salt = await bcrypt.genSalt(saltRounds);
                    const hash = await bcrypt.hash(pass, salt);
                    const user = await User.create({ username: username, password: hash }, { transaction: t });
                    return user
                })
                if (!createdUser) return res.status(401).json({ message: Dictionary.wrong_user_pass('es'), err: true });
                res.status(200).json({ message: req.body.email + ' ' + req.body.password });
            } catch (error) {
                if (process.env.devmode) return res.json({ message: error.stack || error.message, err: true })
                res.json({ message: Dictionary.unknown_error('es'), err: true })
            }
        })

        .put((req, res) => { // PUT
            res.status(401).json({ message: Dictionary.not_autorized('es') })
        })

        .delete(async (req, res) => { // DELETE
            res.status(401).json({ message: Dictionary.not_autorized('es') })
        })
    //END REGISTER USER
}