import { Component } from '@angular/core';

@Component({
  selector: 'ngx-team',
  styleUrls:['./team.component.scss'],
  templateUrl: './team.component.html',
})
export class TeamComponent {
 members = [
  [
    { name: 'Ali Rezaei', team: 'Marketing', role: 'Team Lead' }
  ],
  [
    { name: 'Sara Jafari', team: 'Marketing', role: 'Content Specialist', parentId: 'Ali' },
    { name: 'Mina Karimi', team: 'Marketing', role: 'Graphic Designer', parentId: 'Ali' }
  ],
  [
    { name: 'Fatemeh', team: 'Marketing', role: 'Content Designer', parentId: 'Sara' },
    { name: 'Reza', team: 'Marketing', role: 'Analyst', parentId: 'Sara' }
  ]
];

}
