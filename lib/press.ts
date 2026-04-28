// Press / Recent Thinking — sourced from Notion "link tree" DB:
// https://www.notion.so/joyjude/1a19f7ed1e0880ebab4fc39fca75417f
// Schema: Name (title) / userDefined:URL / Tags / Thumbnail / Published Date.
// Sorted: pinned-first, then by Published Date desc.

export type PressItem = {
  date: string; // ISO yyyy-mm-dd — when the article was published (not when added to Notion)
  title: string;
  outlet: string;
  url: string;
  tag?: string;
  thumbnail?: string; // optional og:image / hero image URL
  pinned?: boolean; // tier-1 outlets float to top regardless of date
};

export const PRESS: PressItem[] = [
  {
    date: "2026-03-05",
    title: "How art school creators are adapting to the age of AI",
    outlet: "The Guardian",
    url: "https://www.theguardian.com/everything-you-never-imagined/2026/mar/05/how-art-school-creators-are-adapting-to-the-age-of-ai",
    tag: "Feature",
    thumbnail:
      "https://i.guim.co.uk/img/media/529635e40467a75cf191c6e06a7918a680144fc7/0_0_5000_4000/master/5000.jpg?width=1200&quality=85&auto=format&fit=max",
    pinned: true,
  },
  {
    date: "2024-07-15",
    title:
      "RCA and Sodexo announce winners of innovative Eats and Algorithms project",
    outlet: "Royal College of Art",
    url: "https://www.rca.ac.uk/news-and-events/news/rca-and-sodexo-announce-winners-of-innovative-eats-and-algorithms-project-to-design-sustainable-solutions-for-digitising-food/",
    tag: "News",
    thumbnail:
      "https://rca-media2.rca.ac.uk/images/IMG_7003.71770e5c.fill-1200x1200.jpg",
  },
  {
    date: "2024-06-20",
    title:
      "'Eats and Algorithms': RCA and Sodexo collaborate on sustainable food solutions project",
    outlet: "Royal College of Art",
    url: "https://www.rca.ac.uk/business/case-studies/eats-and-algorithms-rca-and-sodexo-collaborate-on-sustainable-food-solutions-project/",
    tag: "Case Study",
    thumbnail:
      "https://rca-media2.rca.ac.uk/images/Sodexo_X_RCA_-_teams.2e16d0ba.fill-1200x1200.jpg",
  },
  {
    date: "2023-12-15",
    title: "SYNCOHE by Yutong Zhu — International Design Awards Winners",
    outlet: "IDA",
    url: "https://www.idesignawards.com/winners/zoom.php?eid=9-49848-23",
    tag: "Award",
    thumbnail:
      "https://s3-us-west-2.amazonaws.com/idesignawards/uploads/60547/9-49848-23/full/84bd923652143616b326bea04fd6f2a5.png",
  },
  {
    date: "2023-09-12",
    title: "Galleries — Spark Awards · International Design Competition",
    outlet: "Spark Awards",
    url: "https://galleries.sparkawards.com/index.cfm?year=2023&entry=45B9B4E1-C940-3692-19BA59B44CE46FDC",
    tag: "Award",
  },
  {
    date: "2024-05-26",
    title: "「开放的六月」特别活动 · 国窖1573 美术馆之夜",
    outlet: "WeChat / 川美",
    url: "https://mp.weixin.qq.com/s/sI6mg_dyA-7F8qRjyoOJEg",
    tag: "Exhibition",
  },
  {
    date: "2024-06-01",
    title: "我校举办 2024 年「开放的六月——四川美术学院艺术游」开幕式",
    outlet: "Sichuan Fine Arts Institute",
    url: "https://mp.weixin.qq.com/s/Sro5Oj3x1Z867VYB533yng",
    tag: "Exhibition",
  },
  {
    date: "2023-08-10",
    title: "「电容」第二期｜智能传感 — Tiny ML 工作坊回顾",
    outlet: "WeChat / 电容",
    url: "https://mp.weixin.qq.com/s/An2wXl44FVCy1TsqjspmXQ",
    tag: "Workshop",
  },
];
