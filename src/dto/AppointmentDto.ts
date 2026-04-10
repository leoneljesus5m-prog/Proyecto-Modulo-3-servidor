import { Status } from "../interfaces/iAppointment";

interface AppointmentDto {
  date: Date;
  time: string;
  userId: number;
  status: Status;
}

export default AppointmentDto;
export { Status };
