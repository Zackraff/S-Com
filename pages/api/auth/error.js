// pages/api/auth/error.js
export default function handler(req, res) {
    const { error } = req.query;
    res.end(`Login failed with error: ${error}`);
}
