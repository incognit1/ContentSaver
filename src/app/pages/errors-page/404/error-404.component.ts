// angular
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector   : 'app-error-404',
  templateUrl: 'error-404.component.html',
  styleUrls  : [ './../errors.sass' ],
})

export class Error404Component {
  public constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('We\'ve got some trouble | 404 - Resource not found');
  }
}
