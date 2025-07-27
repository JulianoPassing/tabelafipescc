// Função para atualizar o arquivo carros.js com novos dados
function updateCarrosFile(newData) {
    try {
        // Cria o conteúdo do arquivo carros.js
        const fileContent = `const carrosData = ${JSON.stringify(newData, null, 4)};`;
        
        // Cria um blob com o conteúdo
        const blob = new Blob([fileContent], { type: 'application/javascript' });
        
        // Cria um link para download
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'carros.js';
        link.textContent = 'Baixar carros.js atualizado';
        
        // Adiciona o link ao documento
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px;
            border-radius: 10px;
            z-index: 10000;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        `;
        container.appendChild(link);
        document.body.appendChild(container);
        
        // Remove o container após 10 segundos
        setTimeout(() => {
            document.body.removeChild(container);
            URL.revokeObjectURL(url);
        }, 10000);
        
        return true;
    } catch (error) {
        console.error('Erro ao gerar arquivo:', error);
        return false;
    }
}

// Função para exportar dados em formato JSON
function exportCarrosJSON(data) {
    try {
        const jsonContent = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'carros_data.json';
        link.textContent = 'Baixar carros_data.json';
        
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2196F3;
            color: white;
            padding: 15px;
            border-radius: 10px;
            z-index: 10000;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        `;
        container.appendChild(link);
        document.body.appendChild(container);
        
        setTimeout(() => {
            document.body.removeChild(container);
            URL.revokeObjectURL(url);
        }, 10000);
        
        return true;
    } catch (error) {
        console.error('Erro ao exportar JSON:', error);
        return false;
    }
}

// Função para mostrar instruções de atualização
function showUpdateInstructions() {
    const instructions = `
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
                <i class="fas fa-info-circle"></i> Instruções para Atualizar o Site
            </h3>
            <div style="line-height: 1.6; margin-bottom: 20px;">
                <p><strong>Para que as alterações apareçam para todos os usuários:</strong></p>
                <ol style="margin-left: 20px; margin-top: 10px;">
                    <li>Clique em "Baixar carros.js atualizado" (botão verde)</li>
                    <li>Substitua o arquivo <code>carros.js</code> no seu projeto pelo arquivo baixado</li>
                    <li>Faça upload do arquivo atualizado para o Vercel</li>
                    <li>As alterações aparecerão para todos os usuários</li>
                </ol>
            </div>
            <div style="text-align: center;">
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: #4A90E2;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">
                    Entendi
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', instructions);
} 