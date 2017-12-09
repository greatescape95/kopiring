import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AppService } from './app.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  greetings = 'test';
  title = 'Tour of Heroes';

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.sayHello()
      .subscribe(
      result => {
        this.greetings = result;
      });
  }
}
