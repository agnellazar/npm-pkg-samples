import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  pages = {
    demo:'demo',
    desc:'desc'
  }
  currentPage:string = this.pages.demo;

  navBtnTexts = {
    demo:'Description',  
    desc:'Demo'
  }
  navBtnText:string = this.navBtnTexts[this.currentPage];
  constructor(
  public router:Router
  ) {
    this.updateCurrentPage();
  }

  updateCurrentPage() {
    if(this.router.url.includes('desc'))  {
      this.setCurrPage(this.pages.desc);
    } else {
      this.setCurrPage(this.pages.demo);
    }
  }

  setCurrPage(pageName:string) {
    this.currentPage = pageName;
    this.navBtnText = this.navBtnTexts[this.currentPage]
  } 

  navigateToPage(pageName:string) {
    if(pageName === this.pages.demo) {
      this.router.navigateByUrl('');
    } else {
      this.router.navigateByUrl('desc')
    }
  }
}
