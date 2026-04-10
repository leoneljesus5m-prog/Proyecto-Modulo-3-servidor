export enum Status {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: Status;
}

export default IAppointment ;
