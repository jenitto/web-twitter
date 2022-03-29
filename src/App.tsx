import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Main from "./main/main";
import "./App.scss";

const App = () => {
  const locale = LOCALES.ENGLISH;

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Main></Main>
    </IntlProvider>
  );
};

export default App;
