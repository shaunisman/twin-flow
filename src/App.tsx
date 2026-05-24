import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Boxes,
  Camera,
  Check,
  ChevronRight,
  CloudCog,
  Crosshair,
  Eye,
  Layers3,
  LocateFixed,
  Map,
  Maximize2,
  MousePointer2,
  PackageCheck,
  QrCode,
  RotateCcw,
  Route,
  ScanLine,
  Search,
  ShieldCheck,
  Smartphone,
  Warehouse,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import warehouseDemo from "./assets/warehouse-cctv-twin-demo.png";

const cameraFeeds = ["Dock 02", "Aisle B", "Cold Zone", "Packing"];
const cameraCrops = ["0% 0%", "100% 0%", "100% 100%", "0% 0%"];
const rackLabels = ["A-12", "B-03", "C-08", "D-14", "E-02", "F-21", "G-09", "H-18"];

const conversionSteps = [
  {
    step: "Step 1",
    title: "Capture",
    icon: Camera,
    text: "Existing CCTV and IoT cameras collect warehouse footage.",
    visual: "camera",
  },
  {
    step: "Step 2",
    title: "Reconstruct",
    icon: Layers3,
    text: "Gaussian Splatting converts 2D footage into a 3D spatial model.",
    visual: "reconstruct",
  },
  {
    step: "Step 3",
    title: "Navigate & Manage",
    icon: MousePointer2,
    text: "Teams move through aisles, inspect racks, and check inventory overlays.",
    visual: "navigate",
  },
];

const overlays = [
  { label: "Empty Rack", color: "border-red-400/50 bg-red-400/10 text-red-200" },
  { label: "Overstock", color: "border-amber/50 bg-amber/10 text-amber" },
  { label: "Missing Item", color: "border-red-400/50 bg-red-400/10 text-red-200" },
  { label: "Pick Route", color: "border-cyan/50 bg-cyan/10 text-cyan" },
];

const scenario = [
  "WMS mismatch",
  "Open TwinFlow",
  "Navigate to B-03",
  "AI detects issue",
  "Worker app updated",
];

const technology = [
  {
    icon: Layers3,
    title: "Gaussian Splatting",
    text: "Builds the 3D warehouse from CCTV images.",
  },
  {
    icon: ScanLine,
    title: "YOLO Object Detection",
    text: "Detects boxes, racks, and empty spaces.",
  },
  {
    icon: ShieldCheck,
    title: "Edge Processing",
    text: "Processes video locally for speed and security.",
  },
  {
    icon: CloudCog,
    title: "Cloud Dashboard",
    text: "Syncs insights, alerts, and KPIs.",
  },
];

const metrics = [
  { value: "15%", label: "faster picking" },
  { value: "20%", label: "higher inventory accuracy" },
  { value: "10%", label: "better space utilization" },
  { value: "Lower", label: "on-site inspection time" },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden text-slate-100">
      <Header />
      <Hero />
      <ConversionFlow />
      <TwinViewerSection />
      <Scenario />
      <Technology />
      <Interfaces />
      <BusinessValue />
      <FinalCTA />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="TwinFlow home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan/35 bg-cyan/10 text-cyan">
            <Activity size={20} />
          </span>
          <span className="text-lg font-semibold tracking-wide">TwinFlow</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#flow" className="hover:text-white">Conversion</a>
          <a href="#viewer" className="hover:text-white">3D Twin</a>
          <a href="#interfaces" className="hover:text-white">Interfaces</a>
        </div>
        <a href="#viewer" className="rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white">
          Explore Twin
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="section-shell grid min-h-screen items-center gap-10 pb-16 pt-28 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="animate-reveal">
        <p className="eyebrow">CCTV-to-3D Twin Demo</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl">
          Turn CCTV Footage into a Walkable 3D Warehouse Twin
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          TwinFlow converts existing warehouse cameras into a real-time digital twin, allowing teams to inspect racks,
          inventory, and warehouse flow from a virtual control room.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#viewer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3 font-semibold text-ink transition hover:bg-white">
            Explore the 3D Twin <ChevronRight size={18} />
          </a>
          <a href="#flow" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-mint/40 hover:bg-white/10">
            View CCTV Conversion Flow <ArrowRight size={18} />
          </a>
        </div>
        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm text-slate-300">
          {["Live CCTV", "3D Spatial Map", "Rack Intelligence"].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
              {item}
            </div>
          ))}
        </div>
      </div>
      <HeroDemo />
    </section>
  );
}

function HeroDemo() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-4 shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(38,217,255,0.2),transparent_35%),linear-gradient(135deg,rgba(87,242,183,0.08),transparent_45%)]" />
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Virtual Control Room</p>
          <h2 className="mt-1 text-xl font-semibold text-white">Warehouse Twin / Seoul DC-04</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Live Twin Generated", "Rack Detected", "Inventory Synced"].map((badge) => (
            <span key={badge} className="rounded-full border border-mint/35 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-4 grid gap-4 xl:grid-cols-[0.68fr_1.35fr_0.72fr]">
        <div className="grid gap-3">
          {cameraFeeds.slice(0, 3).map((feed, index) => (
            <CameraCard key={feed} feed={feed} index={index} />
          ))}
        </div>

        <TwinCanvas compact highlight="B-03" />

        <div className="grid gap-3">
          <StatusPanel />
          <MiniMap />
        </div>
      </div>
    </div>
  );
}

function CameraCard({ feed, index }: { feed: string; index: number }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950 p-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-200">CAM {index + 1}</span>
        <span className="rounded-full bg-red-400/15 px-2 py-0.5 text-red-200">REC</span>
      </div>
      <div className="camera-feed relative mt-3 h-24 overflow-hidden rounded-lg border border-cyan/15 bg-[#08121d]">
        <img
          src={warehouseDemo}
          alt={`${feed} CCTV warehouse preview`}
          className="h-full w-full object-cover opacity-90 saturate-125"
          style={{ objectPosition: cameraCrops[index % cameraCrops.length] }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(38,217,255,0.16)_48%,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 border border-cyan/10" />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
        <span>{feed}</span>
        <span>24 fps</span>
      </div>
    </div>
  );
}

function TwinCanvas({ compact = false, highlight = "B-03" }: { compact?: boolean; highlight?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-cyan/20 bg-[#07111c] ${compact ? "min-h-[460px] p-5" : "min-h-[560px] p-6"} scan-line`}>
      <img
        src={warehouseDemo}
        alt="Generated 3D warehouse digital twin map"
        className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-screen saturate-150"
        style={{ objectPosition: "0% 100%" }}
      />
      <div className="absolute inset-0 bg-[#07111c]/55" />
      <div className="warehouse-grid absolute inset-x-0 bottom-0 h-[78%] origin-bottom opacity-90" />
      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
        <span className="rounded-full border border-cyan/35 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">3D Twin Viewer</span>
        <span className="rounded-full border border-mint/35 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">Walkthrough Mode</span>
      </div>
      <div className="absolute right-4 top-4 z-10 rounded-lg border border-white/10 bg-ink/75 p-2 backdrop-blur">
        <div className="grid grid-cols-2 gap-1">
          {[ZoomIn, ZoomOut, RotateCcw, Maximize2].map((Icon, index) => (
            <button key={index} className="grid h-8 w-8 place-items-center rounded-md bg-white/[0.06] text-slate-300 transition hover:bg-cyan/15 hover:text-cyan" aria-label="Viewer control">
              <Icon size={15} />
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-16 grid grid-cols-4 gap-3 sm:grid-cols-4">
        {rackLabels.map((rack, index) => {
          const isTarget = rack === highlight;
          const isAlert = rack === "C-08" || rack === "E-02";
          return (
            <div
              key={rack}
              className={`rack-block group relative min-h-[105px] rounded-lg border p-3 transition duration-300 hover:-translate-y-1 ${
                isTarget
                  ? "border-cyan bg-cyan/15 text-cyan shadow-[0_0_35px_rgba(38,217,255,0.35)]"
                  : isAlert
                    ? "border-amber/45 bg-amber/10 text-amber"
                    : "border-mint/30 bg-mint/10 text-mint"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{rack}</span>
                {isTarget && <Crosshair size={16} />}
              </div>
              <div className="mt-8 space-y-2">
                <div className="h-2 rounded-full bg-current opacity-70" />
                <div className="h-2 w-3/4 rounded-full bg-current opacity-40" />
              </div>
              {isTarget && (
                <div className="absolute -bottom-9 left-1/2 w-44 -translate-x-1/2 rounded-lg border border-cyan/35 bg-ink/90 px-3 py-2 text-center text-xs text-cyan backdrop-blur">
                  B-03 selected / Empty rack
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-5 left-5 z-10 rounded-lg border border-cyan/25 bg-ink/75 p-3 backdrop-blur">
        <p className="text-xs text-slate-400">Pick Route</p>
        <p className="mt-1 font-semibold text-cyan">Dock → A-12 → B-03 → C-08</p>
      </div>
      <div className="absolute bottom-5 right-5 z-10 hidden rounded-lg border border-white/10 bg-ink/75 p-3 text-xs text-slate-300 backdrop-blur sm:block">
        <div className="mb-2 flex items-center gap-2 text-white"><LocateFixed size={15} className="text-mint" /> Position</div>
        <div>Aisle B / Rack 03 / Level 2</div>
      </div>
    </div>
  );
}

function StatusPanel() {
  const stats = [
    ["Total SKUs", "4,812"],
    ["Active racks", "238"],
    ["Empty racks", "12"],
    ["Alerts", "5"],
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-semibold text-white">Rack Status</p>
        <PackageCheck className="text-mint" size={18} />
      </div>
      <div className="grid gap-3">
        {stats.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between rounded-lg bg-ink/55 px-3 py-2">
            <span className="text-xs text-slate-400">{label}</span>
            <span className="font-semibold text-white">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">
        Missing item detected at B-03
      </div>
    </div>
  );
}

function MiniMap() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-semibold text-white">Mini Map</p>
        <Map size={18} className="text-cyan" />
      </div>
      <div className="relative h-32 overflow-hidden rounded-lg border border-cyan/15 bg-ink/60">
        <img
          src={warehouseDemo}
          alt="Mini map of generated warehouse twin"
          className="h-full w-full object-cover opacity-75 saturate-150"
          style={{ objectPosition: "0% 100%" }}
        />
        <div className="absolute inset-0 bg-cyan/5" />
        <div className="absolute left-[36%] top-[42%] h-4 w-4 rounded-full border-2 border-cyan bg-cyan/30 shadow-[0_0_18px_rgba(38,217,255,0.75)]" />
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
        <span className="h-2 w-2 rounded-full bg-cyan" /> Current view: Aisle B
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, text }: { kicker?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {kicker && <p className="eyebrow">{kicker}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>}
    </div>
  );
}

function ConversionFlow() {
  return (
    <section id="flow" className="section-shell py-20">
      <SectionHeading kicker="CCTV Conversion Flow" title="From CCTV to 3D Warehouse in 3 Steps" />
      <div className="grid gap-5 lg:grid-cols-3">
        {conversionSteps.map((item) => (
          <div key={item.title} className="glass card-hover rounded-xl p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-cyan/10 px-3 py-1 text-sm font-semibold text-cyan">{item.step}</span>
              <item.icon className="text-mint" size={26} />
            </div>
            <StepVisual type={item.visual} />
            <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StepVisual({ type }: { type: string }) {
  if (type === "camera") {
    return (
      <div className="camera-feed relative h-44 overflow-hidden rounded-xl border border-cyan/15 bg-[#07111c] p-3">
        <img
          src={warehouseDemo}
          alt="Generated CCTV warehouse aisle"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
          style={{ objectPosition: "100% 0%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/60" />
        <div className="relative flex justify-between text-xs text-slate-300">
          <span>CAM / Aisle B</span>
          <span className="text-red-200">REC</span>
        </div>
      </div>
    );
  }

  if (type === "reconstruct") {
    return (
      <div className="relative h-44 overflow-hidden rounded-xl border border-cyan/15 bg-[#07111c] p-4">
        <img
          src={warehouseDemo}
          alt="Generated CCTV footage transforming into 3D warehouse"
          className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-75"
          style={{ objectPosition: "0% 0%" }}
        />
        <div className="absolute left-0 top-0 h-full w-1/2 bg-ink/25" />
        <ArrowRight className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan" size={24} />
        <img
          src={warehouseDemo}
          alt="Generated 3D warehouse model"
          className="absolute bottom-0 right-0 h-full w-1/2 object-cover opacity-80"
          style={{ objectPosition: "0% 100%" }}
        />
        <div className="warehouse-grid absolute bottom-0 right-0 h-36 w-44 origin-bottom opacity-45" />
        <span className="absolute bottom-4 right-4 rounded-full bg-mint/10 px-3 py-1 text-xs text-mint">3D model</span>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-xl border border-cyan/15 bg-[#07111c] p-4">
      <img
        src={warehouseDemo}
        alt="Generated rack inspection preview"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        style={{ objectPosition: "100% 100%" }}
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="warehouse-grid absolute inset-x-0 bottom-0 h-36 origin-bottom opacity-80" />
      <div className="relative grid grid-cols-3 gap-2">
        {["A-12", "B-03", "C-08"].map((rack) => (
          <div key={rack} className={`rounded-lg border p-3 text-xs ${rack === "B-03" ? "border-cyan bg-cyan/15 text-cyan" : "border-mint/30 bg-mint/10 text-mint"}`}>
            {rack}
          </div>
        ))}
      </div>
      <span className="absolute bottom-4 left-4 rounded-full bg-cyan/10 px-3 py-1 text-xs text-cyan">Navigate aisle</span>
    </div>
  );
}

function TwinViewerSection() {
  return (
    <section id="viewer" className="border-y border-white/10 bg-white/[0.025] py-20">
      <div className="section-shell">
        <SectionHeading
          kicker="Interactive Digital Twin Viewer"
          title="Enter the virtual warehouse before walking the floor"
          text="A realistic control-room interface for inspecting camera feeds, moving through aisles, and managing live rack intelligence."
        />
        <div className="glass overflow-hidden rounded-2xl p-4 lg:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-slate-400">TwinFlow Viewer</p>
              <h3 className="text-2xl font-semibold text-white">Warehouse DC-04 / Floor 1</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Floor Map", "Aisle Selector", "Rack Search"].map((item) => (
                <button key={item} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200 transition hover:border-cyan/35 hover:text-cyan">
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[0.76fr_1.55fr_0.8fr]">
            <div className="grid gap-3">
              {cameraFeeds.map((feed, index) => (
                <CameraCard key={feed} feed={feed} index={index} />
              ))}
            </div>

            <div>
              <TwinCanvas highlight="B-03" />
              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {overlays.map((overlay) => (
                  <div key={overlay.label} className={`rounded-lg border px-3 py-3 text-center text-sm font-semibold ${overlay.color}`}>
                    {overlay.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid content-start gap-4">
              <StatusPanel />
              <div className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
                <p className="mb-4 font-semibold text-white">Navigation</p>
                <div className="grid grid-cols-3 gap-2">
                  {[ZoomIn, LocateFixed, ZoomOut, RotateCcw, Eye, Search].map((Icon, index) => (
                    <button key={index} className="grid h-12 place-items-center rounded-lg border border-white/10 bg-ink/60 text-slate-300 transition hover:border-cyan/35 hover:text-cyan" aria-label="Navigation control">
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-cyan/20 bg-cyan/10 p-3 text-sm text-cyan">
                  Aisle selector: B / Rack focus: B-03
                </div>
              </div>
              <MiniMap />
              <a href="#interfaces" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-5 py-3 font-semibold text-ink transition hover:bg-white">
                Enter Virtual Warehouse <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Scenario() {
  return (
    <section className="section-shell py-20">
      <SectionHeading
        kicker="Use Case"
        title="Inspect the warehouse without walking the floor"
        text="When WMS data does not match reality, managers can open TwinFlow and verify the physical rack state inside the digital twin."
      />
      <div className="grid gap-4 lg:grid-cols-5">
        {scenario.map((item, index) => (
          <div key={item} className="relative glass card-hover rounded-xl p-5">
            <div className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-cyan/10 font-semibold text-cyan">{index + 1}</div>
            <h3 className="text-lg font-semibold text-white">{item}</h3>
            {index < scenario.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden text-cyan lg:block" size={22} />}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-6 text-center leading-8 text-slate-300">
        A manager notices a WMS mismatch, opens TwinFlow, navigates to Rack B-03, and sees the rack is empty. The system flags a missing item and updates the worker picking app.
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-20">
      <div className="section-shell">
        <SectionHeading kicker="Technology" title="The pipeline behind the virtual warehouse" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {technology.map((item) => (
            <div key={item.title} className="glass card-hover rounded-xl p-6">
              <item.icon className="text-mint" size={30} />
              <h3 className="mt-7 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Interfaces() {
  return (
    <section id="interfaces" className="section-shell py-20">
      <SectionHeading kicker="Interfaces" title="Built for managers in control rooms and workers on the floor" />
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass rounded-2xl p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Manager 3D Control Room</p>
              <h3 className="text-2xl font-semibold text-white">Navigate, inspect, and resolve anomalies</h3>
            </div>
            <Warehouse className="text-cyan" size={28} />
          </div>
          <TwinCanvas compact highlight="B-03" />
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {["Navigate virtual warehouse", "Monitor rack status", "View camera-to-twin conversion", "Check anomalies"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.05] p-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <WorkerApp />
      </div>
    </section>
  );
}

function WorkerApp() {
  const tasks = ["Go to B-03", "Scan QR", "Confirm pickup", "Missing item alert"];

  return (
    <div className="glass rounded-2xl p-5">
      <div className="mx-auto max-w-sm rounded-[2rem] border border-white/10 bg-black p-3 shadow-2xl">
        <div className="rounded-[1.5rem] bg-[#101723] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Worker Picking App</p>
              <h3 className="text-xl font-semibold text-white">B-03 Task Update</h3>
            </div>
            <Smartphone className="text-mint" size={24} />
          </div>
          <div className="rounded-xl bg-cyan/10 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-cyan">
              <Route size={17} /> Route Guidance
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">Dock → B-03</p>
          </div>
          <div className="mt-4 space-y-3">
            {tasks.map((task, index) => (
              <div key={task} className={`flex items-center justify-between rounded-xl border p-3 ${index === 3 ? "border-red-400/30 bg-red-400/10" : "border-white/10 bg-white/[0.045]"}`}>
                <div>
                  <p className="font-semibold text-white">{task}</p>
                  <p className="text-xs text-slate-400">{index === 3 ? "Supervisor notified" : "TwinFlow synced"}</p>
                </div>
                {index === 3 ? <AlertTriangle className="text-red-300" size={18} /> : index === 1 ? <QrCode className="text-cyan" size={18} /> : <Check className="text-mint" size={18} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessValue() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-20">
      <div className="section-shell">
        <SectionHeading kicker="Business Value" title="Operational gains from real-time visibility" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="glass card-hover rounded-xl p-6 text-center">
              <p className="text-4xl font-semibold text-white">{metric.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="demo" className="section-shell pb-16 pt-10">
      <div className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-[linear-gradient(135deg,rgba(38,217,255,0.16),rgba(87,242,183,0.08)_42%,rgba(255,255,255,0.05))] px-6 py-16 text-center shadow-glow sm:px-12">
        <Boxes className="mx-auto mb-6 text-cyan" size={40} />
        <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-normal text-white sm:text-5xl">
          Your warehouse already has cameras. TwinFlow turns them into intelligence.
        </h2>
        <a href="#viewer" className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-7 py-3 font-semibold text-ink transition hover:bg-white">
          Start with a CCTV-to-Twin Demo <ChevronRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default App;
