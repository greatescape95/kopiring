import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    setTimeout(() => this.handleJQuery(), 1000);
  }

  handleJQuery = () => {

    jQuery(document).ready(function () {

      

    $('.portfolio-item').hover(function () {
      $(this).find('.portfolio-item-hover').animate({
        "opacity": 0.8
      }, 100, 'easeInOutCubic');


    }, function () {
      $(this).find('.portfolio-item-hover').animate({
        "opacity": 0
      }, 100, 'easeInOutCubic');

    });

    $('.portfolio-item').hover(function () {
      $(this).find(".fullscreen").stop().animate({ 'top': '60%', 'opacity': 1 }, 250, 'easeOutBack');
      $(this).find(".portfolio-item-title").addClass('bg-color');

    }, function () {
      $(this).find(".fullscreen").stop().animate({ 'top': '65%', 'opacity': 0 }, 150, 'easeOutBack');
      $(this).find(".portfolio-item-title").removeClass('bg-color');

    });

    $('.blog-showcase ul li').each(function () {
      $(this).on('hover', function () {
        $(this).siblings('li').removeClass('blog-first-el').end().addClass('blog-first-el');
      });
    });


    $('.blog-showcase-thumb').hover(function () {
      $(this).find('.post-item-hover').animate({
        "opacity": 0.8
      }, 100, 'easeInOutCubic');

    }, function () {
      $(this).find('.post-item-hover').animate({
        "opacity": 0
      }, 100, 'easeInOutCubic');

    });

    $('.blog-showcase-thumb').hover(function () {
      $(this).find(".fullscreen").stop().animate({ 'top': '57%', 'opacity': 1 }, 250, 'easeOutBack');

    }, function () {
      $(this).find(".fullscreen").stop().animate({ 'top': '65%', 'opacity': 0 }, 150, 'easeOutBack');

    });

});

  }
}
