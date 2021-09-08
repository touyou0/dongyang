import { Observable } from 'rxjs';

export interface IHelpModelService {
  get(): Observable<HelpGetResponse>;
}

export interface HelpGetResponse {
  items: HelpGetResponseItem[];
}

export interface HelpGetResponseItem {
  /** カテゴリ */
  category: string;

  /** タイトル */
  title: string;

  /** 内容 */
  content: string;

  /** 処理モード */
  mode: string;
}

export interface HelpFindResponse {
  /** カテゴリ */
  category: string;

  /** タイトル */
  title: string;

  /** 内容 */
  content: string;

  /** 処理モード */
  mode: string;
}

export interface HelpRegisterRequest {
  /** カテゴリ */
  category: string;

  /** タイトル */
  title: string;

  /** 内容 */
  content: string;

  /** 処理モード */
  mode: string;
}

export interface HelpUpdateRequest {
  /** カテゴリ */
  category: string;

  /** タイトル */
  title: string;

  /** 内容 */
  content: string;

  /** 処理モード */
  mode: string;
}
