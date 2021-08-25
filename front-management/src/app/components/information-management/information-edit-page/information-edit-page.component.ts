import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationRegisterRequest } from 'src/app/components/core/model-services/information-model';

@Component({
  selector: 'app-information-edit-page',
  templateUrl: './information-edit-page.component.html',
  styleUrls: ['./information-edit-page.component.scss']
})
export class InformationEditPageComponent implements OnInit {

  isLoading = false;

  // お知らせID
  informationId: string = "";
  // お知らせ内容
  overview: string = "";
  // お知らせ詳細
  detail: string = "";
  // お知らせ開催日
  informationDayFrom = "";
  // お知らせ終了日
  informationDayTo = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
    route.params.subscribe(params => {
        this.informationId = params.id;
      }
    )
  }

  ngOnInit(): void {
    this.doInit();
  }

  /**
   * 戻るボタンクリック
   */
  onClickBack() {
    this.router.navigate(['/information']);
  }

  /**
   * 保存ボタン
   */
  async onClickSave() {

  }

  private async doInit() {
    if (this.informationId != undefined) {
      let items = this.getArrayDummyData();
      let item = items.find(x => x.informationId == this.informationId);

      this.overview = item?.overview as string;
      this.detail = item?.detail as string;
      this.informationDayFrom = item?.informationDayFrom as string;
      this.informationDayTo = item?.informationDayTo as string;
    } else {
      this.overview = "";
      this.detail = "";
      const date = new Date();
      this.informationDayFrom = date.getFullYear() + '-' + ("0"+(date.getMonth() + 1)).slice(-2) + '-' +  ("0"+date.getDate()).slice(-2);
      this.informationDayTo = date.getFullYear() + '-' + ("0"+(date.getMonth() + 2)).slice(-2) + '-' +  ("0"+date.getDate()).slice(-2);
    }
  }

  private getArrayDummyData(): InformationRegisterRequest[] {
    var items: InformationRegisterRequest[] = [
      {informationId: '10001', overview: '10001のお知らせ', detail: '10001のお知らせの詳細', informationDayFrom: '2021-08-17', informationDayTo: '2021-08-21'},
      {informationId: '10002', overview: '10002のお知らせ', detail: '10002のお知らせの詳細', informationDayFrom: '2021-08-17', informationDayTo: '2021-08-21'},
      {informationId: '10003', overview: '10003のお知らせ', detail: '10003のお知らせの詳細', informationDayFrom: '2021-08-17', informationDayTo: '2021-08-21'},
      {informationId: '10004', overview: '10004のお知らせ', detail: '10004のお知らせの詳細', informationDayFrom: '2021-08-17', informationDayTo: '2021-08-21'},
      {informationId: '10005', overview: '10005のお知らせ', detail: '10005のお知らせの詳細', informationDayFrom: '2021-08-17', informationDayTo: '2021-08-21'},
      {informationId: '10006', overview: '10006のお知らせ', detail: '10006のお知らせの詳細', informationDayFrom: '2021-08-17', informationDayTo: '2021-08-21'}
    ];
    return items;
  }
}
