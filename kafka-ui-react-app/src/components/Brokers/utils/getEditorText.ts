import { BrokerMetrics } from 'generated-sources';
import { parse, stringify } from 'lossless-json';

export const getEditorText = (metrics: BrokerMetrics | undefined): string =>
  metrics ? stringify(metrics) : 'Metrics data not available';
