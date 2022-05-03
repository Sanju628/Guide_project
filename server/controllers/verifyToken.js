import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({
      message: "Access Denied",
    });
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    return res.send(400).json({
      message: "Invalid token",
    });
  }
};

export default verifyToken;
