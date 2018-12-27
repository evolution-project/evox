import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { OpenWalletComponent } from './open-wallet/open-wallet.component';
import { RestoreWalletComponent } from './restore-wallet/restore-wallet.component';
import { SeedPhraseComponent } from './seed-phrase/seed-phrase.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { WalletComponent } from './wallet/wallet.component';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';
import { HistoryComponent } from './history/history.component';
import { ContractsComponent } from './contracts/contracts.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { MessagesComponent } from './messages/messages.component';
import { StakingComponent } from './staking/staking.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypingMessageComponent } from './typing-message/typing-message.component';

import { BackendService } from './_helpers/services/backend.service';
import { MoneyToIntPipe } from './_helpers/pipes/money-to-int.pipe';
import { IntToMoneyPipe } from './_helpers/pipes/int-to-money.pipe';
import { StakingSwitchComponent } from './_helpers/directives/staking-switch/staking-switch.component';
import { TooltipDirective } from './_helpers/directives/tooltip.directive';
import { HistoryTypeMessagesPipe } from './_helpers/pipes/history-type-messages.pipe';
import { ContractStatusMessagesPipe } from './_helpers/pipes/contract-status-messages.pipe';
import { ContractTimeLeftPipe } from './_helpers/pipes/contract-time-left.pipe';
import { ContextMenuModule } from 'ngx-contextmenu';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


import { ChartModule, HIGHCHARTS_MODULES, Highcharts} from 'angular-highcharts';
import { InputValidateDirective } from './_helpers/directives/input-validate/input-validate.directive';
import { ModalContainerComponent } from './_helpers/directives/modal-container/modal-container.component';
// import * as more from 'highcharts/highcharts-more.src';
// import * as exporting from 'highcharts/modules/exporting.src';
// import * as highstock from 'highcharts/modules/stock.src';

Highcharts.setOptions({
  // global: {
  //   useUTC: false
  // }
});

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SettingsComponent,
    SidebarComponent,
    MainComponent,
    CreateWalletComponent,
    OpenWalletComponent,
    RestoreWalletComponent,
    SeedPhraseComponent,
    WalletDetailsComponent,
    WalletComponent,
    SendComponent,
    ReceiveComponent,
    HistoryComponent,
    ContractsComponent,
    PurchaseComponent,
    MessagesComponent,
    StakingComponent,
    TypingMessageComponent,
    MoneyToIntPipe,
    IntToMoneyPipe,
    StakingSwitchComponent,
    HistoryTypeMessagesPipe,
    ContractStatusMessagesPipe,
    ContractTimeLeftPipe,
    TooltipDirective,
    InputValidateDirective,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    ContextMenuModule.forRoot()
  ],
  providers: [
    BackendService,
    MoneyToIntPipe,
    IntToMoneyPipe,
    // {provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock, more, exporting ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
