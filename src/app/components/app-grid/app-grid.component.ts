import {  OnInit,NgModule, Component, Pipe, PipeTransform, enableProdMode } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule,
         DxBulletModule,
         DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import {GobServices} from '../../services/gob.services';
import {Gob} from '../../models/gob.model';
@Component({
  selector: 'app-app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.sass']
})
export class AppGridComponent implements OnInit {

  dataSource: DataSource;
  losGob : Gob[];
  collapsed = false;
  contentReady = (e) => {
    if(!this.collapsed) {
        this.collapsed = true;
        e.component.expandRow(["EnviroCare"]);
    }
};
customizeTooltip = (pointsInfo) => {
  return { text: parseInt(pointsInfo.originalValue) + "%" };
}
  constructor(private service: GobServices) {
   // this.losGob = service.getCustomers();
   this.losGob = service.getCustomers();
   }

  ngOnInit() {
  }

 
}
