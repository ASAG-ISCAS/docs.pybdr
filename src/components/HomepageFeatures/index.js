import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [{
    title: 'Theory', Svg: require('@site/static/img/theory.svg').default, description: (<>
        The boundary of the reachable set of given initial set at specified time instant is equal to
        the reachable set of the boundary of the initial set at this given time instant.
    </>),
}, {
    title: 'Data Structure', Svg: require('@site/static/img/tensor.svg').default, description: (<>
        Interval arithmetic is supported by means of tensor, compatible with the broadcast mechanism.
    </>),
}, {
    title: 'Computation', Svg: require('@site/static/img/math.svg').default, description: (<>
        Easy to take partial derivatives of arbitrary order with support of interval arithmetic.
    </>),
},];

function Feature({Svg, title, description}) {
    return (<div className={clsx('col col--4')}>
        <div className="text--center">
            <Svg className={styles.featureSvg} role="img"/>
        </div>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>);
}

export default function HomepageFeatures() {
    return (<section className={styles.features}>
        <div className="container">
            <div className="row">
                {FeatureList.map((props, idx) => (<Feature key={idx} {...props} />))}
            </div>
        </div>
    </section>);
}
