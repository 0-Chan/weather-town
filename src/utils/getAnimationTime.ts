/* eslint-disable import/prefer-default-export */
export function getAnimationTime(animation: string, hours: string) {
  const time = Math.floor(Number(hours) / 3).toString();

  return animation + time;
}
