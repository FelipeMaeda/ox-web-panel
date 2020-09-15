import spanishMessages from '@blackbox-vision/ra-language-spanish';

const customSpanishMessages = {
    ...spanishMessages,
    resources: {
        theme: {
            empty: 'Cambia tu tema de OXMail',
            invite: 'Cree aquí su tema de contexto OXMail'
        },
    },
    general: {
        language: 'Idioma',
        access_webmail: 'Acceder a Webmail',
        welcome: 'Bienvenido al panel de administración de OXMail'
    },
}

export default customSpanishMessages;