import axios from "axios";
const api = axios.create({
    baseURL:'http://localhost:5000'
})



export async function EfetuarLogin (email,senha){
    const r = await api.post('/usuario/login', {
                email: email,
                senha: senha
            
        });
        
        return r.data;
}

export async function EfetuarCadastro (nome,email,senha,nascimento,telefone,endereco){
    const r = await api.post('/usuario/cadastro', {
        nome: nome,
        email:email,
        senha: senha,
        nascimento: nascimento,
        telefone: telefone,
        endereco: endereco
    })
}