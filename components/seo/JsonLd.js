import Head from "next/head";

/**
 * Renders one or more JSON-LD graphs for search engines / AI crawlers.
 */
function JsonLd({ data }) {
  const graphs = (Array.isArray(data) ? data : [data]).filter(Boolean);

  if (!graphs.length) return null;

  return (
    <Head>
      {graphs.map((graph, index) => (
        <script
          // Stable order; content is deterministic per page
          key={`jsonld-${index}-${graph["@type"] || "graph"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </Head>
  );
}

export default JsonLd;
