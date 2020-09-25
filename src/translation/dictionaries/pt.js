import ptBrMessages from 'ra-language-pt-br';

const customptBrMessages = {
    ...ptBrMessages,
    resources: {
        users: {
            name: 'Usuário |||| Usuários',
            fields: {
                username: 'Nome de Usuário',
                password: 'Senha',
                name: 'Nome',
                description: 'Descrição',
                reseller_id: 'Revendedor',
                customer_id: 'Cliente'
            }
        },
        plans: {
            name: 'Plano |||| Planos',
            fields: {
                name: 'Nome',
                description: 'Descrição',
            }
        },
        resellers: {
            name: 'Revendedor |||| Revendedores',
            fields: {
                name: 'Razão Social',
                cnpj: 'CNPJ',
                description: 'Descrição',
            }
        },
        customers: {
            name: 'Cliente |||| Clientes',
            fields: {
                name: 'Razão Social',
                cnpj: 'CNPJ',
                description: 'Descrição',
                reseller_id: 'Revendedor',
            }
        },
        contexts: {
            name: 'Hierarquia',
            fields: {
                username: 'Nome de Usuário',
                name: 'Nome',
                description: 'Descrição',
                reseller_id: 'Revendedor',
                customer_id: 'Cliente',
            }
        },
        mailboxes: {
            fields: {
                display_name: 'Nome de Exibição',
                password: 'Senha',
                given_name: 'Nome',
                last_name: 'Sobrenome',
                plan_id: 'Plano',
                enabled: 'Ativa',
                ctx_id: 'Hierarquia',
            }
        },
        theme: {
            name: 'Tema',
            empty: 'Edite o tema do seu OXMail',
            invite: 'Crie aqui o tema OXMail para sua respectiva hierarquia de usuários'
        },
    },
    general: {
        language: 'Idioma',
        access_webmail: 'Acessar Webmail',
        welcome: 'Bem-vindo ao Painel de Administração do OXMail'
    },
}

export default customptBrMessages;