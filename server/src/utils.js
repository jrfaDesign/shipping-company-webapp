import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token not provided" });
  }

  try {
    const decodedToken = jwt.verify(token, "secret"); // Replace "secret" with your actual secret key

    req.userId = decodedToken.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid access token" });
  }
};
