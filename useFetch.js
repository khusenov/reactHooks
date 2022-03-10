import { useEffect, useState } from 'react';

const useFetch = (url, header) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(async () => {
        try {
            const res = await fetch(url, header);
            if (!res.ok) {
                throw new Error(`Couldn't fetch data`);
            }
            const resData = await res.json();
            setData(resData);
        } catch (err) {
            setError(err.message);
        }

        setIsPending(false);
    }, [url]);
    return { data, isPending, error };
};

export default useFetch;