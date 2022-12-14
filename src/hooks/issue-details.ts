import useSWR from "swr";
import { fetchIssueById } from "../api/issues";

export default function useIssueDetails(
  owner: string,
  repo: string,
  issue_number: number
) {
  const { data, error, isLoading } = useSWR(
    [owner, repo, issue_number],
    () => fetchIssueById({ owner, repo, issue_number }),
    {
      refreshInterval: 10000,
      suspense: true,
    }
  );

  return {
    issue: data?.data,
    isLoading,
    isError: error,
  };
}
