import { Component, OnInit } from "@angular/core";
import { from, Observable } from "rxjs";
import { CampeaoService } from "./campeao.service";
import { Campeao } from "./campeoes";

@Component({
    selector:'app-campeao-list',
    templateUrl:'./campeao-list.component.html'
})
export class CampeaoListComponent implements OnInit{

    filteredCampeoes: Campeao [] = [];

    _campeoes: Campeao[] = [];

    //_response: Response[] = [];
     data = {};
    _filterBy!: string;

    constructor(private campeaoService: CampeaoService){ }

    ngOnInit(): void{
        this.retrieveAll();
     }


     getData(): void {
        this.campeaoService.getData().subscribe({
            next: campeoes =>{
                console.log(campeoes)
                this._campeoes = campeoes
                this.filteredCampeoes = this._campeoes;
            },
            error: err => console.log('Error' + this._campeoes, err)
        })
    }
 
     retrieveAll(): void {
        this.campeaoService.retrieveAll().subscribe({
                    next: campeoes =>{
                        console.log(campeoes)
                        this._campeoes = campeoes
                        this.filteredCampeoes = this._campeoes;
                    },
                    error: err => console.log('Error' + this._campeoes, err)
                })
     }

   set filter(value: string){
        this._filterBy = value;
        this.filteredCampeoes = this._campeoes.filter((campeao: Campeao)=> campeao.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

}