import { Component, OnInit } from '@angular/core';
import { JobDB } from '../../../shared/data/job-search/job-search';
import { CommonModule } from '@angular/common';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule,JobFilterComponent,RouterModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  public jobs: any

  constructor() {
    this.jobs = JobDB.Job_Category
  }

  ngOnInit() { }

}
