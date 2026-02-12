import { Directive, effect, ElementRef, HostListener, inject, input, Input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  // Nouvelle façon
  host: {
    // Mapping des événements
    "(mouseleave)": "onMouseLeave()",

    // Mapping des classes
    "[class.fst-italic]": 'italic()'
  }
})
export class Highlight {

  element: ElementRef = inject(ElementRef);

  defaultHighlight = "yellow";

  // Ancienne version
  @Input() appHighlight: string = "";

  // Nouvelle version
  defaultColor = input("transparent");
  italic = input(true);


  // Ancienne version d'injection de dépendance
  // constructor(element: ElementRef) {
  //   console.log("element: ", element);
  // }

  constructor() {
    effect(() => {
      console.log("Italic: ", this.italic());
    });
  }

  // Ancienne façon de faire
  @HostListener("mouseenter")
  onMouseEnter() {
    console.log("La souris est entrée dans l'élément");
    this.element.nativeElement.style.backgroundColor = this.appHighlight || this.defaultHighlight;
  }

  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = this.defaultColor();
  }

}
