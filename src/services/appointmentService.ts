import AppointmentDto, { Status } from "../dto/AppointmentDto";
import IAppointment from "../interfaces/iAppointment";

let appointments: IAppointment[] = [
  {
    id: 1,
    date: new Date("2026-04-25"),
    time: "10:30",
    userId: 1,
    status: Status.ACTIVE,
  },
];

let appointmentIdCounter = 2;

export const getAllAppointments = (): IAppointment[] => {
  return appointments;
};

export const getAppointmentById = async (id: number): Promise<IAppointment | undefined> => {
  return appointments.find((app) => app.id === id);
};

export const createAppointmentService = async (
  appointmentData: AppointmentDto,
): Promise<IAppointment> => {
  const newAppointment: IAppointment = {
    id: appointmentIdCounter++,
    date: new Date(appointmentData.date),
    time: appointmentData.time,
    userId: appointmentData.userId,
    status: Status.ACTIVE,
  };
  appointments.push(newAppointment);
  return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise<void> => {
  const appointment = appointments.find((app) => app.id === id);
  if (!appointment) {
    throw new Error("Turno no encontrado");
  }
  appointment.status = Status.CANCELLED;
};
