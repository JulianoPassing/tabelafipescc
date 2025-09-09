// Credenciais encriptadas (base64)
const ENCRYPTED_USERNAME = 'c3RyZWV0'; // 'street' em base64
const ENCRYPTED_PASSWORD = 'c3RyMzN0'; // 'str33t' em base64

let allCarsData = [];
let editingIndex = -1;
let isAuthenticated = false;

// Função para decodificar base64
function decodeBase64(str) {
    return atob(str);
}

// Função para verificar autenticação
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const expectedUsername = decodeBase64(ENCRYPTED_USERNAME);
    const expectedPassword = decodeBase64(ENCRYPTED_PASSWORD);
    
    if (username === expectedUsername && password === expectedPassword) {
        isAuthenticated = true;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('staffPanel').classList.add('active');
        loadCarsData();
        showAlert('Login realizado com sucesso!', 'success');
        saveSession();
    } else {
        showAlert('Usuário ou senha incorretos!', 'error');
    }
}

// Função para fazer logout
function logout() {
    isAuthenticated = false;
    editingIndex = -1;
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('staffPanel').classList.remove('active');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    clearForm();
    clearSession();
}

// Função para mostrar alertas
function showAlert(message, type) {
    const alertDiv = document.getElementById('alertMessage');
    alertDiv.textContent = message;
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.display = 'block';
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 3000);
}

// Função para carregar dados dos carros
function loadCarsData() {
    try {
        // Sempre carrega dados do arquivo carros.js primeiro
        allCarsData = [...carrosData]; // Usa dados do arquivo carros.js
        saveCarsData(); // Salva no localStorage para manter sincronizado
        populateTable();
    } catch (error) {
        console.error('Erro ao carregar dados dos carros:', error);
        // Fallback: tenta carregar do localStorage se carros.js falhar
        const savedData = localStorage.getItem('carrosData');
        if (savedData) {
            allCarsData = JSON.parse(savedData);
        } else {
            allCarsData = [];
        }
        populateTable();
    }
}

// Função para salvar dados no localStorage
function saveCarsData() {
    try {
        localStorage.setItem('carrosData', JSON.stringify(allCarsData));
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
    }
}

// Função para popular a tabela
function populateTable(carsToDisplay = allCarsData) {
    const tableBody = document.getElementById('carsTableBody');
    tableBody.innerHTML = '';

    carsToDisplay.forEach((car, index) => {
        const newRow = document.createElement('tr');
        const imageUrl = car.Imagem || 'https://i.imgur.com/Wf7bGAO.png';
        
        newRow.innerHTML = `
            <td data-label="Imagem" class="car-image-cell">
                <img src="${imageUrl}" alt="${car.Carro}" class="car-image" 
                     onclick="showImagePreview('${imageUrl}', '${car.Carro}')"
                     onerror="this.src='https://i.imgur.com/Wf7bGAO.png'">
            </td>
            <td data-label="Carro">${car.Carro}</td>
            <td data-label="Ano">${car.Ano}</td>
            <td data-label="Valor">${car.Valor}</td>
            <td data-label="Categoria">${car.Categoria}</td>
            <td data-label="Ações">
                <div class="action-buttons">
                    <button class="action-btn btn-warning" onclick="editCar(${index})">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button class="action-btn btn-danger" onclick="deleteCar(${index})">
                        <i class="fas fa-trash"></i> Excluir
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(newRow);
    });
}

// Função para fechar preview da imagem
function closeImagePreview() {
    document.getElementById('imageOverlay').style.display = 'none';
    document.getElementById('imagePreview').style.display = 'none';
}

// Função para validar URL de imagem
function validateImageUrl(url) {
    if (!url) return false;
    
    // Verifica se é uma URL válida
    try {
        new URL(url);
    } catch {
        return false;
    }
    
    // Verifica se é uma imagem (extensões comuns)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const hasImageExtension = imageExtensions.some(ext => 
        url.toLowerCase().includes(ext)
    );
    
    // Verifica se é do Imgur ou outras plataformas confiáveis
    const trustedDomains = ['imgur.com', 'i.imgur.com', 'cdn.discordapp.com', 'media.discordapp.net'];
    const isFromTrustedDomain = trustedDomains.some(domain => 
        url.toLowerCase().includes(domain)
    );
    
    return hasImageExtension || isFromTrustedDomain;
}

// Função para testar se a imagem carrega
async function testImageUrl(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
        
        // Timeout após 5 segundos
        setTimeout(() => resolve(false), 5000);
    });
}

// Função para testar URL da imagem no formulário
async function testImageUrl() {
    const imageUrl = document.getElementById('carImage').value.trim();
    
    if (!imageUrl) {
        showAlert('Digite uma URL para testar!', 'warning');
        return;
    }
    
    if (!validateImageUrl(imageUrl)) {
        showAlert('URL de imagem inválida! Verifique o formato.', 'error');
        return;
    }
    
    showAlert('Testando imagem...', 'warning');
    
    try {
        const isValid = await testImageUrl(imageUrl);
        if (isValid) {
            showAlert('Imagem carregada com sucesso!', 'success');
            // Mostra preview da imagem
            showImagePreview(imageUrl, 'Teste de Imagem');
        } else {
            showAlert('Erro ao carregar a imagem. Verifique a URL.', 'error');
        }
    } catch (error) {
        showAlert('Erro ao testar a imagem: ' + error.message, 'error');
    }
}

// Função para mostrar preview da imagem
function showImagePreview(imageUrl, carName) {
    const overlay = document.getElementById('imageOverlay');
    const preview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImage');
    const previewCarName = document.getElementById('previewCarName');
    const previewImageUrl = document.getElementById('previewImageUrl');
    
    // Valida a URL antes de mostrar
    if (!validateImageUrl(imageUrl)) {
        showAlert('URL de imagem inválida!', 'warning');
        return;
    }
    
    previewImg.src = imageUrl;
    previewCarName.textContent = carName;
    previewImageUrl.textContent = imageUrl;
    
    overlay.style.display = 'block';
    preview.style.display = 'block';
    
    // Fecha ao clicar no overlay
    overlay.onclick = closeImagePreview;
}

// Função para buscar carros
function searchCars() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredCars = allCarsData.filter(car => {
        return (
            car.Carro.toLowerCase().includes(searchInput) ||
            car.Ano.toLowerCase().includes(searchInput) ||
            car.Valor.toLowerCase().includes(searchInput) ||
            car.Categoria.toLowerCase().includes(searchInput) ||
            (car.Imagem && car.Imagem.toLowerCase().includes(searchInput))
        );
    });
    populateTable(filteredCars);
}

// Função para lidar com o envio do formulário
async function handleCarSubmit(event) {
    event.preventDefault();
    
    const carData = {
        Carro: document.getElementById('carName').value,
        Ano: document.getElementById('carYear').value,
        Valor: document.getElementById('carValue').value,
        Categoria: document.getElementById('carCategory').value,
        Imagem: document.getElementById('carImage').value || 'https://i.imgur.com/Wf7bGAO.png'
    };

    if (editingIndex >= 0) {
        // Editando carro existente
        allCarsData[editingIndex] = carData;
        showAlert('Carro atualizado localmente! Aplicando para todos os usuários...', 'success');
        editingIndex = -1;
        document.getElementById('formTitle').textContent = 'Adicionar Novo Carro';
    } else {
        // Adicionando novo carro
        allCarsData.push(carData);
        showAlert('Carro adicionado localmente! Aplicando para todos os usuários...', 'success');
    }

    saveCarsData();
    populateTable();
    clearForm();
    
    // Aplica as alterações para todos os usuários automaticamente
    await updateGlobalData();
}

// Função para editar carro
function editCar(index) {
    const car = allCarsData[index];
    document.getElementById('carName').value = car.Carro;
    document.getElementById('carYear').value = car.Ano;
    document.getElementById('carValue').value = car.Valor;
    document.getElementById('carCategory').value = car.Categoria;
    document.getElementById('carImage').value = car.Imagem || '';
    
    editingIndex = index;
    document.getElementById('formTitle').textContent = 'Editar Carro';
    
    // Scroll para o formulário
    document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
}

// Função para excluir carro
async function deleteCar(index) {
    if (confirm('Tem certeza que deseja excluir este carro?')) {
        allCarsData.splice(index, 1);
        saveCarsData();
        populateTable();
        showAlert('Carro excluído localmente! Aplicando para todos os usuários...', 'success');
        
        // Aplica a exclusão para todos os usuários automaticamente
        await updateGlobalData();
    }
}

// Função para limpar formulário
function clearForm() {
    document.getElementById('carForm').reset();
    editingIndex = -1;
    document.getElementById('formTitle').textContent = 'Adicionar Novo Carro';
}

        // Função para exportar dados
        function exportData() {
            // Gera o arquivo carros.js atualizado
            updateCarrosFile(allCarsData);
            
            // Exporta também em formato JSON
            exportCarrosJSON(allCarsData);
            
            // Mostra instruções de atualização
            showUpdateInstructions();
            
            showAlert('Arquivos gerados! Baixe o carros.js atualizado e substitua no projeto.', 'success');
        }

        // Função para atualizar dados para todos os usuários
        async function updateGlobalData() {
            // Verifica se a sincronização automática está disponível
            if (isAutoSyncAvailable()) {
                // Usa sincronização automática
                const success = await autoSyncData(allCarsData);
                if (success) {
                    showAlert('Dados sincronizados automaticamente! Todos os usuários verão as alterações.', 'success');
                }
            } else {
                // Fallback para método manual
                updateCarrosFile(allCarsData);
                showUpdateInstructions();
                showAlert('Arquivo carros.js gerado! Baixe e substitua no projeto para atualizar para todos.', 'success');
            }
        }

// Função para salvar sessão
function saveSession() {
    if (isAuthenticated) {
        localStorage.setItem('staffSession', 'true');
    }
}

// Função para limpar sessão
function clearSession() {
    localStorage.removeItem('staffSession');
}

        // Função para inicializar a aplicação
        function initStaffApp() {
            // Verificar se há sessão ativa no localStorage
            const sessionActive = localStorage.getItem('staffSession');
            if (sessionActive === 'true') {
                isAuthenticated = true;
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('staffPanel').classList.add('active');
                loadCarsData();
                updateButtonStatus();
            }
        }

        // Função para atualizar status do botão
        function updateButtonStatus() {
            const updateBtn = document.getElementById('updateGlobalBtn');
            if (updateBtn) {
                if (isAutoSyncAvailable()) {
                    updateBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Sincronizar Automaticamente';
                    updateBtn.style.background = '#4CAF50';
                    updateBtn.title = 'Sincronização automática ativa - alterações serão aplicadas imediatamente';
                } else {
                    updateBtn.innerHTML = '<i class="fas fa-globe"></i> Atualizar para Todos';
                    updateBtn.style.background = '#F44336';
                    updateBtn.title = 'Configure o GitHub para sincronização automática';
                }
            }
        }

        // Função para resetar dados locais
        function resetLocalData() {
            if (confirm('Tem certeza que deseja resetar os dados locais? Isso irá recarregar os dados do arquivo original.')) {
                localStorage.removeItem('carrosData');
                loadCarsData();
                showAlert('Dados locais resetados! Carregando dados do arquivo original.', 'success');
            }
        }

        // Função para testar conexão com GitHub
        async function testConnection() {
            if (!isAutoSyncAvailable()) {
                showAlert('Configure o GitHub primeiro!', 'warning');
                return;
            }
            
            showLoadingIndicator();
            const result = await testGitHubConnection();
            hideLoadingIndicator();
            
            if (result.success) {
                showAlert('Conexão com GitHub estabelecida com sucesso!', 'success');
            } else {
                showAlert(`Erro na conexão: ${result.message}`, 'error');
            }
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', initStaffApp); 