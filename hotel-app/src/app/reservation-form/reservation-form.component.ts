import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, 
    private reservationService: ReservationService){}

  reservationForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });
  }


  onSubmit(){

    let reservation: Reservation = this.reservationForm.value;
    this.reservationService.addReservation(reservation);

    if (this.reservationForm.valid){
      console.log("valid");
    }

  }

}
