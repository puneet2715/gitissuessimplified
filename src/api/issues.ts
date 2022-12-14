import { Octokit } from "octokit";

// process.env is for webpack
// import.meta.env is for vite

const octokit: Octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

type FetchIssueParams = {
  owner: string;
  repo: string;
  page?: number;
};

export function fetchRepo({ owner, repo }: Omit<FetchIssueParams, "page">) {
  return octokit.rest.repos.get({
    owner,
    repo,
  });
}

export function fetchIssueById({
  owner,
  repo,
  issue_number,
}: FetchIssueParams & { issue_number: number }) {
  return octokit.rest.issues.get({
    owner,
    repo,
    issue_number,
  });
}

export function fetchIssues({ owner, repo, page }: FetchIssueParams) {
  return octokit.rest.issues.listForRepo({
    owner,
    repo,
    page,
    state: "open",
    per_page: 10,
  });
}
