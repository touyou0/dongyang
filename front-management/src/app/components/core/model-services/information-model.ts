/**お知らせ情報登録 */
export interface InformationRegisterRequest {

  /** お知らせID */
  informationId: string;

  /**お知らせ概要 */
  overview: string;

  /**お知らせ詳細 */
  detail: string;

  /** お知らせ開催日 */
  informationDayFrom: string;

  /** お知らせ終了日 */
  informationDayTo: string;
}
