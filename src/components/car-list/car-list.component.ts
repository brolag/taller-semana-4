import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public cars: Array<Car> = [
    {
      id: 1,
      marca: 'Suzuki',
      modelo: 'Jimny',
      ano: '2009',
      sold: false,
    },
    {
      id: 2,
      marca: 'Jeep',
      modelo: 'Wrangler',
      ano: '1987',
      sold: false,
    },
    {
      id: 3,
      marca: 'Subaru',
      modelo: 'Impreza',
      ano: '2007',
      sold: false,
    }
  ];

  public deleteCar(id) {
    this.cars = this.cars.filter(function(car) {
      return car.id !== id;
    });
  }

  public sellCar(id) {
     this.cars = this.cars.filter(car => {
       if (car.id === id) {
         car.sold = true;
       }
      
       return car;
      });
  }

}