const fetcher = async (url: string, body?: any) => {
    const fetching = await fetch(url, body && body);
    const result = await fetching.json();
    return result;
}

export { fetcher }