import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budger-item.model';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() parentDelete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>(); 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  remove(toBeGone: BudgetItem){
    this.parentDelete.emit(toBeGone);
  }
  onCardClick(item: BudgetItem){
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width: '750px',
      data: item
    });

    dialogRef.afterClosed().subscribe(results => {

      if(results){
        this.budgetItems[this.budgetItems.indexOf(item)] = results;
      }
    });
  }
}
