import { Header } from '@westpac/ui/header'
import { List, ListItem } from '@westpac/ui/list'
import { About } from "./sections/about";

export default function Home() {
    return (
      <>

        <Header brand="wbc" className="header-content">
          <h1>Westpac Wizard</h1>
        </Header>
        <About />
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