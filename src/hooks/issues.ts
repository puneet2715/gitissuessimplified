import useSWR from "swr";
import { fetchIssues, fetchRepo } from "../api/issues";

export default function useIssues(owner: string, repo: string, page: number) {
  const { data, error, isLoading } = useSWR(
    [owner, repo, page],
    () => fetchIssues({ owner, repo, page }),
    {
      refreshInterval: 10000,
      suspense: true,
    }
  );

  const { data: repoData } = useSWR(
    [owner, repo],
    () => fetchRepo({ owner, repo }),
    {
      suspense: true,
    }
  );

  return {
    issues: data?.data || [],
    issueCount: repoData?.data.open_issues_count ?? 0,
    isLoading,
    isError: error,
  };
}
