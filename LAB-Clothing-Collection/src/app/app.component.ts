import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { ServerConnectionService } from './services/server-connection/server-connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public readonly _auth: AuthService,
    public readonly _server: ServerConnectionService,
  ) { }

  ngOnInit() {
    this._server.getServerData().subscribe((x) => console.log(x));
  }
}
