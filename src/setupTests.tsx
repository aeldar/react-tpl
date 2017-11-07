// Fix for this issue https://github.com/facebookincubator/create-react-app/issues/3199
(global as any).requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
