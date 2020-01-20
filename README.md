# Burger Queen

## 1.0 - Resumo
Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente. 

Estas são as informações que temos do cliente:

> Somos **Burger Queen**, um fast food 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã:
>
>| Ítem                      |Preço R$|
>|---------------------------|------|
>| Café americano            |    5 |
>| Café com leite            |    7 |
>| Misto Quente              |   10 |
>| Suco de fruta natural     |    7 |
>
>E outro menu para o resto do dia:
>
>| Ítem                      |Preço |
>|---------------------------|------|
>|**Hambúrgueres**           |   **R$**   |
>|Hambúrguer simples         |    10|
>|Hambúrguer duplo           |    15|
>|**Acompanhamentos**        |   **R$**   |
>|Batata frita               |     5|
>|Anéis de cebola            |     5|
>|**Bebidas**                |   **R$**   |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Refrigerante 500ml         |     7|
>|Refrigerante 750ml         |    10|
>
>**Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
>frango ou vegetariano. Além disso, por um adicional de R$ 1,00 , eles podem
>adicionar queijo ou ovo.
>
>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

## 2.0 - Definições do produto:

### Versão 1.0: 
"*Eu como garçom/garçonete quero poder anotar o meu pedido saber o valor de cada produto e poder enviar o pedido para a cozinha para ser preparado.*"

Funcionalidades:
- Anotar o nome e a mesa;
- Adicionar produtos aos pedidos;
- Excluir produtos;
- Ver resumo e total da compra;
- Enviar o pedido para a cozinha (armazenar em algum banco de dados);
- Funcionar bem e se adequar a um tablet.

### Versões futuras:
"*Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.*"

- Ver os pedidos à medida em que são feitos;
- Marcar os pedidos que foram preparados e estão prontos para serem servidos;
- Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

"*Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.*"

- Ver a lista de pedidos prontos para servir;
- Marque os pedidos que foram entregues.

"*Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a tela importante para o meu trabalho.*"
- Criar login e senha;
- Criar tipo de usuário (cozinha / salão);
- Entrar na tela correta para cada usuário.

## 3.0 - Protótipos e layout

Baseado nas necessidades do cliente, criamos um layout no qual pode-se visualizar todos os itens necessários e acessá-los de forma fácil em um tablet. 
As cores são relacionadas ao tipo de menu do restaurante e também à funcionalidade do botão (excluir, adicionar, etc).
OBS: Projetado para tablets (1024 x 768)

### Paleta de cores:
![Paleta de cores](/src/img/paleta.png)

### Protótipo do menu/salão:
![Layout do menu/salão](/src/img/prototipo1.png)

### Protótipo da cozinha:
![Layout da cozinha](/src/img/prototipo2.png)

### Layout do produto (versão 1.0):
![Layout produto](/src/img/layout1.png)

## 4.0 Ferramentas utilizadas:

- JavaScript (ES6);
- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html);
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start);
- [React Icons](https://react-icons.netlify.com/#/);
- [Aphrodite](https://github.com/Khan/aphrodite);
- [Firebase](https://firebase.google.com/);
- [Figma](https://www.figma.com);
