import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/services/tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor(
    public tourService: TourService
  ) { }

  async ngOnInit() {
  }

}
