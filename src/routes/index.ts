import { Router } from 'express';
import contactRoute from '../modules/contact/contact.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: contactRoute,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
