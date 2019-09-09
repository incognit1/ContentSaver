import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../../../../shared/models/joke';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.sass']
})
export class ResultItemComponent implements OnInit {

  @Input() joke: Joke;
  @Output() select = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
