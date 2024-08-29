const ignored_ann_ids = [
  495, // 有奖问卷调查开启！
  1263, // 米游社《原神》专属工具一览
  423, // 《原神》玩家社区一览
  422, // 《原神》防沉迷系统说明
  762, // 《原神》公平运营声明
];

const IGNORE_WORDS = [
  '修复',
  '内容专题页',
  '米游社',
  '调研',
  '防沉迷',
  '问卷',
  '公平运营',
  '纪行',
  '有奖活动',
  '反馈功能',
];

const arr = [
  {
    ann_id: 20596,
    title: '111',
    subtitle: '「导能原盘·引理」',
    banner:
      'https://sdk-webstatic.mihoyo.com/upload/ann/2024/07/19/0e611150f3a68f7ad2431c42b2037c4a_9114367204965828626.jpg',
    content: '',
    type_label: '活动公告',
    tag_label: '活动',
    tag_icon:
      'https://sdk-webstatic.mihoyo.com/announcement/2020/03/05/f3016cc0dbe3f9c2305566742ae5927f_1830032474842461374.png',
    login_alert: 1,
    lang: 'zh-cn',
    start_time: '2024-08-27 12:00:00',
    end_time: '2024-09-29 03:59:59',
  },
  {
    ann_id: 20585,
    title: '222',
    subtitle: '「凝露轻芳」祈愿',
    banner:
      'https://sdk-webstatic.mihoyo.com/upload/ann/2024/07/19/a613355dfdca28e391d39905d3d0879b_5070315245511088722.jpg',
    content: '',
    type_label: '活动公告',
    tag_label: '扭蛋',
    tag_icon:
      'https://sdk-webstatic.mihoyo.com/announcement/2020/03/05/2cf7327b5fb2c050872ead29e338e368_7400353291716098710.png',
    login_alert: 1,
    lang: 'zh-cn',
    start_time: '2024-08-01 16:00:00',
    end_time: '2024-08-27 14:59:00',
  },
  {
    ann_id: 20592,
    title: '333',
    subtitle: '「素霓伣天」祈愿',
    banner:
      'https://sdk-webstatic.mihoyo.com/upload/ann/2024/07/19/4dff39a5df5b0978653f46b92fa512f8_7130552963756568493.jpg',
    content: '',
    type_label: '活动公告',
    tag_label: '扭蛋',
    tag_icon:
      'https://sdk-webstatic.mihoyo.com/announcement/2020/03/05/2cf7327b5fb2c050872ead29e338e368_7400353291716098710.png',
    login_alert: 1,
    lang: 'zh-cn',
    start_time: '2024-08-01 16:00:00',
    end_time: '2024-09-27 14:59:00',
  },
  {
    ann_id: 20593,
    title: '444',
    subtitle: '「神铸赋形」祈愿',
    banner:
      'https://sdk-webstatic.mihoyo.com/upload/ann/2024/07/19/3cecd09457f7158fad2d9c140dc09fdb_8057167364819822333.jpg',
    content: '',
    type_label: '活动公告',
    tag_label: '扭蛋',
    tag_icon:
      'https://sdk-webstatic.mihoyo.com/announcement/2020/03/05/2cf7327b5fb2c050872ead29e338e368_7400353291716098710.png',
    login_alert: 1,
    lang: 'zh-cn',
    start_time: '2024-08-27 16:00:00',
    end_time: '2024-08-30 14:59:00',
  },

  {
    ann_id: 20575,
    title: '555',
    subtitle: '「莎邦之息」',
    banner:
      'https://sdk-webstatic.mihoyo.com/upload/ann/2024/07/04/1bc1b22504d66c39081a5b2bfde68151_178279048303361078.jpg',
    content: '',
    type_label: '活动公告',
    tag_label: '活动',
    tag_icon:
      'https://sdk-webstatic.mihoyo.com/announcement/2020/03/05/f3016cc0dbe3f9c2305566742ae5927f_1830032474842461374.png',
    login_alert: 1,
    lang: 'zh-cn',
    start_time: '2024-07-15 12:00:00',
    end_time: '2024-08-26 03:59:59',
  },

  {
    ann_id: 20597,
    title: '666',
    subtitle: '「精通移涌」',
    banner:
      'https://sdk-webstatic.mihoyo.com/upload/ann/2024/07/19/b6080224f25af0107cbb763339fd0509_6753901161948036702.jpg',
    content: '',
    type_label: '活动公告',
    tag_label: '活动',
    tag_icon:
      'https://sdk-webstatic.mihoyo.com/announcement/2020/03/05/f3016cc0dbe3f9c2305566742ae5927f_1830032474842461374.png',
    login_alert: 1,
    lang: 'zh-cn',
    start_time: '2024-08-29 12:00:00',
    end_time: '2024-08-30 03:59:59',
  },
];
// .slice(0, 1)

export const asdasd = () => {
  return arr
    .filter((item: any) => {
      return (
        !ignored_ann_ids.includes(item.ann_id) &&
        IGNORE_WORDS.every(word => item.title.indexOf(word) === -1)
      );
    })
    .map((item: any) => {
      return {
        ...item,
        id: item?.id || item?.ann_id,
      };
    });
};
