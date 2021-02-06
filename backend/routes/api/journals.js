const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { restoreUser } = require("../../utils/auth");
const { Journal, Page, TaskList } = require("../../db/models");
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
  const newJournal = await Journal.create({
    userId: user.id,
    title: title
  })
  return res.json(newJournal)
}))


// TODO: get all pages in a journal
router.get('/pages', restoreUser, asyncHandler(async (req, res) => {
  // Get all user journals
  const { user } = req;
  const pages = await Page.findAll({
    where: {
      journalId
    }
  })
  console.log(pages)
  return res.json(pages)

}))

// TODO: add a page
router.post('/pages')

// TODO: update a page


// TODO: get list ITEMS?????
// GET  /api/journals/items
router.get('/items', restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  const items = await TaskList.findAll({
    where: {
      userId: user.id
      // and where title=title?
    }
  })
  return res.json(items);

}))



module.exports = router;