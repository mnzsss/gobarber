import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

class ProviderDayAvailabilityController {
  async index(req: Request, res: Response): Promise<Response> {
    const { provider_id } = req.params;
    const { day, year, month } = req.body;

    const listProviderDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const availability = await listProviderDayAvailability.run({
      provider_id,
      day,
      month,
      year,
    });

    return res.json(availability);
  }
}

export default new ProviderDayAvailabilityController();
