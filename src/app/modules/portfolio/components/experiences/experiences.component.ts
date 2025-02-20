import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]> ([
    {
      summary:{
        strong: "EMPRESA 1",
        p: "tempo",
      },
      text:"falando um pouco",
    },
    {
      summary:{
        strong: "EMPRESA 2",
        p: "tempo",
      },
      text:"falando um pouco",
    },
    {
      summary:{
        strong: "EMPRESA 3",
        p: "tempo",
      },
      text:"falando um pouco",
    },
    {
      summary:{
        strong: "EMPRESA 4",
        p: "tempo",
      },
      text:"falando um pouco",
    },

  ]);

}
