import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Boxes,
  Camera,
  Check,
  ChevronRight,
  CloudCog,
  Factory,
  Gauge,
  Map,
  MapPinned,
  PackageCheck,
  QrCode,
  Route,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  Timer,
  Warehouse,
  Zap,
} from "lucide-react";

const problems = [
  "Inventory mismatch between WMS/ERP and actual racks",
  "CCTV used only for passive monitoring",
  "Inefficient picking routes",
  "Delayed decisions from limited real-time visibility",
];

const workflow = [
  { icon: Camera, title: "Existing CCTV / IoT Cameras", text: "Connect live feeds without replacing the camera layer." },
  { icon: Warehouse, title: "3D Digital Twin", text: "Reconstruct warehouse zones, aisles, racks, and activity." },
  { icon: ScanSearch, title: "AI Inventory Analysis", text: "Detect rack status, inventory gaps, SKUs, and anomalies." },
  { icon: Route, title: "Operational Optimization", text: "Guide picking, surface bottlenecks, and improve space use." },
];

const tech = [
  {
    icon: Map,
    title: "Gaussian Splatting",
    text: "Converts 2D camera imagery into a live 3D warehouse twin for spatial awareness.",
  },
  {
    icon: Boxes,
    title: "YOLO Object Detection",
    text: "Detects inventory, rack occupancy, movement, and abnormal stock conditions.",
  },
  {
    icon: CloudCog,
    title: "Edge-first SaaS",
    text: "Processes video locally and syncs only operational insights to the cloud.",
  },
];

const benefits = ["Lower network costs", "Reduced server computation", "Real-time response", "Better data security"];

const metrics = [
  { value: "15%", label: "faster picking" },
  { value: "20%", label: "higher inventory accuracy" },
  { value: "10%", label: "better space utilization" },
  { value: "Lower", label: "labor cost" },
  { value: "Fewer", label: "shipping errors" },
];

const prices = [
  {
    name: "Starter",
    segment: "Small Warehouse",
    size: "Up to 300 pyeong",
    price: "₩1.49M",
    setup: "₩5M setup",
    features: ["Basic 3D dashboard", "CCTV inventory visibility"],
  },
  {
    name: "Pro",
    segment: "Medium Warehouse",
    size: "300-1,000 pyeong",
    price: "₩2.99M",
    setup: "₩10M setup",
    featured: true,
    features: ["Picking optimization", "Bottleneck detection", "QR/SKU matching", "WMS/ERP integration"],
  },
  {
    name: "Enterprise",
    segment: "Multi-site Operations",
    size: "1,000+ pyeong",
    price: "Custom",
    setup: "Custom quote",
    features: ["Multi-warehouse dashboard", "Advanced analytics", "Private edge deployment", "Dedicated support"],
  },
];

const roadmap = [
  {
    step: "Step 1",
    title: "PoC",
    items: ["Select one mid-sized 3PL warehouse", "Connect existing CCTV", "Generate 3D twin", "Validate inventory accuracy"],
  },
  {
    step: "Step 2",
    title: "SaaS Dashboard",
    items: ["Manager 3D dashboard", "Worker picking app", "KPI reporting"],
  },
  {
    step: "Step 3",
    title: "Scale-up",
    items: ["Franchise logistics", "Food distribution", "Fashion/cosmetics fulfillment", "Manufacturing warehouses"],
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden text-slate-100">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <ProductUI />
      <BusinessValue />
      <Pricing />
      <Roadmap />
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
          <a href="#solution" className="hover:text-white">Solution</a>
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </div>
        <a href="#demo" className="rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white">
          Request a Demo
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-28 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="animate-reveal">
        <p className="eyebrow">TwinFlow</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl">
          Turn Warehouse CCTV into Real-Time Operational Intelligence
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          AI-powered digital twin SaaS for smarter inventory, faster picking, and lower warehouse operating costs.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3 font-semibold text-ink transition hover:bg-white">
            Request a Demo <ChevronRight size={18} />
          </a>
          <a href="#solution" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-mint/40 hover:bg-white/10">
            See How It Works <ArrowRight size={18} />
          </a>
        </div>
        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm text-slate-300">
          {["3PL", "Fulfillment", "Distribution"].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
              {item}
            </div>
          ))}
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}

function HeroVisual() {
  const racks = ["A-12", "B-03", "C-08", "D-14", "E-02", "F-21"];

  return (
    <div className="relative animate-float">
      <div className="glass relative min-h-[560px] overflow-hidden rounded-2xl p-4 shadow-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(38,217,255,0.18),transparent_36%),linear-gradient(135deg,rgba(87,242,183,0.08),transparent_35%)]" />
        <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Live Operations Twin</p>
            <h2 className="mt-1 text-xl font-semibold text-white">Seoul DC-04</h2>
          </div>
          <span className="rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">Live</span>
        </div>

        <div className="relative mt-4 grid gap-4 lg:grid-cols-[1fr_0.72fr]">
          <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-cyan/20 bg-[#07111c] p-5 scan-line">
            <div className="warehouse-grid absolute inset-x-0 bottom-0 h-[310px] origin-bottom opacity-80" />
            <div className="relative grid grid-cols-3 gap-3">
              {racks.map((rack, index) => (
                <div
                  key={rack}
                  className={`rounded-lg border p-3 text-xs ${
                    index === 2
                      ? "border-amber/50 bg-amber/10 text-amber"
                      : index === 4
                        ? "border-red-400/50 bg-red-400/10 text-red-200"
                        : "border-mint/35 bg-mint/10 text-mint"
                  }`}
                >
                  <div className="font-semibold">{rack}</div>
                  <div className="mt-8 h-2 rounded-full bg-current opacity-70" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-current opacity-40" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-5 left-5 rounded-lg border border-cyan/25 bg-ink/70 p-3 backdrop-blur">
              <p className="text-xs text-slate-400">Picking route</p>
              <p className="mt-1 font-semibold text-cyan">A-12 → B-03 → C-08</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold">AI Alerts</p>
                <AlertTriangle className="text-amber" size={18} />
              </div>
              {["Rack C-08 low stock", "Aisle 4 congestion", "SKU mismatch at B-03"].map((alert) => (
                <div key={alert} className="mb-2 rounded-lg bg-amber/10 px-3 py-2 text-xs text-amber last:mb-0">
                  {alert}
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <Camera size={17} className="text-cyan" /> Live CCTV
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((cam) => (
                  <div key={cam} className="h-20 rounded-lg border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-2">
                    <span className="text-[10px] text-slate-400">CAM {cam}</span>
                    <div className="mt-5 h-1 rounded-full bg-cyan/50" />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
              <p className="text-sm font-semibold">Space Utilization</p>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-full w-[78%] rounded-full bg-mint" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-white">78%</p>
            </div>
          </div>
        </div>
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

function Problem() {
  return (
    <section className="section-shell py-20">
      <SectionHeading title="Warehouses still struggle with invisible operations" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, index) => (
          <div key={problem} className="glass card-hover rounded-xl p-6">
            <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-lg bg-red-400/10 text-red-300">
              <span className="font-semibold">0{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{problem}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" className="section-shell py-20">
      <SectionHeading kicker="Workflow" title="TwinFlow converts physical warehouse reality into actionable data" />
      <div className="grid gap-4 lg:grid-cols-4">
        {workflow.map((item, index) => (
          <div key={item.title} className="relative glass card-hover rounded-xl p-6">
            <item.icon className="mb-8 text-cyan" size={30} />
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            {index < workflow.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden text-cyan lg:block" size={22} />}
          </div>
        ))}
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-20">
      <div className="section-shell">
        <SectionHeading kicker="Technology" title="Practical AI, built on existing infrastructure" />
        <div className="grid gap-5 lg:grid-cols-3">
          {tech.map((item) => (
            <div key={item.title} className="glass card-hover rounded-xl p-7">
              <item.icon className="text-mint" size={32} />
              <h3 className="mt-7 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 rounded-lg border border-white/10 bg-ink/70 px-4 py-4">
              <ShieldCheck size={18} className="text-cyan" />
              <span className="text-sm font-medium text-slate-200">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductUI() {
  return (
    <section id="product" className="section-shell py-20">
      <SectionHeading kicker="Product" title="Built for both managers and warehouse workers" />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ManagerDashboard />
        <WorkerApp />
      </div>
    </section>
  );
}

function ManagerDashboard() {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">Manager Dashboard</p>
          <h3 className="text-2xl font-semibold text-white">Operations Control</h3>
        </div>
        <div className="flex gap-2">
          {["Live", "Rack", "KPI"].map((tab) => (
            <span key={tab} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-slate-300">
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_0.6fr]">
        <div className="relative min-h-[310px] overflow-hidden rounded-xl border border-cyan/20 bg-[#07111c] p-5">
          <div className="warehouse-grid absolute inset-x-0 bottom-0 h-[260px] origin-bottom opacity-70" />
          <div className="relative grid grid-cols-3 gap-3">
            {["A", "B", "C", "D", "E", "F"].map((zone, index) => (
              <div key={zone} className="rounded-lg border border-mint/30 bg-mint/10 p-3">
                <p className="text-sm font-semibold text-mint">Zone {zone}</p>
                <div className="mt-8 space-y-2">
                  <div className="h-2 rounded-full bg-mint/70" />
                  <div className={`h-2 rounded-full ${index === 3 ? "w-1/2 bg-amber" : "w-4/5 bg-cyan/60"}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute right-5 top-5 rounded-lg border border-amber/30 bg-amber/10 px-3 py-2 text-xs text-amber">
            Bottleneck: Aisle 4
          </div>
        </div>
        <div className="grid gap-3">
          {[
            ["Rack status", "92% healthy", PackageCheck],
            ["Bottleneck alerts", "3 active", AlertTriangle],
            ["Space utilization", "78%", Gauge],
            ["KPI report", "+15% pick speed", BarChart3],
          ].map(([label, value, Icon]) => (
            <div key={label as string} className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">{label as string}</p>
                <Icon className="text-cyan" size={18} />
              </div>
              <p className="mt-3 text-xl font-semibold text-white">{value as string}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkerApp() {
  const tasks = ["A-12 / SKU 4418", "B-03 / SKU 2041", "C-08 / SKU 8820"];

  return (
    <div className="glass rounded-2xl p-5">
      <div className="mx-auto max-w-sm rounded-[2rem] border border-white/10 bg-black p-3 shadow-2xl">
        <div className="rounded-[1.5rem] bg-[#101723] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Worker Picking App</p>
              <h3 className="text-xl font-semibold text-white">Today’s Tasks</h3>
            </div>
            <Smartphone className="text-mint" size={24} />
          </div>
          <div className="rounded-xl bg-cyan/10 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-cyan">
              <MapPinned size={17} /> Shortest Route
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">A-12 → B-03 → C-08</p>
          </div>
          <div className="mt-4 space-y-3">
            {tasks.map((task, index) => (
              <div key={task} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] p-3">
                <div>
                  <p className="font-semibold text-white">{task}</p>
                  <p className="text-xs text-slate-400">Pick {index + 1} case</p>
                </div>
                <Check className={index === 0 ? "text-mint" : "text-slate-500"} size={18} />
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.045] p-3 text-center">
              <QrCode className="mx-auto text-cyan" size={24} />
              <p className="mt-2 text-xs text-slate-300">QR Scan</p>
            </div>
            <div className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-center">
              <AlertTriangle className="mx-auto text-red-300" size={24} />
              <p className="mt-2 text-xs text-red-200">Missing Item</p>
            </div>
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
        <SectionHeading kicker="Business Value" title="Measurable warehouse efficiency" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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

function Pricing() {
  return (
    <section id="pricing" className="section-shell py-20">
      <SectionHeading kicker="Pricing" title="Scalable pricing for growing warehouses" />
      <div className="grid gap-5 lg:grid-cols-3">
        {prices.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 ${
              plan.featured ? "border-cyan/45 bg-cyan/10 shadow-glow" : "border-white/10 bg-white/[0.045]"
            }`}
          >
            <p className="text-sm text-slate-400">{plan.segment}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-1 text-sm text-slate-300">{plan.size}</p>
            <div className="mt-8">
              <span className="text-4xl font-semibold text-white">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-slate-400"> / month</span>}
            </div>
            <p className="mt-3 rounded-lg bg-white/[0.055] px-3 py-2 text-sm text-slate-300">{plan.setup}</p>
            <div className="mt-7 space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-slate-200">
                  <Check size={17} className="shrink-0 text-mint" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-slate-400">
        Initial setup fee: up to 300 pyeong ₩5M, 300-1,000 pyeong ₩10M, 1,000+ pyeong custom quote.
      </p>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="section-shell py-20">
      <SectionHeading kicker="Implementation" title="From PoC to scalable SaaS" />
      <div className="grid gap-5 lg:grid-cols-3">
        {roadmap.map((phase) => (
          <div key={phase.title} className="glass card-hover rounded-xl p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-cyan/10 px-3 py-1 text-sm font-semibold text-cyan">{phase.step}</span>
              <Timer className="text-mint" size={22} />
            </div>
            <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
            <div className="mt-6 space-y-3">
              {phase.items.map((item) => (
                <div key={item} className="flex gap-3 text-sm text-slate-300">
                  <Zap className="mt-0.5 shrink-0 text-cyan" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="demo" className="section-shell pb-16 pt-10">
      <div className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-[linear-gradient(135deg,rgba(38,217,255,0.16),rgba(87,242,183,0.08)_42%,rgba(255,255,255,0.05))] px-6 py-16 text-center shadow-glow sm:px-12">
        <Factory className="mx-auto mb-6 text-cyan" size={38} />
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-normal text-white sm:text-5xl">
          Make your warehouse faster, smarter, and more visible
        </h2>
        <a href="#" className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-7 py-3 font-semibold text-ink transition hover:bg-white">
          Request a Demo <ChevronRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default App;
