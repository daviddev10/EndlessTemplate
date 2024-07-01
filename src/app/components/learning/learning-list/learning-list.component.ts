import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningDB } from '../../../shared/data/learning/learning';
import { LearningFilterComponent } from '../learning-filter/learning-filter.component';

@Component({
  selector: 'app-learning-list',
  standalone: true,
  imports: [CommonModule,LearningFilterComponent],
  templateUrl: './learning-list.component.html',
  styleUrls: ['./learning-list.component.scss']
})
export class LearningListComponent implements OnInit {

  public courses  :any= []

  constructor(private route: ActivatedRoute, private router: Router) {
    this.courses = LearningDB.lang
  }

  detailview(course:any) {
    this.router.navigate(['/learning/learning-detail', course.Id]);
  }

  ngOnInit() { }

}
