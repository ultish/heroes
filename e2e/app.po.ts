import { browser, element, by } from 'protractor/globals';

export class HeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-heroes h1')).getText();
  }
}
