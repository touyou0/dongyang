import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelManagerService } from 'src/app/core/model-manager.service';
import { HelpGetResponseItem } from 'src/app/core/model-services/help-model';

@Component({
  selector: 'app-help-list-page',
  templateUrl: './help-list-page.component.html',
  styleUrls: ['./help-list-page.component.scss'],
})
export class HelpListPageComponent implements OnInit {
  isLoading = false;

  // カテゴリ
  helpItems: HelpGetResponseItem[] = [];

  constructor(private router: Router, private model: ModelManagerService) {}

  ngOnInit(): void {
    this.doInit();
  }

  private async doInit() {
    try {
      const response = await this.model.help.get().toPromise();
      this.helpItems = response.items;

      // TODO: ここでローディング終了
    } catch {
      // TODO: ここでローディング終了
      // TODO: 例外処理
    }
  }

  /**
   * 編集ボタン押下
   * @param help カテゴリ情報
   */
  onEdit(help: HelpGetResponseItem) {
    if (help.mode == 'edit') {
      help.mode = '';
    } else {
      help.mode = 'edit';
    }
  }

  /**
   * 追加ボタン押下
   */
  onRegister() {
    this.helpItems.push({
      category: '',
      title: '',
      content: '',
      mode: 'add',
    });
  
  }

  async onDelete(help: HelpGetResponseItem) {
    // TODO: 削除確認ダイアログ表示
    try {
      await this.model.help.delete(help.category).toPromise();

      this.doInit();
    } catch {
      // TODO: ここでローディング終了
      // TODO: 例外処理
    }
  }
}
