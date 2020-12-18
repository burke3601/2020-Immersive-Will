

const homeHandler = (req, res)=> {
    //took out the res.send and replaced with res.render
    res.render('homepage')
}

module.exports = {
    homeHandler
};