import { Status } from "../interfaces/iAppointment";

interface AppointmentDto {
  date: string;
  time: string;
  userId: number;
}

export default AppointmentDto;
export { Status };
