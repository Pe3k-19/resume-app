import { render } from "preact";
import { LanguageProvider } from "./Utils/language";
import { Layout } from "./modules/Layout/Layout";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";

export function App() {
  return <Layout />;
}

render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById("app")!,
);
