import { Header } from '@westpac/ui/header'
import { List, ListItem } from '@westpac/ui/list'
import { About } from "./sections/about";

export default function Home() {
    return (
      <>
        <Header brand="wbc"/>
        <About />
        
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