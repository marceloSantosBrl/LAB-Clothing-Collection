import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerConnectionService } from '../../services/server-connection/server-connection.service';
import { IServerData } from '../../models/i-server-data';
import { ServerData } from '../../../utils/classes/server-data';
import testObject from '../../../test-artifacts/objects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public testObject = testObject;

  public serverData!: IServerData;

  public delSub!: Subscription;

  public ServerData = ServerData;

  constructor(
    public _server: ServerConnectionService,
  ) { }

  ngOnInit() {
    this.delSub = this._server.getServerData()
      .subscribe(
        {
          next: (value) => {
            this.serverData = value;
          },
          error: () => alert('Falha ao se conectar com o servidor'),
        },
      );
  }

  ngOnDestroy() {
    this.delSub.unsubscribe();
  }
}
