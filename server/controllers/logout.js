
const logout = (req, res) => {
  res.clearCookie('name').redirect('/');
};


module.exports = logout;
