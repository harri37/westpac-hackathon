import OpenAIComponent from "@/components/OpenAIComponent";
import { Header } from "@westpac/ui/header";
import { List, ListItem } from "@westpac/ui/list";

export default function Home() {
  return (
    <>
      <Header brand="wbc" />

      <OpenAIComponent />
    </>
  );
}
