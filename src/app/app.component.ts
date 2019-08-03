import { Component } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
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
