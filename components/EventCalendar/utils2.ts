import dayjs, {Dayjs} from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import {CalendarActivity, CalendarWeekItem} from './CalendarType';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export const rainbowColors = [
  '#fca5a5',
  '#fdba74',
  '#fde047',
  '#86efac',
  '#5eead4',
  '#93c5fd',
  '#d8b4fe',
];

// 层级分配算法
// 日程的排布逻辑细节：
// - 日程越早的排的层级越高
// - 日程一旦确定层级就是连续的，直至结束还是确定好的层级位置
// - 为了保证空间充分利用，一个新日程的起始日期要加入，会看当前每个层级进行日程的结束时间，
// 从高到低一旦有个层级结束日期等于或早过新日程的起始日期，新日程就是这个层级接着排布下去
export const levelAssignment = (events: CalendarActivity[]) => {
  // 记录每一层级的当前最新的结束日期
  // 用于判断新日程是直接接在某层级日程的后面还是为新日程添加新层级
  const check: Dayjs[] = [];
  // 按日程的起始日期进行排序
  const sortActivity = events.sort((a, b) => {
    return dayjs(a.start_time).isBefore(b.start_time) ? -1 : 1;
  });

  return sortActivity.map(item => {
    const {start_time, end_time} = item;
    if (check.length === 0) {
      check.push(dayjs(end_time));
      return {...item, level: 1};
    }
    // 遍历层级，是否需要另起一行
    const isNeedNewLine = check.findIndex(endDate => {
      return dayjs(start_time).diff(endDate, 'day') === 1;
    });
    if (isNeedNewLine === -1) {
      // 没有超过任一层级的最新的活动结束日期，就需要新建一行
      check.push(dayjs(end_time));
      return {...item, level: check.length};
    } else {
      // 有 就在符合的层级进行添加，标记，并更新活动的结束日期
      check[isNeedNewLine] = dayjs(end_time);
      return {...item, level: isNeedNewLine + 1};
    }
  });
};

export const calculateEventPosition = (
  date: Dayjs | string,
  events: CalendarActivity[],
): CalendarWeekItem[] => {
  const eventsWithLevel = levelAssignment(events);
  // 一个活动对应一种颜色 尽量区分开
  const colorMap = new Map<number, string>(
    events.map((item, i) => [item.id, rainbowColors[i % rainbowColors.length]]),
  );
  // startOf/endOf("w") 是以周日开始，周六为结束
  const startOfW = dayjs(date).startOf('w').add(1, 'day');
  const endOfW = dayjs(date).endOf('w').add(1, 'day');
  return eventsWithLevel
    .map(obj => {
      // diff 大与小比为正数，反之负数
      const {start_time, end_time} = obj;
      let startDiff = startOfW.diff(start_time, 'day');
      let endDiff = endOfW.diff(end_time, 'day');
      // 起始时间比 startOfW 早或一样，那日程左偏移值为0，反之有多少就是多少左偏移值
      let left = startDiff >= 0 ? 0 : Math.abs(startDiff);
      // 结束时间比 endOfW 晚或一样，那日程长度为以当前7天与左偏移值相减可得，反之得再减上右偏移值得到日程长度
      let width = endDiff <= 0 ? 7 - left : 7 - left - endDiff;
      return {
        ...obj,
        width,
        left,
        grid_row: [obj.level, obj.level + 1],
        grid_col: [left + 1, left + width + 1],
        color: colorMap.get(obj.id)!,
      };
    })
    .filter(({width}) => width !== 0);
};

export const parseClassName = (event: CalendarWeekItem): string => {
  // !!! tailwindcss 样式不生效问题
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  // tailwindcss 目前不支持  拼接字符串  这种动态类名的写法
  // tailwindcss 只会在源文件中找到作为完全不间断的字符串存在的类。（如下面这种不完整的类名，他就不会进行处理）
  const {left, width, level, color} = event;
  return `absolute rounded-lg pl-2 bg-[${color}] top-[${
    20 * level + '%'
  }] width-[calc(${width}00%/7)] ${
    left === 0 || left === 7 ? '' : `left-[calc(${left}00%/7)]`
  }`;
  // return classNames("absolute rounded-lg pl-2", {
  //   [`bg-[${color}]`]: true,
  //   [`top-[${20 * level + "%"}]`]: true,
  //   [`w-[calc(${width}00%/7)]`]: true,
  //   [`left-[calc(${left}00%/7)]`]: left !== 0 && left !== 7,
  // });
};

// 已结束的活动往后排序，优先展示正在进行的活动
export const eventOverviewListSorting = (events: CalendarActivity[]) => {
  const endEventList: CalendarActivity[] = [];
  let idx = 0;
  while (idx <= events.length - 1) {
    const element = events[idx];
    if (dayjs().isAfter(element.end_time)) {
      events.splice(idx, 1);
      element && endEventList.push({...element, isEnd: true});
    } else {
      idx++;
    }
  }
  events.push(...endEventList);
  return events;
};
