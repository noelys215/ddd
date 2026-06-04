import { Badge } from "../../components/Badge";
import Layout from "../../components/Layout";
import { Meta } from "../../components/Meta";
import MotionSection from "../../components/MotionSection";
import { Title } from "../../components/Title";
import CybersigilFrame from "../../components/CybersigilFrame";
import CodeBlock from "../../components/CodeBlock";
import SectionHeading from "../../components/SectionHeading";

import aiHome from "../../assets/works/aiknowledgeassistant/ai_chat_thumb.png";
import aiDemoMp4 from "../../assets/works/aiknowledgeassistant/ai_chat_demo.mp4";
import aiDemoWebm from "../../assets/works/aiknowledgeassistant/ai_chat_demo.webm";
import { Slider } from "../../components/Silder";
import { codeSnippetHtml } from "../../generated/codeSnippetHtml";

const imageArr = [
  {
    kind: "video" as const,
    alt: "AI Chat Home",
    poster: aiHome,
    sources: [
      { src: aiDemoWebm, type: "video/webm" },
      { src: aiDemoMp4, type: "video/mp4" },
    ],
  },
  { src: aiHome, alt: "AI Chat Demo" },
];

const AIKnowledgeAssistant = () => {
  return (
    <Layout title="ai_knowledge_assistant">
      <MotionSection delay={0.1}>
        <CybersigilFrame
          className="rounded-md min-w-0 max-w-4xl w-full p-4 md:p-8 lg:p-12 bg-black shadow-md mx-auto opacity-95"
          style={{ backgroundColor: "#101010" }}
          aria-labelledby="ai-knowledge-assistant-title"
        >
          <Title title="Works">
            AI-Powered Knowledge Assistant<Badge>2026</Badge>
          </Title>

          <section
            aria-labelledby="ai-knowledge-assistant-details"
            className="my-4 text-white"
          >
            <ul className="space-y-1">
              <li>
                <Meta>Status</Meta>
                <span className="text-green-50 text-xs uppercase font-semibold px-1.5 py-0.5 rounded-sm bg-green-700">
                  Production-ready
                </span>
              </li>
              <li>
                <Meta>Type</Meta>
                <span>
                  Retrieval-augmented document assistant embedded directly into
                  a TinaCMS-managed marketing site
                </span>
              </li>
              <li>
                <Meta>Role</Meta>
                <span>
                  End-to-end architecture, indexing pipeline, API design, Tina
                  block integration, retrieval logic, and UX formatting
                </span>
              </li>
              <li>
                <Meta>Problem</Meta>
                <span>
                  Benefit-plan PDFs were dense, year-sensitive, and difficult to
                  compare quickly without introducing hallucinated or
                  cross-document answers
                </span>
              </li>
              <li>
                <Meta>Impact</Meta>
                <span>
                  Turned static plan documents into a grounded, database-backed
                  question-answer system that can be dropped onto any CMS page
                  as a reusable content block
                </span>
              </li>
              <li>
                <Meta>Data</Meta>
                <span>
                  25 indexed PDFs spanning 2024-2026, expanded into 2,745
                  semantic chunks
                </span>
              </li>
              <li>
                <Meta>Stack</Meta>
                <span>
                  Next.js 14 | React 18 | TinaCMS | OpenAI Responses API |
                  OpenAI Embeddings | Supabase Postgres | pgvector | pdfjs-dist
                  | AWS S3 SDK | DigitalOcean Spaces
                </span>
              </li>
              <li>
                <Meta>Constraint</Meta>
                <span>
                  Server-only AI calls, isolated document retrieval, portable AI
                  module installation, and no cross-site document leakage
                </span>
              </li>
              <li>
                <Meta>Visit</Meta>
                <a
                  href="https://simple-template-starter-kccic7g8b-moderati.vercel.app/health-plans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  sok ai preview
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="overview-heading">
            <MotionSection delay={0.1}>
              <SectionHeading symbol="plus">Project Overview</SectionHeading>
              <p className="text-white text-sm md:text-base leading-relaxed">
                I built this as a site-isolated AI knowledge layer for a TinaCMS
                application serving insurance and benefits content. The goal was
                not to bolt on a chat widget, but to engineer a retrieval system
                that respected document boundaries, plan-year accuracy, and the
                realities of content teams publishing PDF-heavy material.
                <br />
                <br />
                The assistant can be inserted by editors like any other Tina
                section. Once placed on a page, it answers only from the
                documents indexed for that site, cites the original PDFs, and
                links users directly back to the source file and page.
                <br />
                <br />
                Architecturally, the system moved from a local JSON semantic
                index to Supabase Postgres with pgvector. Offline indexing still
                prepares the documents, but runtime retrieval now happens
                through indexed vector search, server-side filtering, response
                streaming, and clean source metadata returned to the browser.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="what-i-built-heading">
            <MotionSection delay={0.1}>
              <SectionHeading symbol="plus">What I Built</SectionHeading>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
                    Tina CMS Integration
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Registered the assistant as a first-class Tina block with
                    editable heading, subheading, disclaimer, suggested
                    questions, enable/disable control, and color system support.
                  </p>
                </div>

                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
                    Postgres + pgvector Retrieval
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Migrated retrieval from a generated JSON index to Supabase
                    Postgres with pgvector, storing document chunks, metadata,
                    embeddings, and indexed similarity search in a managed
                    database.
                  </p>
                </div>

                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
                    Retrieval + Guardrails
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Added blocked-question handling, low-confidence rejection,
                    and hard year and plan filters so questions about a specific
                    plan year or option do not blend nearby policy details.
                  </p>
                </div>

                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
                    Streaming Answer Layer
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Reworked the chat API to stream answer deltas while keeping
                    embeddings, database queries, model calls, and retrieval
                    context fully server-side.
                  </p>
                </div>
              </div>
            </MotionSection>
          </section>

          <section aria-labelledby="request-flow-heading">
            <MotionSection delay={0.1}>
              <SectionHeading symbol="plus">System Flow</SectionHeading>
              <p className="text-white text-sm md:text-base leading-relaxed">
                End-to-end pipeline:
              </p>
              <div className="mt-3 max-w-3xl rounded-md border border-white/10 bg-[#0b0b0b] px-5 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <div className="space-y-2 text-center text-sm md:text-base text-white/85">
                  <div className="font-mono tracking-wide">
                    Editor uploads PDFs into site content
                  </div>
                  <div className="text-pink-500">+</div>
                  <div className="font-mono tracking-wide">
                    ai:scan extracts text, rebuilds table rows, chunks pages,
                    generates embeddings
                  </div>
                  <div className="text-pink-500">+</div>
                  <div className="font-mono tracking-wide">
                    ai:sync writes documents, chunks, metadata, and embeddings
                    into Supabase Postgres
                  </div>
                  <div className="text-pink-500">+</div>
                  <div className="font-mono tracking-wide">
                    pgvector ranks matching chunks with year and plan filters
                    applied in SQL
                  </div>
                  <div className="text-pink-500">+</div>
                  <div className="font-mono tracking-wide">
                    OpenAI generates an answer using only selected source chunks
                  </div>
                  <div className="text-pink-500">+</div>
                  <div className="font-mono tracking-wide">
                    UI streams answer text and renders clickable PDF citations
                  </div>
                </div>
              </div>
            </MotionSection>
          </section>

          <section aria-labelledby="engineering-decisions-heading">
            <MotionSection delay={0.1}>
              <SectionHeading symbol="plus">
                Engineering Decisions
              </SectionHeading>
              <div className="space-y-4 text-white text-sm md:text-base leading-relaxed">
                <p>
                  I started with a JSON-based semantic index because it was fast
                  to ship and easy to inspect. Once the assistant needed a more
                  professional retrieval layer, I migrated the corpus to
                  Supabase Postgres with pgvector so similarity search, metadata
                  filtering, and future scaling live in the database.
                </p>
                <p>
                  I treat plan year and plan option as retrieval constraints,
                  not just prompt instructions. That matters because prompt-only
                  control is too weak for adjacent insurance documents with
                  similar vocabulary.
                </p>
                <p>
                  For PDF extraction, I use positional text items to reconstruct
                  table-like rows rather than flattening everything into generic
                  text. That decision materially improved answers for
                  deductible, coinsurance, and out-of-pocket comparisons where
                  table context is the document.
                </p>
                <p>
                  The implementation is packaged inside the app's AI folder so
                  it can be merged into other branches, installed with the local
                  script, and pointed at the same Supabase-backed knowledge
                  store without reworking the main site architecture.
                </p>
              </div>
            </MotionSection>
          </section>

          <section aria-labelledby="code-heading">
            <MotionSection delay={0.1}>
              <SectionHeading symbol="plus">
                Selected Implementation
              </SectionHeading>
              <p className="text-white/70 text-sm leading-relaxed max-w-3xl mx-auto mb-6">
                Excerpts below reflect the core architecture: retrieval is
                server-side, metadata filters are applied before generation, and
                the block is registered into Tina like any other page section.
              </p>

              <div className="space-y-10">
                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Year + Plan Retrieval Filter</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      ai/server/askRoute.ts
                    </span>
                  </div>
                  <CodeBlock
                    html={
                      codeSnippetHtml.aiKnowledgeAssistant
                        .yearAwareRetrievalFilter
                    }
                  />
                  <p className="text-white/70 text-xs leading-relaxed">
                    This is a retrieval-level safeguard. If a user asks about a
                    specific plan year or option, unrelated chunks are excluded
                    before the model ever sees them.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>pgvector Similarity Search</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      ai/core/vectorStore.ts
                    </span>
                  </div>
                  <CodeBlock
                    html={codeSnippetHtml.aiKnowledgeAssistant.semanticRanking}
                  />
                  <p className="text-white/70 text-xs leading-relaxed">
                    Retrieval is database-backed and inspectable: question
                    embedding in, filtered pgvector matches out, top-k context
                    streamed into generation.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>PDF Table Reconstruction</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      ai/indexer.mjs
                    </span>
                  </div>
                  <CodeBlock
                    html={
                      codeSnippetHtml.aiKnowledgeAssistant
                        .pdfTableReconstruction
                    }
                  />
                  <p className="text-white/70 text-xs leading-relaxed">
                    This turns raw PDF text positions into something retrieval
                    can reason about, which is critical for plan comparison
                    tables.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Tina Block Registration</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      ai/ui/aiAssistantBlock.tsx
                    </span>
                  </div>
                  <CodeBlock
                    html={
                      codeSnippetHtml.aiKnowledgeAssistant.tinaBlockRegistration
                    }
                  />
                  <p className="text-white/70 text-xs leading-relaxed">
                    The assistant is not hardcoded into a page. It behaves like
                    a composable CMS section, which keeps content ownership with
                    editors instead of engineers.
                  </p>
                </div>
              </div>
            </MotionSection>
          </section>

          <section aria-labelledby="safeguards-heading">
            <MotionSection delay={0.1}>
              <SectionHeading symbol="plus">
                Production Safeguards
              </SectionHeading>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4 text-white/80 text-sm leading-relaxed">
                  Blocked phrase checks reject account-specific and medical
                  questions like claims, member IDs, symptoms, or personal
                  benefits questions.
                </div>
                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4 text-white/80 text-sm leading-relaxed">
                  Low-similarity thresholds stop the assistant from bluffing
                  when the uploaded documents do not support a confident answer.
                </div>
                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4 text-white/80 text-sm leading-relaxed">
                  Supabase and OpenAI usage are fully server-side. The client
                  never receives database credentials, embeddings, API keys, or
                  raw retrieval context.
                </div>
                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4 text-white/80 text-sm leading-relaxed">
                  Streaming responses reduce perceived wait time while source
                  citations still resolve through a constrained file-serving
                  route.
                </div>
              </div>
            </MotionSection>
          </section>

          <section aria-labelledby="why-it-matters-heading">
            <MotionSection delay={0.1}>
              <SectionHeading symbol="plus">Why This Matters</SectionHeading>
              <p className="text-white text-sm md:text-base leading-relaxed">
                The value here is not just that I integrated an LLM. I designed
                a retrieval system around document truth, database-backed
                search, operational portability, and editorial usability. The
                result is a feature that content teams can actually use,
                engineers can reason about, and users can verify by opening the
                source material themselves.
                <br />
                <br />
                That is the kind of AI work I like to build: grounded,
                inspectable, and useful under real product constraints.
              </p>
            </MotionSection>
          </section>

          <section aria-labelledby="screenshots-heading">
            <MotionSection delay={0.1}>
              <SectionHeading symbol="plus">Selected Screens</SectionHeading>
              <Slider array={imageArr} />
            </MotionSection>
          </section>
        </CybersigilFrame>
      </MotionSection>
    </Layout>
  );
};

export default AIKnowledgeAssistant;
