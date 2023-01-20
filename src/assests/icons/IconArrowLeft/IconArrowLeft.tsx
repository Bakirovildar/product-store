import React from 'react';

export function IconArrowLeft({isWhiteColor}: {isWhiteColor: boolean}) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5" stroke={isWhiteColor ? "#fff" : "#2F323A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5L5 12L12 19" stroke={isWhiteColor ? "#fff" : "#2F323A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}
