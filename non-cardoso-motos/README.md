# NON Moto Peças, Mecânica & Preparações

Landing page estática (one-page) da oficina NON, em Guarulhos/SP.

## Estrutura

```text
.
├── index.html              # Página única
├── assets/
│   ├── img/
│   │   ├── oficina-hero.jpg      # Foto real da oficina (1600 px)
│   │   ├── banner-servicos.jpg   # Painel real de serviços
│   │   ├── logo-non.webp         # Logo com fundo transparente
│   │   ├── og-preview.jpg        # Prévia 1200x630 para WhatsApp/redes
│   │   └── favicon.png
│   └── js/
│       └── main.js               # Menu mobile + ano do rodapé
├── robots.txt
├── sitemap.xml
└── .gitignore
```

## Publicar

1. Crie um repositório no GitHub e envie **esta pasta** (não a pasta original com fotos pessoais).
2. Na Vercel / Netlify / Cloudflare Pages: **Import Project** → selecione o repositório.
   - Build Command: vazio
   - Output Directory: `.` (raiz)
3. Adicione o domínio `noncardosomotos.com.br` (e `www`) em **Domains**.

## Antes de publicar — preencher dados reais

Procure no `index.html` os comentários `PREENCHER` e atualize:

- [ ] Endereço completo e horários da oficina (seção `#localizacao`).
- [ ] `streetAddress`, `postalCode`, `geo` e `openingHoursSpecification` no JSON-LD do `<head>`.
- [ ] Substitua o bloco do mapa pelo iframe real: Google Maps → Compartilhar → Incorporar um mapa.
- [ ] Se tiver avaliações reais, use o modelo comentado na seção `#avaliacoes`.
- [ ] Confirme se o domínio `noncardosomotos.com.br` é o definitivo em: `og:url`, `og:image`, JSON-LD, `robots.txt` e `sitemap.xml`.

## Contatos

- WhatsApp: (11) 94039-7294 — `https://wa.me/5511940397294`
- Instagram: `@non_motos_`
- Google: `https://share.google/2DTcoq9zr0nIPFWyP`
