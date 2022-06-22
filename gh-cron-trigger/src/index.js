export default {
  async scheduled(controller, env, ctx) {
    let response = await fetch("https://api.github.com/repos/mockuser404/tgcf-on-gh-action/actions/workflows/tgcf-past.yml/dispatches", {
      method: "POST",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${env.GH_PAT}`,
        "User-Agent": "mockuser404",
      },
      body: JSON.stringify({ "ref": "main" })
    });
    console.log(response.status, await response.text());
  },
  async fetch(request) {
    return new Response(`Hello World!`);
  }
};
