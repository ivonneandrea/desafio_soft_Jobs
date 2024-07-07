import { getDatabaseError } from "../helpers/database.error.js";
import byEmail from "../models/login.model.js";

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import "dotenv/config";

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const findUser = await byEmail(email);

        if (!findUser) {
            return res.status(404).json({ message: "El email no existe en la Base de Datos" });
        }

        const passwordMatches = bcrypt.compareSync(password, findUser.password);

        if (!passwordMatches) {
            return res.status(401).json({ message: "La contraseña es incorrecta" });
        }

        const token = await createToken(email);
        res.status(200).json({
            message: `¡Bienvenido ${email} haz iniciado sesión! 👋.`,
            token
        });
        
    } catch (error) {
        console.log("error", error);

        if (error.code) {
            const { code, message } = getDatabaseError(error.code);
            return res.status(code).json({ message });
        }
            return res.status(500).json({ message: "🔥 Internal server error 🔥" });
    }
}

const createToken = async (email) => {  
    const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: "1h"});
    return token;
};

export default loginUser;