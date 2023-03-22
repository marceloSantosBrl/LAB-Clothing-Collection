import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from './services/server-connection/server-connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public readonly _crud: ServerConnectionService,
  ) { }

  ngOnInit() {
    this._crud.deleteCollection(4)
      .subscribe((value) => console.log(value));
  }
}
