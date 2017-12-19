import { MenuItem } from './../../enumerations/menuitem';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setSelectedMenuItem(MenuItem.Gallery);
  }

}
