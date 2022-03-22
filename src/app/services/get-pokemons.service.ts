


import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetPokemonsService {
  



  _url="https://pokeapi.co/api/v2/pokemon/";


  //'/{user-id}/posts',
  //'{access-token}'
  /**
   * 
   "
   */
  constructor(private http:HttpClient) {
    //console.log("Servicio runs")
   }

   getPokemons(pokemon:string){
      let header = new HttpHeaders().set('Type-content','aplication/json');

      return this.http.get(this._url+pokemon,{
        headers:header,
      });
   }


 
}
