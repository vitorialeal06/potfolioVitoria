import { Component, signal } from '@angular/core';

//interface 
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]> ([
    {
      src:'assets/icons/knowledge/angular.svg',
      alt: 'icone de conhecimento angular',
    },

    {
      src:'assets/icons/knowledge/css3.svg',
      alt: 'icone de conhecimento css3',
    },

    {
      src:'assets/icons/knowledge/html.svg',
      alt: 'icone de conhecimento html',
    },

  ]);

}
