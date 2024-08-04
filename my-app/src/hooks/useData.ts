import { useState, useEffect } from 'react';
import { ApiResponse } from "../types/data.interface";
import { SortOption } from "../constants";
import { fetchData } from "../apis/data";

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
    const getData = async () => {
      setError(null);

      try {
        const result = await fetchData({ length, type, category, page });
        setData(result);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    getData();
  }, [length, type, category, page]);

  return { data, error };
};

export default useData;