import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-learning-filter',
  standalone: true,
  imports: [CommonModule,FeatherIconsComponent,NgbModule],
  templateUrl: './learning-filter.component.html',
  styleUrls: ['./learning-filter.component.scss']
})
export class LearningFilterComponent implements OnInit {

  public isCourse: boolean = false;
  public isIndustry: boolean = false;
  public isUpcomimngCourse: boolean = false;
  public isCategories: boolean

  constructor() { }

  ngOnInit() { }

}
