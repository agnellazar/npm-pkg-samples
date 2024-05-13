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
  contentInputData :string = '*';
  contentInputDataDefault :string = '*';
  countInpData: any = '50'
  countInpDataDefault: any = '50'


  constructor(  private actionHandlingService: ActionHandlingService ) {
  }



  ngOnInit(): void {
    this.currentPattern = this.actionHandlingService.currentPattern;
    if( !this.actionHandlingService.starFieldHandle) {
      this.actionHandlingService.buildAndInitializePattern(this.currentPattern);
    }
    // this.addElevation();
  }


  onPatternChange() {
    this.actionHandlingService.rotatePattern();
    this.currentPattern = this.actionHandlingService.currentPattern;
    this.contentInputData = this.contentInputDataDefault;
    this.countInpData = this.countInpDataDefault;
  }

  
  starCountChange(newCnt) {
  }
  
  get contentInp() {
    return this.contentInputData;
  }
  
  set contentInp(data) {
    if(data != this.contentInp){
      this.contentInputData = data;
      this.actionHandlingService.changeStarContent(data);
      console.log('contentInp',this.contentInputData);
    }
  }

  get countInp() {
    return this.countInpData;
  }
  
  set countInp(data) {
    if(data!=this.countInpData) {
      this.countInpData = data;
      this.actionHandlingService.changeStarCount(data);
      console.log('countInp',this.countInpData);
    }
  }
}
