import { Header } from '@westpac/ui/header'
import { List, ListItem } from '@westpac/ui/list'

export default function Home() {
    return (
      <>
        <Header brand="wbc"/>
        <h1>Home</h1>
        
        {/* Link to pages */}
        <List type="link" spacing='medium'>
          <ListItem href="/save">
            Save
          </ListItem>
          <ListItem href="/invest">
            Invest
          </ListItem>
          
        </List>

      </>
  );
}
