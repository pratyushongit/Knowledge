import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading, CanDeactivate } from '@angular/router';
import { AppComponent } from './app.component';
import { ParentComponent } from './dataTransfer/parent/parent.component';
import { TemplateComponent } from './template-forms/template.component';
import { ReactiveComponent } from './reactive-forms/reactive.component';
import { CrudComponent } from './crud/crud.component';
import { ChildComponent } from './dataTransfer/child/child.component';
import { RoutingComponent } from './routing/routing.component';
import { RoutingChildComponent } from './routing-child/routing-child.component';
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { ResolverComponent } from './resolver/resolver.component';
import { ResolverService } from './common/services/resolver.service';
import { RouteGuardComponent } from './route-guard/route-guard.component';
import { RouteGuard } from './common/services/guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ChangeDetectionParentComponent } from './change-detection-parent/change-detection-parent.component';
import { ObservablesComponent } from './observables/observables.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { AnimationComponent } from './animations/animations.component';
import { InjectibleComponent } from './injectible/injectible.component';
import { DeactivateGuard } from './common/services/deactivateGuard.service';
import { loadGuard } from './common/services/loadGuard.service';
import { ReduxComponent } from './redux/redux.component';

const routes: Routes = [
  {
    path : 'default',
    component : AppComponent
  },
  {
    path : 'inputoutput',
    component : ParentComponent,
  },
  {
    path : 'template',
    component : TemplateComponent
  },
  {
    path : 'reactive',
    component : ReactiveComponent,
    canDeactivate : [DeactivateGuard]
  },
  {
    path : 'services',
    component : CrudComponent
  },  
  {
    path : 'routing',
    component : RoutingComponent,
    children : [
      {
        path : 'parent',
        component : ParentComponent,
      },
      {
        path : 'child/:id',
        component : RoutingChildComponent
      },
      {
        path : 'child',
        component : ChildComponent
      }
    ]
  },
  {
    path : 'combination',
    component : CombinationOperatorsComponent
  },
  {
    path : 'lazy-loading',
    component : LazyLoadingComponent,
    children : [
      {
        path : 'employees',
        loadChildren : ()=> {
          return import('./lazy-loading/employees/employees.module').then(m=> m.EmployeeModule)
        },
        canLoad : [loadGuard]
      },
      {
        path : 'orders',
        loadChildren : ()=>{
          return import('./lazy-loading/orders/orders.module').then(m=> m.OrdersModule)
        },
        canLoad : [loadGuard]
      },
      {
        path : '',
        pathMatch : 'full',
        redirectTo: ''
      }
    ]
  },
  {
    path : 'resolver',
    component : ResolverComponent,
    resolve : {
      todoData : ResolverService
    }
  },
  {
    path : 'route-guard',
    component : RouteGuardComponent,
    canActivate : [RouteGuard]
  },
  {
    path : 'lifecycle',
    component : LifecycleHooksComponent
  },
  {
    path : 'view-child',
    component : ViewChildComponent
  },
  {
    path : 'content-parent',
    component : ContentParentComponent
  },
  {
    path : 'change-detection',
    component : ChangeDetectionParentComponent
  },
  {
    path : 'observables',
    component : ObservablesComponent
  },
  {
    path : 'firebase',
    component : FirebaseComponent
  },
  {
    path : 'animations',
    component : AnimationComponent
  },
  {
    path : 'injectible',
    component: InjectibleComponent
  },
  {
    path : 'ngrx',
    component: ReduxComponent
  },
  {
    path : 'not-found',
    component :NotFoundComponent
  },
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'default'
  },
  {
    path : '**',
    component : AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing : false,useHash : true,preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
