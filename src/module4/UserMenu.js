import { useUser } from './userContext';

export const UserMenu = () => {
  const { isLoggedIn, userName, logIn, logOut } = useUser();

  return (
    <div>
      {isLoggedIn && <p>{userName}</p>}
      {isLoggedIn ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};
