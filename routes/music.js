var express = require('express');
var router = express.Router();
var Music = require('../models').Music;

// Get music listings
router.get('/', function(req, res) {
  Music.all()
    .then( function(music) {
      return res.render('music', { music: music});
    })
});

module.exports = router;

// Post add music listing
router.post('/', function(req, res) {
  var title = req.body.title;
  Music.create({ song: song})
    .then( function() {
      res.redirect('/music');
    });
});

// Delete music listing
router.delete ('/:id', function(req, res) {
  Music.findById(req.params.id)
    .then( function(music) {
      music.destroy()
    })
    .then( function() {
      return res.redirect('/music');
    });
});

// Get listing to edit 
router.get('/:id/edit', function(req, res) {
  Music.findById(req.params.id)
    .then( function(music) {
      return res.render('edit', { music: music});
    });
});

// Put edits the listing
router.put('/:id', function(req, res) {
  Music.update(
    { title: req.body.title},
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/movies');
  })
});

// order fix
router.get('/', function(req, res) {
  Music.all({
    order: [
      ['createAt', 'ASC']
    ]
  })
  //.then( function(music)
})


