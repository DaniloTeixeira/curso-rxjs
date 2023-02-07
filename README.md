# curso-rxjs

Curso RXJS - Udemy

## O RxJS é uma biblioteca para construção de programas assíncronos ou baseado em eventos, utilizando uma sequência de observables.

## Programação assíncrona

É quando uma função, método ou componente front-end faz uma requisição a uma API e tem que aguardar a resposta, então a resposta não é síncrona, mas assíncrona

## Programação baseada em eventos

É quando um programa reage a interações do usuário, seja no mover do mouse, no click, na digitação, etc... Para cada ação do usuário com o sistema, há uma resposta que foi previamente programada, isso é programação orientada a eventos.

## O que é um Observable?

Observables são coleções de valores ou eventos futuros

## O que é um Observer

São callbacks que lêem os valores emititos pelos Observables

## O que é um Subscriber:

É um assinante que ouve as alterações do Observable e recebe os valores emitidos

## O que é uma Subscription

É a assinatura ou inscrição feita em um Observable, que permite o cancelamento da instrição para evitar vazamento de memória

## O que é um Subject?

É um tipo especial de Observable, pois pode ser também um Observer e um EventEmitter

## O que é um BehaviorSubject?

É um tipo de Subject que necessita de um valor inicial e emite o valor atual para novos subscribers

## O que é um ReplaySubject?

É um tipo de Subject que não precisa de valor inicial e emite os últimos três valores para os novos subscribers

## O que é um AsyncSubject?

É um tipo de Subject que emite o último valor quando ele se completa

## O que é o método next?

O método next() é utilizado para passar valores para um Subject

## O que é o método complete?

O método complete() é utilizado para sinalizar que os valores do Observable
foram concluídos e não tem mais nenhum para ser emitido
