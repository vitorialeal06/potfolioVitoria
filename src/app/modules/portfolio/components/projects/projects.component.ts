import { Component, inject, signal } from '@angular/core';

//interface
import { IProjects } from '../../interface/IProjects.interface';

//material
import{MatDialog, MatDialogModule} from '@angular/material/dialog'

//enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    #dialog = inject(MatDialog);

  public arrayProjetcs = signal<IProjects[]>([
    {
      src: 'definir imagem',
      alt: "descricao",
      title: "definir",
      with: '100px',
      height:'51px',
      description:'<p> descricao do projeto </p>',
      links:[
        {
          name: 'conheca',
          href:'',
        },
      ],
    },

    {
      src: 'definir imagem',
      alt: "descricao",
      title: "definir",
      with: '100px',
      height:'51px',
      description:'descricao do projeto',
      links:[
        {
          name: 'conheça',
          href:'',
        },
      ],
    },

  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

}
