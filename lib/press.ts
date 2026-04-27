// Press / Recent Thinking — sourced from Notion "link tree" DB:
// https://www.notion.so/joyjude/1a19f7ed1e0880ebab4fc39fca75417f
// + The Guardian feature (added manually since not yet in Notion DB).
// Sorted newest first.

export type PressItem = {
  date: string; // ISO yyyy-mm-dd
  title: string;
  outlet: string; // who published it
  url: string;
  tag?: string; // optional category label
  pinned?: boolean; // floats to the top regardless of date — for tier-1 outlets
};

export const PRESS: PressItem[] = [
  {
    date: "2026-03-05",
    title: "How art school creators are adapting to the age of AI",
    outlet: "The Guardian",
    url: "https://www.theguardian.com/everything-you-never-imagined/2026/mar/05/how-art-school-creators-are-adapting-to-the-age-of-ai",
    tag: "Feature",
    pinned: true,
  },
  {
    date: "2026-04-27",
    title:
      "'Eats and Algorithms': RCA and Sodexo collaborate on sustainable food solutions project",
    outlet: "Royal College of Art",
    url: "https://www.rca.ac.uk/business/case-studies/eats-and-algorithms-rca-and-sodexo-collaborate-on-sustainable-food-solutions-project/",
    tag: "Case Study",
  },
  {
    date: "2026-04-27",
    title:
      "RCA and Sodexo announce winners of innovative Eats and Algorithms project",
    outlet: "Royal College of Art",
    url: "https://www.rca.ac.uk/news-and-events/news/rca-and-sodexo-announce-winners-of-innovative-eats-and-algorithms-project-to-design-sustainable-solutions-for-digitising-food/",
    tag: "News",
  },
  {
    date: "2025-03-12",
    title: "Galleries — Spark Awards · International Design Competition",
    outlet: "Spark Awards",
    url: "https://galleries.sparkawards.com/index.cfm?year=2023&entry=45B9B4E1-C940-3692-19BA59B44CE46FDC",
    tag: "Award",
  },
  {
    date: "2025-02-21",
    title: "SYNCOHE by Yutong Zhu — International Design Awards Winners",
    outlet: "IDA",
    url: "https://www.idesignawards.com/winners/zoom.php?eid=9-49848-23",
    tag: "Award",
  },
  {
    date: "2025-02-21",
    title: "「电容」第二期｜智能传感 — Tiny ML 工作坊回顾",
    outlet: "WeChat / 电容",
    url: "https://mp.weixin.qq.com/s/An2wXl44FVCy1TsqjspmXQ",
    tag: "Workshop",
  },
  {
    date: "2025-02-21",
    title: "「开放的六月」特别活动 · 国窖1573 美术馆之夜",
    outlet: "WeChat / 川美",
    url: "https://mp.weixin.qq.com/s/sI6mg_dyA-7F8qRjyoOJEg",
    tag: "Exhibition",
  },
  {
    date: "2025-02-21",
    title: "我校举办 2024 年「开放的六月——四川美术学院艺术游」开幕式",
    outlet: "Sichuan Fine Arts Institute",
    url: "https://mp.weixin.qq.com/s/Sro5Oj3x1Z867VYB533yng",
    tag: "Exhibition",
  },
];
