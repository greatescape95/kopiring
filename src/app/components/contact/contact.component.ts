import { ContactForm } from './../../interfaces/contactForm';
import { Hero } from './../../hero';
import { AppService } from './../../app.service';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../enumerations/menuitem';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contactForm: ContactForm = {
    name: null,
    phone: null,
    email: null,
    message: null,
    spamFilter: null
  };

  isSubmitMessageVisible: boolean;

  constructor(private menuService: MenuService,
    private _appService: AppService) { }

  ngOnInit() {
    this.menuService.setSelectedMenuItem(MenuItem.Contact);
    this.isSubmitMessageVisible = false;
  }

  sendMail = (form: NgForm) => {
    if (this.contactForm.spamFilter == null) {
      this._appService.sendContactData(this.contactForm)
        .subscribe(
        result => {
          this.isSubmitMessageVisible = true;
        });
    }

  }

}
