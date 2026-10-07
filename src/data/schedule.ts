/**
 * The daily routine shown on /schedule. One block per time slot; a block with
 * `end` renders as a range, a block without it as a point in time. `items` break
 * a longer block into its parts (e.g. the three study sessions inside 学习作业).
 *
 * Times are "HH:MM" strings — they are never turned into Date objects, so a slot
 * like 20:30–24:00 can cross midnight without special-casing.
 */
export type ScheduleBlock = {
  start: string;
  /** Omit for a single-point entry such as "08:00 起床". */
  end?: string;
  label: string;
  /** Nested breakdown of a longer block. */
  items?: Omit<ScheduleBlock, "items">[];
};

export const dailyPlan: ScheduleBlock[] = [
  { start: "08:00", label: "起床" },
  { start: "08:00", end: "08:30", label: "洗漱 + 吃饭" },
  {
    start: "08:30",
    end: "10:00",
    label: "完成学习作业",
    items: [
      { start: "08:30", end: "09:00", label: "英语四级学习" },
      { start: "09:00", end: "09:30", label: "每日算法题目" },
      { start: "09:30", end: "10:00", label: "大学课程学习" },
    ],
  },
  { start: "10:00", end: "12:00", label: "练枪 + 无畏契约排位" },
  { start: "12:00", end: "12:30", label: "吃饭" },
  { start: "12:30", end: "16:30", label: "工作 / 毕业设计" },
  { start: "16:30", end: "17:00", label: "随便刷刷视频" },
  { start: "17:00", end: "17:30", label: "吃泡面" },
  {
    start: "17:30",
    end: "19:00",
    label: "干点自己喜欢的事情（学习或做项目）",
  },
  { start: "19:00", end: "20:30", label: "运动，燃烧脂肪" },
  { start: "20:30", end: "24:00", label: "学习或做项目" },
];
