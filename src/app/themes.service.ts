import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  renderer : Renderer2;
  constructor(private renderFactory : RendererFactory2, @Inject(DOCUMENT) private document : Document) { 
    this.renderer = this.renderFactory.createRenderer(null,null);
  }

  enableDebugMode(){
    console.log("Inside Debugmode");
    this.renderer.addClass(this.document.body, "debug-theme")
  }

  enableLiveMode(){
    console.log("Inside Live mode");
    this.renderer.removeClass(this.document.body, "debug-theme")
  }
}
