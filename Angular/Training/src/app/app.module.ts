import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { COMPONENTS } from './components.component';

// Pipe
import { FilterPipe } from './shared/pipes/filter.pipe';

// Directive
import { FallbackDirective } from './shared/directives/fallback.directive';

// Service
import { CrudService } from './common/services/crud.service';

// Interceptor
import { httpInterceptors } from './inceptors';

// Resolver
import { ResolverService } from './common/services/resolver.service';

// Module
import { MultipleModule } from './multiple.module';

// Route Guard
import { RouteGuard } from './common/services/guard.service';
import { EventEmitterService } from './common/services/eventEmitter.service';
import { ShareService } from './common/services/share.service';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InjectibleService } from './common/services/test.service';
import { DeactivateGuard } from './common/services/deactivateGuard.service';
import { loadGuard } from './common/services/loadGuard.service';
import { StoreModule } from '@ngrx/store';
import { customReducer } from './common/ngrx/custom.reducer';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    FilterPipe,
    FallbackDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      shoppingList : customReducer
    }),
    MultipleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [
    CrudService,
    EventEmitterService,
    ResolverService,
    ShareService,
    RouteGuard,
    DeactivateGuard,
    loadGuard,
    InjectibleService,
    httpInterceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }