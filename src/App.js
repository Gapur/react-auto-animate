import { USERS } from "./constants";

export function App() {
  return (
    <div className="app">
      <div className="users">
        {USERS.map((user) => (
          <div className="user" key={user.id}>
            <img className="user-avatar" src={user.avatar} alt="avatar" />
            <span className="user-full-name">{user.fullName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
