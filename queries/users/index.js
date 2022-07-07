//para utilizar una funcion para no poner smp trycatch

const {queryCatcher}  = require("../utils");

const {selectAllUser, selectOneUser, updateOneUser, insertUser, deleteOneUser} = require ("./queries")

// coger todos los usuarios

const selectAllUser =
(db) =>
async () => {
    return await queryCatcher (
        db.maybeone,
        "selectAllUser"
    )(selectAllUser ());
};

// coger un solo usuario

const selectOneUser = 
(db) => 
async ({email}) => {
    return await queryCatcher (
        db.maybeone,
        "selectOneUser"
    )(selectOneUser ({email}));
};

// hacer update de un usuario

const updateOneUser = (db) => 
    async({userId, firstName, email, password, address, role}) =>{
    const user = await selectOneUser(db)({userId, firstName, email, password, address, role});
    if(!user.data)
        return {
            ok: false,
            code:"User doesnt exist"
        };
        return await queryCatcher(
            db.query,
            "updateOneUser"
        )(updateOneUser({userId, firstName, email, password, address, role}))
};

// insertar un usuario nuevo

const insertUser = 
(db) =>
async ({userID, firstName, email, password, addres, role}) => {
    return await queryCatcher (
        db.query,
        "insertUser"
    )(insertUser ({userID, firstName, email, password, addres, role}));
};

//  borrar un usuario

const deleteOneUser = (db) => async({userID}) =>{
    const user = await getOneUser(db)({userID});
    if(!user.data)
        return {
            ok: false,
            code:"User doesnt exist"
        };
        return await queryCatcher(
            db.query,
            "deleteUser"
        )(deleteOneUser({userID}))
};










