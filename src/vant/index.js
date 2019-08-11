import Vue from 'vue'
// 引入头部轮播图
import {
    Swipe,
    SwipeItem
} from 'vant';
import {
    Lazyload
} from 'vant';
// 引入宫格
import {
    Grid,
    GridItem
} from 'vant';
//引入标签
import {
    Tabbar,
    TabbarItem
} from 'vant';
//引入图标
import {
    Icon
} from 'vant';
//引入计时器
import {
    CountDown
} from 'vant';
// 引入购物车选项页
import {
    Tab,
    Tabs
} from 'vant';
// 引入侧边导航
import {
    Sidebar,
    SidebarItem
} from 'vant';
//引入搜索框
import {
    Search
} from 'vant';
//引入下拉菜单
import {
    DropdownMenu,
    DropdownItem
} from 'vant';
//引入商品导航
import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
} from 'vant';
//引入商品卡片
import { Card } from 'vant';
//引入提交订单栏
import { SubmitBar } from 'vant';
//引入复选框
import { Checkbox, CheckboxGroup } from 'vant'
//引入按钮
import { Button } from 'vant';
//插入输入框
import { Field } from 'vant';
//引入单元格
import { Cell, CellGroup } from 'vant'



export default () => {
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Grid).use(GridItem);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Icon);
    Vue.use(CountDown);
    Vue.use(Tab).use(Tabs);
    Vue.use(Sidebar);
    Vue.use(SidebarItem);
    Vue.use(Search);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue
        .use(GoodsAction)
        .use(GoodsActionIcon)
        .use(GoodsActionButton);
        Vue.use(Card);
        Vue.use(SubmitBar);
        Vue.use(Checkbox).use(CheckboxGroup);
        Vue.use(Button);
        Vue.use(Field);
        Vue.use(Cell).use(CellGroup);






}