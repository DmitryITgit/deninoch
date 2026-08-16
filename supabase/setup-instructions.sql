-- Video instructions for apartments
-- Paste this into Supabase: SQL Editor → New query → Run

create table if not exists public.instructions (
  id bigint generated always as identity primary key,
  apartment_id bigint not null references public.apartments(id) on delete cascade,
  title text not null default '',
  url text not null,
  created_at timestamptz not null default now()
);

create index if not exists instructions_apartment_id_idx
  on public.instructions (apartment_id);

alter table public.instructions enable row level security;

drop policy if exists "Public can view instructions" on public.instructions;
drop policy if exists "Authenticated can insert instructions" on public.instructions;
drop policy if exists "Authenticated can update instructions" on public.instructions;
drop policy if exists "Authenticated can delete instructions" on public.instructions;

create policy "Public can view instructions"
  on public.instructions for select
  to anon, authenticated
  using (true);

create policy "Authenticated can insert instructions"
  on public.instructions for insert
  to authenticated
  with check (true);

create policy "Authenticated can update instructions"
  on public.instructions for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated can delete instructions"
  on public.instructions for delete
  to authenticated
  using (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'videos',
  'videos',
  true,
  104857600,
  array['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view videos" on storage.objects;
drop policy if exists "Authenticated can upload videos" on storage.objects;
drop policy if exists "Authenticated can update videos" on storage.objects;
drop policy if exists "Authenticated can delete videos" on storage.objects;

create policy "Public can view videos"
  on storage.objects for select
  to public
  using (bucket_id = 'videos');

create policy "Authenticated can upload videos"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'videos');

create policy "Authenticated can update videos"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'videos')
  with check (bucket_id = 'videos');

create policy "Authenticated can delete videos"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'videos');
