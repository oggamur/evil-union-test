import { Header } from "../../components/header/header";
import { Hero } from "../../components/hero/hero";

export default function MainScreen(): React.ReactElement {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
    </main>
  );
}