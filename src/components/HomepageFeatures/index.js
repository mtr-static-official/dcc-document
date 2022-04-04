import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '快速上手',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        如果在将来DDLC不幸遭到了更为严重的封锁（如在Steam锁国区等），你可以在这里下载
        到DDLC本体、汉化、Mods。
      </>
    ),
  },
  {
    title: '所有站点，集成于此',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        这里将会作为DCC所有站点的整合。
      </>
    ),
  },
  {
    title: '对创作者友好',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        只需要进行翻译、创作，作品的散发可以直接交给我们。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
