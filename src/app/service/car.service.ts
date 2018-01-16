import { Injectable } from '@angular/core';
import {Car} from '../components/car';

@Injectable()
export class CarService {

  private cars:Car[] =[
    {
          id: 1, 
          mark: "audi",
          model: "a8", 
          year: 2008, 
          maxSpeed: 250, 
          isAutomatic: true, 
          engine: 'Petrol ', 
          numberOfDoors:5 
    },
    {
      id: 2, 
      mark: "BMW",
      model: "X7", 
      year: 2012, 
      maxSpeed: 280, 
      isAutomatic: true, 
      engine: 'Petrol ', 
      numberOfDoors:5 
  },
  {
    id: 3, 
    mark: "hundai",
    model: "X30", 
    year: 2015, 
    maxSpeed: 240, 
    isAutomatic: true, 
    engine: 'Petrol ', 
    numberOfDoors:5 
  }
  ]
    constructor() { }
    public getCars()
    {
      return this.cars;
    }

  }


