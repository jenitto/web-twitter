import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import UserTimeline from "./pages/user-timeline/user-timeline";
import Home from "./pages/home/home";
import { RoutesEnum } from "./enums/routes.enum";
import Main from "./pages/main/main";
import "./App.scss";
import { User } from "./types/user.interface";
import { getUser } from "./services/twitter-service";

const App = () => {
  const locale = LOCALES.ENGLISH;

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    setLoading(true);
    const user = await getUser("1");
    setUser(user);
    setLoading(false);
  };

  return (
    <BrowserRouter>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Main user={user} loading={loading}>
          <Routes>
            <Route path={RoutesEnum.HOME} element={<Home user={user} />} />
            <Route path={`${RoutesEnum.USER}/:id`} element={<UserTimeline />} />
            <Route path="*" element={<Home user={user} />} />
          </Routes>
        </Main>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
