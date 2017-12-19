import { MenuService } from './../../services/menu.service';
import { MenuItem } from './../../enumerations/menuitem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumboprint',
  templateUrl: './jumboprint.component.html',
  styleUrls: ['./jumboprint.component.css']
})
export class JumboprintComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setSelectedMenuItem(MenuItem.JumboPrint);
    setTimeout(() => this.handleJQuery(), 500);
  }

  handleJQuery = () => {
    /*----------------------------------------------------*/
    /*	Accordion Section
    /*----------------------------------------------------*/

jQuery(document).ready(function() {
    jQuery('.accordionMod').each(function (index) {
      const thisBox = jQuery(this).children(),
        thisMainIndex = index + 1;
      jQuery(this).attr('id', 'accordion' + thisMainIndex);
      thisBox.each(function (i) {
        const thisIndex = i + 1,
          thisParentIndex = thisMainIndex,
          thisMain = jQuery(this).parent().attr('id'),
          thisTriggers = jQuery(this).find('.accordion-toggle'),
          thisBoxes = jQuery(this).find('.accordion-inner');
        jQuery(this).addClass('panel');
        thisBoxes.wrap('<div id=\"collapseBox' + thisParentIndex + '_' + thisIndex + '\" class=\"panel-collapse collapse\" />');
        thisTriggers.wrap('<div class=\"panel-heading\" />');
        thisTriggers.attr('data-toggle', 'collapse').attr('data-parent', '#' + thisMain).attr('data-target', '#collapseBox' + 
        thisParentIndex + '_' + thisIndex);
      });
      jQuery('.accordion-toggle').prepend('<span class=\"icon\" />');
      // jQuery("div.accordion-item:first-child .accordion-toggle").addClass("current");
      // jQuery("div.accordion-item:first-child .icon").addClass("iconActive");
      // jQuery("div.accordion-item:first-child .panel-collapse").addClass("in");
      jQuery('.accordionMod .accordion-toggle').click(function () {
        if (jQuery(this).parent().parent().find('.panel-collapse').is('.in')) {
          jQuery(this).removeClass('current');
          jQuery(this).find('.icon').removeClass('iconActive');
        } else {
          jQuery(this).addClass('current');
          jQuery(this).find('.icon').addClass('iconActive');
        }
        jQuery(this).parent().parent().siblings().find('.accordion-toggle').removeClass('current');
        jQuery(this).parent().parent().siblings().find('.accordion-toggle > .icon').removeClass('iconActive');
      });
    });
  });
  }
}
