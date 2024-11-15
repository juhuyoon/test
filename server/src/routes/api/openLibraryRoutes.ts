// /server/src/routes/api/openLibraryRoutes.ts
import express from 'express';
import { fetchBooksByTitle, fetchBookByISBN } from '../../utils/openLibraryService.js';

const router = express.Router();

// Endpoint to fetch books by title
router.get('/books', async (req, res) => {
    const title = req.query.title as string;
    try {
      const data = await fetchBooksByTitle(title);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching books by title" });
    }
  });

   // Endpoint to fetch a book by ISBN
router.get('/book/:isbn', async (req, res) => {
    const { isbn } = req.params;
    try {
      const data = await fetchBookByISBN(isbn);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching book by ISBN" });
    }
  });
  
  export default router;