// Server component to inject JSON-LD
export default function JsonLd({ data, id }: { data: unknown; id?: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      {...(id ? { id } : {})}
    />
  );
}

