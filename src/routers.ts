import { Router } from 'express';
const router = Router();

// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds');
});

export default router;
