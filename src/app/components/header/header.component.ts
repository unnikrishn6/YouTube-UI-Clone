import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent {
 
  collapse:boolean=false;

  OnCollapse(){
    this.collapse=!this.collapse;
  }

}
