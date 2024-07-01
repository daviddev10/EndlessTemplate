import { Component, OnInit } from '@angular/core';
import { JobDB } from '../../../shared/data/job-search/job-search';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule,JobFilterComponent,RouterModule],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  public jobs: any

  constructor() {
    this.jobs = JobDB.Job_Category
  }

  ngOnInit() { }

}
