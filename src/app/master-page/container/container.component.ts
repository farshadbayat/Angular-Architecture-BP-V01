import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@core/services/global.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private gs: GlobalService) {}

  ngOnInit(): void {}
}
