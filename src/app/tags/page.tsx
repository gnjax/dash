// src/app/tags/page.tsx
export const dynamic = 'force-dynamic';

import TagsClient from './tags.client';

export default function TagsPage() {
  return <TagsClient />;
}
