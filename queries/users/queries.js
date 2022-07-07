const {sql} = require ("slonik");

// coger todos los usuarios

const selectAllUser = () => {
    return sql `
    SELECT * FROM users`;
};
// coger un solo usuario

const selectOneUser = ({email}) => {
    return sql
    `SELECT * FROM users
    WHERE email = ${email};`;
};
// hacer update de un usuario

const updateOneUser = ({userId, firstName, email, password, address, role}) => {
    return `
    UPDATE users
    SET userID = ${userId}, firstName = ${firstName}, email = ${email}, password = ${password}, address = ${address}, role = ${role};
    WHERE userID = ${userID};`
};
// insertar un usuario nuevo

const insertUser = ({userID, firstName, email, password, addres, role}) => {
    return sql`
    INSERT INTO users (
        userID, firstNae, email, password, address, role
    ) VAVLUES (
       ${userID}, ${firstName}, ${email} , ${password}, ${addres}, ${role};
    )`
};
// borrar un usuario

const deleteOneUser = ({userID}) => {
    return sql`
    WHERE userID = ${userID};`
};

module.exports = {
    selectAllUser,
    selectOneUser,
    updateOneUser,
    insertUser,
    deleteOneUser
}





//userId SERIAL PRIMARY KEY,
//firstName TEXT NOT NULL,
//email TEXT UNIQUE NOT NULL,
//password TEXT NOT NULL,
//address TEXT NOT NULL,
//role TEXT NOT NULL