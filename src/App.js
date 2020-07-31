import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
// Rest Providers
import dataProvider from './rest/dataProvider';
import authProvider from './rest/authProvider';
// Resources
import { UserList, UserCreate, UserEdit } from './resources/users'
import { CustomerList, CustomerCreate, CustomerEdit } from './resources/customer'
import { ContextList, ContextCreate, ContextEdit } from './resources/context'
import { MailboxList, MailboxCreate, MailboxEdit } from './resources/mailbox'
import { GroupList, GroupCreate } from './resources/group'


//Theming
import { Dashboard } from './dashboard/dashboard'
import { Face, Domain,  AccountTree, Mail, Group } from '@material-ui/icons';

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users"
      list={ UserList }
      create={ UserCreate }
      edit={ UserEdit }
      icon={ Face } 
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




</Admin>
);

export default App;
