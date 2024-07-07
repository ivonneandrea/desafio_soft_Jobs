import { check, validationResult } from 'express-validator';

const validSignIn = [

    check('email').isEmail().withMessage('Debe ser un email válido'),
    check('password').isLength({ min: 1 }).withMessage('La contraseña es requerida'),
    check('rol').isLength({ min: 1 }).withMessage('El rol es requerido'),
    check('lenguage').isLength({ min: 1 }).withMessage('El lenguage es requerido'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

    next();
    }
];

export default validSignIn;