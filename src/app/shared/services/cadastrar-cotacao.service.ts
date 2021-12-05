import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cotacao } from '../model/cotacao';

@Injectable({
  providedIn: 'root'
})
export class CadastrarCotacaoService {
  //cotacoes_url = 'http://localhost:3000/moedas';
  cotacoes_url = 'https://servermoedas137.herokuapp.com/moedas';
  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Cotacao[]> {
    console.log(this.httpClient.get<Cotacao[]>(this.cotacoes_url));
    return this.httpClient.get<Cotacao[]>(this.cotacoes_url);
  }

  inserir(cotacao: Cotacao): Observable<Cotacao> {
    return this.httpClient.post<Cotacao>(this.cotacoes_url, cotacao);
  }

  remover(id: number): Observable<object> {
    console.log(id);
    return this.httpClient.delete(`${this.cotacoes_url}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Cotacao> {
    return this.httpClient.get<Cotacao>(`${this.cotacoes_url}/${id}`);
  }

  atualizar(cotacao: Cotacao): Observable<Cotacao> {
    return this.httpClient.put<Cotacao>(`${this.cotacoes_url}/${cotacao.id}`, cotacao);
  }


  }

