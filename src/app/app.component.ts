

import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  token: string|undefined;

  constructor(private modalService: NgbModal ) {
    
    this.token = undefined;

  }
  
}