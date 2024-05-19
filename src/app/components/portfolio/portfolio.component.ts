import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  open:boolean = false;
  source: string = '';
    openimage(e: string): void {
      this.source = "./assets/" + e;
      this.open = true
    }
    closeImg(e: any): void {
      if(e.target.getAttribute("src") != null)
        this.open = true;
      else
        this.open = false;
     
    }
}
