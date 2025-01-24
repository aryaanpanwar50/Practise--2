const express = require('express')
const router = express.Router();

const {
    createBooks,
    getBooks,
    getBooksById,
    updateBook,
    deleteBook
} = require('../controllers/bookControllers')

router.post('/',createBooks);
router.get('/',getBooks);
router.get('/:id',getBooksById);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook)

module.exports = router;