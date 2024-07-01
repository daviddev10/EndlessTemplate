import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JobDB } from '../../../shared/data/job-search/job-search';
import { CommonModule } from '@angular/common';
import { JobFilterComponent } from '../job-filter/job-filter.component';

@Component({
  selector: 'app-job-desc',
  standalone: true,
  imports: [CommonModule,JobFilterComponent,RouterModule],
  templateUrl: './job-desc.component.html',
  styleUrls: ['./job-desc.component.scss']
})
export class JobDescComponent implements OnInit {

  public jobs: any
  public arr: any

  constructor(private route: ActivatedRoute, private router: Router) {
    this.jobs = JobDB.Job_Category;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.jobs.filter((items: { Id: number; }) => {
        if (items.Id === id) {
          this.arr = items;
        }
      })
    })
  }

  applyClick(arr: { Id: any; }) {
    this.router.navigate(['/job-search/job-apply', arr.Id]);
  }

  ngOnInit() { }

}
