import { pool } from "../../config/database/connectionS.js";

const byEmail = async (email) => {

    const SQLquery = {
        text: "SELECT * FROM usuarios WHERE email = $1",
        values: [email],
    };

    const response = await pool.query(SQLquery);
    return response.rows[0];
}

export default byEmail;