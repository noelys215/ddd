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
                  Turned static plan documents into a grounded question-answer
                  system that can be dropped onto any CMS page as a reusable
                  content block
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
                  OpenAI Embeddings | pdfjs-dist | AWS S3 SDK | DigitalOcean
                  Spaces
                </span>
              </li>
              <li>
                <Meta>Constraint</Meta>
                <span>
                  No database, no vector store, no client-side OpenAI calls, and
                  no cross-site document leakage
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
                Architecturally, the interesting part is that the system stays
                operationally simple: offline indexing generates a committed
                JSON semantic index, runtime retrieval happens server-side, and
                the browser receives only the answer and clean source metadata.
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
                    Offline Indexing Pipeline
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Built a PDF ingestion flow that extracts page text, rescues
                    table structure from positional PDF data, chunks content
                    with overlap, and embeds every chunk for retrieval.
                  </p>
                </div>

                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
                    Retrieval + Guardrails
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Added blocked-question handling, low-confidence rejection,
                    and hard year-based retrieval filters so 2025 questions do
                    not accidentally blend 2024 or 2026 policy details.
                  </p>
                </div>

                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
                    Source Access Layer
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Exposed cited PDFs through a constrained server route that
                    allows inline viewing of approved files only, preventing
                    arbitrary path access from the client.
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
                    ai/data/ai_index.json becomes the site-specific semantic
                    index
                  </div>
                  <div className="text-pink-500">+</div>
                  <div className="font-mono tracking-wide">
                    /api/ai/ask embeds the question and ranks chunks by cosine
                    similarity
                  </div>
                  <div className="text-pink-500">+</div>
                  <div className="font-mono tracking-wide">
                    OpenAI generates an answer using only selected source chunks
                  </div>
                  <div className="text-pink-500">+</div>
                  <div className="font-mono tracking-wide">
                    UI renders answer blocks and clickable PDF citations
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
                  I intentionally avoided a vector database here. The corpus was
                  bounded enough that a committed JSON index plus cosine ranking
                  would keep deployment simpler, reduce infrastructure surface
                  area, and preserve strict site isolation.
                </p>
                <p>
                  I also treated plan year as a retrieval constraint, not just a
                  prompt instruction. That matters because prompt-only year
                  control is too weak for adjacent insurance documents with
                  similar vocabulary.
                </p>
                <p>
                  For PDF extraction, I used positional text items to
                  reconstruct table-like rows rather than flattening everything
                  into generic text. That decision materially improved answers
                  for deductible, coinsurance, and out-of-pocket comparisons
                  where table context is the document.
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
                Excerpts below reflect the actual architecture: retrieval is
                server-side, year filtering happens before ranking, and the
                block is registered into Tina like any other page section.
              </p>

              <div className="space-y-10">
                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Year-Aware Retrieval Filter</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      ai/server/askRoute.ts
                    </span>
                  </div>
                  <CodeBlock
                    html={codeSnippetHtml.aiKnowledgeAssistant.yearAwareRetrievalFilter}
                  />
                  <p className="text-white/70 text-xs leading-relaxed">
                    This is a retrieval-level safeguard. If a user asks about
                    2025, chunks from other plan years are excluded before the
                    model ever sees them.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid min-w-0 grid-cols-1 gap-1 px-1 text-xs text-white/60 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <span>Semantic Ranking</span>
                    <span className="min-w-0 break-all sm:break-normal sm:text-right">
                      ai/core/search.ts
                    </span>
                  </div>
                  <CodeBlock
                    html={codeSnippetHtml.aiKnowledgeAssistant.semanticRanking}
                  />
                  <p className="text-white/70 text-xs leading-relaxed">
                    Retrieval is intentionally transparent and inspectable:
                    question embedding in, chunk scores out, top-k context fed
                    to generation.
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
                    html={codeSnippetHtml.aiKnowledgeAssistant.pdfTableReconstruction}
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
                    html={codeSnippetHtml.aiKnowledgeAssistant.tinaBlockRegistration}
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
                  OpenAI usage is fully server-side. The client never receives
                  embeddings, API keys, or raw retrieval context.
                </div>
                <div className="rounded-md border border-white/10 bg-[#0c0c0c] p-4 text-white/80 text-sm leading-relaxed">
                  Source links resolve through a constrained file-serving route
                  so users can inspect the cited PDF while file access remains
                  controlled.
                </div>
              </div>
            </MotionSection>
          </section>

          <section aria-labelledby="why-it-matters-heading">
            <MotionSection delay={0.1}>
              <SectionHeading symbol="plus">Why This Matters</SectionHeading>
              <p className="text-white text-sm md:text-base leading-relaxed">
                The value here is not just that I integrated an LLM. I designed
                a retrieval system around document truth, operational
                simplicity, and editorial usability. The result is a feature
                that content teams can actually use, engineers can reason about,
                and users can verify by opening the source material themselves.
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
