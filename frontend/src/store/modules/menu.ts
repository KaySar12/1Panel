import { defineStore } from 'pinia';
import { MenuState } from '../interface';
import piniaPersistConfig from '@/config/pinia-persist';
import { RouteRecordRaw } from 'vue-router';
const whiteList = ['/login', '/error'];

export const MenuStore = defineStore({
    id: 'MenuState',
    state: (): MenuState => ({
        isCollapse: false,
        menuList: [],
        withoutAnimation: false,
    }),
    getters: {},
    actions: {
        async setCollapse() {
            this.isCollapse = !this.isCollapse;
            this.withoutAnimation = false;
        },
        async setMenuList(menuList: RouteRecordRaw[]) {
            const menus = menuList.filter((item) => {
                return whiteList.indexOf(item.path) < 0;
            });
            menus.forEach((menuItem, index) => {
                if (index === 5) {
                    menuItem.children.pop();
                    menuItem.children.splice(2, 2);
                    const newData = {
                        meta: { title: 'Toolbox', requiresAuth: false },
                        name: 'Toolbox',
                        path: '/toolbox',
                        props: true,
                    };
                    menus[5].children.push(newData);
                }
            });
            menus.splice(6, 1);
            this.menuList = menus;
        },
        closeSidebar(withoutAnimation: boolean) {
            this.isCollapse = true;
            this.withoutAnimation = withoutAnimation;
        },
    },
    persist: piniaPersistConfig('MenuStore'),
});

export default MenuStore;
