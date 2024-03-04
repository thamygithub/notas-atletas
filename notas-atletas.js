
function calcularMediaAtletas(atletas) {
  for (const atleta of atletas) {
  let nome = atleta.nome;
  let notas = atleta.notas;
  let notasOrdenadas = notas.slice().sort((a, b) => a - b);
  let notasIntermediarias = notasOrdenadas.slice(1, -1);
  
  let media = calcularMediaNotas(notasIntermediarias);
  
  console.log(`Atleta: ${nome}`);
  console.log(`Notas Obtidas: ${notasIntermediarias.join(',')}`);
  console.log(`Média Válida: ${media.toFixed(2)}\n`);
   }
  }
  
  function calcularMediaNotas(notas) {
  if (notas.length === 0) return 0;
  let somaNotas = notas.reduce((total, nota) => total + nota, 0);
  return somaNotas / notas.length;
  }
  
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88],
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33],
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8],
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5],
    },
  ];
  
  calcularMediaAtletas(atletas);


