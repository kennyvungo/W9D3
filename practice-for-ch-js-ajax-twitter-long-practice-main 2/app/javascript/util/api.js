const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    "X-CSRF-Token": csrfToken,
    "Content-Type": "application/json",
    "Accept": "application/json",
    ...options.headers
  };
  
  return await fetch(url, options);
}


export const followUser = (id) => {
  const options = {
  method: "POST"
}
return customFetch(`/users/${id}/follow`,options)
}

export const unfollowUser = (id) => {
  const options = {
  method: "DESTROY"
  }
  return customFetch(`/users/${id}/follow`,options)
}