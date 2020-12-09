import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budger-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.total += newItem.amount;
  }
  finalDelete(toBeGone: BudgetItem){
    let index = this.budgetItems.indexOf(toBeGone);
    this.budgetItems.splice(index, 1);
    this.total -= toBeGone.amount;
  }
}
