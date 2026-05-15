import { Modal } from './Modal';
import { Button } from './Button';
export function ConfirmDialog({ open, title, message, onConfirm, onCancel }: { open:boolean; title:string; message:string; onConfirm:()=>void; onCancel:()=>void }) { return <Modal open={open} title={title} onClose={onCancel}><p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{message}</p><div className="flex justify-end gap-2"><Button variant="secondary" onClick={onCancel}>Cancel</Button><Button variant="danger" onClick={onConfirm}>Confirm</Button></div></Modal>; }
