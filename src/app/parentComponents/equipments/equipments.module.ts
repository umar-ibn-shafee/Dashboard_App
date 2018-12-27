import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EquipmentsComponent } from './equipments.component'
import { AddNewEquipmentComponent } from './add-new-equipment/add-new-equipment.component'
import { EquipmentsListComponent } from './equipments-list/equipments-list.component'
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { DetailsComponent } from './details/details.component';
import { EquipmentsService } from './equipments.service';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { QRCodeModule } from 'angularx-qrcode';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    QRCodeModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EquipmentsComponent,
    AddNewEquipmentComponent,
    EquipmentsListComponent,
    UpdateEquipmentComponent,
    DetailsComponent,
    QrCodeComponent
  ],
  providers: [EquipmentsService]
})
export class EquipmentsModule { }
