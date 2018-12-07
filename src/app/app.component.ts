import { Component } from '@angular/core';
import { TRANSLATE } from './translate';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LABEL: any;
  TR: any;
  constructor() {
    this.init();
  }
  init(){
    if (!localStorage.getItem('lang')) {
      localStorage.setItem("lang", 'en')
    }
    let lang: string = localStorage.getItem('lang');
    this.LABEL = TRANSLATE[lang].label;
    this.TR = TRANSLATE[lang].sh;
  }
  changeLanguage(lang){
    localStorage.setItem("lang", lang);
    this.init();
  }
}
