import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column({ type: "date" })
  birthdate!: Date;

  @Column()
  nDni!: number;

  @OneToOne(() => Credential, (credential) => credential.user)
  @JoinColumn()
  credential!: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments!: Appointment[];
}
