import IAppointment from "../interfaces/iAppointment";

let appointments: IAppointment[] = [];
let appointmentIdCounter = 1;

export const getAllAppointments = (): IAppointment[] =>{
    return appointments;
}

export const getAppointmentById = async (id: number): Promise<IAppointment | undefined> => {
    return appointments.find(app => app.id === id);
}

export const createAppointmentService = async (appointmentData: any): Promise<IAppointment> => {
    const newAppointment: IAppointment = {
        id: appointmentIdCounter++,
        date: new Date(appointmentData.date),
        time: appointmentData.time,
        userId: appointmentData.userId,
        status: "active"
    }
    appointments.push(newAppointment);
    return newAppointment;
}

export const cancelAppointmentService = async (id: number): Promise<void> => {
    const appointment = appointments.find(app => app.id === id);
    if (appointment) {
        appointment.status = "cancelled";
    }
}


