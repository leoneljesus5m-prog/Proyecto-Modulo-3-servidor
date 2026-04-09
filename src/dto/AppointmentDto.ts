enum Status {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

interface AppointmentDto {
  date: Date;
  time: string;
  userId: number;
  status: Status;
}

export default AppointmentDto;
export { Status };
