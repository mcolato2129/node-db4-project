const router = require('express').Router();

router.get('/', ( req, res) => {
    res.send(`You got this just keep working everyday insha'Allah`)
})

router.use(( err, req, res, next ) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in the recipes router',
        errMessage: err.messsage,
        stack: err.stack
    })
})

module.exports = router;