export const formatTime = (seconds) => {
  const secondsRounded = Math.floor(seconds)
  const min = Math.floor(secondsRounded / 60)
  const sec = (secondsRounded % 60) < 10 ? `0${secondsRounded % 60}` : `${secondsRounded % 60}`
  return `${min}:${sec}`
};
