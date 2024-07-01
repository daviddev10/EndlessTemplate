import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';


@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, AngularEditorModule, FormsModule, NgxEditorModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public htmlContent = '';
  public editor: Editor;
  public html = '';

  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }


}
