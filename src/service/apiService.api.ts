

export async function fetchData(url: string, option: Object) {
  return await fetch(url, option).catch((error) => {
    throw error;
  });
}
