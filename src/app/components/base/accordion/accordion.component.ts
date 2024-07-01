import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  public items = ['First', 'Second', 'Third'];
  public togglecollpese = false;


  constructor() { }

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }


  ngOnInit() { }

  public beforeChange(e:any) { }

}
