const fetchUser = async (id, baseUrl = 'http://localhost:3000') => {
  const response = await fetch(`${baseUrl}/${id}`);
  if (!response.ok) {
    throw new Error(
      `An error occurred while fetching user ${id} - ${response.status} ${response.statusText}`
    );
  }

  return response.json();
};

export const App = async () => {
  document.getElementById('root').innerHTML =
    `
      <div id="loader">
        <img src="spinner.gif" height="32" />
      </div>
      <div id="output"></div>
    `;

  const output = document.getElementById('output');
  const loader = document.getElementById('loader');

  // TODO: Perform asynchronous operation(s).

  loader.remove();

  // TODO: Process result(s).
};