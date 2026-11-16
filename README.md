# AprovaLab Estudos

Plataforma pública de apresentação e consulta de materiais de estudo da AprovaLab.

## Como adicionar um material

1. Envie o PDF para a pasta `materiais/`.
2. Envie a capa (opcional) para `capas/`.
3. Edite `materiais.json` e acrescente um objeto dentro de `materials`.

Exemplo:

```json
{
  "materials": [
    {
      "id": "lingua-portuguesa-basico",
      "title": "Língua Portuguesa — Primeira Aprovação",
      "category": "portugues",
      "category_name": "Língua Portuguesa",
      "icon": "Aa",
      "pages": 93,
      "description": "Descrição do material, conteúdos abordados e para quem ele foi preparado.",
      "cover": "capas/portugues.png",
      "pdf": "materiais/portugues.pdf",
      "published": true
    }
  ]
}
```

Use `published: false` para manter um item fora da biblioteca pública.

## Categorias aceitas

- `portugues`
- `matematica`
- `raciocinio-logico`
- `informatica`
- `direito-constitucional`
- `direito-administrativo`

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente o site a cada atualização da branch `main`.

**Ativação inicial necessária:** no GitHub, abra **Settings → Pages** e em **Build and deployment → Source** selecione **GitHub Actions**. Não escolha “Deploy from a branch”, pois a publicação é feita pelo workflow.

Depois, acompanhe **Actions** para ver o resultado da publicação. O endereço esperado é:

`https://gus8-netizem9.github.io/Aprovalb/`

## Importante sobre privacidade

Este repositório é público. Qualquer PDF, capa ou informação enviada para ele poderá ser vista e baixada por qualquer pessoa. Só envie materiais que você tenha autorização para distribuir publicamente.

A plataforma não tem login, pagamentos ou painel privado. A gestão dos materiais é feita diretamente pelos arquivos do repositório GitHub.
