import AppointmentDto, { Status } from "../dto/AppointmentDto";
import { Appointment, User } from "../entities";
import { AppDataSource } from "../config/dataSource";

export const getAllAppointments = async (): Promise<Appointment[]> => {
  return await AppDataSource.manager.getRepository(Appointment).find({
    relations: {
      user: {
        credential: true,
      },
    },
    select: {
      user: {
        id: true,
        name: true,
        email: true,
        birthdate: true,
        nDni: true,
        credential: {
          id: true,
          username: true,
        },
      },
    },
  });
};

export const getAppointmentById = async (
  id: number,
): Promise<User | null> => {
  return await AppDataSource.manager.getRepository(User).findOne({
    where: { id },
    relations: {
      appointments: { user: true },
    },
  });
};

export const createAppointmentService = async (
  appointmentData: AppointmentDto,
): Promise<Appointment> => {
  if (typeof appointmentData.userId !== "number") {
    throw new Error("ID de usuario inválido");
  }
  const user = await AppDataSource.manager
    .getRepository(User)
    .findOne({ where: { id: appointmentData.userId } });
  if (!user) throw new Error("Usuario no encontrado");

  const newAppointment = AppDataSource.manager
    .getRepository(Appointment)
    .create({
      date: new Date(appointmentData.date),
      time: appointmentData.time,
      status: Status.ACTIVE,
      user: user,
    });
  await AppDataSource.manager.getRepository(Appointment).save(newAppointment);
  return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise<void> => {
  try {
    const appointment = await AppDataSource.manager
      .getRepository(Appointment)
      .findOne({ where: { id } });
    if (!appointment) {
      throw new Error("Turno no encontrado");
    }
    const status = Status.CANCELLED;
    await AppDataSource.manager
      .getRepository(Appointment)
      .update(id, { status });
  } catch (error: any) {
    throw new Error(` Error al cancelar el turno: ${error.message}`);
  }
};
