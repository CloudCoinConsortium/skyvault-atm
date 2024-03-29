import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ng2-tooltip-directive';
import { PasskeyComponent } from './passkey.component';
import { PasskeyRoutingModule } from './passkey-routing.module';



@NgModule({
  declarations: [PasskeyComponent],
  imports: [
    CommonModule,
    PasskeyRoutingModule,
    FormsModule,
    LottieModule,
    FontAwesomeModule,
    TooltipModule
  ]
})
export class PasskeyModule { }
