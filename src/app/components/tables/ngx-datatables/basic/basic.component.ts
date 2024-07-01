import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { COMPANYDB, CompanyDB } from '../../../../shared/data/tables/company';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgbdSortableHeader, SortEvent } from '../../../../shared/directives/NgbdSortableHeader';
import { TableService } from '../../../../shared/services/table.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [CommonModule,NgbModule,NgbdSortableHeader],
  providers:[TableService,DecimalPipe],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicNgxDatatableComponent {

  public selected = [];

  public tableItem$: Observable<CompanyDB[]>;
  public searchText: any;
  total$: Observable<number>;

  constructor(public service: TableService) {

    this.tableItem$ = service.tableItem$;
    this.total$ = service.total$;
    this.service.setUserData(COMPANYDB)

  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;

  }

  public onSelect(selected:any) {
    this.service.deleteSingleData(selected);
  }


  ngOnInit() {

  }


}