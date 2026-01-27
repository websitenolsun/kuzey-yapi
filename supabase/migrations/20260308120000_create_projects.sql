create type public.project_status as enum ('ongoing', 'completed');

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  image_url text not null,
  status public.project_status not null default 'ongoing',
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "projects_select_public" on public.projects
  for select
  to authenticated, anon
  using (true);

create policy "projects_insert_authenticated" on public.projects
  for insert
  to authenticated
  with check (true);

create policy "projects_update_authenticated" on public.projects
  for update
  to authenticated
  using (true)
  with check (true);

create policy "projects_delete_authenticated" on public.projects
  for delete
  to authenticated
  using (true);

insert into storage.buckets (id, name, public)
values ('projects-bucket', 'projects-bucket', true)
on conflict (id) do nothing;

create policy "projects_bucket_public_read" on storage.objects
  for select
  to authenticated, anon
  using (bucket_id = 'projects-bucket');

create policy "projects_bucket_authenticated_write" on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'projects-bucket');

create policy "projects_bucket_authenticated_update" on storage.objects
  for update
  to authenticated
  using (bucket_id = 'projects-bucket')
  with check (bucket_id = 'projects-bucket');

create policy "projects_bucket_authenticated_delete" on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'projects-bucket');
