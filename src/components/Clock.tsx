import React, { useState, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

const ClockIndicate = styled.h1`
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 150%);
  font: 9rem/0.1 "Poiret one";
  color: #ffffff;
  text-align: center;
`;
const Colon = styled.span<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  font-weight: lighter;
  font-size: 18rem;
  transition: opacity 0.05s ease-in-out;
`;
const DateIndicate = styled.div`
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 150%);
  font: 4rem/0.8 "Poiret one";
  color: #ffffff;
  text-align: right;
`;

interface Props {
  currentTime: Date;
  showDate: boolean;
}

export default function Clock({ currentTime, showDate = true }: Props) {
  const intervalTime = 1000; // ms
  const [time, setTime] = useState(currentTime);
  const hours = useMemo(() => format(time, 'HH'), [time]);
  const minutes = useMemo(() => format(time, 'mm'), [time]);
  const formattedDate = useMemo(() => format(time, 'MMM d'), [time]);

  const isColonBlinking = useMemo(() => time.getSeconds() % 2 === 0, [time]);

  useEffect(() => {
    function updateTime() {
      setTime(new Date());
    }
    const interval = setInterval(updateTime, intervalTime);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ClockIndicate>
      {hours}
      <Colon show={isColonBlinking}>:</Colon>
      {minutes}
      {showDate ? <DateIndicate>{formattedDate}</DateIndicate> : null}
    </ClockIndicate>
  );
}
