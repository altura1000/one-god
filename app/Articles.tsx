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
    title: 'One God: Uniting Jews and Christians to Strengthen America',
    date: 'September 11, 2025',
    image: '',
    excerpt:
      'One God links churches and synagogues to resist extremists. We run joint service, study circles, and quick-response trainings to replace fear with facts. Support us to fund local programs that keep communities safe and free.',
    content:
      'One God is a grassroots, non-partisan initiative that brings Jewish and Christian communities together across the United States to push back against extremists who try to fracture our neighborhoods and undermine our democratic norms. We believe America’s strength is built on covenant: the promise that every person carries dignity, and that freedom is safeguarded by responsibility.From church basements to synagogue social halls, from small-town Main Street to big-city boroughs, we host joint service days, interfaith study circles, and rapid-response trainings that teach people how to de-escalate hate, report threats, and replace online rumor with verified facts. Our local “Neighbor Alliances” pair congregations to adopt schools, support first responders, and rebuild trust block by block.We refuse the false choice between faith and pluralism. By standing shoulder to shoulder—pastors and rabbis, youth leaders and retirees—we model a civic friendship that extremists cannot counterfeit. Join us as a monthly donor or volunteer partner, and help protect the American promise for the next generation. Become a supporter to fund training and microgrants that turn solidarity into action.',
  },
  {
    id: 2,
    title: 'One God Australia: Harmony Over Extremism',
    date: 'July 23, 2025',
    image: '',
    excerpt:
      'An Australian initiative uniting Jewish and Christian communities to strengthen everyday harmony and blunt extremist narratives; rooted in the spirit of the fair go and mateship, it lifts shared values without entering partisan politics.',
    content:
      'One God is an Australian initiative dedicated to a clear simple idea: Jews and Christians can live in harmony and, together, resist the pull of extremism. Australia’s identity—shaped by the fair go, mateship, and a quiet confidence from the coast to the outback—makes space for difference without fear. In that spirit, One God cultivates neighbourly respect between synagogues and churches, everyday kindness on trams and at footy grounds, and honest conversations that cool anger before it hardens.This is not a political project. It is a cultural promise to keep ordinary life intact: the shared barbecue in the park, the hello on a morning run, the freedom to worship without harassment. By lifting up shared values—dignity, responsibility, truthfulness—we undercut the slogans of those who seek to divide. We do it with listening, learning, and practical cooperation anchored in Australian law and civic norms.When Jewish and Christian Australians recognise each other as partners, extremist voices fade into the background. Harmony is not passive; it is made each day by people who choose decency over derision and facts over fear. That is the Australian way, and it is the heart of One God.',
  },
  {
    id: 3,
    title: 'One God Europe: Everyday Harmony, Not Extremism',
    date: 'August 28, 2025',
    image: '',
    excerpt: 'A pan-European initiative nurturing Jewish–Christian neighbourliness to leave extremism with no oxygen; grounded in civic habits—listening, learning, and shared public life—without stepping into partisan politics. It lifts quiet cooperation as Europe’s enduring strength.',
    content: 'One God in Europe starts with a modest conviction: Jewish and Christian neighbours can nurture everyday harmony and leave extremism with no oxygen. The continent’s identity—shaped by cathedrals and synagogues, town squares and tramlines—shows that difference can live side by side without fear. From Lisbon to Lviv, Stockholm to Sicily, we lift what Europeans already do well: greet a stranger, argue fairly, protect the dignity of worship, and keep facts above slogans. This is not a party platform. It is a civic habit: listening across traditions, learning shared ethics, and meeting as equals where real life happens—markets, schools, cafés, clinics. We highlight trusted history and media literacy so rumours cool before they burn. We prefer quiet cooperation to spectacle. When people recognise the humanity across a pew or a prayer hall, the noise of agitators fades. Harmony is practical: a festival that welcomes all, a volunteer shift after a storm, a calm response on a crowded train. One God points to these ordinary choices and says: this is Europe at its best—plural, lawful, confident. We model steadiness over rage and neighbourliness over suspicion, keeping a shared home open to all',
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
