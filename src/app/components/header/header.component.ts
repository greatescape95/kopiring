import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../enumerations/menuitem';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private selectedMenuItem: MenuItem;
  private menuItem = MenuItem;

  constructor(private menuService: MenuService,
    private router: Router) { }

  ngOnInit() {
    this.menuService.setSelectedMenuItem(this.menuItem.Home);
    this.getSelectedItem();
    this.handleRouteChange();
  }

  getSelectedItem = () => {
    this.selectedMenuItem = this.menuService.getSelectedMenuItem();
  }

  handleRouteChange = () => {
    this.router.events.subscribe((event) => {
      setTimeout(() => this.getSelectedItem(), 100);
    });
  }
}
