import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationRegisterRequest } from 'src/app/core/model-services/information-model';
import { ModelManagerService } from 'src/app/core/model-manager.service';

@Component({
  selector: 'app-information-edit-page',
  templateUrl: './information-edit-page.component.html',
  styleUrls: ['./information-edit-page.component.scss']
})
export class InformationEditPageComponent implements OnInit {

  isLoading = false;
  isNew: boolean;

  // お知らせID
  informationId: string = "";
  // お知らせ内容
  overview: string = "";
  // お知らせ詳細
  detail: string = "";
  // お知らせ掲載開催日
  informationDayFrom = "";
  // お知らせ掲載終了日
  informationDayTo = "";
  // お知らせ情報
  informationItem: InformationRegisterRequest | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private model: ModelManagerService,
  ) { 
    this.informationId = this.route.snapshot.params.id;
    this.isNew = this.informationId === undefined;
  }

  /**
   * 初期化
   */
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
    if (this.isNew) {
      // 新規登録

      // TODO: ここでローディング開始

      try {
        await this.model.information
          .register({
            informationId: this.informationId,
            overview: this.overview,
            detail: this.detail,
            informationDayFrom: this.informationDayFrom,
            informationDayTo: this.informationDayTo,
          })
          .toPromise();

        // TODO: ここでローディング終了

        // TODO: 一覧画面に戻るかデータの再読み込みをする
        this.router.navigate(['/information']);
      } catch {
        // TODO: ここでローディング終了
        // TODO: 例外処理
      }
    } else {
      // 編集

      // TODO: ここでローディング開始

      try {
        await this.model.information
          .update({
            informationId: this.informationId,
            overview: this.overview,
            detail: this.detail,
            informationDayFrom: this.informationDayFrom,
            informationDayTo: this.informationDayTo,
          })
          .toPromise();

        // TODO: ここでローディング終了

        // TODO: 一覧画面に戻るかデータの再読み込みをする
        this.router.navigate(['/information']);
      } catch {
        // TODO: ここでローディング終了
        // TODO: 例外処理
      }
    }
  }

  async onClickDelete() {
    // TODO: 削除確認ダイアログ表示

    try {
      await this.model.information.delete(this.informationId).toPromise();

      // TODO: ここでローディング終了

      // 一覧画面に戻る
      this.router.navigate(['/information']);
    } catch {
      // TODO: ここでローディング終了
      // TODO: 例外処理
    }
  }
    /**
   * 画面データ初期化
   */
  private async doInit() {
    if (this.isNew) {
      // 新規登録
      this.overview = '';
      this.detail = '';
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
    } else {
      // TODO: ここでローディング開始

      // 編集
      try {
        const response = await this.model.information.find(this.informationId).toPromise();
        this.overview = response.overview;
        this.detail = response.detail;
        this.informationDayFrom = response.informationDayFrom;
        this.informationDayTo = response.informationDayTo;

        // TODO: ここでローディング終了
      } catch {
        // TODO: ここでローディング終了
        // TODO: 例外処理
      }
    }
  }
}
