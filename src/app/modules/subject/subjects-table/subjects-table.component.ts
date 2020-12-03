import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/model/subject/subject.model';

@Component({
  selector: 'subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.css']
})
export class SubjectsTableComponent implements OnInit {

  @Input() loading: boolean;
  @Input() subjects = new Array<Subject>();
  @Input() actionButtonLabel: string;
  @Output() onActionClicked = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  actionClickListener(subject: Subject) {
    this.onActionClicked.emit({data: subject});
  }


}
