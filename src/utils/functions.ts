async function getData(_url: string) {
  try {
    const res = await fetch(_url);
    return {
      data: res.ok ? await res.json() : null,
      success: res.ok,
      status: res.status,
      error: res.statusText
    };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

function formatTime(_time?: number | null) {
  const date = _time ? new Date(_time) : new Date();
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
}

export { getData, formatTime };
