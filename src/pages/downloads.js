import React from 'react';
import Layout from '@theme/Layout';
import clsx from "clsx";
import styles from "./styles.module.css";

const releases = [
  {version: '0.15.0'},
  {version: '0.14.0'},
  {version: '0.13.0'},
  {version: '0.12.0'},
]

function Release({version}) {
  return (
      <div className={clsx('col col--12', styles.releases)}>
        <h3>{version}</h3>
        <p>
          Official <a href={`https://www.apache.org/dyn/closer.lua/gobblin/apache-gobblin-incubating-${version}/apache-gobblin-incubating-sources-${version}.tgz`}>source release</a>
          <a href={`https://www.apache.org/dyn/closer.lua/gobblin/apache-gobblin-incubating-${version}/apache-gobblin-incubating-sources-${version}.tgz.sha512`}>[SHA512]</a>
          <a href={`https://www.apache.org/dyn/closer.lua/gobblin/apache-gobblin-incubating-${version}/apache-gobblin-incubating-sources-${version}.tgz.asc`}>[ASC]</a>
        </p>
        <a href={`https://github.com/apache/gobblin/blob/release-${version}/CHANGELOG.md`}>CHANGELOG</a>
      </div>
  );
}


function Download() {
  return (
      <Layout title="Downloads">
        <section className={styles.executionMode}>
          <div className="container">
            <div className={clsx("row row--no-gutters", styles.releaseRow)}>
              {releases.map((props, idx) => (
                  <Release key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
  );
}

export default Download;
