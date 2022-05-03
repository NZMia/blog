module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/register') {
    if (
      req.body.username === 'nzmiazhang@gmail.com' &&
      req.body.password == '123'
    ) {
      return res.status(200).json({
        user: {
          token: 'erfvdet=',
        },
      });
    } else {
      return res
        .status(400)
        .json({ message: 'wrong password or invalidate user' });
    }
  }
  next();
};
