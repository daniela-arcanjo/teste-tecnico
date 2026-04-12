Funcionalidade: Consulta de CEP

Cenário: Buscar CEP válido
Dado que possuo um CEP válido "05820200"
Quando realizo a requisição de consulta de CEP
Então deve retornar status code 200
E o retorno deve conter os dados do endereço correspondentes ao CEP informado

Cenário: Buscar CEP válido com máscara
Dado que possuo um CEP válido no formato com hífen "05820-200"
Quando realizo a requisição de consulta de CEP
Então deve retornar status code 200
E o retorno deve conter os dados de endereço correspondentes ao CEP informado

Cenário: CEP com formato inválido
Dado que informo um CEP com formato inválido "ABC12345"
Quando realizo a requisição de consulta de CEP
Então deve retornar status code 400
E deve retornar mensagem de erro indicando formato inválido

Cenário: Buscar CEP inexistente
Dado que possuo um CEP inexistente "00000000"
Quando realizo a requisição de consulta de CEP
Então deve retornar status code 404

Cenário: Consultar CEP sem informar valor
Dado que não informo nenhum CEP
Quando realizo a requisição de consulta de CEP
Então deve retornar status code 400 

Cenário: CEP com menos de 8 dígitos
Dado que informo um CEP com menos de 8 dígitos "12345"
Quando realizo a requisição de consulta de CEP
Então deve retornar status code 400
E deve retornar mensagem informando que o CEP possui menos de 8 caracteres

Cenário: CEP com mais de 8 dígitos
Dado que informo um CEP com mais de 8 dígitos "123456789"
Quando realizo a requisição de consulta de CEP
Então deve retornar status code 400
E deve retornar mensagem informando que o CEP possui mais de 8 caracteres

Cenário: Validar estrutura do retorno da API
Dado que possuo um CEP válido "05820200"
Quando realizo a requisição de consulta de CEP
Então deve retornar status code 200
E o retorno deve conter os campos:
  | cep           |
  | state         |
  | city          |
  | neighborhood  |
  | street        |

Cenário: Validar tipos dos campos retornados na consulta de CEP
Dado que possuo um CEP válido "05820200"
Quando realizo a requisição de consulta de CEP
Então deve retornar status code 200
E deve validar que os campos retornados possuem os tipos esperados