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
    websocketHubFanout: {
      lang: "py",
      code: `async def broadcast_session_updated(self, session_id: UUID, *, reason: str) -> None:
    async with self._lock:
        sockets = list(self._connections.get(session_id, set()))

    payload = {
        "type": "session_updated",
        "session_id": str(session_id),
        "reason": reason,
    }
    for websocket in sockets:
        await websocket.send_json(payload)`,
    },
    authenticatedWebsocketRoute: {
      lang: "py",
      code: `@router.websocket("/sessions/{session_id}/ws")
async def session_updates_ws(websocket: WebSocket, session_id: UUID):
    access_token = websocket.cookies.get(COOKIE_NAME)
    async for db in get_db():
        user = await get_user_from_access_token(db, access_token)
        await get_session_state(db, session_id=session_id, user_id=user.id)
        break

    await session_realtime_hub.connect(session_id, websocket)
    await websocket.send_json({"type": "session_connected", "session_id": str(session_id)})`,
    },
    sessionRealtimeHook: {
      lang: "ts",
      code: `socket.onmessage = (event) => {
  const message = JSON.parse(String(event.data)) as SessionRealtimeMessage;

  if (message?.type === "session_updated" && message.session_id === sessionId) {
    void queryClient.invalidateQueries({
      queryKey: ["session-state", sessionId],
      exact: true,
    });
  }
};

socket.onclose = () => scheduleReconnect();`,
    },
    watchlistRealtimeInvalidation: {
      lang: "ts",
      code: `if (message?.type === "watchlist_updated" && message.group_id === groupId) {
  void queryClient.invalidateQueries({
    queryKey: ["watchlist-library", groupId],
  });
  void queryClient.invalidateQueries({
    queryKey: ["watchlist", groupId],
  });
}`,
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
  },
};
