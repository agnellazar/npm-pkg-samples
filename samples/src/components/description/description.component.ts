import { Component, OnInit } from '@angular/core';
import { ActionHandlingService } from 'src/services/action-handling.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(
    public actionHandlingService: ActionHandlingService
  ) { }

  ngOnInit(): void {
    if( !this.actionHandlingService.starFieldHandle) {
      this.actionHandlingService.buildAndInitializePattern(this.actionHandlingService.currentPattern);
    }
  }

}
