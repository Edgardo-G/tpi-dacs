import paymentPlanService from '../services/paymentPlanService';

export default class PaymentPlanController {
  async create(req, res) {
    try {
      const paymentPlan = await paymentPlanService.create(req.body);
      if (!paymentPlan) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ paymentPlan });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getAll(_req, res) {
    try {
      const paymentPlans = await paymentPlanService.getAll(0, 10);
      if (!paymentPlans) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ paymentPlans });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async get(req, res) {
    try {
      const paymentPlan = await paymentPlanService.get(req.params.id);
      if (!paymentPlan) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ paymentPlan });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async update(req, res) {
    try {
      const paymentPlan = await paymentPlanService.update(
        req.params.id,
        req.body,
      );
      if (!paymentPlan) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ paymentPlan });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async destroy(req, res) {
    try {
      const model = await paymentPlanService.remove(req.params.id);
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
