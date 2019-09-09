import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../../../../shared/models/joke';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.sass']
})
export class ResultListComponent implements OnInit {
  @Input() jokes: Joke[];
  @Input() loading: boolean;
  @Input() error: any;

  @Output() refresh = new EventEmitter();
  @Output() select = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

}
