import { Component, OnInit } from '@angular/core';
import { ActionHandlingService } from 'src/services/action-handling.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title = 'samples';
  currentPattern = this.actionHandlingService.currentPattern;



  constructor(  private actionHandlingService: ActionHandlingService ) {
  }



  ngOnInit(): void {
    this.currentPattern = this.actionHandlingService.currentPattern;
    if( !this.actionHandlingService.starFieldHandle) {
      this.actionHandlingService.buildAndInitializePattern(this.currentPattern);
    }
  }


  onPatternChange() {
    this.actionHandlingService.rotatePattern();
    this.currentPattern = this.actionHandlingService.currentPattern;
  }

  
  starCountChange(newCnt) {
    this.actionHandlingService.changeStarCount(newCnt);
  }
  
  contentChange(newContent) {
    this.actionHandlingService.changeStarContent(newContent);
  }


}
