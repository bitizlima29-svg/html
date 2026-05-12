// Mensagem de confirmação ao entrar no site
window.addEventListener('load', function() {
    const confirmacao = confirm('Tem certeza que deseja entrar neste site?');
    
    if (confirmacao) {
        console.log('Usuário confirmou e entrou no site');
        // Aqui você pode adicionar ações após a confirmação
    } else {
        console.log('Usuário cancelou a entrada');
        // Opcional: redirecionar para outra página ou fechar a aba
        // window.location.href = 'https://www.google.com';
    }
});
