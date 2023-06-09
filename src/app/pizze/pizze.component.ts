import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../servizi/pizza.service';

@Component({
  selector: 'app-pizze',
  templateUrl: './pizze.component.html',
  styleUrls: ['./pizze.component.css']
})
export class PizzeComponent implements OnInit{

  constructor(private pizzaService: PizzaService) {
  }


  receivedPizza: Pizza[];


  ngOnInit(): void {
  this.receivedPizza = this.pizzaService.listaPizze
  }

}
