import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from 'src/services/tour.service';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {

  btnTexts = ['Click to View Description',  'Click to go back to demo']
  btnText: string;

  @Input() btnState: number;
  constructor(
    private router: Router,
    private tourService: TourService
  ) { }

  ngOnInit(): void {
    this.updateButtonState();
  }

  navBtnClick() {
    if(this.router.url.includes('desc')) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['desc'])
    }
  }

  updateButtonState() {
    if(this.router.url.includes('desc')) {
      this.btnText = this.btnTexts[1];
    } else {
      this.btnText = this.btnTexts[0];
    }
  }

  tourBtnClick() {
    this.tourService.startTour();
  }
}
