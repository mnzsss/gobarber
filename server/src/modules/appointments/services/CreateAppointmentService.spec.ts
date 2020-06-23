import AppError from '@shared/errors/AppError';

import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotificationsRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentRepository: FakeAppointmentRepository;
let createAppointment: CreateAppointmentService;
let fakeNotificationsRepository: FakeNotificationsRepository;
let fakeCacheProvider: FakeCacheProvider;

describe('CreateAppointmentService', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    fakeNotificationsRepository = new FakeNotificationsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository,
      fakeNotificationsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 6, 22, 12).getTime();
    });

    const appointment = await createAppointment.run({
      date: new Date(2020, 6, 23, 13),
      user_id: '123123',
      provider_id: '123123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123123');
  });

  it('should not be able to create a two appointments on the same date', async () => {
    const appointmentDate = new Date(2020, 6, 23, 11);

    await createAppointment.run({
      date: appointmentDate,
      user_id: '123123',
      provider_id: '123123123',
    });

    await expect(
      createAppointment.run({
        date: appointmentDate,
        user_id: '123123',
        provider_id: '123123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('it should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 6, 23, 12).getTime();
    });

    await expect(
      createAppointment.run({
        user_id: '123123',
        date: new Date(2020, 6, 23, 11),
        provider_id: '123123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('it should not be able to create an appointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointment.run({
        user_id: '123123',
        date: new Date(2020, 4, 10, 13),
        provider_id: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('it should not be able to create an appointment before 8am and after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 20, 12).getTime();
    });

    await expect(
      createAppointment.run({
        user_id: '123123',
        date: new Date(2020, 4, 21, 7),
        provider_id: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.run({
        user_id: '123123',
        date: new Date(2020, 4, 21, 18),
        provider_id: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
