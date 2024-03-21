   // Função para cadastro de usuário
    document.querySelector('.cadastro form').addEventListener('submit', function (event) {
        event.preventDefault();

        let usuario = document.getElementById('usuariocadastro').value;
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senhacadastro').value;
        let confirmarSenha = document.getElementById('confirmarSenha').value;
        let palavraChave = document.getElementById('palavraChave').value
        console.log(`${senha},${confirmarSenha}`)

        // Verifica se as senhas coincidem
        if (senha != confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }

        // Verifica se o usuário já existe no localStorage
        if (localStorage.getItem(usuario)) {
            alert('Usuário já cadastrado');
            return;
        }

        // Salva os dados do novo usuário no localStorage
        localStorage.setItem(usuario, JSON.stringify({ email: email, senha: senha, palavraChave: palavraChave }));
        alert('Cadastro realizado com sucesso');
    });
    // Função para login de usuário
    document.querySelector('.login form').addEventListener('submit', function (event) {
        event.preventDefault();

        let usuario = document.getElementById('usuario').value;
        let senha = document.getElementById('senha').value;

        // Verifica se o usuário existe no localStorage
        let userData = localStorage.getItem(usuario);

        if (userData) {
            userData = JSON.parse(userData);
            // Verifica se a senha coincide
            if (senha === userData.senha) {
                alert('Login bem sucedido');
                // Aqui você pode redirecionar o usuário para outra página ou executar outras ações
            } else {
                alert('Senha incorreta');
            }
        } else {
            alert('Usuário não encontrado');
        }
    });

    // Função para mostrar o pop-up quando o parágrafo for clicado
document.getElementById('recuperarSenha').addEventListener('click', function() {
    document.getElementById('popUp').style.display = 'block';
  });
  
  // Função para verificar a palavra-chave e mostrar a senha correspondente
  function verificarPalavraChave() {
    const palavraChave = document.getElementById('verificarChave').value;
    let userData = localStorage.getItem(document.getElementById('usuario').value);
    userData = JSON.parse(userData);
    if (palavraChave === userData.palavraChave ) {
      document.getElementById('resultadoSenha').textContent = "Sua senha é: " + userData.senha;
    } else {
      document.getElementById('resultadoSenha').textContent = "Palavra-chave incorreta ou senha não encontrada.";
    }
  }
