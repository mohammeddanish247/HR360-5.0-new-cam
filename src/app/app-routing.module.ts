import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad:[AutoLoginGuard]
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'createcertificate',
    loadChildren: () => import('./createcertificate/createcertificate.module').then( m => m.CreatecertificatePageModule)
  },
  {
    path: 'appliancedetails',
    loadChildren: () => import('./appliancedetails/appliancedetails.module').then( m => m.AppliancedetailsPageModule)
  },
  {
    path: 'outcomes',
    loadChildren: () => import('./outcomes/outcomes.module').then( m => m.OutcomesPageModule)
  },
  {
    path: 'signaturecertificate',
    loadChildren: () => import('./signaturecertificate/signaturecertificate.module').then( m => m.SignaturecertificatePageModule)
  },
  {
    path: 'newappliance',
    loadChildren: () => import('./newappliance/newappliance.module').then( m => m.NewappliancePageModule)
  },
  {
    path: 'abandoncall',
    loadChildren: () => import('./abandoncall/abandoncall.module').then( m => m.AbandoncallPageModule)
  },
  {
    path: 'authorizationrequired',
    loadChildren: () => import('./authorizationrequired/authorizationrequired.module').then( m => m.AuthorizationrequiredPageModule)
  },
  {
    path: 'engineersignature',
    loadChildren: () => import('./engineersignature/engineersignature.module').then( m => m.EngineersignaturePageModule)
  },
  {
    path: 'complete',
    loadChildren: () => import('./complete/complete.module').then( m => m.CompletePageModule)
  },
  {
    path: 'boilerinstall',
    loadChildren: () => import('./boilerinstall/boilerinstall.module').then( m => m.BoilerinstallPageModule)
  },
  {
    path: 'boilerinstallnext',
    loadChildren: () => import('./boilerinstallnext/boilerinstallnext.module').then( m => m.BoilerinstallnextPageModule)
  },
  {
    path: 'boilerinstallsign',
    loadChildren: () => import('./boilerinstallsign/boilerinstallsign.module').then( m => m.BoilerinstallsignPageModule)
  },
  {
    path: 'editappliance',
    loadChildren: () => import('./editappliance/editappliance.module').then( m => m.EditappliancePageModule)
  },
  {
    path: 'cannotcomplete',
    loadChildren: () => import('./cannotcomplete/cannotcomplete.module').then( m => m.CannotcompletePageModule)
  },
  {
    path: 'complete-claim',
    loadChildren: () => import('./complete-claim/complete-claim.module').then( m => m.CompleteClaimPageModule)
  },
  {
    path: 'complete-service',
    loadChildren: () => import('./complete-service/complete-service.module').then( m => m.CompleteServicePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'test-bind',
    loadChildren: () => import('./test-bind/test-bind.module').then( m => m.TestBindPageModule)
  },
  {
    path: 'sitesurvey',
    loadChildren: () => import('./sitesurvey/sitesurvey.module').then( m => m.SitesurveyPageModule)
  },
  {
    path: 'sitesurveypics',
    loadChildren: () => import('./sitesurveypics/sitesurveypics.module').then( m => m.SitesurveypicsPageModule)
  },
  {
    path: 'sitesurveysign',
    loadChildren: () => import('./sitesurveysign/sitesurveysign.module').then( m => m.SitesurveysignPageModule)
  },
  {
    path: 'nwapp',
    loadChildren: () => import('./nwapp/nwapp.module').then( m => m.NwappPageModule)
  },
  {
    path: 'iontest',
    loadChildren: () => import('./iontest/iontest.module').then( m => m.IontestPageModule)
  },
  {
    path: 'testedit',
    loadChildren: () => import('./testedit/testedit.module').then( m => m.TesteditPageModule)
  },
  {
    path: 'querychk',
    loadChildren: () => import('./querychk/querychk.module').then( m => m.QuerychkPageModule)
  },




  

  





   
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
