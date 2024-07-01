import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningDB } from '../../../shared/data/learning/learning';
import { CommonModule } from '@angular/common';
import { LearningFilterComponent } from '../learning-filter/learning-filter.component';

@Component({
  selector: 'app-learning-detail',
  standalone: true,
  imports: [CommonModule,LearningFilterComponent],
  templateUrl: './learning-detail.component.html',
  styleUrls: ['./learning-detail.component.scss']
})
export class LearningDetailComponent implements OnInit {

  public courses
  public arr :any

  constructor(private route: ActivatedRoute, private router: Router) {
    this.courses = LearningDB.lang
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.courses.filter((items) => {
        if (items.Id === id) {
          this.arr = items;
        }
      })
    })
  }

  ngOnInit() { }

}
