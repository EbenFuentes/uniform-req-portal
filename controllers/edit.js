const ItemList = require('../models/itemlist')

module.exports = {
  getEdit: (req, res) => {
    const id = req.params.id
    ItemList.find({}, (err, items) => {
      res.render("edit.ejs", { itemList: items, idItem: id});
    });
  },
  deleteTask: (req, res) => {
    const id = req.params.id;
    ItemList.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect('back');
    })
},
  updateTask: (req, res) => {
    const id = req.params.id;
    ItemList.findByIdAndUpdate(
        id,
        {
           textinput: req.body.textinput,
           numinput: req.body.numinput
        },
   err => {
            if (err) return res.status(500).send(err);
            res.redirect('/');
        })
}
}