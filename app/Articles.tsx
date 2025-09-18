'use client';
import React, { useMemo, useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type Article = {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string; // plain text; paragraphs split by \n\n below
};

export const articles: Article[] = [
  {
    id: 1,
    title: 'America at a Crossroads',
    date: 'March 15, 2024',
    image: '',
    excerpt:
      'Polarization is tearing at our shared story. See how One God is rebuilding unity around liberty, justice, and shared responsibility.',
    content:
      'One-God is a civic, faith-driven organization preparing its next chapter in the United States. Our plan is simple and urgent: connect Jewish and Christian neighbors, city by city, to counter the extremist fringe that threatens America’s liberal, open society. We stand for the Constitution and the Bill of Rights, for town halls and school boards where debate stays civil, for Main Street and the open road, for the First Amendment pulpit and the college seminar room, for ballparks, jazz clubs, national parks, and startup garages under the same stars and stripes. In the coming year, One-God will launch local alliances, shared service projects, and learning circles that teach respect across traditions. We will train community guardians to de-escalate hate, partner with synagogues and churches, and support educators and police in lawful, rights-respecting responses. Our promise is practical hope: when Americans bridge faith lines, extremism loses oxygen. The free world needs an America that is confident, plural and united; this is how we help build it—together, under one God; we honor many U.S. identities—rural and urban, all.',
  },
  {
    id: 2,
    title: 'Unity in Australia: Jews & Christians Stand Together',
    date: 'March 15, 2024',
    image: '',
    excerpt:
      'Interfaith partnerships are strengthening Australia’s democratic identity and community safety in the face of rising extremism and hate.',
    content:
      'Communities are building coalitions that actively resist hate and extremism.\n\nThis work strengthens democracy and social trust.',
  },
  {
    id: 3,
    title: 'complete title',
    date: 'March 15, 2024',
    image: '',
    excerpt: 'complete europe',
    content: 'complete europe',
  },
];

export default function Cards({ BASE }: { BASE: string }) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Build image URLs without mutating the original array
  const data = useMemo<Article[]>(() => {
    const paths = [`${BASE}/america.png`, `${BASE}/australia.png`, `${BASE}/europe.png`];
    return articles.map((a, idx) => ({ ...a, image: paths[idx] ?? a.image }));
  }, [BASE]);

  // Close on ESC + lock body scroll while modal is open
  useEffect(() => {
    if (!selectedArticle) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    document.addEventListener('keydown', onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [selectedArticle]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((article) => (
        <Card
          key={article.id}
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => setSelectedArticle(article)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setSelectedArticle(article)}
          aria-label={`Open ${article.title}`}
        >
          <div
            className="aspect-video bg-muted rounded-t-lg bg-cover bg-center"
            // dynamic bg image: use inline style for runtime value
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <CardHeader>
            <Badge variant="secondary" className="w-fit">
              {article.date}
            </Badge>
            <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="leading-relaxed">
              {article.excerpt}
            </CardDescription>
          </CardContent>
        </Card>
      ))}

      {/* --- Modal / Popup --- */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            // close if clicking the overlay (not inside the dialog)
            if (e.currentTarget === e.target) setSelectedArticle(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={selectedArticle.title}
        >
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-lg">
            <div className="relative">
              {/* Use inline style for dynamic bg */}
              <div
                className="h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedArticle.image})` }}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {selectedArticle.date}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-balance leading-tight">
                  {selectedArticle.title}
                </h1>

                {/* Content as paragraphs split by \n\n */}
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {selectedArticle.content.split('\n\n').map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                </div>

                {/* If content may contain HTML instead of plain text, swap the block above with:
                <div
                  className="prose prose-gray dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
                */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
