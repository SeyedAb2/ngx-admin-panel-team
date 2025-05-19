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
        innerHTML: this.card("Ali Rezaei", "Marketing", "Team Lead"),
        collapsed: false,
        stackChildren: true,
        childrenDropLevel: 1,
        children: [
          {
            innerHTML: this.card("Mina Karimi", "Marketing", "Graphic Designer"),
            collapsed: false,
            // stackChildren: true,
            // childrenDropLevel: 1,
            children: [
              {
                innerHTML: this.card("Hamed Afshar", "Design", "Programmer"),
                collapsed: false
              }
            ]
          },
          {
            innerHTML: this.card("Sara Jafari", "Marketing", "Content Specialist"),
            collapsed: false,
            stackChildren: true,
            // childrenDropLevel: 1,
            children: [
              {
                innerHTML: this.card("Fatemeh Mohammadi", "Marketing", "Content Designer"),
                collapsed: false
              },
              {
                innerHTML: this.card("Reza Nazari", "Marketing", "Analyst"),
                collapsed: false
              }
            ]
          }
        ]
      }
    };

    new Treant(config);

    // Delegated click handling for icons
    document.getElementById('tree-simple')?.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'NB-ICON') {
        const icon = target.getAttribute('icon');
        const parentNode = target.closest('.node');
        const name = parentNode?.querySelector('.name')?.textContent?.trim();
        if (icon === 'edit-2-outline') {
          console.log('Edit:', name);
        } else if (icon === 'trash-2-outline') {
          console.log('Delete:', name);
        }
      }
    });
    document.getElementById('tree-simple')?.addEventListener('click', (event) => {
      const node = (event.target as HTMLElement).closest('.node');
      if (node && !node.classList.contains('clicked-on-icon')) {
        const parent = node.parentElement;
        if (parent?.classList.contains('collapsed')) {
          parent.classList.remove('collapsed');
        } else {
          parent?.classList.add('collapsed');
        }
      }
    });
  }

  card(name: string, team: string, role: string): string {
    return `
      <div class="node custom-node" style="
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
              left: 8px;
              display: flex;
              gap: 6px;
              opacity: 0;
              transition: opacity 0.2s ease-in-out;">
            <nb-icon icon="edit-2-outline" title="Edit" style="
              background-color: rgba(255, 255, 255, 0.08);
              padding: 5px;
              border-radius: 6px;
              font-size: 1.1rem;
              transition: background 0.2s ease;"></nb-icon>
            
            <nb-icon icon="trash-2-outline" title="Delete" style="
              background-color: rgba(255, 255, 255, 0.08);
              padding: 5px;
              border-radius: 6px;
              font-size: 1.1rem;
              transition: background 0.2s ease;"></nb-icon>
          </div>
        </div>
      </div>
    `;
  }

}
