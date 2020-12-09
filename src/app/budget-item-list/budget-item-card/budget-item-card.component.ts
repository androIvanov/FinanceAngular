import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budger-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() deleting: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  deleter(){
    this.deleting.emit();
  }
  onCardClick(item: BudgetItem){
    this.cardClick.emit(item);
  }
}
