import { getDatabaseError } from "../helpers/database.error.js";
import { showUser, createUser } from "../models/sign-in.model.js";

const getUser = async (req, res) => {
    try {
        const { email } = req.user;
        const findUser = await showUser(email);

        res.status(200).json([findUser]);

    } catch (error) {
        console.log("error", error);

        if (error.code) {
            const { code, message } = getDatabaseError(error.code);
            return res.status(code).json({ message });
        }
            return res.status(500).json({ message: "🔥 Internal server error 🔥" });
    }
};

const postUser = async (req, res) => {
    try {
        const {email, password, rol, lenguage} = req.body
        await createUser(email, password, rol, lenguage)
        res.status(201).send("Usuario creado con éxito")
        
    } catch (error) {
        console.log("error", error);

        if (error.code) {
            const { code, message } = getDatabaseError(error.code);
            return res.status(code).json({ message });
        }
            return res.status(500).json({ message: "🔥 Internal server error 🔥" });
    }
}

export { getUser, postUser };