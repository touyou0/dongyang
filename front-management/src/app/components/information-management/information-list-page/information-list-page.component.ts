import { Component, OnInit } from '@angular/core';
import { InformationRegisterRequest }  from 'src/app/components/core/model-services/information-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-information-list-page',
  templateUrl: './information-list-page.component.html',
  styleUrls: ['./information-list-page.component.scss']
})
export class InformationListPageComponent implements OnInit {

  isLoading = false;

  // お知らせ概要
  overview: string = "";
  // お知らせ開催日
  informationDayFrom = "";
  // お知らせ終了日
  informationDayTo = "";
  // お知らせ情報リスト
  informationItems: InformationRegisterRequest[] = [];

  constructor(
    private router: Router
  ) { }

  /**
   * 初期化
   */
  ngOnInit(): void {
    this.doInit();
    
  }

  /**
   * 画面データ初期化
   */
  private async doInit() {
    const date = new Date();
    this.informationDayFrom = date.getFullYear() + '-' + ("0"+(date.getMonth() + 1)).slice(-2) + '-' +  ("0"+date.getDate()).slice(-2);
    this.informationDayTo = date.getFullYear() + '-' + ("0"+(date.getMonth() + 2)).slice(-2) + '-' +  ("0"+date.getDate()).slice(-2);
    this.informationItems = this.getArrayDummyData();
    //this.eventItems.push()
  }

  /**
   * お知らせ情報一覧のダミーデータ作成
   * @returns 
   */
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

  /**
   * お知らせ新規ボタンクリック
   */
  onClickCreateInformation() {
    this.router.navigate([
      '/information/edit'
    ]);
  }
}

 