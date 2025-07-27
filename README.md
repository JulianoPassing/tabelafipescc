# Tabela Fipe StreetCarClub - Sistema de Gerenciamento

## Descrição
Sistema completo para gerenciamento da tabela de preços de carros do StreetCarClub, incluindo interface pública e painel administrativo.

## Arquivos do Projeto

### Páginas Principais
- `index.html` - Interface pública da tabela de preços
- `staff.html` - Painel administrativo para gerenciamento de carros

### Arquivos JavaScript
- `carros.js` - Dados dos carros (array com informações dos veículos)
- `staff.js` - Funcionalidades do painel administrativo
- `updateData.js` - Sistema de exportação de dados
- `autoSync.js` - Sincronização automática com GitHub

### Documentação
- `README.md` - Este arquivo de documentação
- `GITHUB_SETUP.md` - Instruções para configuração do GitHub

### Outros Arquivos
- `feirao.html` - Página adicional do projeto

## Funcionalidades

### Interface Pública (index.html)
- Visualização da tabela de preços organizada por categorias
- Busca em tempo real por carro, ano, valor ou categoria
- Design responsivo e moderno
- Categorias: Dinheiro, Moedas, DLC, Pontos de Evento, Leilão e Barcos

### Painel Administrativo (staff.html)
- **Autenticação segura** com credenciais encriptadas
- **Adicionar novos carros** com formulário completo
- **Editar carros existentes** com interface intuitiva
- **Excluir carros** com confirmação
- **Busca e filtros** para encontrar carros rapidamente
- **Exportação de dados** em formato JSON
- **Sincronização automática** - alterações aplicadas instantaneamente para todos
- **Atualização manual** - fallback para download de arquivos
- **Sessão persistente** - não precisa fazer login novamente

## Credenciais de Acesso

### Login do Staff
- **Usuário:** `street`
- **Senha:** `str33t`

> ⚠️ **Nota:** As credenciais estão encriptadas em base64 no código para maior segurança.

## Como Usar

### 1. Acessar o Sistema
1. Abra `index.html` para ver a tabela pública
2. Acesse `staff.html` para o painel administrativo

### 2. Painel Administrativo
1. Digite as credenciais de acesso
2. Após o login, você terá acesso a:
   - Formulário para adicionar/editar carros
   - Lista completa de carros com ações
   - Busca e filtros
   - Exportação de dados

### 3. Gerenciar Carros
- **Adicionar:** Preencha o formulário e clique em "Salvar"
- **Editar:** Clique no botão "Editar" na linha do carro
- **Excluir:** Clique no botão "Excluir" e confirme
- **Buscar:** Use o campo de busca para filtrar carros

### 4. Sincronização Automática (Recomendado)
- Configure o GitHub no botão "Configurar GitHub"
- Clique em "Sincronizar Automaticamente" (verde)
- As alterações são aplicadas instantaneamente para todos os usuários

### 5. Atualização Manual (Fallback)
- Clique no botão "Atualizar para Todos" (vermelho)
- Baixe o arquivo `carros.js` atualizado
- Substitua o arquivo no seu projeto
- Faça upload para o Vercel
- As alterações aparecerão para todos os usuários

### 6. Exportar Dados
- Clique no botão "Exportar Dados" para baixar arquivos JSON e JS
- Use para backup ou migração de dados

## Estrutura dos Dados

Cada carro possui a seguinte estrutura:
```json
{
  "Carro": "Nome do Carro",
  "Ano": "Ano do Modelo",
  "Valor": "Preço ou Valor",
  "Categoria": "Tipo de Veículo"
}
```

## Tecnologias Utilizadas

- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização moderna e responsiva
- **JavaScript** - Funcionalidades interativas
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Poppins)
- **localStorage** - Armazenamento local dos dados

## Características Técnicas

### Segurança
- Credenciais encriptadas em base64
- Validação de formulários
- Confirmação para ações destrutivas

### Performance
- Carregamento otimizado
- Busca em tempo real
- Animações suaves

### Responsividade
- Design adaptável para mobile
- Interface otimizada para diferentes telas
- Navegação intuitiva

### Sincronização Automática
- Integração com GitHub API
- Commit automático de alterações
- Deploy automático via Vercel
- Alterações instantâneas para todos os usuários
- Sistema de fallback manual

## Deploy no Vercel

O projeto está configurado para funcionar perfeitamente no Vercel:

1. Faça upload dos arquivos para o Vercel
2. O sistema funcionará imediatamente
3. Todos os dados são salvos localmente no navegador

## Manutenção

### Atualizar Dados
- Use o painel administrativo para fazer alterações
- **Automático:** Configure GitHub e clique em "Sincronizar Automaticamente"
- **Manual:** Clique em "Atualizar para Todos" e faça upload manual
- As alterações aparecerão para todos os usuários

### Backup
- Use a função "Exportar Dados" para criar backups
- Os dados são salvos em formato JSON e JS
- Mantenha cópias dos arquivos exportados
- O arquivo carros.js serve como backup principal

## Suporte

Para dúvidas ou problemas:
1. Verifique se todos os arquivos estão presentes
2. Confirme se as credenciais estão corretas
3. Limpe o cache do navegador se necessário
4. Verifique se o JavaScript está habilitado

---

**Desenvolvido para StreetCarClub** 🚗 