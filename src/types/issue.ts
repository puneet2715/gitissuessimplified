import { fetchIssues } from "../api/issues";

export type Issue = Awaited<ReturnType<typeof fetchIssues>>["data"][0];
