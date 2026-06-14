import {
  getFaqJsonLd,
  getOrganizationJsonLd,
  getPersonJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo";

const schemas = [
  getOrganizationJsonLd(),
  getWebSiteJsonLd(),
  getPersonJsonLd(),
  getFaqJsonLd(),
];

export function JsonLd() {
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
