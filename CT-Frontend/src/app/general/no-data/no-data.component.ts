import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.css']
})
export class NoDataComponent implements OnInit {

    @Input() message:string;
    @Input() sub_message:string;

    constructor() {
        this.message = "";
        this.sub_message = "";
    }

    ngOnInit(): void {
    }

}
