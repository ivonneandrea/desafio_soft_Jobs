import { check, validationResult } from 'express-validator';

const validLogin = [

    check('email').isEmail().withMessage('Debe ser un email válido'),
    check('password').isLength({ min: 1 }).withMessage('La contraseña es requerida'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

    next();
    }
];

export default validLogin;