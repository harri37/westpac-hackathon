import { Header } from '@westpac/ui/header'
import { List, ListItem } from '@westpac/ui/list'

export default function Home() {
    return (
      <>
        <Header brand="wbc" className="header-content">
          <h1>Westpac wizzard</h1>
        </Header>

        <h1>Home</h1>
 
        <List type="link" spacing='medium'>
          <ListItem href="/save">
            Save
          </ListItem>
          <ListItem href="/invest">
            Invest
          </ListItem>
          <ListItem href="/profile">
            Profile
          </ListItem>
        </List>


      </>
  );
}