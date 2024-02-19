import React from 'react';

function AnimationLoading(props) {
    return (
        <svg 
 width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<rect x="19" y="19" width="20" height="20" fill="#b4d6fd">
  <animate attributeName="fill" values="rgba(58, 183, 191, 0.5188709677419354);#b4d6fd;#b4d6fd" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0s" calcMode="discrete"></animate>
</rect><rect x="40" y="19" width="20" height="20" fill="#b4d6fd">
  <animate attributeName="fill" values="rgba(58, 183, 191, 0.5188709677419354);#b4d6fd;#b4d6fd" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.125s" calcMode="discrete"></animate>
</rect><rect x="61" y="19" width="20" height="20" fill="#b4d6fd">
  <animate attributeName="fill" values="rgba(58, 183, 191, 0.5188709677419354);#b4d6fd;#b4d6fd" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.25s" calcMode="discrete"></animate>
</rect><rect x="19" y="40" width="20" height="20" fill="#b4d6fd">
  <animate attributeName="fill" values="rgba(58, 183, 191, 0.5188709677419354);#b4d6fd;#b4d6fd" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.875s" calcMode="discrete"></animate>
</rect><rect x="61" y="40" width="20" height="20" fill="#b4d6fd">
  <animate attributeName="fill" values="rgba(58, 183, 191, 0.5188709677419354);#b4d6fd;#b4d6fd" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.375s" calcMode="discrete"></animate>
</rect><rect x="19" y="61" width="20" height="20" fill="#b4d6fd">
  <animate attributeName="fill" values="rgba(58, 183, 191, 0.5188709677419354);#b4d6fd;#b4d6fd" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.75s" calcMode="discrete"></animate>
</rect><rect x="40" y="61" width="20" height="20" fill="#b4d6fd">
  <animate attributeName="fill" values="rgba(58, 183, 191, 0.5188709677419354);#b4d6fd;#b4d6fd" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.625s" calcMode="discrete"></animate>
</rect><rect x="61" y="61" width="20" height="20" fill="#b4d6fd">
  <animate attributeName="fill" values="rgba(58, 183, 191, 0.5188709677419354);#b4d6fd;#b4d6fd" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.5s" calcMode="discrete"></animate>
</rect>
</svg>
    );
}

export default AnimationLoading;