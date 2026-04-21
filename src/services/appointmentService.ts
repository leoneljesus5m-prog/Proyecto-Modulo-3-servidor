import AppointmentDto, { Status } from "../dto/AppointmentDto";
import { Appointment, User, Credential } from "../entities";
import { AppDataSource } from "../config/dataSource";

export const getAllAppointments = async (): Promise<Appointment[]> => {
  return await AppDataSource.manager.getRepository(Appointment).find({relations: {
    user: {credential: true}
  }});
};

export const getAppointmentById = async (
  id: number,
): Promise<Appointment | null> => {
  return await AppDataSource.manager
    .getRepository(Appointment)
    .findOne({
      where: { id },
      relations: {
        user: { credential: true }
      } 
    });
};

export const createAppointmentService = async (
  appointmentData: AppointmentDto,
): Promise<Appointment> => {
  const user = await AppDataSource.manager
    .getRepository(User)
    .findOne({ where: { id: appointmentData.userId } });
  if (!user) throw new Error("Usuario no encontrado");

  const newAppointment = AppDataSource.manager.getRepository(Appointment).create({
    date: new Date(appointmentData.date),
    time: appointmentData.time,
    status: Status.ACTIVE,
    user: user, 
  });
  await AppDataSource.manager.getRepository(Appointment).save(newAppointment);
  return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise<void> => {
  const appointment = await AppDataSource.manager
    .getRepository(Appointment)
    .findOne({ where: { id } });
  if (!appointment) {
    throw new Error("Turno no encontrado");
  }
  appointment.status = Status.CANCELLED;
};
