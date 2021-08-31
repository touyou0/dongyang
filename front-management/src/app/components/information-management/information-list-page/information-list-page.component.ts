import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationRegisterRequest } from 'src/app/core/model-services/information-model';
import { ModelManagerService } from 'src/app/core/model-manager.service';

@Component({
  selector: 'app-information-list-page',
  templateUrl: './information-list-page.component.html',
  styleUrls: ['./information-list-page.component.scss']
})
export class InformationListPageComponent implements OnInit {

  isLoading = false;

  // お知らせ概要
  overview: string = "";
  // お知らせ掲載開催日
  informationDayFrom = "";
  // お知らせ掲載終了日
  informationDayTo = "";
  // お知らせ情報リスト
  informationItems: InformationRegisterRequest[] = [];

  constructor(
    private router: Router,
    private model: ModelManagerService
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
    this.informationDayFrom =
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2);
    this.informationDayTo =
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 2)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2);

    // TODO: ここでローディング開始

    try {
      const response = await this.model.information.get().toPromise();
      this.informationItems = response.items;

      // TODO: ここでローディング終了
    } catch {
      // TODO: ここでローディング終了
      // TODO: 例外処理
    }
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