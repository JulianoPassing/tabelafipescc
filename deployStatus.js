// Configurações do Vercel (opcional - para verificação de deploy)
const VERCEL_CONFIG = {
    projectId: null, // Será configurado se necessário
    token: null // Token do Vercel (opcional)
};

// Função para verificar se o Vercel está conectado ao GitHub
function checkVercelGitHubConnection() {
    // Verifica se o repositório está conectado ao Vercel
    const repoUrl = `https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}`;
    
    // Mostra instruções para verificar o deploy
    const deployModal = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #1C2333;
            color: white;
            padding: 30px;
            border-radius: 15px;
            z-index: 10001;
            max-width: 700px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border: 2px solid #4A90E2;
        ">
            <h3 style="color: #4A90E2; margin-bottom: 20px;">
                <i class="fas fa-rocket"></i> Deploy no Vercel
            </h3>
            <div style="line-height: 1.6; margin-bottom: 20px;">
                <p><strong>✅ Arquivo atualizado no GitHub com sucesso!</strong></p>
                <p>Agora precisamos verificar se o Vercel fez o deploy automático:</p>
                
                <div style="background: rgba(74, 144, 226, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
                    <h4 style="color: #4A90E2; margin-bottom: 10px;">Passos para verificar:</h4>
                    <ol style="margin-left: 20px;">
                        <li>Acesse o <a href="https://vercel.com/dashboard" target="_blank" style="color: #4A90E2;">Dashboard do Vercel</a></li>
                        <li>Encontre o projeto <strong>${GITHUB_CONFIG.repo}</strong></li>
                        <li>Verifique se há um deploy em andamento ou recente</li>
                        <li>Se não houver deploy automático, clique em <strong>"Redeploy"</strong></li>
                    </ol>
                </div>
                
                <div style="background: rgba(76, 175, 80, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
                    <h4 style="color: #4CAF50; margin-bottom: 10px;">Links Úteis:</h4>
                    <ul style="margin-left: 20px;">
                        <li><a href="https://vercel.com/dashboard" target="_blank" style="color: #4A90E2;">Dashboard Vercel</a></li>
                        <li><a href="${repoUrl}" target="_blank" style="color: #4A90E2;">Repositório GitHub</a></li>
                        <li><a href="https://${GITHUB_CONFIG.repo}.vercel.app" target="_blank" style="color: #4A90E2;">Site no Vercel</a></li>
                    </ul>
                </div>
                
                <div style="background: rgba(255, 152, 0, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
                    <h4 style="color: #FF9800; margin-bottom: 10px;">Se o deploy não acontecer automaticamente:</h4>
                    <ol style="margin-left: 20px;">
                        <li>No Vercel, vá em <strong>Settings > Git</strong></li>
                        <li>Verifique se o repositório está conectado</li>
                        <li>Ative <strong>"Auto Deploy"</strong></li>
                        <li>Configure para branch <strong>main</strong></li>
                    </ol>
                </div>
            </div>
            <div style="text-align: center;">
                <button onclick="forceRefreshSite()" style="
                    background: #4CAF50;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    margin-right: 10px;
                ">
                    <i class="fas fa-sync-alt"></i> Forçar Atualização
                </button>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: #F44336;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">
                    Fechar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', deployModal);
}

// Função para forçar atualização do site
function forceRefreshSite() {
    // Abre o site em nova aba e força reload
    const siteUrl = `https://${GITHUB_CONFIG.repo}.vercel.app`;
    
    // Tenta abrir o site
    const newWindow = window.open(siteUrl, '_blank');
    
    if (newWindow) {
        // Força reload após alguns segundos
        setTimeout(() => {
            try {
                newWindow.location.reload(true);
            } catch (e) {
                console.log('Não foi possível forçar reload da janela');
            }
        }, 2000);
    }
    
    showAlert('Site aberto em nova aba. Verifique se as alterações apareceram.', 'success');
}

// Função para verificar se o site foi atualizado
function checkSiteUpdate() {
    const siteUrl = `https://${GITHUB_CONFIG.repo}.vercel.app`;
    
    // Mostra modal com instruções
    const checkModal = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #1C2333;
            color: white;
            padding: 30px;
            border-radius: 15px;
            z-index: 10001;
            max-width: 600px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border: 2px solid #4A90E2;
        ">
            <h3 style="color: #4A90E2; margin-bottom: 20px;">
                <i class="fas fa-check-circle"></i> Verificar Atualização
            </h3>
            <div style="line-height: 1.6; margin-bottom: 20px;">
                <p><strong>Para verificar se as alterações apareceram:</strong></p>
                <ol style="margin-left: 20px; margin-top: 10px;">
                    <li>Abra o site em uma nova aba</li>
                    <li>Limpe o cache do navegador (Ctrl+F5)</li>
                    <li>Verifique se as alterações estão visíveis</li>
                    <li>Se não aparecer, aguarde alguns minutos</li>
                </ol>
            </div>
            <div style="text-align: center;">
                <button onclick="window.open('${siteUrl}', '_blank')" style="
                    background: #4A90E2;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    margin-right: 10px;
                ">
                    <i class="fas fa-external-link-alt"></i> Abrir Site
                </button>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: #F44336;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">
                    Fechar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', checkModal);
}

// Função para mostrar status do deploy
function showDeployStatus() {
    checkVercelGitHubConnection();
}

// Função para aguardar deploy e verificar
function waitForDeploy() {
    showAlert('Aguardando deploy do Vercel... Verifique o dashboard.', 'warning');
    
    // Aguarda 30 segundos e verifica novamente
    setTimeout(() => {
        checkSiteUpdate();
    }, 30000);
} 