import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';

import { TableColumnModel } from '../table/table-column.model';

@Component({
  selector: 'rwm-edm',
  templateUrl: './edm.component.html'
})
export class EdmComponent implements AfterViewInit {
  @ViewChild('decimalTemplate') decimalTemplate: TemplateRef<any>;
  @ViewChild('priceTemplate') priceTemplate: TemplateRef<any>;
  @ViewChild('summaryTemplate') summaryTemplate: TemplateRef<any>;
  @ViewChild('decimalPriceTemplate') decimalPriceTemplate: TemplateRef<any>;
  @ViewChild('headerTemplate') headerTemplate: TemplateRef<any>;

  columns;

  data = [ {
    column1: 1000,
    column2: 2000,
    column3: [ {
      value1: 2500,
      value2: 2600
    }, {
      value1: 2700,
      value2: 2800
    } ]
  }, {
    column1: 3000,
    column2: 4000,
    column3: [ {
      value1: 3500,
      value2: 3600
    } ]
  } ];

  handleChangeSort(sortFields) {
    console.log(sortFields);
  }

  // configs
  ngAfterViewInit() {
    const RegionColumn = new TableColumnModel('title 1', 'All products', 'column1', {
      width: 10,
      headTemplate: this.headerTemplate
    });
    const TopSizeColumn = new TableColumnModel('title 2', 40000, 'column2', {
      serviceParamName: 'column2Sort',
      width: 10,
      sort: true,
      headTemplate: this.headerTemplate,
      bodyTemplate: this.decimalTemplate
    });
    const TopColorColumn = new TableColumnModel('title 3', 50000, 'column3', {
      serviceParamName: 'column3Sort',
      width: 20,
      sort: true,
      summaryTemplate: this.summaryTemplate,
      bodyTemplate: this.decimalPriceTemplate
    });
    this.columns = [
      RegionColumn,
      TopSizeColumn,
      TopColorColumn
    ];
  }
}
