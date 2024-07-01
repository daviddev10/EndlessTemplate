import { Component, OnInit } from '@angular/core';
import { KB_DB } from '../../shared/data/knowledge-base/knowledge-base'
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FeatherIconsComponent } from '../../shared/components/feather-icons/feather-icons.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-knowledge-base',
  standalone: true,
  imports: [CommonModule, FeatherIconsComponent, FormsModule, NgbModule],
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  public Kb: any
  public title: any
  public term: string

  constructor(private _sanitizer: DomSanitizer) {
    this.Kb = KB_DB.Kb_Category
  }

  ngOnInit() { }

}
