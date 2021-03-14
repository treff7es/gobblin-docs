/*module.exports = {
  Docs: {
    Docusaurus: ['index'],
    Features: ['mdx'],
    Docs: ['Getting-Started'],
  },
};
*/

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'doc',
      id: 'Getting-Started',
    },
    {
      type: 'doc',
      id: 'Gobblin-Architecture',
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
          'user-guide/Working-with-Job-Configuration-Files',
          'user-guide/Gobblin-Deployment',
          'user-guide/Gobblin-as-a-Library',
          'user-guide/Gobblin-CLI',
          'user-guide/Gobblin-Compliance',
          'user-guide/Gobblin-on-Yarn',
          'user-guide/Compaction',
          'user-guide/State-Management-and-Watermarks',
          'user-guide/Working-with-the-ForkOperator',
          'user-guide/Configuration-Properties-Glossary',
          'user-guide/Source-schema-and-Converters',
          'user-guide/Partitioned-Writers',
          'user-guide/Monitoring',
          'user-guide/Gobblin-template',
          'user-guide/Gobblin-Schedulers',
          'user-guide/Job-Execution-History-Store',
          'user-guide/Building-Gobblin',
          'user-guide/Gobblin-genericLoad',
          'user-guide/Hive-Registration',
          'user-guide/Config-Management',
          'user-guide/Docker-Integration',
          'user-guide/Troubleshooting',
          'user-guide/FAQs',
      ],
    },
    {
      type: 'category',
      label: 'Sources',
      items: [
          'sources/AvroFileSource',
          'sources/CopySource',
          'sources/GoogleAnalyticsSource',
          'sources/GoogleDriveSource',
          'sources/GoogleWebmaster',
          'sources/HadoopTextInputSource',
          'sources/HelloWorldSource',
          'sources/HiveAvroToOrcSource',
          'sources/HivePurgerSource',
          'sources/HiveSource',
          'sources/KafkaSource',
          'sources/MySQLSource',
          'sources/OracleSource',
          'sources/QueryBasedSource',
          'sources/RestApiSource',
          'sources/SalesforceSource',
          'sources/SftpSource',
          'sources/SimpleJsonSource',
          'sources/SqlServerSource',
          'sources/TeradataSource',
          'sources/WikipediaSource',
      ],
    },
    {
      type: 'category',
      label: 'Gobblin Adaptors',
      items: [
        'adaptors/Gobblin-Distcp',
        'adaptors/Hive-Avro-To-ORC-Converter',
      ],
    },
    {
      type: 'category',
      label: 'Case Studies',
      items: [
        'case-studies/Kafka-HDFS-Ingestion',
        'case-studies/Publishing-Data-to-S3',
        'case-studies/Writing-ORC-Data',
        'case-studies/Hive-Distcp',
      ],
    },
    {
      type: 'category',
      label: 'Gobblin Data Management',
      items: [
        'data-management/Gobblin-Retention',
        'data-management/DistcpNgEvents',
      ],
    },
    {
      type: 'category',
      label: 'Gobblin Metrics',
      items: [
        'metrics/Gobblin-Metrics',
        'metrics/Existing-Reporters',
        'metrics/Metrics-for-Gobblin-ETL',
        'metrics/Gobblin-Metrics-Architecture',
        'metrics/Implementing-New-Reporters',
        'metrics/Gobblin-Metrics-Performance',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      items: [
        'developer-guide/Customization-for-New-Source',
        'developer-guide/Customization-for-Converter-and-Operator',
        'developer-guide/CodingStyle',
        'developer-guide/Gobblin-Compliance-Design',
        'developer-guide/IDE-setup',
        'developer-guide/Monitoring-Design',
        'developer-guide/Documentation-Architecture',
        'developer-guide/Contributing',
        'developer-guide/GobblinModules',
        'developer-guide/HighLevelConsumer',
      ],
    },
    {
      type: 'category',
      label: 'Project',
      items: [
        'project/Feature-List',
        'project/Talks-and-Tech-Blogs',
        'project/Posts',
      ],
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      items: [
        'miscellaneous/Camus-to-Gobblin-Migration',
        'miscellaneous/Exactly-Once-Support',
      ],
    },

  ]
};
