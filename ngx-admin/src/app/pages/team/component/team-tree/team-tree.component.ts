import { AfterViewInit, Component } from '@angular/core';

declare var Treant: any;

@Component({
  selector: 'ngx-team-tree',
  templateUrl: './team-tree.component.html',
  styleUrls: ['./team-tree.component.scss']
})
export class TeamTreeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const config = {
      chart: {
        container: "#tree-simple",
        orientation: "NORTH",
        levelSeparation: 40,       // فاصله عمودی بین سطوح درخت
        siblingSeparation: 70,     // فاصله افقی بین نودهای خواهر/برادر
        subTeeSeparation: 60, 
        nodeAlign: "TOP",
        connectors: {
          type: 'step',
          style: {
            stroke: '#4a90e2',
            'arrow-end': 'none'
          }
        },
        node: {
          collapsable: true,
          HTMLclass: "custom-node",
          drawLineThrough: false,
          collapsableNodeClass: "no-collapse-btn" // 👈 باعث میشه دکمه کوچیک نذاره
        },
        animation: {
          nodeAnimation: "easeOutBounce",
          nodeSpeed: 600,
          connectorsAnimation: "bounce",
          connectorsSpeed: 600
        }
      },
      nodeStructure: {
        innerHTML: this.card("Ali Rezaei", "Marketing", "Team Lead",'ali'),
        collapsed: false,
        stackChildren: true,
        childrenDropLevel: 1,
        children: [
          {
            innerHTML: this.card("Mina Karimi", "Marketing", "Graphic Designer",'mina'),
            collapsed: false,
            // stackChildren: true,
            // childrenDropLevel: 1,
            children: [
              {
                innerHTML: this.card("Hamed Afshar", "Design", "Programmer",'hamed'),
                collapsed: false
              }
            ]
          },
          {
            innerHTML: this.card("Sara Jafari", "Marketing", "Content Specialist",'sara'),
            collapsed: false,
            stackChildren: true,
            // childrenDropLevel: 1,
            children: [
              {
                innerHTML: this.card("Fatemeh Mohammadi", "Marketing", "Content Designer",'fatemeh'),
                collapsed: false
              },
              {
                innerHTML: this.card("Reza Nazari", "Marketing", "Analyst",'reza'),
                collapsed: false
              }
            ]
          }
        ]
      }
    };

    new Treant(config);
    
    
  }

  card(name: string, team: string, role: string, id: string): string {
    return `
      <div class="node custom-node" id="node-${id}" style="
          width: 240px;
          padding: 12px;
          background: #2e2e4d;
          border-radius: 10px;
          border: 1px solid #3f3f66;
          color: white;
          font-family: 'Segoe UI', sans-serif;
          text-align: right;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          cursor: pointer;
          position: relative;
          transition: transform 0.2s ease-in-out;
          " onclick="event.stopPropagation()">
        
        <div class="photo" style="
            float: right;
            width: 60px;
            height: 60px;
            background-color: #aaa;
            border-radius: 8px;
            margin-left: 10px;"></div>

        <div class="info" style="overflow: hidden; text-align: right;">
          <div class="name" style="font-weight: bold; font-size: 1rem;">${name}</div>
          <div class="team" style="font-size: 0.85rem; color: #a5a5c9; margin-top: 4px;">${team}</div>
          <div class="role" style="font-size: 0.75rem; color: #ccc; margin-top: 2px;">${role}</div>

          <div class="actions" style="
              position: absolute;
              top: 8px;
              z-index:5;
              flex-direction:column;
              left: 8px;
              display: flex;
              gap: 6px;
              opacity: 1;
              transition: opacity 0.2s ease-in-out;">
            <span class="icon edit" title="Edit">✏️</span>
            <span class="icon delete" title="Delete" (click)="delete(${id})" data-id="${id}">🗑️</span>
            <span class="icon add" title="Add" data-id="${id}">➕</span>
          </div>
        </div>
      </div>
    `;
  }
  delete(id:any){
    console.log(id)
  }
}
