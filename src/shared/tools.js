export const notify = (title, body, icon) => {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon,
    });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(permission => {
      if (permission === 'granted') {
        new Notification(title, {
          body,
          icon,
        });
      }
    });
  }
};
