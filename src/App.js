import React from 'react';
import { Admin, Resource} from 'react-admin';
// Rest Providers
import dataProvider from './rest/dataProvider';
import authProvider from './rest/authProvider';
// Resources
import { UserList, UserCreate, UserEdit } from './resources/users'
import { PlanList } from './resources/plan'
import { CustomerList, CustomerCreate, CustomerEdit } from './resources/customer'
import { ContextList, ContextCreate, ContextEdit } from './resources/context'
import { MailboxList, MailboxCreate, MailboxEdit } from './resources/mailbox'

//Theming
import { Dashboard } from './dashboard/dashboard'
import { Face, Domain,  AccountTree, Mail, Store} from '@material-ui/icons';
import { ThemeCreate } from './resources/theme';


//Translating
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import pt-brMessages from 'ra-language-pt-br';

const messages = {
  en: { ...englishMessages },
};

const i18nProvider = polyglotI18nProvider(locale => messages[locale]);


const App = () => (
  <Admin 
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >

    <Resource name="users"
      list={ UserList }
      create={ UserCreate }
      edit={ UserEdit }
      icon={ Face } 
    />
    <Resource name="plans"
      list={ PlanList }
      icon={ Store } 
    />
    <Resource name="customers"
      list={ CustomerList }
      create={ CustomerCreate }
      edit={ CustomerEdit }
      icon={ Domain } 
    />
    <Resource name="contexts"
      list={ ContextList }
      create={ ContextCreate }
      edit={ ContextEdit }
      icon={ AccountTree }
    />
    <Resource name="mailboxes"
      list={ MailboxList }
      create={ MailboxCreate }
      edit={ MailboxEdit }
      icon={ Mail }
    />
    <Resource name="theme" create={ ThemeCreate } list={ContextList} />
</Admin>
);

export default App;
