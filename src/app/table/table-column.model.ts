import { TemplateRef } from '@angular/core';

export class TableColumnModel {
  constructor(public title: any, public summary: any, public key: string, public options: {
    serviceParamName?: string;
    width?: number;
    sort?: boolean;
    headTemplate?: TemplateRef<any>;
    summaryTemplate?: TemplateRef<any>;
    bodyTemplate?: TemplateRef<any>;
  } = {}) {
  }
}
