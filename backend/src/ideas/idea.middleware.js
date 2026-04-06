export const requiredUserId = async(req,res,next) => {
    const userId = req.headers["x-user-id"]
    if (!userId || typeof userId !== 'string' || userId.length > 100) {
    return res.status(400).json({ error: 'Missing or invalid user ID' });
    }
    req.userId = userId
    next()
}