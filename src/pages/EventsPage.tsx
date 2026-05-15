import { useMemo, useState } from 'react';
import { EventCard } from '../components/domain/EventCard';
import { EventForm } from '../components/forms/EventForm';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { ErrorState } from '../components/ui/ErrorState';
import { LoadingState } from '../components/ui/LoadingState';
import { Modal } from '../components/ui/Modal';
import { useEventMutations, useEvents } from '../hooks/useEvents';
import type { DayFlowEvent } from '../types/event';
export function EventsPage() { const q=useEvents(); const m=useEventMutations(); const [create,setCreate]=useState(false); const [edit,setEdit]=useState<DayFlowEvent|null>(null); const groups=useMemo(()=>{ const map=new Map<string,DayFlowEvent[]>(); (q.data??[]).forEach(e=>map.set(e.date,[...(map.get(e.date)??[]),e])); return [...map.entries()].sort(([a],[b])=>a.localeCompare(b)); },[q.data]); if(q.isLoading) return <LoadingState />; if(q.isError) return <ErrorState error={q.error} onRetry={() => void q.refetch()} />; return <div className="space-y-4"><div className="flex justify-between"><h1 className="text-2xl font-bold">Events</h1><Button onClick={()=>setCreate(true)}>Create Event</Button></div>{groups.length===0 ? <EmptyState title="No events" /> : groups.map(([date,events])=><section key={date} className="space-y-3"><h2 className="font-semibold">{date}</h2>{events.map(e=><EventCard key={e.id} event={e} onEdit={()=>setEdit(e)} onCancel={()=>{ if (window.confirm('Cancel this event?')) m.cancel.mutate(e.id); }} />)}</section>)}<Modal open={create} title="Create event" onClose={()=>setCreate(false)}><EventForm onSubmit={(input)=>m.create.mutate(input,{onSuccess:()=>setCreate(false)})} submitLabel="Create" /></Modal><Modal open={!!edit} title="Edit event" onClose={()=>setEdit(null)}>{edit && <EventForm initial={edit} onSubmit={(input)=>m.update.mutate({id:edit.id,input},{onSuccess:()=>setEdit(null)})} />}</Modal></div>; }
