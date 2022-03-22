import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiTweetsService {
  //Link al perfil de la persona pruebas
  //https://www.facebook.com/profile.php?id=100079507454630

  //IDUser="100079507454630"
  IDUser="100318995972553"
  thing="/photos?"
  thing1="?fields=id,name,email,picture&"
  Token="EAAHyLZAgiGCcBAAvoyhRF6RYM2jVzmHirTohTc9XfuvUYZC2XzXagwSTPtLqg3IYCn2wrXAdWjHY8cGZC895mRwuESdKF7Thn3kFZCjZB6EPxoZCPO0i7zLIJJTDBSImwJLXvpZAMucItV3bm3BwY4Nu9TL3hECExCpLMrDiNXZA7jqqGInrVBPFafVssJGxmq334XQoHk2eGj7AHI7GkRlG"
  _url="https://graph.facebook.com/"+this.IDUser+"?fields=id,name,email,picture&access_token="+this.Token;
  urlPost="https://graph.facebook.com/"+this.IDUser+"/posts&access_token="+this.Token;


  //'/{user-id}/posts',
  //'{access-token}'
  /**
   * 
   "
   */
  constructor(private http:HttpClient) {
    //console.log("Servicio runs")
   }

   getPerson(){
      let header = new HttpHeaders().set('Type-content','aplication/json');

      return this.http.get(this._url,{
        headers:header,
      });
   }


 
}
