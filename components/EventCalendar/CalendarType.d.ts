import {Dayjs} from 'dayjs';

export declare interface CalendarActivity {
  id: number;
  title: string;
  start_time: string;
  end_time: string;
  banner?: string;
  content?: string;
  range?: string;
  isEnd?: boolean;
}
export declare interface CalendarProps {
  value: Dayjs;
  activity: CalendarActivity[];
  style?: StyleProp<ViewStyle>;
}

export declare interface CalendarWeekItem {
  id: number;
  title: string;
  start_time: string;
  end_time: string;
  // 渲染到日历对应位置所需要参数
  color: string;
  level: number; // top
  left: number;
  width: number;
  grid_row: number[];
  grid_col: number[];
}
