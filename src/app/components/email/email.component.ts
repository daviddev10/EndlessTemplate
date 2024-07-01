import { Component, OnInit } from '@angular/core';
import { Mail } from '../../shared/data/email/email';
import { Email } from '../../shared/model/email.model';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'app-email',
	standalone: true,
	imports: [CommonModule,NgxEditorModule,FormsModule,ReactiveFormsModule,NgbModule],
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  public compose : boolean = true;
  public allEmails : Email[] = Mail.Emails;
  public selectEmail : any;
  public selectedEmails : any[] = [];
  public editorValue : string;
  public type : any;
  public editor: Editor;
  public html = '';



  // make sure to destory the editor
  
  constructor() { }

	getUserEmail(type:any) {
		let emails : any = [];
		return this.allEmails.filter(email => {

			if (type == 'allmail') {
				return emails.push(email)
			}
			else if (type == 'favourite') {
				if (email.favourite) {
					return emails.push(email)
				}
			}
			else if (email.type === type) {
				return emails.push(email)
			}
			return
		})
	}

	selectedUserEmail(email:any) {
		this.selectEmail = email
		this.compose = false
	}

	selectedmail($event:any, email:any) {
		var index = this.selectedEmails.indexOf(email);
		if ($event.target.checked === true && index === -1) {
			// val not found, pushing onto array
			this.selectedEmails.push(email)
		} else {
			// val is found, removing from array
			this.selectedEmails.splice(index, 1);
		}
	}
	
	moveEmails(val:any) {
		if  (!val) return ;
		this.selectedEmails.filter((email) => {
			return email.type = val;
		})
	}
	
	addFavourite(email:any) {
		email.favourite = !email.favourite
	}
	
	  ngOnInit(): void {
		  this.editor = new Editor();
		}
		
		  ngOnDestroy(): void {
			this.editor.destroy();
		  }
		
}
