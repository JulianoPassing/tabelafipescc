# Solução de Problemas - Sincronização Automática

## 🚨 Erros Comuns e Soluções

### Erro 401 - Token Inválido
**Sintoma:** `Erro na conexão: 401 - Bad credentials`

**Solução:**
1. Verifique se o token está correto
2. Gere um novo token no GitHub:
   - Vá em [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
   - Clique em "Generate new token (classic)"
   - Selecione as permissões: `repo` e `workflow`
   - Copie o novo token
3. Reconfigure no sistema usando "Configurar GitHub"

### Erro 403 - Sem Permissão
**Sintoma:** `Erro na conexão: 403 - Resource not accessible by integration`

**Solução:**
1. Verifique se o token tem as permissões corretas:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
2. Verifique se o repositório existe e você tem acesso
3. Para repositórios privados, certifique-se de que o token tem acesso

### Erro 404 - Repositório Não Encontrado
**Sintoma:** `Erro na conexão: 404 - Not Found`

**Solução:**
1. Verifique se o nome do repositório está correto
2. Confirme se o repositório existe no GitHub
3. Verifique se o username está correto
4. Teste a URL: `https://github.com/SEU_USERNAME/NOME_DO_REPO`

### Erro de Rede
**Sintoma:** `Erro de rede: Failed to fetch`

**Solução:**
1. Verifique sua conexão com a internet
2. Tente novamente em alguns minutos
3. Verifique se não há bloqueios de firewall
4. Teste em outro navegador

### Erro de SHA
**Sintoma:** `422 - Invalid request`

**Solução:**
1. O arquivo `carros.js` pode ter sido modificado por outra pessoa
2. Faça um commit manual no GitHub primeiro
3. Tente a sincronização novamente

## 🔧 Passos de Diagnóstico

### 1. Teste a Conexão
1. Clique em **"Testar Conexão"** no painel
2. Verifique a mensagem de resposta
3. Se houver erro, siga as soluções acima

### 2. Verifique as Configurações
1. Abra o DevTools (F12)
2. Vá em **Application > Local Storage**
3. Verifique o valor de `githubConfig`
4. Confirme se os dados estão corretos

### 3. Teste o Token Manualmente
1. Vá em [GitHub API](https://api.github.com/user)
2. Adicione o header: `Authorization: token SEU_TOKEN`
3. Se retornar seus dados, o token está funcionando

## 🛠️ Configuração do Vercel

### Auto Deploy Não Funciona
1. No Vercel, vá em **Settings > Git**
2. Verifique se o repositório está conectado
3. Ative **"Auto Deploy"**
4. Configure para branch `main`

### Deploy Manual
Se o auto deploy não funcionar:
1. Faça commit manual no GitHub
2. No Vercel, clique em **"Redeploy"**
3. Aguarde o deploy completar

## 📱 Problemas no Mobile

### Configuração Não Salva
1. Verifique se o localStorage está habilitado
2. Tente em modo desktop
3. Limpe o cache do navegador

### Botões Não Funcionam
1. Verifique se o JavaScript está habilitado
2. Tente em outro navegador
3. Atualize a página

## 🔄 Fallback Manual

Se a sincronização automática não funcionar:

1. **Use o método manual:**
   - Clique em "Atualizar para Todos"
   - Baixe o arquivo `carros.js`
   - Faça upload manual para o Vercel

2. **Configure novamente:**
   - Gere um novo token GitHub
   - Reconfigure o sistema
   - Teste a conexão

## 📞 Logs de Erro

Para obter mais informações sobre erros:

1. **Abra o DevTools (F12)**
2. **Vá na aba Console**
3. **Tente a sincronização**
4. **Copie os logs de erro**

### Exemplo de Log Útil:
```javascript
{
  status: 401,
  statusText: "Unauthorized",
  error: {
    message: "Bad credentials",
    documentation_url: "https://docs.github.com/rest"
  }
}
```

## 🎯 Checklist de Verificação

Antes de usar a sincronização automática:

- [ ] Token GitHub criado com permissões corretas
- [ ] Repositório existe e é acessível
- [ ] Configuração salva no sistema
- [ ] Teste de conexão bem-sucedido
- [ ] Vercel conectado ao repositório
- [ ] Auto Deploy ativado

## 🚀 Alternativas

Se a sincronização automática continuar com problemas:

1. **Use apenas o método manual** - funciona sempre
2. **Configure webhooks** - mais avançado
3. **Use GitHub Actions** - para casos específicos

---

**Para suporte adicional, verifique os logs do console e forneça as informações de erro específicas.** 