import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  InformationFindResponse,
  InformationGetResponse,
  InformationRegisterRequest,
  InformationUpdateRequest,
  IInformationModelService,
} from './information-model';

@Injectable({
  providedIn: 'root',
})
export class InformationModelMockService implements IInformationModelService {
  private items: InformationFindResponse[] = [
    {
      informationId: 'A00001',
      overview: 'A00001の概要',
      detail: 'A00001の詳細',
      informationDayFrom: '2021-08-01',
      informationDayTo: '2021-09-01',
    },
    {
      informationId: 'A00002',
      overview: 'A00002の概要',
      detail: 'A00002の詳細',
      informationDayFrom: '2021-08-02',
      informationDayTo: '2021-09-02',
    },
    {
      informationId: 'A00003',
      overview: 'A00003の概要',
      detail: 'A00003の詳細',
      informationDayFrom: '2021-08-03',
      informationDayTo: '2021-09-03',
    },
  ];

  constructor() {}

  get(): Observable<InformationGetResponse> {
    const subject = new Subject<InformationGetResponse>();
    setTimeout(() => {
      subject.next({
        items: this.items,
      });
      subject.complete();
    }, 300);

    return subject;
  }

  find(informationId: string): Observable<InformationFindResponse> {
    const subject = new Subject<InformationFindResponse>();
    setTimeout(() => {
      const item = this.items.find((n) => n.informationId === informationId);
      subject.next(item);
      subject.complete();
    }, 300);

    return subject;
  }

  register(request: InformationRegisterRequest): Observable<void> {
    const subject = new Subject<void>();
    setTimeout(() => {
      const item: InformationFindResponse = {
        informationId: Math.random().toString(32).substring(2),
        overview: request.overview,
        detail: request.detail,
        informationDayFrom: request.informationDayFrom,
        informationDayTo: request.informationDayTo,
      };
      this.items.push(item);
      subject.next();
      subject.complete();
    }, 300);

    return subject;
  }

  update(request: InformationUpdateRequest): Observable<void> {
    const subject = new Subject<void>();
    setTimeout(() => {
      const item = this.items.find((n) => n.informationId === request.informationId);
      this.items = this.items.filter((n) => n !== item);
      this.items.push(request);
      subject.next();
      subject.complete();
    }, 300);

    return subject;
  }

  delete(informationId: string): Observable<void> {
    const subject = new Subject<void>();
    setTimeout(() => {
      const item = this.items.find((n) => n.informationId === informationId);
      this.items = this.items.filter((n) => n !== item);
      subject.next();
      subject.complete();
    }, 300);

    return subject;
  }
}