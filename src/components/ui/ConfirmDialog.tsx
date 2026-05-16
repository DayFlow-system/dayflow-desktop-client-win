import { useI18n } from '../../i18n/translations';
import { Button } from './Button';
import { Modal } from './Modal';

export function ConfirmDialog({ open, title, message, onConfirm, onCancel }: { open:boolean; title:string; message:string; onConfirm:()=>void; onCancel:()=>void }) {
  const { t } = useI18n();
  return <Modal open={open} title={title} onClose={onCancel}><p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{message}</p><div className="flex justify-end gap-2"><Button variant="secondary" onClick={onCancel}>{t('cancel')}</Button><Button variant="danger" onClick={onConfirm}>{t('confirm')}</Button></div></Modal>;
}
