import {Component, Input} from '@angular/core';
import {PostListComponent} from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Posts = [
    new Post('Mon premier post',
            'La coupe du monde de football est terminée. ' +
            'La prochaine édition aura lieu dans quatre ans...',
            0,
            null),
    new Post('Mon deuxième post',
      'La prochaine élection présidentielle au cameroun aura lieu le 7 octobre 2018. ' +
      'Elle permettra de départager 9 candidats dont le vainqueur héritera du palais présidentiel d\'Etoudi...',
      0,
      null),
    new Post('Mon dernier post',
      'Angular est un framework formidable. Il permet de développer des applications web et immersives. ' +
      'Les développeurs d\'applications mobiles qui utilisent Ionic peuvent aussi bénéfier d\'angular.',
      0,
      null)
  ];
}
export class Post {
  constructor(
    public title: string,
    public content: string,
    public loveIts: number,
    public created_at: Date
  ) {
    this.created_at = new Date();
  }
}

