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

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  name!: string;

  @Column({ unique: true , type: "varchar" , length: 200})
  email!: string;

  @Column({ type: "date", default: new Date() })
  birthdate!: Date;

  @Column({ unique: true , type: "int" })
  nDni!: number;

  @OneToOne(() => Credential)
  @JoinColumn({ name: "credentialId" })
  credential!: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments!: Appointment[];
}
