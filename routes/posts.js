const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();

    res.send(posts);
  } catch (err) {
    console.log('find all error', err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    res.send(post);
  } catch (err) {
    console.log('find one error', err);
  }
});

router.post('/', async (req, res) => {
  try {
    const post = new Post({ ...req.body });
    post.save((err, post) => {
      if (err) {
        return res.send(('error while saving', err));
      }

      res.send(post);
    });
  } catch (err) {
    console.log('create error', err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    await post.updateOne({ ...req.body });
    await post.save();

    res.send('Update success');
    res.send(err);
  } catch (err) {
    console.log('update error', err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.send('Delete success');
  } catch (err) {
    console.log('delete error', err);
  }
});

module.exports = router;
