import { Timeline } from "@material-ui/lab";
import React from "react";
import { IRepository } from "../../shared/types";
import { GithubTimelineItem } from "./github-timeline-item";

type Props = {
  repositories: IRepository[];
};

const GithubTimeline = ({ repositories }: Props) => (
  <Timeline>
    {repositories.map((repository) => (
      <GithubTimelineItem repository={repository} />
    ))}
  </Timeline>
);
export default GithubTimeline;
