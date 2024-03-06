import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent implements OnInit{

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments : Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addNewAppointment(){

    if (this.newAppointmentDate && this.newAppointmentTitle.trim().length>0){
      let appointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      console.log("date is: "+this.newAppointmentDate);
  
      this.appointments.push(appointment);
    }

    this.newAppointmentDate = new Date();
    this.newAppointmentTitle = "";

    localStorage.setItem("appointments", JSON.stringify(this.appointments));

  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
