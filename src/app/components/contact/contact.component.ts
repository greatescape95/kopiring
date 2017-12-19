import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../enumerations/menuitem';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setSelectedMenuItem(MenuItem.Contact);
  }

}
