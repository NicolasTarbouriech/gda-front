import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Collegue } from 'src/app/auth/auth.domains';
import { AuthService } from 'src/app/auth/auth.service';
import { MenuService } from 'src/app/menu.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 collegueConnecte: Observable<Collegue>
  idDroit : number;
  links = [
    { title: 'Accueil', fragment: 'accueil' },
    { title: 'Gestion des absences', fragment: 'gestion' },
    { title: 'Planning des absences', fragment: 'planning' },
    { title: 'Validation demandes', fragment: 'validation' },
    { title: 'Vue synthétique', fragment: 'vue' },
    { title: 'Jours feriés', fragment: 'jours' },
  ];

  faUserCircle = faUserCircle;
  isActive = true;
  onClickProfile() {
  
  }
 
  constructor(public route: ActivatedRoute,
    private authSrv : AuthService, private menuService : MenuService ) { }

  ngOnInit(): void {
    this.collegueConnecte = this.authSrv.collegueConnecteObs;
  }

  gererLeDroitUtilisateur(collegue: Collegue): number {
    return this.menuService.recupereLeDroitUtilisateur(collegue);
  }
}