import React from 'react';
import { Admin, Resource, List, Datagrid, TextField } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const PostList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="body" />
      </Datagrid>
  </List>
);

/*
const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});
*/

// 以下所有键都是可选的。
// 我们尽力提供一个很好的默认值。
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    // 使用 `getContrastText()` 来最大化背景和文本之间的对比度。
    contrastThreshold: 3, // 对比阈值
    // 用于在其色调调色板中将颜色的亮度移动大约两个索引。
    // 例如，从红色500转换到红色300或红色700。
    tonalOffset: 0.2, // 色调偏移
  },
});

const App = () => (
  <Admin theme={theme} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default App;
