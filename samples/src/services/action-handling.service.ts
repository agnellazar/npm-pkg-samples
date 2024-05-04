import { Injectable } from '@angular/core';
import { patterns } from 'src/constants/constants';
import { starField } from 'starfield-ag'

@Injectable({
  providedIn: 'root'
})
export class ActionHandlingService {

  currentPatternIndex = 0;
  currentPattern = patterns[this.currentPatternIndex];
  starFieldHandle: starField;

  constructor() { }

  buildAndInitializePattern(pattern, pos) {
    console.log('buildAndInitializePattern called',pattern);

    if(this.starFieldHandle) {
      this.starFieldHandle.destroy();
    }

    const config = pattern.config;
    if(pattern.name === 'Spiral') {
      config.data = {
        center: pos
      };
    } else if (pattern.name === 'Circle') {
      config.data = {
        center: pos
      };
    } else if (pattern.name === 'Follower') {
      config.data = {
        targetPos: pos
      };
    } else if (pattern.name === 'Star Field') {
      config.data = {
        targetPos: pos
      };
    }

    config.updateInterval = null;
    this.starFieldHandle = new starField(config);
    this.starFieldHandle.init();
  }

  rotatePattern(pos) {
    this.currentPatternIndex = (this.currentPatternIndex+1)%patterns.length;
    this.currentPattern = patterns[this.currentPatternIndex];
    this.buildAndInitializePattern(this.currentPattern, pos);
  }

  changeStarCount(newCnt) {
    this.starFieldHandle.changeStarCount(newCnt);
  }

  changeStarContent(newContent) {
    this.starFieldHandle.setStarContent(newContent);
  }
}
