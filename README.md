# AprovaLab Estudos

Plataforma pública de apresentação e consulta de materiais de estudo da AprovaLab.

## Como adicionar um material

1. Faça upload do PDF para a pasta `materiais/` (crie a pasta se ainda não existir).
2. Se tiver uma capa, envie a imagem para `capas/`.
3. Edite o arquivo `materiais.json` e acrescente um objeto dentro de `materials`.

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

## Categorias aceitas

- `portugues`
- `matematica`
- `raciocinio-logico`
- `informatica`
- `direito-constitucional`
- `direito-administrativo`

## Publicar e atualizar

O site lê automaticamente o arquivo `materiais.json`. Quando você faz commit das alterações no GitHub, a biblioteca passa a exibir os materiais cadastrados.

## GitHub Pages

No repositório, abra **Settings → Pages** e configure:
- **Build and deployment:** Deploy from a branch
- **Branch:** main
- **Folder:** / (root)
- Salve.

O endereço público normalmente será:
`https://gus8-netizem9.github.io/Aprovalb/`

## Importante sobre privacidade

Este repositório é público. Portanto, qualquer PDF, capa ou informação enviada para ele poderá ser vista e baixada por qualquer pessoa. Não envie materiais que devam permanecer privados ou que você não tenha autorização para distribuir.

A plataforma não tem login, pagamentos ou painel privado. A gestão dos materiais é feita diretamente pelos arquivos do repositório GitHub.
