import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiResponse } from "../types/data.interface";
import { SortOption } from "../constants";

interface DataParams {
  length?: number;
  type?: keyof typeof SortOption;
  category?: number;
  page?: number;
}

const useData = ({ length = 12, type = 'newest', category = 25, page = 1 }: DataParams) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);

      try {
        const response = await axios.get<ApiResponse>('http://localhost:3001/api', {
          params: {
            length,
            type,
            category,
            page,
          },
        });
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, [length, type, category, page]);

  return { data, error };
};

export default useData;