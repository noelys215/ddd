export const codeSnippetSource = {
  modWorldwide: {
    fileBasedCmsRouting: {
      lang: "ts",
      code: `export const slugToFileMap: Record<string, PageMapEntry> = fs
  .readdirSync(PAGES_DIR)
  .reduce((map, file) => {
    const slug =
      file === "index.json" ? [] : file.replace(/\\.json$/, "").split(".");

    map[slug.join("/")] = {
      filename: file,
      slug,
      filePath: path.join(PAGES_DIR, file),
    };

    return map;
  }, {} as Record<string, PageMapEntry>);

export function getStaticParams() {
  return Object.values(slugToFileMap).map((entry) => ({
    slug: entry.slug,
  }));
}`,
    },
    dynamicBlockRenderer: {
      lang: "tsx",
      code: `const componentMap: Record<string, React.ComponentType<any>> =
  Object.keys(Blocks).reduce((acc, key) => {
    acc[key.toLowerCase()] = (Blocks as any)[key];
    return acc;
  }, {} as Record<string, React.ComponentType<any>>);

return (content || []).map((section: any, id: number) => {
  const ComponentType = componentMap[section.type];
  if (!ComponentType) return null;

  return (
    <ComponentType
      key={id + "-" + section.type}
      id={id}
      {...section.props}
    />
  );
});`,
    },
    cmsPageDefinition: {
      lang: "json",
      code: `{
  "metadata": {
    "title": "Home",
    "description": "MOD Worldwide"
  },
  "nav": {
    "variant": "light"
  },
  "content": [
    {
      "type": "videohero",
      "props": {
        "firstLine": "We are a creative collective",
        "secondLine": "built on intentional disruption"
      }
    },
    {
      "type": "scrollrevealtext",
      "props": {
        "segments": [
          { "text": "We build digital experiences", "color": "#212121" }
        ]
      }
    },
    {
      "type": "worktilelist",
      "props": {
        "tileSize": "large"
      }
    }
  ]
}`,
    },
    scrollRevealMotionEngine: {
      lang: "ts",
      code: `const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start 0.9", "end 0.5"],
});

useMotionValueEvent(scrollProgress, "change", (value: number) => {
  if (value >= nextWordStart && !hasAnimated) {
    setHasAnimated(true);

    animate(finalColorOpacity, 1, {
      duration: 1.8,
      ease: "easeOut",
    });
  }
});`,
    },
  },
  aiKnowledgeAssistant: {
    yearAwareRetrievalFilter: {
      lang: "ts",
      code: `function filterChunksByRequestedYears(chunks: AiIndexChunk[], requestedYears: string[]) {
  if (requestedYears.length === 0) {
    return chunks;
  }

  const requestedSet = new Set(requestedYears);

  return chunks.filter((chunk) => {
    const sourceYear = inferChunkSourceYear(chunk);

    if (sourceYear) {
      return requestedSet.has(sourceYear);
    }

    return chunkTextHasAnyYear(chunk, requestedYears);
  });
}`,
    },
    semanticRanking: {
      lang: "ts",
      code: `export function rankChunksBySimilarity(
  queryEmbedding: number[],
  chunks: AiIndexChunk[],
  topK: number
) {
  return chunks
    .map((chunk) => ({
      chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}`,
    },
    pdfTableReconstruction: {
      lang: "js",
      code: `function rowsToTableLikeText(rows) {
  return rows
    .sort((a, b) => b.y - a.y)
    .map((row) => {
      const orderedCells = row.cells.sort((a, b) => a.x - b.x);
      return orderedCells.map((cell) => cell.text).join("  |  ");
    })
    .join("\\n");
}`,
    },
    tinaBlockRegistration: {
      lang: "tsx",
      code: `export const aiAssistantBlockSchema: Template = {
  name: "aiAssistant",
  label: "AI-Powered Knowledge Assistant",
  fields: [
    { type: "string", name: "heading", label: "Heading" },
    { type: "string", name: "subheading", label: "Subheading" },
    { type: "string", name: "disclaimer", label: "Disclaimer" },
    { type: "string", name: "suggestedQuestions", label: "Suggested Questions", list: true },
    { type: "boolean", name: "enabled", label: "Enabled" },
  ],
};`,
    },
  },
  arbiter: {
    statefulSessionOrchestration: {
      lang: "py",
      code: `if phase == "collecting" and (all_dealt or len(member_ids) <= 1):
    out_candidates = await _finalize_collecting_to_swipe(
        db,
        s=sess,
        runtime=runtime,
        member_ids=member_ids,
        now=now,
    )
    phase = "swiping"`,
    },
    deterministicResolutionTieStrategy: {
      lang: "py",
      code: `max_yes = max(v["yes"] for v in stats.values())
yes_tied = [item_id for item_id, v in stats.items() if v["yes"] == max_yes]
...
min_no = min(stats[item_id]["no"] for item_id in yes_tied)
no_tied = [item_id for item_id in yes_tied if stats[item_id]["no"] == min_no]
...
rng = random.Random(str(s.id))
return rng.choice(sorted(tied_ids, key=lambda x: str(x)))`,
    },
    frontendVoteIntegrityPersistence: {
      lang: "ts",
      code: `const voteKey = \`\${sessionRound}:\${card.watchlist_item_id}\`;
if (processedVotesRef.current.has(voteKey)) return;
processedVotesRef.current.add(voteKey);
...
localStorage.setItem(cardIndexStorageKey, String(currentIndex));`,
    },
    aiParsingRerankFallbacks: {
      lang: "py",
      code: `if text and text.strip():
    try:
        refined = await ai_parse_constraints(baseline=base, text=text.strip())
    except AIError:
        refined = base

try:
    rerank = await ai_rerank_candidates(
        constraints=refined,
        candidates=candidates_payload,
    )
    if len(valid_ids) >= min_valid:
        final_order = ordered
        ai_used = True
        ai_why = rerank.why
except AIError:
    pass`,
    },
    telepartyValidationLeaderControl: {
      lang: "py",
      code: `if s.group.owner_id != user_id:
    raise PermissionError("Only the group leader can set the Teleparty link")

normalized = _normalize_watch_party_url(url)
if normalized and s.result_watchlist_item_id is None:
    raise ValueError("Pick a winner before sharing a Teleparty link")

if not any(host == allowed or host.endswith(f".{allowed}") 
    for allowed in WATCH_PARTY_ALLOWED_HOSTS):
        raise ValueError("watch party URL must be a Teleparty link")`,
    },
  },
};
