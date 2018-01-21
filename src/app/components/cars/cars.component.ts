import { Component, OnInit } from '@angular/core';
import {CarService} from '../../service/car.service';
import {Car} from '../car';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
 
   cars:Car[];

  constructor(private carService:CarService) { 

   
  }

  ngOnInit() {

    this.cars = this.carService.getCars();
    
  }

}
