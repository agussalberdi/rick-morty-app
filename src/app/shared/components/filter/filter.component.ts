import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() data: any[];
  @Output() filteredData: EventEmitter<any> = new EventEmitter();
  filter: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: string) {
    if (event.length > 2) {
        const filtered = this.data.filter(item =>
            item.name.toLowerCase().includes(event.toLowerCase())
        );
        this.filteredData.emit(filtered);
    } else {
        this.filteredData.emit(this.data);
    }
  }
}
