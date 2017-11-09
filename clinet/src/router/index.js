import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page from '@/components/Page'
import Admin from '@/components/AdminPage'
import ArticleAdd from '@/components/ArticleAdd'
import ArticleEdit from '@/components/ArticleEdit'
import mainContent from '@/components/mainContent'
import contentDetail from '@/components/contentDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/article_add',
      component: ArticleAdd
    },
    {
      path: '/article/:id',
      component: ArticleEdit
    },
    {
      path: '/article/delete/:id',
      component: ArticleAdd
    },
    {
      path: '/blog',
      component: Page,
      children: [{
        path: '',
        component: mainContent
      },
      {
        path: ':id',
        component: contentDetail,
        props: true
      }]
    }
  ]
})
