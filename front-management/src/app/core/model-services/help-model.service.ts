import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HelpFindResponse,
  HelpGetResponse,
  IHelpModelService,
  HelpRegisterRequest,
  HelpUpdateRequest,
} from './help-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HelpModelService implements IHelpModelService {
  constructor(private http: HttpClient) {}

  get(): Observable<HelpGetResponse> {
    return this.http.get<HelpGetResponse>('/api/Help/Get');
  }

  find(category: string): Observable<HelpFindResponse> {
    return this.http.get<HelpFindResponse>('/api/Help/Find/' + category);
  }

  register(request: HelpRegisterRequest): Observable<void> {
    return this.http.post<void>('/api/Help/Register', request);
  }

  update(request: HelpUpdateRequest): Observable<void> {
    return this.http.put<void>('/api/Help/Update', request);
  }

  delete(category: string): Observable<void> {
    return this.http.delete<void>('/api/Help/Delete/' + category);
  }
}
