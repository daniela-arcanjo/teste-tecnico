Funcionalidade: Carrinho

Cenário: Adicionar produto ao carrinho com sucesso
Dado que estou na página de produtos
Quando adiciono um produto ao carrinho
Então o produto deve ser exibido no carrinho
E o contador do carrinho deve ser atualizado

Cenário: Remover item do carrinho
Dado que possuo um produto adicionado ao carrinho
E estou na página do carrinho
Quando removo o produto 
Então o produto não deve mais ser exibido no carrinho
E o carrinho deve refletir a remoção