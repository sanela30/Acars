import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../../service/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  
  public car:Car;
  public years;
  


  constructor(private _carService: CarService,private router: Router) { 

    this.car = new Car();
   
    this.years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  }

  submitCar(){
    
    this._carService.addCar(this.car)
    this.router.navigate(['/cars']);
}
public preview(){
  alert(`
  Mark: ${this.car.mark}, 
  Model: ${this.car.model},
  Year: ${this.car.year},
  Engine: ${this.car.engine},
  `);
}

  ngOnInit() {
  }

}
