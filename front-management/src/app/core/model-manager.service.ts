import { Injectable } from '@angular/core';
import { InformationModelMockService } from './model-services/information-model-mock.service';
import { InformationModelService } from './model-services/information-model.service';

@Injectable({
  providedIn: 'root',
})
export class ModelManagerService {
  constructor(public information: InformationModelMockService) {}
}
