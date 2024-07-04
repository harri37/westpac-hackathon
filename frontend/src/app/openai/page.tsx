import OpenAIComponent from '@/components/OpenAIComponent';
import { Header } from '@westpac/ui/header'
import { List, ListItem } from '@westpac/ui/list'

export default function Home() {
    return (
      <>
        <Header brand="wbc"/>
        <h1>Home</h1>
        
        <OpenAIComponent />

      </>
  );
}
