import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  // Log headers to check if Authorization header is present
  console.log("Authorization header:", req.headers["authorization"]);

  const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing." });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "You are not authorized to access this resource." });
    }

    req.user = user;
    next();
  });
};
  
export default adminAuth;
