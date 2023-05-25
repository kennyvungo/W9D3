const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    "X-CSRF-Token": csrfToken,
    "Content-Type": "application/json",
    "Accept": "application/json",
    ...options.headers
  };
  
  const response = await fetch(url, options);
  if (response.ok) {
    return await response.json();
  } else {
    throw response;
  }
}


export const followUser = (id) => {
  const options = {
  method: "POST"
}
return customFetch(`/users/${id}/follow`,options)
}

export const unfollowUser = (id) => {
  const options = {
  method: "DELETE"
  }
  return customFetch(`/users/${id}/follow`,options)
}

export const fetchTweets = (options = {}) => {
  const queryParams = new URLSearchParams(options);
  queryParams.toString();
  return customFetch(`/tweets?${queryParams}`);
}