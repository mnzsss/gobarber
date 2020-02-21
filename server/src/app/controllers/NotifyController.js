import Notify from '../schemas/Notify';
import User from '../models/User';

class NotifyController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can load notifies' });
    }

    const notifies = await Notify.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifies);
  }

  async update(req, res) {
    const notify = await Notify.findByIdAndUpdate(
      req.params.id,
      {
        read: true,
      },
      { new: true }
    );

    return res.json(notify);
  }
}

export default new NotifyController();
