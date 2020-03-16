import { Component, OnInit,NgModule,ViewChild, enableProdMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TypeModel} from '../../models/type.model';
import { GobServices } from '../../services/gob.services';

import {
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxDataGridModule,
    DxTreeViewComponent
} from 'devextreme-angular';

import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-app-dropdown',
  templateUrl: './app-dropdown.component.html',
  styleUrls: ['./app-dropdown.component.sass']
})
export class AppDropdownComponent implements OnInit {

  lostypes: TypeModel[];
  treeDataSource: any;
  treeBoxValue: string;
  gridDataSource: any;
  gridBoxValue: number[] = [3];

  constructor(private httpClient: HttpClient, private service : GobServices) {
    this.treeDataSource = this.makeAsyncDataSource(this.httpClient, "treeProducts.json");
        this.gridDataSource = this.makeAsyncDataSource(this.httpClient, "customers.json");
        this.lostypes = service.getTypes();
        this.treeBoxValue = this.lostypes[2].id+" "+this.lostypes[2].name;
   }

   makeAsyncDataSource(http, jsonFile){
    return new CustomStore({
        loadMode: "raw",
        key: "ID",
        load: function() {
            return http.get('data/' + jsonFile)
                .toPromise();
        }
    });
};
  ngOnInit() {
  }
  treeView_itemSelectionChanged(e){
    const nodes = e.component.getNodes();
    this.treeBoxValue = this.getSelectedItemsKeys(nodes).join("");
}

getSelectedItemsKeys(items) {
  var result = [],
      that = this;

  items.forEach(function(item) {
      if(item.selected) {
          result.push(item.key);
      }
      if(item.items.length) {
          result = result.concat(that.getSelectedItemsKeys(item.items));
      }
  });
  return result;
}


}
