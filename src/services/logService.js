import * as Sentry from '@sentry/browser';

function init() {
  Sentry.init({
    dsn:
      'https://05aa3013a0ea466ea6f927bb94195ada@o388265.ingest.sentry.io/5224885',
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
