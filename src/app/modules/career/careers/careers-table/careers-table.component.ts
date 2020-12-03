import { Career } from './../../../../model/career/career.model';
import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'careers-table',
  templateUrl: './careers-table.component.html',
  styleUrls: ['./careers-table.component.css']
})
export class CareersTableComponent implements OnInit {

    @Input() loading: boolean;
  	@Input() careers = new Array<Career>();
    @Input() actionButtonLabel: string;
    @Output() onActionClicked = new EventEmitter<any>();

  	constructor(private router: Router) { }

  	ngOnInit() {
  	}

    actionClickListener(career: Career) {
      this.onActionClicked.emit({data: career});
    }

}
