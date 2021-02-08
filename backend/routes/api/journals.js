const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { restoreUser } = require("../../utils/auth");
const { Journal, ListItem } = require("../../db/models");
const { Router } = require("express");

const router = express.Router();


// Get all user journals
// GET    /api/journals
router.get('/', restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  console.log(user);
  console.log('*****************************************')
  const journals = await Journal.findAll({
    where: {
      userId: user.id
    }
  })
  console.log(journals)
  return res.json(journals)
}))


// CREATE A NEW JOURNAL
// POST   /api/journals
router.post('/', restoreUser, asyncHandler(async (req, res, next) => {
  const { user } = req;
  const { title } = req.body;
  const newJournal = await Journal.create({
    userId: user.id,
    title: title
  })
  return res.json(newJournal)
}))




// TODO: get list ITEMS?????
// GET  /api/journals/items/:title
router.get(`/items/:pageTitle`, restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  const { pageTitle } = req.params;
  console.log('***********rew.params****')
  console.log(req.params)
  console.log(pageTitle);

  const items = await ListItem.findAll({
    where: {
      pageTitle: pageTitle,
      userId: user.id,

    }
  })
  console.log(items)
  return res.json(items);

}))


router.post(`/items/:pageTitle`, restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  // const { pageTitle } = req.params;
  const { text, pageTitle } = req.body;
  console.log('***********req.params****')
  console.log(req.params)
  console.log(pageTitle);

  const newItem = await ListItem.create({
    text,
    pageTitle,
    complete: false,
    userId: user.id
  })
  console.log(newItem)
  return res.json(newItem);

}))


// TODO: update a list item




// TODO: add a page?
router.post('/pages')






module.exports = router;