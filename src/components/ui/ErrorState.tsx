import { toApiError } from '../../api/errors';
import { useI18n, type TranslationKey } from '../../i18n/translations';
import { Button } from './Button';

const errorKeyByCode: Record<string, TranslationKey> = {
  NETWORK_ERROR: 'serverUnavailable',
  TIMEOUT: 'requestTimedOut',
  VALIDATION_ERROR: 'validationError',
  NOT_FOUND: 'notFound',
  INTERNAL_SERVER_ERROR: 'internalServerError',
};

export function ErrorState({ error, onRetry }: { error:unknown; onRetry?:()=>void }) {
  const { t } = useI18n();
  const apiError = toApiError(error, t('unknownError'));
  const message = errorKeyByCode[apiError.code] ? t(errorKeyByCode[apiError.code]) : apiError.message;
  return <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200"><p className="font-semibold">{t('unableToLoadData')}</p><p className="text-sm">{message}</p>{onRetry && <Button className="mt-3" variant="danger" onClick={onRetry}>{t('retry')}</Button>}</div>;
}
