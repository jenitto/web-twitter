import { useEffect, useState } from "react";
import { getTimeline, getUser, getUsers } from "../services/twitter-service";
import { Tweet } from "../types/tweet.interface";
import { User } from "../types/user.interface";
import { filterFollowed, filterUnfollowed } from "../utils/user.utils";
import "./main.scss";

function Main() {
  const [user, setUser] = useState<User>();
  const [usersFollowed, setUsersFollowed] = useState<User[]>([]);
  const [usersNotFollowed, setUsersNotFollowed] = useState<User[]>([]);
  const [timeline, setTimeline] = useState<Tweet[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [loadingTimeline, setLoadingTimeline] = useState<boolean>(true);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(true);

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    getData();
  }, [user]);

  const loadUser = async () => {
    const user = await getUser("1");
    setUser(user);
    setLoadingUser(false);
  };

  const getData = async () => {
    setLoading(true);
    const users = await getUsers();
    const following = filterFollowed(users);
    const timeline = await getTimeline(following);
    setUsersFollowed(following);
    setUsersNotFollowed(filterUnfollowed(users));
    setTimeline(timeline);
    setLoading(false);
    setLoadingTimeline(false);
    setLoadingUsers(false);
  };

  return (
    <div className="main">
      <div className="main__header"></div>
      <div className="main__following"></div>
      <div className="main__follow"></div>
      <div className="main__timeline"></div>
      <div className="main__message"></div>
    </div>
  );
}
export default Main;
