import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-job-filter',
  standalone: true,
  imports: [CommonModule,NgbModule,FeatherIconsComponent],
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent implements OnInit {

  public isFilter: boolean = false;
  public isLocation: boolean = false;
  public isJob_Title: boolean = false;
  public isIndustry: boolean = false;
  public isSpecific_skills: boolean = false;

  constructor() { }

  ngOnInit() { }

}
