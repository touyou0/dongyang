import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  InformationFindResponse,
  InformationGetResponse,
  InformationRegisterRequest,
  InformationUpdateRequest,
  IInformationModelService,
} from './information-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InformationModelService implements IInformationModelService {
  constructor(private http: HttpClient) {}

  get(): Observable<InformationGetResponse> {
    console.log('---------------------service');
    return this.http.get<InformationGetResponse>('/api/Information/Get');
  }

  find(informationId: string): Observable<InformationFindResponse> {
    return this.http.get<InformationFindResponse>('/api/Information/Find/' + informationId);
  }

  register(request: InformationRegisterRequest): Observable<void> {
    return this.http.post<void>('/api/Information/Register', request);
  }

  update(request: InformationUpdateRequest): Observable<void> {
    return this.http.put<void>('/api/Information/Update', request);
  }

  delete(informationId: string): Observable<void> {
    return this.http.delete<void>('/api/Information/Delete/' + informationId);
  }
}
