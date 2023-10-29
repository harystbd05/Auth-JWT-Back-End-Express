import jwt from "jsonwebtoken";

const SECRET_KEY = "hr-media"; // Anda harus menyimpan ini di tempat yang aman, misalnya variabel lingkungan

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Ambil token dari format "Bearer TOKEN_VALUE"

    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user; // Menyimpan informasi pengguna di req.user untuk digunakan nanti
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
}

export default authenticateJWT;
