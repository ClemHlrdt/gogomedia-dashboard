import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template:
    '<div class="container h-95 mx-auto"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
