import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

// Middleware to verify JWT from cookies

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    // Token is not present, authentication failed
    return res.status(401).json({ msg: "Unauthorized" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    req.user = decoded;
    next();
  });
};

export default verifyToken;
