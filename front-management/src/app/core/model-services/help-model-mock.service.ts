import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  IHelpModelService,
  HelpFindResponse,
  HelpGetResponse,
  HelpRegisterRequest,
  HelpUpdateRequest,
} from './help-model';

@Injectable({
  providedIn: 'root',
})
export class HelpModelMockService implements IHelpModelService {
  private items: HelpFindResponse[] = [
    {
      category: 'マイ農園',
      title: '○○○○について',
      content: '○○○○○○',
      mode: '',
    },
    {
      category: 'クーポン',
      title: 'クーポンの獲得方法',
      content: 'ポイントを500ポイント貯めて、マイ農園で野菜を育て出荷するとクーポンを受け取ります',
      mode: '',

    },
    {
      category: 'その他',
      title: 'そのた',
      content: '○○○○○○○○○○○○',
      mode: '',
    },
        {
      category: 'その他',
      title: '',
      content: '○○○○○○○○○○○○',
      mode: '',
    },
  ];
  constructor() {}

  get(): Observable<HelpGetResponse> {
    const subject = new Subject<HelpGetResponse>();
    setTimeout(() => {
      subject.next({
        items: this.items,
      });
      subject.complete();
    }, 300);

    return subject;
  }

  find(category: string): Observable<HelpFindResponse> {
    const subject = new Subject<HelpFindResponse>();
    setTimeout(() => {
      const item = this.items.find((n) => n.category === category);
      subject.next(item);
      subject.complete();
    }, 300);

    return subject;
  }

    register(request: HelpRegisterRequest): Observable<void> {
    const subject = new Subject<void>();
    setTimeout(() => {
      const item: HelpFindResponse = {
        category: Math.random().toString(32).substring(2),
        title: request.title,
        content: request.content,
        mode: request.mode,
      };
      this.items.push(item);
      subject.next();
      subject.complete();
    }, 300);

    return subject;
  }

  update(request: HelpUpdateRequest): Observable<void> {
    const subject = new Subject<void>();
    setTimeout(() => {
      const item = this.items.find((n) => n.category === request.category);
      this.items = this.items.filter((n) => n !== item);
      this.items.push(request);
      subject.next();
      subject.complete();
    }, 300);

    return subject;
  }

  delete(category: string): Observable<void> {
    const subject = new Subject<void>();
    setTimeout(() => {
      const item = this.items.find((n) => n.category === category);
      console.log(item);
      this.items = this.items.filter((n) => n !== item);
      console.log(this.items);
      subject.next();
      subject.complete();
    }, 300);

    return subject;
  }
}
