import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuração do teste de carga
export const options = {
  stages: [
    { duration: '30s', target: 50 },  // Aumenta até 50 usuários virtuais em 30 segundos
    { duration: '1m', target: 50 },   // Mantém 50 usuários virtuais por 1 minuto
    { duration: '30s', target: 0 },   // Reduz para 0 usuários virtuais em 30 segundos
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% das requisições devem ser respondidas em menos de 500ms
    http_req_failed: ['rate<0.01'],   // Menos de 1% das requisições devem falhar
  },
};

// Função principal do teste
export default function () {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const res = http.get(url);

  // Verificando a resposta
  check(res, {
    'status é 200': (r) => r.status === 200,  // A resposta deve ser 200 OK
    'tempo de resposta < 500ms': (r) => r.timings.duration < 500, // Tempo de resposta deve ser menor que 500ms
  });

  // Pausa entre as requisições
  sleep(1);
}
