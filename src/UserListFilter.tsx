import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
/* Example user object
 {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
*/
interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserListFilter = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setLoading(true);

    axios
      .get(BASE_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const visibleUsers = useMemo(() => {
    if (!searchText.trim()) return users;

    if (searchText === '') {
      return users;
    }

    return users.filter((user) => {
      return (
        user.name
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    });
  }, [users, searchText]);

  console.log(users[0]);

  return (
    <div>
      {loading ? (
        'Users are loading...'
      ) : (
        <div>
          <input
            type='text'
            placeholder='Search by name or email'
            onChange={(e) => setSearchText(e.target.value)}
          />
          {visibleUsers.map((user) => (
            <pre key={user.id}>
              <strong>
                Name:{user.name} ({user.email}) Phone: {user.phone} &nbsp;
                Website: {user.website}
                Address: {user.address.street}, {user.address.suite},{' '}
                {user.address.city}, {user.address.zipcode}
              </strong>
            </pre>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserListFilter;
