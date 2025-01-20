import jwt from 'jsonwebtoken';

// Middleware to validate admin token
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

        // Proceed to next middleware or route handler
        next();
    } catch (error) {
        // Handle expired token
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token expired. Please login again.' });
        }

        // Handle invalid token
        return res.status(401).json({ success: false, message: 'Invalid token. Login Again.' });
    }
};

// Route for refreshing tokens 
export const refreshToken = (req, res) => {
    try {
        const { email } = req.body;

        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: 'Invalid credentials.' });
        }

        // Issue a new token
        const newToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ success: true, token: newToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error!' });
    }
};

export default adminAuth;
