import { Component, OnInit } from '@angular/core';
import { StateCodeM } from 'src/app/models/client.models';

@Component({
  selector: 'tks-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'tracksys-stacktest';

  constructor() {}

  ngOnInit(): void {}
}
