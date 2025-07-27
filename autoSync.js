// Configurações do GitHub
const GITHUB_CONFIG = {
    owner: 'SEU_USERNAME', // Substitua pelo seu username do GitHub
    repo: 'tabelafipescc', // Nome do repositório
    branch: 'main',
    token: 'SEU_TOKEN_GITHUB' // Token de acesso pessoal do GitHub
};

// Função para fazer commit automático no GitHub
async function autoCommitToGitHub(newData) {
    try {
        // Cria o conteúdo do arquivo carros.js
        const fileContent = `const carrosData = ${JSON.stringify(newData, null, 4)};`;
        
        // Codifica o conteúdo em base64
        const encodedContent = btoa(unescape(encodeURIComponent(fileContent)));
        
        // Primeiro, obtém o SHA do arquivo atual (necessário para atualização)
        const getResponse = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/carros.js`, {
            method: 'GET',
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.token}`,
                'Accept': 'application/vnd.github.v3+json',
            }
        });

        let sha = null;
        if (getResponse.ok) {
            const fileInfo = await getResponse.json();
            sha = fileInfo.sha;
        }

        // Faz a requisição para o GitHub API
        const response = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/carros.js`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `Atualização automática da tabela - ${new Date().toLocaleString('pt-BR')}`,
                content: encodedContent,
                branch: GITHUB_CONFIG.branch,
                sha: sha
            })
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Arquivo atualizado com sucesso:', result);
            return true;
        } else {
            const errorData = await response.json();
            console.error('Erro ao atualizar arquivo:', {
                status: response.status,
                statusText: response.statusText,
                error: errorData
            });
            
            // Mostra erro específico para o usuário
            let errorMessage = 'Erro na sincronização automática.';
            if (response.status === 401) {
                errorMessage = 'Token do GitHub inválido. Verifique as configurações.';
            } else if (response.status === 403) {
                errorMessage = 'Sem permissão para atualizar o repositório. Verifique o token.';
            } else if (response.status === 404) {
                errorMessage = 'Repositório não encontrado. Verifique o nome do repositório.';
            }
            
            showAlert(errorMessage, 'error');
            return false;
        }
    } catch (error) {
        console.error('Erro na sincronização automática:', error);
        return false;
    }
}

// Função para configurar o GitHub
function setupGitHubConfig() {
    const configModal = `
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
                <i class="fas fa-cog"></i> Configuração do GitHub
            </h3>
            <div style="margin-bottom: 20px;">
                <p><strong>Para sincronização automática, configure:</strong></p>
                <div style="margin: 15px 0;">
                    <label style="display: block; margin-bottom: 5px;">Username do GitHub:</label>
                    <input type="text" id="githubUsername" placeholder="seu-username" style="
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #30363D;
                        border-radius: 8px;
                        background: rgba(255,255,255,0.1);
                        color: white;
                    ">
                </div>
                <div style="margin: 15px 0;">
                    <label style="display: block; margin-bottom: 5px;">Token de Acesso:</label>
                    <input type="password" id="githubToken" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx" style="
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #30363D;
                        border-radius: 8px;
                        background: rgba(255,255,255,0.1);
                        color: white;
                    ">
                </div>
                <div style="margin: 15px 0;">
                    <label style="display: block; margin-bottom: 5px;">Nome do Repositório:</label>
                    <input type="text" id="githubRepo" placeholder="tabelafipescc" style="
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #30363D;
                        border-radius: 8px;
                        background: rgba(255,255,255,0.1);
                        color: white;
                    ">
                </div>
            </div>
            <div style="text-align: center;">
                <button onclick="saveGitHubConfig()" style="
                    background: #4CAF50;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    margin-right: 10px;
                ">
                    Salvar Configuração
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
                    Cancelar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', configModal);
}

// Função para salvar configuração do GitHub
function saveGitHubConfig() {
    const username = document.getElementById('githubUsername').value;
    const token = document.getElementById('githubToken').value;
    const repo = document.getElementById('githubRepo').value;
    
    if (username && token && repo) {
        // Salva no localStorage
        localStorage.setItem('githubConfig', JSON.stringify({
            owner: username,
            repo: repo,
            token: token
        }));
        
        showAlert('Configuração salva com sucesso!', 'success');
        document.querySelector('[style*="position: fixed"]').remove();
        
        // Atualiza o status do botão
        if (typeof updateButtonStatus === 'function') {
            updateButtonStatus();
        }
    } else {
        showAlert('Preencha todos os campos!', 'error');
    }
}

// Função para carregar configuração do GitHub
function loadGitHubConfig() {
    const savedConfig = localStorage.getItem('githubConfig');
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        GITHUB_CONFIG.owner = config.owner;
        GITHUB_CONFIG.repo = config.repo;
        GITHUB_CONFIG.token = config.token;
        return true;
    }
    return false;
}

// Função para sincronização automática
async function autoSyncData(newData) {
    // Carrega configuração
    if (!loadGitHubConfig()) {
        setupGitHubConfig();
        showAlert('Configure o GitHub primeiro!', 'warning');
        return false;
    }
    
    // Testa a conexão primeiro
    showLoadingIndicator();
    const connectionTest = await testGitHubConnection();
    
    if (!connectionTest.success) {
        hideLoadingIndicator();
        showAlert(`Erro na conexão: ${connectionTest.message}`, 'error');
        return false;
    }
    
    try {
        // Faz o commit automático
        const success = await autoCommitToGitHub(newData);
        
        if (success) {
            hideLoadingIndicator();
            showAlert('Dados sincronizados automaticamente! Todos os usuários verão as alterações.', 'success');
            
            return true;
        } else {
            hideLoadingIndicator();
            return false;
        }
    } catch (error) {
        hideLoadingIndicator();
        console.error('Erro na sincronização:', error);
        showAlert('Erro na sincronização automática.', 'error');
        return false;
    }
}

// Função para mostrar indicador de carregamento
function showLoadingIndicator() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loadingIndicator';
    loadingDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #1C2333;
            color: white;
            padding: 30px;
            border-radius: 15px;
            z-index: 10002;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border: 2px solid #4A90E2;
        ">
            <div style="margin-bottom: 15px;">
                <i class="fas fa-spinner fa-spin" style="font-size: 2em; color: #4A90E2;"></i>
            </div>
            <h3 style="color: #4A90E2; margin-bottom: 10px;">Sincronizando...</h3>
            <p>Atualizando dados para todos os usuários...</p>
        </div>
    `;
    document.body.appendChild(loadingDiv);
}

// Função para esconder indicador de carregamento
function hideLoadingIndicator() {
    const loadingDiv = document.getElementById('loadingIndicator');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

// Função para abrir página principal em nova aba
function openMainPage() {
    window.open('index.html', '_blank');
}

// Função para testar a conexão com o GitHub
async function testGitHubConnection() {
    if (!loadGitHubConfig()) {
        return { success: false, message: 'Configuração do GitHub não encontrada' };
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}`, {
            method: 'GET',
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.token}`,
                'Accept': 'application/vnd.github.v3+json',
            }
        });
        
        if (response.ok) {
            return { success: true, message: 'Conexão com GitHub estabelecida com sucesso' };
        } else {
            const errorData = await response.json();
            return { 
                success: false, 
                message: `Erro na conexão: ${response.status} - ${errorData.message || response.statusText}` 
            };
        }
    } catch (error) {
        return { success: false, message: `Erro de rede: ${error.message}` };
    }
}

// Função para verificar se a sincronização automática está disponível
function isAutoSyncAvailable() {
    return loadGitHubConfig();
} 