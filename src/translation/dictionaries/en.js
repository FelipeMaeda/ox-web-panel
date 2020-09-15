import englishMessages from 'ra-language-english';

const customEnglishMessages = {
    ...englishMessages,
    resources: {
        theme: {
            empty: 'Change your OXMail theme',
            invite: 'Create here your OXMail Context theme'
        },
    },
    general: {
        language: 'Language',
        access_webmail: 'Access Webmail',
        welcome: 'Welcome to OXMail Administration Panel'
    },
}

export default customEnglishMessages;
