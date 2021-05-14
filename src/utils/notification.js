import { notification } from 'antd';
function notiSuccess(text) {
  notification.open({
    message: 'Success',
    description: 'Updated',
    duration: 1,
    // onClick: () => {
    //   console.log('Notification Clicked!');
    // },
  });
}

export { notiSuccess };
