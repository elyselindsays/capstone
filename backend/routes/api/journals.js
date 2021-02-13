const express = require("express");
const asyncHandler = require("express-async-handler");
const { restoreUser } = require("../../utils/auth");
const { Journal, Page, ListItem } = require("../../db/models");
const { Router } = require("express");


const router = express.Router();


// Get all user journals
// GET    /api/journals
router.get('/', restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  const journals = await Journal.findAll({
    where: {
      userId: user.id
    }
  })
  return res.json(journals)
}))


// GET ALL PAGES IN A JOURNAL
router.get('/:journalId/pages/', asyncHandler(async (req, res) => {
  const { journalId } = req.params;
  const pages = await Page.findAll({
    where: {
      journalId
    }
  })
  return res.json(pages);
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


// get parking lot
// GET  /api/journals/items/:title
router.get(`/items/:pageId`, restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  const { pageId } = req.params;
  const items = await ListItem.findAll({
    where: {
      pageId,
      userId: user.id,
    }
  })
  return res.json(items);
}))






// ADD NEW LIST ITEM
// POST   /api/journals/items/:pageId
router.post(`/items/:pageId`, restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  const { text, pageId, journalId } = req.body;

  const newItem = await ListItem.create({
    text,
    pageId,
    complete: false,
    userId: user.id,
    journalId
  })

  return res.json(newItem);
}))





module.exports = router;