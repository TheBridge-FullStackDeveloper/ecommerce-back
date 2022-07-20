const { sql } = require("slonik");

const selectFullUser = ({ email }) => {
  return sql`
    SELECT * FROM users
    WHERE email = ${email};
  `;
};

const insertUser = ({ email, password, first_name, address, role }) => {
  return sql`
    INSERT INTO users (
      email, password, first_name, address, role
    ) VALUES (
      ${email}, ${password}, ${first_name}, ${address}, ${role}
    );
  `;
};

module.exports = {
  selectFullUser,
  insertUser,
};