/* eslint-disable import/prefer-default-export */
export function getAnimationTime(animation: string, hours: number) {
  const time = Math.floor(hours / 3).toString();

  if (time === '0') {
    // 0~23 시간제라 0시 일 때의 예외처리
    return animation + 8;
  }

  return animation + time;
}
