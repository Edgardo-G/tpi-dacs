import accommodationService from '../services/accommodation.service';

const AccommodationController = () => {
  const create = async (req, res) => {
    try {
      const accommodation = await accommodationService().create(req.body);
      if (!accommodation) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ accommodation });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const accommodations = await accommodationService().getAll(0, 10);
      if (!accommodations) {
        return res.status(400).json({ msg: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ accommodations });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const accommodation = await accommodationService().get(req.params.id);
      if (!accommodation) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ accommodation });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const accommodation = await accommodationService().update(req.params.id, req.body);
      if (!accommodation) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ accommodation });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await accommodationService().remove(req.params.id);
      if (!model) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ msg: 'Successfully destroyed model' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    getAll,
    get,
    update,
    create,
    destroy,
  };
};

export default AccommodationController;
