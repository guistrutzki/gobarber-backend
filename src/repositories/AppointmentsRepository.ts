import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

class AppointsmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find((appointment) =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointsmentsRepository;
