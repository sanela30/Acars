import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/car.service';
import { Car } from '../car';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  
  private car:Car;
  public years;
  newTaskForm: FormGroup;

  


  constructor(private __carService: CarService,private router: Router) { 

    this.car = new Car();
   
    this.years = Array(27).fill(1).map((x, i) => 1991 + i);
    
    this.newTaskForm = new FormGroup({
      speed: new FormControl(
          this.car.maxSpeed,
          this.validateMaxSpeed()
      ),
      doors: new FormControl(
          this.car.numberOfDoors,
          this.validateNumberOfDoors()
      )
  });

  }

 public submitCar(){
    
    this.__carService.addCar(this.car)
    this.router.navigate(['/cars']);
}

  public preview(){
  alert(`Mark: ${this.car.mark},
  Model: ${this.car.model},
  Year: ${this.car.year},
  Max Speed: ${this.car.maxSpeed},
  Automatic: ${this.car.isAutomatic},
  Engine: ${this.car.engine},
  Number Of Doors: ${this.car.numberOfDoors}`);
}

public validateMaxSpeed() {
  return (c: FormControl) => {
      return c.value > 20 && c.value < 300 ? null : {
          validateMaxSpeed: {
              valid: false
          }
      };
  };
}
public validateNumberOfDoors() {
return (c: FormControl) => {
     return c.value > 2 && c.value < 5? null : {
       validateNumberOfDoors: {
         valid:false
       }
     };
    };
}

ngOnInit() {
  }

}
