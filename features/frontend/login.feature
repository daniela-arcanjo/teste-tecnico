Funcionalidade: Login

Cenário: Login com credenciais válidas
Dado que estou na página de login
Quando informo um usuário e senha válidos
E clico no botão de login
Então devo ser redirecionado para a página de produtos

Cenário: Login com senha inválida
Dado que estou na página de login
Quando informo um usuário válido e uma senha inválida
E clico no botão de login
Então deve ser exibida uma mensagem de erro de autenticação
E não devo ser redirecionado para a página de produtos

Cenário: Login com campos obrigatórios não preenchidos
Dado que estou na página de login
Quando não informo usuário e senha
E clico no botão de login
Então deve ser exibida uma mensagem solicitando o preenchimento dos campos obrigatórios