import { useMemo } from 'react';

function UsersList({ users, startingLetter }) {
  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.startsWith(startingLetter));
  }, [users, startingLetter]);

  return (
    <ul>
      {filteredUsers.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default UsersList;
