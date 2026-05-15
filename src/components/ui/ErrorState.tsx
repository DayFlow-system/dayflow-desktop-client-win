import { friendlyErrorMessage } from '../../api/errors';
import { Button } from './Button';
export function ErrorState({ error, onRetry }: { error:unknown; onRetry?:()=>void }) { return <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800"><p className="font-semibold">Unable to load data</p><p className="text-sm">{friendlyErrorMessage(error)}</p>{onRetry && <Button className="mt-3" variant="danger" onClick={onRetry}>Retry</Button>}</div>; }
