import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
        }

        const token = authHeader.split(' ')[1]; 
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 

        // Validate the token payload 
        if (decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
        }

        // Passing control to the  route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: 'Invalid token. Login Again.' });
    }
};

export default adminAuth;
