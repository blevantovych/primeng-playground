import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TableColumnModel } from './table-column.model';
import { TableSortEnum } from './table-sort.enum';
import { TableSortObjectInterface } from './table-sort-object.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ]
})
export class TableComponent {
  private _columns: TableColumnModel[];
  private _data: object[];
  public sortFields: TableSortObjectInterface = {};
  public TableSortEnum = TableSortEnum;

  @Output() onChangeSort: EventEmitter<TableSortObjectInterface> = new EventEmitter<TableSortObjectInterface>();

  @Input() set columns(columns: TableColumnModel[]) {
    if (!columns) {
      return;
    }
    columns.forEach(column => {
      const { serviceParamName, sort } = column.options;
      if (sort && serviceParamName) {
        this.sortFields[ serviceParamName ] = null;
      }
    });
    this._columns = columns;
  }

  get columns() {
    return this._columns;
  }

  @Input() set data(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  public sort(serviceParamName) {
    this.toggleSortField(serviceParamName);
    this.onChangeSort.emit(this.sortFields);
  }

  private toggleSortField(serviceParamName) {
    let sortField = this.sortFields[ serviceParamName ];
    switch (sortField) {
      case TableSortEnum.ASC:
        sortField = TableSortEnum.DESC;
        break;
      case TableSortEnum.DESC:
      default:
        sortField = TableSortEnum.ASC;
    }
    this.sortFields[ serviceParamName ] = sortField;
  }
}
