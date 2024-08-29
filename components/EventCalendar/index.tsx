import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import {useEffect, useState} from 'react';
import type {CalendarProps, CalendarWeekItem} from './CalendarType';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  calculateEventPosition,
  generateCalendar,
  parseDataForGrid,
} from './utils2';
import {Row, Col} from 'react-native-flex-grid';

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);

function EventCalendar({value, activity, style}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(value);
  const [showActivityOverview, setShowActivityOverview] = useState(false);

  const [collapseIdx, setCollapseIdx] = useState(-1);
  const dataWithPosition = calculateEventPosition(currentDate, activity);
  const data = parseDataForGrid(dataWithPosition);
  const maxLevel = Math.max(...dataWithPosition.map(({level}) => level));
  console.log(
    'dataWithPosition',
    dataWithPosition.map(({width, left, title, start_time, end_time}) => ({
      width,
      left,
      title,
      a: currentDate.startOf('w').add(1, 'day').diff(start_time, 'day'),
      b: currentDate.endOf('w').add(1, 'day').diff(end_time, 'day'),
      start_time,
      end_time,
    })),
  );
  const handleDayChange = (type: boolean) => {
    setCurrentDate(
      type ? currentDate.add(7, 'day') : currentDate.subtract(7, 'day'),
    );
  };

  useEffect(() => {
    // setEventGridPosition(calculateEventPosition(currentDate, activity));
  }, [currentDate, activity]);

  return (
    <View className="m-2" style={style}>
      <View className="p-3 flex flex-row justify-between items-center">
        <TouchableOpacity onPress={() => handleDayChange(false)}>
          <Image source={require('../asset/arrow-l.png')} className="w-6 h-6" />
        </TouchableOpacity>
        <Text className="font-bold font-serif">
          {currentDate.format('MMMM')}
        </Text>
        <TouchableOpacity onPress={() => handleDayChange(true)}>
          <Image source={require('../asset/arrow-r.png')} className="w-6 h-6" />
        </TouchableOpacity>
      </View>

      <Row className="flex flex-row justify-between items-center border">
        {generateCalendar(currentDate).map((item, i) => (
          <Col className="flex items-center">
            <Text className="text-xs">{item.format('ddd')}</Text>
            <Text
              className={`p-1 ${item.isSame(dayjs(), 'day') ? 'bg-orange-400 rounded-full' : ''}`}>
              {item.date()}
            </Text>
          </Col>
        ))}
      </Row>
      {/* 日程区 */}
      {[...data.keys()].map((k, i) => {
        let arr = data.get(i + 1);
        return (
          <Row>
            {arr?.map(({width, left, title, color}) => {
              return (
                <Col
                  className="rounded-lg overflow-hidden border border-cyan-50"
                  style={{backgroundColor: color}}
                  xs={(width / 7) * 12}
                  xsOffset={(left / 7) * 12}>
                  <Text>{title}</Text>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </View>
  );
}

export default EventCalendar;
