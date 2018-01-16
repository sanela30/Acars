import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  onSubmit:any;

  private newCar: Car = new Car();
  constructor() { }


  submitContact(car: Car) {
    this.onSubmit.emit(car);
    this.newCar = new Car();
  }

  ngOnInit() {
  }

}
