import { HttpClient } from "@angular/common/http";
import { HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Campeao } from "./campeoes";

@Injectable({
    providedIn: 'root'
})
export class CampeaoService {

    private campeaoUrl: string = "https://exemplo-mentoria-angular-java-production.up.railway.app/campeao/listar";

    constructor(private httpClient: HttpClient){}

    getData(): Observable<any> {
        return from(
          fetch(
            'https://exemplo-mentoria-angular-java-production.up.railway.app/campeao/listar', // the url you are trying to access
            {
                headers: {'Content-Type': 'application/json', 
                'Access-Control-Allow-Origin': '*'},
              method: 'GET',
              mode: 'no-cors'
            }
          ))
      }


    retrieveAll(): Observable<Campeao[]>{
        return this.httpClient.get<Campeao[]>(this.campeaoUrl);
    }

   retrieveById(id: number): Campeao {
        return CAMPEOES.find((campeaoIterator: Campeao) => campeaoIterator.id === id)!;
    }

    save(campeao: Campeao): void{
        if(campeao.id){
            const index = CAMPEOES.findIndex((campeaoIterator: Campeao)=> campeaoIterator.id === campeao.id);
            CAMPEOES[index] = campeao;
        }
    }

}

var CAMPEOES: Campeao[] = [
    {
        id: 1,
        nome: 'Claudio',
        email: 'claudio.neves@etec.sp.gov.br',
        corSabre: 'azul',
        tipo: true,
        afinidadeForca: 5,
        forcaFisica: 5,
        hp: 150,
        habilidadeComSabre: 5,
        mental: 10,
        previsao: 5,
    },
    {
        id: 2,
        nome: 'João',
        email: 'cfneguacu@hotmal.com.br',
        corSabre: 'vermelha',
        tipo: false,
        afinidadeForca: 5,
        forcaFisica: 10,
        hp: 150,
        habilidadeComSabre: 5,
        mental: 5,
        previsao: 5,
    }
];
