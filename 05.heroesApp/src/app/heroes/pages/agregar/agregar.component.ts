import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width:100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers=[
    {
      id:'DC Comics',
      desc:'DC-Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel Comics'
    }
  ]

  heore: Heroe ={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img:''
  }

  constructor( private HeroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe( 
      switchMap(({id}) => this.HeroesService.getHeroePorId(id))
    )
      .subscribe(heroe => this.heore = heroe);
  }

  guardar(){
    if(this.heore.superhero.trim().length==0){
      return;
    }

    if(this.heore.id){
      this.HeroesService.actualizarHeroe(this.heore)
      .subscribe(heroe=> console.log ('Actualizaando', heroe))
    }else{
      this.HeroesService.agregarHeroe(this.heore)
        .subscribe(heroe => {
          this.router.navigate(['/heores', heroe.id]);
        })
    }

    this.HeroesService.agregarHeroe(this.heore)
    .subscribe(res => {
      console.log('Respuesta',res);
    })
  }




}
