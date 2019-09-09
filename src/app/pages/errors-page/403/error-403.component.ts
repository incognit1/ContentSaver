// angular
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector   : 'app-error-403',
  templateUrl: 'error-403.component.html',
  styleUrls  : [ './../errors.sass' ],
})

export class Error403Component {
  public constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('We\'ve got some trouble | 403 - Access Denied');
  }
}
