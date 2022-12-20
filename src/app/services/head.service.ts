import { Renderer2, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })

export class HeadService {
 
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }
 
 /**
  * Append the JS tag to the Document Body.
  * @param renderer The Angular Renderer
  * @param src The path to the script
  * @returns the script element
  */
  public loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(this.document.body, script);
    return script;
  }

  public loadStylesheetLink(renderer: Renderer2, href: string): HTMLScriptElement {
    const link = renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    renderer.appendChild(this.document.body, link);
    return link;
  }

  public isScriptLoaded(src: string) {
    return document.querySelectorAll(`script[src="${src}"]`).length > 0;
  }

  public isStylesheetLoaded(href: string) {
    return document.querySelectorAll(`link[href="${href}"]`).length > 0;
  }
}