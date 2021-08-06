import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-liff-sample';

  ngOnInit() {
    liff
      .init({ liffId: '1656282449-97xkBzj2' })
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  }
}
