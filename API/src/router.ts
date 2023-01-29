import { Router } from 'express';
import bodyParser from 'body-parser';
import setQuickBookConnection from './services/auth-quick-books';
const router = Router();

router.post(
  '/connect',
  [
    bodyParser.urlencoded({
      extended: false,
    }),
    bodyParser.json(),
  ],
  setQuickBookConnection,
);

export default router;
