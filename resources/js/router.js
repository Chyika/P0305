import VueRouter from 'vue-router';
import route from "./route";

export default new VueRouter({
    routes: [
        { // Главная
            path: '/',
            name: "home",
            meta: { layout: 'dashboard' },
            component: () => import('./views/Accesses/AccessesHosts')
        },
        { // Панель управления
            path: route('dashboard'),
            name: "dashboard",
            meta: { layout: 'dashboard' },
            component: () => import('./views/Accesses/AccessesHosts')
        },
        { // Таблица доступов: Хостинги
            path: route('dashboard.host'),
            name: "dashboard.host",
            meta: {
                layout: 'dashboard'
            },
            component: () => import('./views/Accesses/AccessesHosts')
        },
        { // Таблица доступов: Сайты
            path: route('dashboard.host'),
            name: "dashboard.host",
            meta: {
                layout: 'dashboard'
            },
            component: () => import('./views/Accesses/AccessesHosts')
        },
        { // Таблица доступов: Другое
            path: route('dashboard.host'),
            name: "dashboard.host",
            meta: {
                layout: 'dashboard'
            },
            component: () => import('./views/Accesses/AccessesHosts')
        },
        { // Отчеты
            path: route('dashboard.host'),
            name: "dashboard.host",
            meta: {
                layout: 'dashboard'
            },
            component: () => import('./views/Accesses/AccessesHosts')
        }
    ],
    mode: 'history'
});
