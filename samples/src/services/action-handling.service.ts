import { Injectable } from '@angular/core';
import { patterns } from 'src/constants/constants';
import { starField } from 'starfield-ag'
const v = require('vector-ag');
const Vector2D = v.Vector2D;

@Injectable({
  providedIn: 'root'
})
export class ActionHandlingService {

  currentPatternIndex = 0;
  currentPattern = patterns[this.currentPatternIndex];
  starFieldHandle: starField;
  mousePosition = new Vector2D(0,0);


  constructor() { }

  updateMousePosition(event){
    this.mousePosition.x = event.clientX;
    this.mousePosition.y = event.clientY;  
  }

  buildAndInitializePattern(pattern) {
    document.body.onmousemove = (event) => { this.updateMousePosition(event)};

    if(this.starFieldHandle) {
      this.starFieldHandle.destroy();
      this.starFieldHandle = null;
    }

    const config = pattern.config;
    config.backgroundColor = 'transparent'
    if(pattern.name === 'Spiral') {
      config.data = {
        center: this.mousePosition
      };
    } else if (pattern.name === 'Circle') {
      config.data = {
        center: this.mousePosition
      };
    } else if (pattern.name === 'Follower') {
      config.data = {
        targetPos: this.mousePosition
      };
    } else if (pattern.name === 'Star Field') {
      config.data = {
        targetPos: this.mousePosition
      };
    }

    config.updateInterval = null;
    this.starFieldHandle = new starField(config);
    this.starFieldHandle.init();
  }

  rotatePattern() {
    this.currentPatternIndex = (this.currentPatternIndex+1)%patterns.length;
    this.currentPattern = patterns[this.currentPatternIndex];
    this.buildAndInitializePattern(this.currentPattern);
  }

  changeStarCount(newCnt) {
    this.starFieldHandle.changeStarCount(newCnt);
  }

  changeStarContent(newContent) {
    this.starFieldHandle.setStarContent(newContent);
  }
}
