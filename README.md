<h1 align="center"> Abordagem Adotada </h1>

Antes da escrita dos cenários e da automação, realizei uma análise exploratória da aplicação Swag Labs e da documentação da BrasilAPI com o objetivo de entender fluxos críticos, comportamentos esperados e possíveis pontos de risco.

A partir dessa análise, estruturei a estratégia de testes com base em abordagem orientada a risco, priorizando funcionalidades com maior impacto na experiência do usuário.

 ## Front-end (Swag Labs) 

No contexto do Swag Labs, priorizei a jornada principal do usuário, por se tratar do fluxo crítico de conversão.
``` 
login → seleção de produtos → carrinho → checkout 
```

Para definição dos cenários, utilizei principalmente:

- Partição de equivalência, para reduzir combinações de entradas válidas e inválidas (ex: login).
- Análise de valor limite, para validar comportamentos em fronteiras de dados (ex: campos obrigatórios e quantidades).
- Testes de fluxo E2E, garantindo a integridade da jornada completa do usuário.

Também considerei cenários negativos e de exceção para validar robustez da aplicação em estados inválidos e falhas de autenticação.

## API (BrasilAPI – CEP)

Na BrasilAPI, optei por focar no endpoint de CEP por ser um recurso amplamente utilizado em integrações reais e permitir validações claras de regras de entrada e saída.

A estratégia aplicada combinou:

- Partição de equivalência (CEP válido, inválido, inexistente)
-  Análise de valor limite (quantidade de caracteres do CEP)
-  Validação de contrato da resposta, garantindo estrutura e consistência dos dados retornados

Essa abordagem permitiu cobrir diferentes comportamentos da API com foco em robustez, validação de erros e consistência do contrato.
##
### Automação

Para automação, escolhi o Cypress por permitir a validação de testes de front-end e API em um único framework, reduzindo complexidade de stack e facilitando manutenção.

A estrutura foi baseada em:

- Custom Commands, para abstração de ações reutilizáveis.
- Fixtures, para desacoplamento de dados de teste.
- Organização visando reutilização e legibilidade dos testes.
##
### Conclusão

A estratégia adotada priorizou cobertura baseada em risco, clareza de cenários e manutenção da automação, garantindo equilíbrio entre cobertura funcional e sustentabilidade dos testes no longo prazo.


## Evidências de Execução dos Testes

As evidências dos testes automatizados estão disponíveis na pasta ``` teste-tecnico/evidence```  e também são geradas automaticamente durante a execução da suíte Cypress.

### Durante a execução são gerados:

- Screenshots
- Videos
- Relatórios de execução
- Logs de execução