import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/label/label.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  label: string;

  constructor(private labelService: LabelService) { }

  ngOnInit(): void {
    this.label = 'Initial Label';
  }

  changeLabel(): void {
    this.label = this.labelService.getLabel();
  }

}
