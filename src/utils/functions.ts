async function getData(_url: string) {
  try {
    const res = await fetch(_url);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export { getData };
