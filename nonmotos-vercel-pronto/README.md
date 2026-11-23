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

### Envie o conteúdo da pasta, não só os arquivos da raiz

Erro comum: subir apenas `index.html`, `README.md`, `robots.txt`, `sitemap.xml` e `.gitignore`.
**A pasta `assets/` inteira também precisa ir para o repositório**, senão o site fica sem CSS,
sem JavaScript e com imagens quebradas.

O repositório deve ficar exatamente assim na raiz:

```text
index.html
assets/css/style.css
assets/img/... (5 imagens)
assets/js/main.js
robots.txt
sitemap.xml
```

Se preferir, use o ZIP `nonmotos-vercel-pronto.zip` que acompanha esta pasta: extraia o
conteúdo dele direto na raiz do repositório.

### Vercel

1. GitHub: crie o repositório e envie **todo o conteúdo** acima.
2. Vercel → **Add New → Project** → importe o repositório.
3. **Root Directory:** `./` (raiz) — porque o `index.html` está na raiz do repo.
4. **Framework Preset:** `Other`
5. **Build Command:** vazio
6. **Output Directory:** vazio (ou `.`)
7. Deploy → **Implantações → ⋯ → Reimplantar** se precisar.
8. Adicione o domínio `noncardosomotos.com.br` (e `www`) em **Domains**.

> Se você enviar a pasta `non-cardoso-motos` como subpasta dentro do repo, aí o
> **Root Directory** deve ser `non-cardoso-motos` em vez de `./`. Não use os dois jeitos ao mesmo tempo.

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
- Google (perfil): `https://share.google/2DTcoq9zr0nIPFWyP`
- Google (deixar avaliação): `https://g.page/r/CRJEW915KdMJEBM/review`
