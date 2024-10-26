import { Router } from 'express';
import contactControllers from './contact.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { contactValidationSchema } from './contact.validation';

const router = Router();

router.post(
    '/',
    validateRequest(contactValidationSchema),
    contactControllers.createContact
);

const contactRoute = router;

export default contactRoute;
