import { Observable } from 'rxjs';

export interface IInformationModelService {
  get(): Observable<InformationGetResponse>;
  find(informationId: string): Observable<InformationFindResponse>;
  register(request: InformationRegisterRequest): Observable<void>;
  update(request: InformationUpdateRequest): Observable<void>;
  delete(informationId: string): Observable<void>;
}

export interface InformationGetResponse {
  items: InformationGetResponseItem[];
}

export interface InformationGetResponseItem {
  /** お知らせID */
  informationId: string;

  /**お知らせ概要 */
  overview: string;

  /**お知らせ詳細 */
  detail: string;

  /** お知らせ掲載開催日 */
  informationDayFrom: string;

  /** お知らせ掲載終了日 */
  informationDayTo: string;
}

export interface InformationFindResponse {
  /** お知らせID */
  informationId: string;

  /**お知らせ概要 */
  overview: string;

  /**お知らせ詳細 */
  detail: string;

  /** お知らせ掲載開催日 */
  informationDayFrom: string;

  /** お知らせ掲載終了日 */
  informationDayTo: string;
}

/**お知らせ登録情報 */
export interface InformationRegisterRequest {
  /** お知らせID */
  informationId: string;
  
  /**お知らせ概要 */
  overview: string;

  /**お知らせ詳細 */
  detail: string;

  /** お知らせ掲載開催日 */
  informationDayFrom: string;

  /** お知らせ掲載終了日 */
  informationDayTo: string;
}

export interface InformationUpdateRequest {
  /** お知らせID */
  informationId: string;

  /**お知らせ概要 */
  overview: string;

  /**お知らせ詳細 */
  detail: string;

  /** お知らせ掲載開催日 */
  informationDayFrom: string;

  /** お知らせ掲載終了日 */
  informationDayTo: string;
}