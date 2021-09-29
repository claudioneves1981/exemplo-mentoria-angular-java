import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CampeaoService } from "./campeao.service";
import { Campeao } from "./campeoes";

@Component({
    templateUrl:'./campeao-info.component.html'
})
export class CampeaoInfoComponent implements OnInit{

   campeao!: Campeao; 

    constructor(private activatedRoute: ActivatedRoute, private campeaoService: CampeaoService){}

    ngOnInit(): void {

        const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
       // this.campeao = this.campeaoService.retrieveById(id);
    }

    save(): void{
     //   this.campeaoService.save(this.campeao);
    }
}