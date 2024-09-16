import { User, UsersResponse } from '@/types/names.interface';
import { useState, useEffect } from 'react';

const API_URL = 'https://randomuser.me/api/?results=10';

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        const data: UsersResponse = await response.json();
        const randomUsers = data.results.sort(() => 0.5 - Math.random()).slice(0, 3);
        setUsers(randomUsers);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useFetchUsers;
