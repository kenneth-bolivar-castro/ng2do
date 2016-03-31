import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'status-selector',
  template: `<div>
    <select #input (change)="select.emit(input.value)">
      <option *ngFor="#status of statuses">
        {{status}}
      </option>
    </select>
  </div>`
})
export class StatusSelectorComponent {
  @Output() select = new EventEmitter();
  statuses = ["started", "completed"];

  ngOnInit(){
    this.select.emit(this.statuses[0]);
  }
}
