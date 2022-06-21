export default {
  async scheduled(controller, env, ctx) {
    let response = await fetch( "https://api.github.com/repos/mockuser404/tgcf-on-gh-action/actions/workflows/tgcf-past.yml/dispatches", {
      method: "POST",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${env.GH_PAT}`,
      },
      body: JSON.stringify({"ref":"main"}),
    });
    if (204 !== response.status) {
      console.log(response.text());
    }
  },
  async fetch(request) {
    return new Response(`Hello World!`);
  },
};
