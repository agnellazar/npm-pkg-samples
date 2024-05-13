import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  showPatternButtonInfo: boolean = false;
  showOptionPaneInfo: boolean = false;
  showDescInfo: boolean = false;

  constructor() { }

  async startTour() {
    this.showPatternButtonInfo = true;
    this.showOptionPaneInfo = false;
    this.showDescInfo = false;

    setTimeout(()=>{
      this.showPatternButtonInfo = false;
      this.showOptionPaneInfo = true;
    },3000);

    setTimeout(()=>{
      this.showOptionPaneInfo = false;
      this.showDescInfo = true;
    },6000);
    
    setTimeout(()=>{
      this.showDescInfo = false;
    },9000);
  }
}