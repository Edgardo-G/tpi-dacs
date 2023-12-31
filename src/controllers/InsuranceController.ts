import insuranceService from '../services/insuranceService';

export default class InsuranceController {
  async create(req, res) {
    try {
      const insurance = await insuranceService.create(req.body);
      if (!insurance) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ insurance });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getAll(_req, res) {
    try {
      const insurances = await insuranceService.getAll(0, 10);
      if (!insurances) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ insurances });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async get(req, res) {
    try {
      const insurance = await insuranceService.get(req.params.id);
      if (!insurance) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ insurance });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async update(req, res) {
    try {
      const insurance = await insuranceService.update(
        req.params.id,
        req.body,
      );
      if (!insurance) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ insurance });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async destroy(req, res) {
    try {
      const model = await insuranceService.remove(req.params.id);
      if (!model) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ message: 'Successfully destroyed model' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
