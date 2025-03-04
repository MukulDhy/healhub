const jsonwebToken = require("jsonwebtoken");
const Cookies = require("universal-cookie");

const gernateJWTtoken = (user, statusCode, res) => {
  const token = user.gernateJWTtoken();

  const options = {
    expires: new Date(
      Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
    ),

    httpOnly: true,
  };

  res.cookie("token", token, options);
  res.status(statusCode).json({
    sucess: true,
    message: "SuccessFully Login",
    user,
    token,
  });
};

module.exports = gernateJWTtoken;
