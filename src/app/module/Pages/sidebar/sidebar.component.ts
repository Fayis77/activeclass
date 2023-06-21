import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import{Inject} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  constructor(@Inject(DOCUMENT) private document: Document){}
  toggleBodyClass(){
    console.log('Toggling body class')
    const body = this.document.body;
   if (body.classList.contains('active-body')){
    body.classList.remove('active-body');
   } else {
    body.classList.add('active-body');
   }
  }
}



