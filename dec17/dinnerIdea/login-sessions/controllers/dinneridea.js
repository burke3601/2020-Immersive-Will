const { layout } = require('../utils')
const { DinnerIdea } = require('../models');


const showForm = (req, res) => {
    res.render('dinnerideas/form',{
        locals: {
            title: 'Add new Dinner Idea'
        },
        ...layout
    });
};

const processForm = async (req, res) => {
    const { dinner } = req.body;
    const { id } = req.session.user;
    
    if (dinner && id) {
        const newDinner = await DinnerIdea.create({
            dinner,
            category,
            dinnerId: id
        });
        console.log(newDinner);
        res.redirect(`${req.baseUrl}/`)
    } else {
        res.redirect(req.url);
    }
    
};

const list = async (req, res) => {
    const { id } = req.session.user;
    if (id) {
        
        const dinnerIdeas = await DinnerIdea.findAll({
            where: {
                dinnerID: id // match the logged in user
            }
        });
        res.render('dinnerideas/list', {
            locals: {
                dinnerIdeas
            },
            ...layout
        })
    } else {
        res.redirect('/');
    }
};

module.exports = {
    showForm,
    processForm,
    list
};

