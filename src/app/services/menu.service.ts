import { MenuItem } from './../enumerations/menuitem';
import { Injectable } from '@angular/core';


@Injectable()
export class MenuService {

  private selectedMenuItem: MenuItem;
  constructor() { }

  getSelectedMenuItem = () => {
    return this.selectedMenuItem;
  }

  setSelectedMenuItem = (item: MenuItem) => {
    this.selectedMenuItem = item;
  }
}
