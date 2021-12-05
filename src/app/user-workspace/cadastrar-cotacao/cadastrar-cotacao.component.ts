import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cotacao } from 'src/app/shared/model/cotacao';
import { CadastrarCotacaoService } from 'src/app/shared/services/cadastrar-cotacao.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-cadastrar-cotacao',
  templateUrl: './cadastrar-cotacao.component.html',
  styleUrls: ['./cadastrar-cotacao.component.scss']
})
export class CadastrarCotacaoComponent implements OnInit {
  cotacao!: Cotacao;
  cadastroFlag !: boolean;
  array_cotacao!: Array<Cotacao>;
  aviso!: string;
  constructor(private httpClient: HttpClient,private cadastroService: CadastrarCotacaoService,  private roteador: Router ) {

    this.cotacao = new Cotacao();
    this.cadastroFlag = true;

    this.cadastroService.listar().subscribe(
      resposta => {this.array_cotacao = resposta;}
    );
   /* if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.cadastroFlag = false;
      const idParaEdicao = Number(this.rotalAtual.snapshot.paramMap.get('id'));
      // pegar do banco usuario id=idParaEdicao
      this.cadastroService.pesquisarPorId(idParaEdicao).subscribe(
        cadastroRetornado => this.cotacao = cadastroRetornado
      );
    }*/
  }

  ngOnInit(): void {
  }


  inserirCotacao(): void {
    this.cadastroService.listar().subscribe(
      resposta => {this.array_cotacao = resposta;}
    );

    for(let x of this.array_cotacao){
      if(x.url_moeda === this.cotacao.url_moeda){

        this.cadastroFlag = false;
        break;
      }
    }
    if (!this.cotacao.id && this.cadastroFlag ==true ) {
      this.httpClient.get<any>(`https://economia.awesomeapi.com.br/json/last/${this.cotacao.url_moeda}`).subscribe(res => {
        let separe = this.cotacao.url_moeda.split('-');
        let str = separe[0].concat("",separe[1]);
        this.cotacao.bid = res[str].bid;
        this.cotacao.name = res[str].name;
        console.log(this.cotacao.name);
        this.cotacao.ask = res[str].ask;
        this.cotacao.code = res[str].code;
        this.cotacao.create_date = res[str].create_date;
        console.log(this.cotacao.create_date)
        this.cotacao.codein = res[str].codein;
        this.cotacao.high = res[str].high;
        this.cotacao.low = res[str].low;
        this.cotacao.pctChange = res[str].pctChange;
        this.cotacao.timestamp = res[str].timestamp;
        this.cotacao.varBid = res[str].varBid;
      });
      const  new_cotacao = this.cotacao;
      console.log(new_cotacao.bid);
      this.cadastroService.inserir(new_cotacao).subscribe(
        cotacaoInserido => {
          console.log(cotacaoInserido);

        }
      );
    }else{
      this.aviso = `${this.cotacao.url_moeda} já cadastrado!`
    this.cadastroFlag = true;
  }
  }

}
