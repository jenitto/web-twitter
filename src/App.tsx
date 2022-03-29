import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import UserTimeline from "./pages/user-timeline/user-timeline";
import Main from "./pages/main/main";
import "./App.scss";
import { RoutesEnum } from "./enums/routes.enum";

const App = () => {
  const locale = LOCALES.ENGLISH;

  return (
    <BrowserRouter>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Routes>
          <Route path={RoutesEnum.HOME} element={<Main />} />
          <Route path={`${RoutesEnum.USER}/:id`} element={<UserTimeline />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
