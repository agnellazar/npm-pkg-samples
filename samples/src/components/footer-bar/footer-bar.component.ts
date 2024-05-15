import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from 'src/services/tour.service';
import { GeneralService } from 'src/services/general.service';
@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {

  @Input() btnState: number;
  constructor(
    private router: Router,
    private tourService: TourService,
    public generalService: GeneralService
  ) { }

  ngOnInit(): void {
  }

  navBtnClick() {
    if(this.generalService.currentPage === this.generalService.pages.demo) {
      this.generalService.navigateToPage(this.generalService.pages.desc);
    } else {
      this.generalService.navigateToPage(this.generalService.pages.demo);
    }
  }

  tourBtnClick() {
    this.tourService.startTour();
  }
}
