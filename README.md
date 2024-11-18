# Testes de Carga com k6 - JSONPlaceholder

Este projeto utiliza o k6 para realizar testes de carga na API pública **JSONPlaceholder**. O objetivo é testar o endpoint `GET /posts` para verificar a performance e a estabilidade sob carga.

## Estrutura do Projeto

- **scripts/**: Contém os scripts de teste de carga.
  - **test_get_posts.js**: Teste de carga para o endpoint `GET /posts`.
- **reports/**: Armazena os relatórios de execução dos testes de carga.
- **README.md**: Documentação do projeto.

## Pré-requisitos

- [k6](https://k6.io/docs/get-started/installation/)

## Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/my-k6-load-test.git
   cd my-k6-load-test

2. Execute
   - k6 run scripts/test_get_posts.js

3. Verifique os resultados
   - k6 run --out json=reports/results.json scripts/test_get_posts.js
