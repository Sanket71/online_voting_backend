const Voter = require('./../model/voterModel');

exports.register = async (req, res) => {
  const newVoter = await Voter.create(req.body);
  res.status(201).json({
    status: 'success',
  });
};
