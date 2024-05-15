import { Component, OnInit } from '@angular/core';
import { ActionHandlingService } from 'src/services/action-handling.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(
    public actionHandlingService: ActionHandlingService,
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    if( !this.actionHandlingService.starFieldHandle) {
      this.actionHandlingService.buildAndInitializePattern(this.actionHandlingService.currentPattern);
    }
    this.generalService.updateCurrentPage();
  }

}
