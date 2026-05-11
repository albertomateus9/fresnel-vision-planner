# Planejador Visual de Enlaces e Zona de Fresnel

Ferramenta local para planejar enlaces radio/opticos, estimar linha de visada e avaliar risco de obstrucao.

**Demo:** https://albertomateus9.github.io/fresnel-vision-planner/

## Visão Geral

Planejador Visual de Enlaces e Zona de Fresnel é uma ferramenta de portfólio em Telecom + IA + Visão Computacional. O MVP foi mantido simples, executável e seguro para evoluções futuras sem depender de backend.

O projeto roda localmente no navegador e não envia imagem, vídeo ou telemetria para backend.

## Experiência

- Interface em Português-BR com visual de demonstração profissional.
- Dados sintéticos e processamento local.
- Saída exportável para relatório, CSV, JSON ou Markdown conforme o fluxo.
- Estrutura pronta para GitHub Pages via workflow.

## Como Rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Política De Dados

- Nenhum dado sensível é versionado.
- Nenhuma imagem, vídeo, telemetria ou arquivo é enviado para servidor externo.
- Integrações reais devem ser feitas apenas em ambiente autorizado e com dados adequados.

## Licença

MIT. Consulte [LICENSE](LICENSE).
