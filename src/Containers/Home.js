import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div>
      <div className={'home'}>
        <div className={'home__text'}>
          <div></div>
          <div>
            <div className={'home__text__name'}>Aabhimanyu Gupta</div>
            <div className={'home__text__title'}>Software Developer</div>
          </div>
          <div>
            {/* <div className={"home__text__release"}>
                            Coming Soon
                        </div>
                        <div className={"home__text__date"}>
                            30.11.2021
                        </div>
                        <div className={"home__text__tech"}>
                            <b>React</b> x <b>Material UI</b> x <b>Django</b> x <b>Kubernetes</b> x <b>AWS</b>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
