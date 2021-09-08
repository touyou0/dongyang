import { Injectable } from '@angular/core';
import { HelpModelMockService } from './model-services/help-model-mock.service';
import { InformationModelMockService } from './model-services/information-model-mock.service';
import { InformationModelService } from './model-services/information-model.service';
import { StatuteModelMockService } from './model-services/statute-model-mock.service';
import { PrivacyModelMockService } from './model-services/privacy-model-mock.service';
import { ProductsModelMockService } from './model-services/products-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class ModelManagerService {
  constructor(
    public information: InformationModelMockService,
    public help: HelpModelMockService,
    public statute: StatuteModelMockService,
    public privacy: PrivacyModelMockService,
    public products: ProductsModelMockService
  ) { }
}
