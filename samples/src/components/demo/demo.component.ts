import { Component, OnInit } from '@angular/core';
const v = require('vector-ag');
const Vector2D = v.Vector2D;
import { ActionHandlingService } from 'src/services/action-handling.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title = 'samples';
  mousePosition = new Vector2D(0,0);
  currentPattern = this.actionHandlingService.currentPattern;



  constructor(  private actionHandlingService: ActionHandlingService ) {
  }

  updateMousePosition(event){
    this.mousePosition.x = event.clientX;
    this.mousePosition.y = event.clientY;  
  }

  ngOnInit(): void {
    document.body.onmousemove = (event) => { this.updateMousePosition(event)};
    this.currentPattern = this.actionHandlingService.currentPattern;
    this.actionHandlingService.buildAndInitializePattern(this.currentPattern, this.mousePosition);
  }


  onPatternChange() {
    this.actionHandlingService.rotatePattern(this.mousePosition);
    this.currentPattern = this.actionHandlingService.currentPattern;
  }

  
  starCountChange(newCnt) {
    console.log('starcountchange called',newCnt);
    this.actionHandlingService.changeStarCount(newCnt);
  }
  
  contentChange(newContent) {
    this.actionHandlingService.changeStarContent(newContent);
    console.log('contentChange called',newContent);
  }
  
  sizeChange(newSize) {
    console.log('sizeChange called',newSize);
  }

}
