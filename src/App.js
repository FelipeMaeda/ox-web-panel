import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
// Rest Providers
import dataProvider from './rest/dataProvider';
import authProvider from './rest/authProvider';
// Resources
import { UserList, UserCreate, UserEdit } from './resources/users'
import { PlanList } from './resources/plan'
import { CustomerList, CustomerCreate, CustomerEdit } from './resources/customer'
import { ContextList, ContextCreate, ContextEdit } from './resources/context'
import { MailboxList, MailboxCreate, MailboxEdit } from './resources/mailbox'
import { GroupList, GroupCreate } from './resources/group'
import { ResourceCreate, ResourceList } from './resource';


//Theming
import { Dashboard } from './dashboard/dashboard'
import { Face, Domain,  AccountTree, Mail, Store, Group, MeetingRoom } from '@material-ui/icons';
import { ThemeCreate } from './resources/theme';

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
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
   <Resource name="groups"
      list={ GroupList }
      create={ GroupCreate }
      edit={ EditGuesser }
      icon={ Group }
    />
    <Resource name="resources"
      list={ ResourceList }
      create={ ResourceCreate }
      edit={ EditGuesser }
      icon={ MeetingRoom }
    />
    <Resource name="theme" create={ ThemeCreate } list={ContextList} />
</Admin>
);

export default App;
