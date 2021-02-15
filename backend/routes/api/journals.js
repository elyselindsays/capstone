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


// GET ALL USER PAGES
router.get('/pages/', restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;

  const pages = await Page.findAll({
    where: {
      userId: user.id
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


// add new page
router.post('/pages', restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  const { title, pageType } = req.body;
  const newPage = await Page.create({
    title,
    // journalId,
    userId: user.id,
    pageType
  })
  return res.json(newPage)
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