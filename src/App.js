import React from 'react';
import { Admin, Resource} from 'react-admin';
// Rest Providers
import dataProvider from './rest/dataProvider';
import authProvider from './rest/authProvider';
// Resources
import { UserList, UserCreate, UserEdit } from './resources/users'
import { PlanList } from './resources/plan'
import { ResellerList, ResellerCreate, ResellerEdit } from './resources/reseller'
import { CustomerList, CustomerCreate, CustomerEdit } from './resources/customer'
import { ContextList, ContextCreate, ContextEdit } from './resources/context'
import { MailboxList, MailboxCreate, MailboxEdit } from './resources/mailbox'

//Theming
import { Face, Domain,  AccountTree, Mail, Store, AccountBox} from '@material-ui/icons';
import { Dashboard } from './dashboard/dashboard'
import { ThemeCreate } from './resources/theme';


import i18nProvider from './translation/i18nProvider'


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
    <Resource name="resellers"
      list={ ResellerList }
      create={ ResellerCreate }
      edit={ ResellerEdit }
      icon={ Domain } 
    />
    <Resource name="customers"
      list={ CustomerList }
      create={ CustomerCreate }
      edit={ CustomerEdit }
      icon={ AccountBox } 
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
