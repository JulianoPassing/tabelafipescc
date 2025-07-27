# Configuração da Sincronização Automática - GitHub

## 🚀 Sincronização Automática

O sistema agora suporta sincronização automática usando o GitHub como backend. Isso significa que as alterações feitas no painel administrativo serão aplicadas automaticamente para todos os usuários, sem necessidade de upload manual.

## 📋 Pré-requisitos

1. **Conta no GitHub** - Você precisa ter uma conta no GitHub
2. **Repositório** - O projeto deve estar em um repositório GitHub
3. **Token de Acesso** - Token pessoal do GitHub com permissões de escrita

## 🔧 Como Configurar

### 1. Criar Token de Acesso do GitHub

1. Acesse [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token (classic)"
3. Dê um nome ao token (ex: "Tabela Fipe Auto Sync")
4. Selecione as seguintes permissões:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
5. Clique em "Generate token"
6. **IMPORTANTE:** Copie o token gerado (você não conseguirá vê-lo novamente)

### 2. Configurar no Sistema

1. Acesse o painel administrativo (`staff.html`)
2. Clique no botão **"Configurar GitHub"** no cabeçalho
3. Preencha os campos:
   - **Username do GitHub:** Seu username do GitHub
   - **Token de Acesso:** O token que você criou
   - **Nome do Repositório:** Nome do seu repositório (ex: `tabelafipescc`)
4. Clique em **"Salvar Configuração"**

### 3. Verificar Configuração

Após configurar, o botão **"Atualizar para Todos"** mudará para:
- **"Sincronizar Automaticamente"** (verde) - Configuração ativa
- **"Atualizar para Todos"** (vermelho) - Configuração pendente

## 🔄 Como Funciona

### Sincronização Automática
1. Você faz alterações no painel administrativo
2. Clica em **"Sincronizar Automaticamente"**
3. O sistema faz commit automático no GitHub
4. O arquivo `carros.js` é atualizado no repositório
5. Todos os usuários veem as alterações automaticamente

### Fallback Manual
Se a configuração do GitHub não estiver ativa:
1. Clica em **"Atualizar para Todos"**
2. Baixa o arquivo `carros.js` atualizado
3. Substitui o arquivo no projeto
4. Faz upload para o Vercel

## 🛠️ Configuração do Vercel

Para que a sincronização automática funcione perfeitamente:

### 1. Conectar GitHub ao Vercel
1. No Vercel, vá em **Settings > Git**
2. Conecte seu repositório GitHub
3. Configure **Auto Deploy** para ativar

### 2. Configurar Auto Deploy
1. No projeto no Vercel, vá em **Settings > Git**
2. Ative **"Auto Deploy"**
3. Configure para fazer deploy na branch `main`

### 3. Verificar Deploy Automático
Após cada commit automático:
1. O Vercel detectará as mudanças
2. Fará deploy automático
3. O site será atualizado em alguns segundos

## 🔒 Segurança

### Token do GitHub
- O token é salvo localmente no navegador
- Nunca é enviado para servidores externos
- Você pode revogar o token a qualquer momento no GitHub

### Permissões
- O token tem acesso apenas ao seu repositório
- Pode apenas fazer commits no arquivo `carros.js`
- Não tem acesso a outros arquivos ou repositórios

## 🚨 Solução de Problemas

### Erro de Autenticação
- Verifique se o token está correto
- Confirme se o token tem as permissões necessárias
- Tente gerar um novo token

### Erro de Repositório
- Verifique se o nome do repositório está correto
- Confirme se o repositório existe e é público
- Verifique se você tem acesso ao repositório

### Deploy Não Atualiza
- Verifique se o Auto Deploy está ativo no Vercel
- Confirme se está conectado ao repositório correto
- Aguarde alguns minutos para o deploy automático

## 📱 Uso no Mobile

A sincronização automática funciona em qualquer dispositivo:
- Configure uma vez no desktop
- Use no mobile normalmente
- As configurações são salvas no navegador

## 🔄 Backup e Restauração

### Backup das Configurações
As configurações são salvas no localStorage do navegador. Para fazer backup:
1. Abra o DevTools (F12)
2. Vá em **Application > Local Storage**
3. Copie o valor de `githubConfig`

### Restaurar Configurações
Para restaurar em outro dispositivo:
1. Cole o valor no localStorage
2. Recarregue a página
3. A sincronização automática estará ativa

## 📞 Suporte

Se encontrar problemas:
1. Verifique se todos os pré-requisitos estão atendidos
2. Confirme se o token tem as permissões corretas
3. Teste com um repositório público primeiro
4. Verifique os logs do console do navegador

---

**Sistema desenvolvido para StreetCarClub** 🚗 