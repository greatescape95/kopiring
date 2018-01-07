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
    this.handleImages();
  }



  handleImages = () => {

    jQuery('.portfolio-item').hover(function () {
      jQuery(this).find('.portfolio-item-hover').animate({
        "opacity": 0.8
      }, 100, 'easeInOutCubic');


    }, function () {
      jQuery(this).find('.portfolio-item-hover').animate({
        "opacity": 0
      }, 100, 'easeInOutCubic');

    });


    jQuery('.portfolio-item').hover(function () {
      jQuery(this).find(".fullscreen").stop().animate({ 'top': '60%', 'opacity': 1 }, 250, 'easeOutBack');
      jQuery(this).find(".portfolio-item-title").addClass('bg-color');

    }, function () {
      jQuery(this).find(".fullscreen").stop().animate({ 'top': '65%', 'opacity': 0 }, 150, 'easeOutBack');
      jQuery(this).find(".portfolio-item-title").removeClass('bg-color');

    });
  }
}

