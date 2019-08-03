import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  @Output() deletedCar: EventEmitter<number>;
  @Output() soldCar: EventEmitter<number>;

  constructor() {
    this.deletedCar = new EventEmitter();
    this.soldCar = new EventEmitter();
   }

  ngOnInit() {}

  public deleteCar(id): void {
    this.deletedCar.emit(id);
  }

  public sellCar(id): void {
    this.soldCar.emit(id);
  }

}