// 按需引用element3

// import {ElButton,ElInput} from 'element3';
// import 'element3/lib/theme-chalk/button.css';
// import 'element3/lib/theme-chalk/input.css';
import {Button,Field} from 'vant';

export default function(app){

  app.use(Button)
  app.use(Field)
  // app.use(ElInput)
}