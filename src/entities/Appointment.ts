import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Status } from "../interfaces/iAppointment";
import { User } from "./User";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: Date;

    @Column()
    time!: string;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.ACTIVE
    })
    status!: Status;

    @ManyToOne(() => User, (user) => user.appointments)
    user!: User;
}