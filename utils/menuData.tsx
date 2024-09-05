// 懒加载组件 要配合Suspense使用，避免白屏问题
// fast fresh问题 懒加载的组件里不能额外再导出别的东西
// export const Genshin2 = lazy(() => import("../pages/Genshin"));
// const StarRail = lazy(() => import("../pages/StarRail"));

import Arknights from '../page/Arknights';
import FGO from '../page/FGO';
import Genshin from '../page/Genshin';
import Pns from '../page/Pns';
import StarRail from '../page/StarRail';
import WutheringWaves from '../page/wuthering-waves';

type menuItem = {
  name: string;
  path: string;
  icon: string; // 对应列表要展示的icon的url
  element: any;
};

export const menuList: menuItem[] = [
  // {
  //   name: '公主连结',
  //   path: '/pcr',
  //   icon: 'https://pcredivewiki.tw/static/images/unit/icon_unit_117131.png',
  //   element: Pcr,
  // },
  {
    name: '原神',
    path: '/genshin',
    icon: 'https://img-static.mihoyo.com/communityweb/upload/14792b4820e324d9e9ef2bbea406f4ae.png',
    element: Genshin,
  },
  {
    name: '星穹铁道',
    path: '/starrail',
    icon: 'https://upload-bbs.mihoyo.com/upload/2022/04/28/dc4106543564d1a372b47f5a3cf15958_994599019851288826.png?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg',
    element: StarRail,
  },
  {
    name: 'FGO',
    path: '/fgo',
    icon: 'https://fgo.wiki/images/thumb/a/a2/%E6%96%AF%E5%8D%A1%E5%93%88%C2%B7%E6%96%AF%E5%8D%A1%E8%92%82%28Ruler%29_status_1.png/150px-%E6%96%AF%E5%8D%A1%E5%93%88%C2%B7%E6%96%AF%E5%8D%A1%E8%92%82%28Ruler%29_status_1.png',
    element: FGO,
  },
  {
    name: '明日方舟',
    path: '/arknights',
    icon: 'https://media.prts.wiki/6/66/%E5%A4%B4%E5%83%8F_%E7%BB%B4%E4%BB%80%E6%88%B4%E5%B0%94.png',
    // icon: "https://prts.wiki/images/3/3a/%E5%A4%B4%E5%83%8F_%E7%BC%AA%E5%B0%94%E8%B5%9B%E6%80%9D.png",
    element: Arknights,
  },
  {
    name: '鸣潮',
    path: '/mc',
    icon: 'https://prod-alicdn-community.kurobbs.com/postBanner/1721276570014265525.png',
    element: WutheringWaves,
  },
  {
    name: '战双帕弥什',
    path: '/pns',
    icon: 'https://prod-alicdn-community.kurobbs.com/forum/243f9583d24142bba43633972763294120240505.png',
    element: Pns,
  },
];
