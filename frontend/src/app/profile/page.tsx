import { Header } from '@westpac/ui/header';
import { List, ListItem } from '@westpac/ui/list';

const Profile = () => {
  return (
    <div className='container'>
      <Header brand="wbc">
        <h1>User Profile</h1>
      </Header>

      <div className= 'profileDetails'>
        <h2>Harrison Willie</h2>
        <p>Email: harri.willie@hotguys.com</p>
        <p>Member since: January 1920</p>
      </div>

      <h2>My Links</h2>
      <List type="link" spacing="medium" className='list'>
        <ListItem href="/settings" className='list-item'>
          Settings
        </ListItem>
        <ListItem href="/billing" className='list-item'>
          Billing
        </ListItem>
        <ListItem href="/help" className='list-item' >
          Help
        </ListItem>
      </List>
    </div>
  );
};

export default Profile;