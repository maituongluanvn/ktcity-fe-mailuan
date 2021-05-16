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

function notiCreateSuccess(text) {
  notification.open({
    message: 'Success',
    description: 'Created',
    duration: 1,
    // onClick: () => {
    //   console.log('Notification Clicked!');
    // },
  });
}

function notiError(text) {
  notification.open({
    message: 'Error',
    description: text,
    duration: 1,
    // onClick: () => {
    //   console.log('Notification Clicked!');
    // },
  });
}

export { notiSuccess, notiCreateSuccess, notiError };
