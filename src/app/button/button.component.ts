import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() disabled: boolean;
  @Output() click:EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  onClick():void {
    this.click.emit('')
  }
}
