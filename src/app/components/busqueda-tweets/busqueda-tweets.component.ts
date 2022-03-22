import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ApiTweetsService } from 'src/app/services/api-tweets.service';
import {GetPokemonsService} from 'src/app/services/get-pokemons.service';

@Component({
  selector: 'app-busqueda-tweets',
  templateUrl: './busqueda-tweets.component.html',
  styleUrls: ['./busqueda-tweets.component.css'],
  providers:  [ ApiTweetsService, GetPokemonsService],
})
export class BusquedaTweetsComponent implements OnInit {

  public posts:Array<any>=[];
  public pokemons:Array<any>=[];
  
  public pokemon="pikachu";

  constructor( private apiTweetsService:ApiTweetsService, private getPokemon:GetPokemonsService) {
 

    this.apiTweetsService.getPerson().subscribe((resp:any)=>{
      this.posts=[{...resp}];
      //console.log(this.posts);
    });


    this.getPokemon.getPokemons(this.pokemon).subscribe((resp:any)=>{
      this.pokemons=[{...resp}];
      //console.log(this.pokemons);
    });

   }
   

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log('Submitted', form);
    console.log(form.form.value);

    this.getPokemon.getPokemons(form.form.value.pokemon).subscribe((resp:any)=>{
      this.pokemons=[{...resp}];
      //console.log(this.pokemons);
    });
 

  }

  
}
