import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.scss'],
})
export class DetailsPopupComponent implements OnInit {
  public userData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { row: any }) {}

  ngOnInit(): void {
    this.userData = this.data;
  }
}
