export const developers = [
  {
    id: 1,
    name: "Alice Johnson",
    commits: 120,
    churn: 15,
    mergeRequestsRaised: 10,
    mergeRequestsApproved: 9,
    codeCoverage: 85,
    newVulnerabilities: 0,
  },
  {
    id: 2,
    name: "Bob Smith",
    commits: 95,
    churn: 40,
    mergeRequestsRaised: 8,
    mergeRequestsApproved: 6,
    codeCoverage: 78,
    newVulnerabilities: 2,
  },
  {
    id: 3,
    name: "Carol Davis",
    commits: 70,
    churn: 10,
    mergeRequestsRaised: 5,
    mergeRequestsApproved: 5,
    codeCoverage: 92,
    newVulnerabilities: 0,
  },
  {
    id: 4,
    name: "David Martinez",
    commits: 30,
    churn: 80,
    mergeRequestsRaised: 3,
    mergeRequestsApproved: 1,
    codeCoverage: 65,
    newVulnerabilities: 5,
  },
  {
    id: 5,
    name: "Eva Thompson",
    commits: 110,
    churn: 20,
    mergeRequestsRaised: 12,
    mergeRequestsApproved: 11,
    codeCoverage: 88,
    newVulnerabilities: 1,
  },
  {
    id: 6,
    name: "Frank Moore",
    commits: 50,
    churn: 35,
    mergeRequestsRaised: 6,
    mergeRequestsApproved: 4,
    codeCoverage: 70,
    newVulnerabilities: 3,
  },
  {
    id: 7,
    name: "Grace Lee",
    commits: 100,
    churn: 10,
    mergeRequestsRaised: 9,
    mergeRequestsApproved: 9,
    codeCoverage: 90,
    newVulnerabilities: 0,
  },
  {
    id: 8,
    name: "Henry Wilson",
    commits: 20,
    churn: 60,
    mergeRequestsRaised: 2,
    mergeRequestsApproved: 1,
    codeCoverage: 60,
    newVulnerabilities: 6,
  },
  {
    id: 9,
    name: "Isabel Garcia",
    commits: 130,
    churn: 25,
    mergeRequestsRaised: 14,
    mergeRequestsApproved: 13,
    codeCoverage: 95,
    newVulnerabilities: 0,
  },
  {
    id: 10,
    name: "John Brown",
    commits: 40,
    churn: 45,
    mergeRequestsRaised: 4,
    mergeRequestsApproved: 2,
    codeCoverage: 68,
    newVulnerabilities: 4,
  }
];

// Function to calculate performance based on metrics:
export function getPerformance(dev) {
  let score = 0;
  // commits - higher better (max 130)
  score += (dev.commits / 130) * 20;

  // churn - lower better (max 80)
  score += ((80 - dev.churn) / 80) * 15;

  // merge requests approved ratio
  const mrRatio = dev.mergeRequestsRaised === 0 ? 0 : dev.mergeRequestsApproved / dev.mergeRequestsRaised;
  score += mrRatio * 25;

  // code coverage - higher better (out of 100)
  score += (dev.codeCoverage / 100) * 25;

  // vulnerabilities - lower better (max 6)
  score += ((6 - dev.newVulnerabilities) / 6) * 15;

  if (score >= 80) return "Super Efficient";
  if (score >= 65) return "Good";
  if (score >= 50) return "Needs Improvement";
  return "Poor Performer";
}
