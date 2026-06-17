# Force Drivers — Current State

This document lists all drivers currently defined in `app/data/forces.ts`. Drivers are Level 2 content sitting between Forces and Signals. Each force has 5–7 drivers. Driver IDs are kebab-case and are used as keys in `activeDrivers` arrays on context Force objects.

---

## AI Ascendance (`ai-ascendance`)

| ID | Name | Short Description |
|---|---|---|
| `agentic-systems` | Agentic Systems | AI systems that plan, execute, and iterate across complex tasks without continuous human instruction. |
| `cognitive-outsourcing` | Cognitive Outsourcing | Organizations delegate reasoning, synthesis, and judgment to AI systems at scale. |
| `human-ai-collaboration` | Human-AI Collaboration | Hybrid teams where AI handles execution and humans handle direction and judgment. |
| `synthetic-media` | Synthetic Media | AI-generated content saturates information channels, making trust and authenticity harder to establish. |
| `data-governance` | Data Governance | Data quality, ownership, and access become strategic inputs as AI deployment depends on them. |
| `ai-native-competition` | AI-Native Competition | New entrants built entirely on AI capabilities are rewriting cost and service benchmarks. |

---

## Trust Recalibration (`trust-recalibration`)

| ID | Name | Short Description |
|---|---|---|
| `proof-over-authority` | Proof Over Authority | Credentials and institutional affiliation no longer generate trust automatically — demonstrated outcomes do. |
| `leadership-transparency` | Leadership Transparency | Leaders are expected to communicate decisions, reasoning, and mistakes with greater visibility than ever before. |
| `institutional-distrust` | Institutional Distrust | Broad decline in confidence in established organizations creates a baseline of skepticism that must be overcome. |
| `accountability-pressure` | Accountability Pressure | Stakeholders demand visible ownership of results and consequences, not just stated commitments. |
| `narrative-fragmentation` | Narrative Fragmentation | Information ecosystems diverge, making shared organizational or public narratives harder to construct and hold. |
| `real-time-reputation` | Real-Time Reputation | Trust signals travel at the speed of social platforms, compressing response windows and amplifying both failures and credibility moments. |

---

## Institutional Rewiring (`institutional-rewiring`)

| ID | Name | Short Description |
|---|---|---|
| `responsible-ai-governance` | Responsible AI Governance | Organizations face pressure to demonstrate accountable, auditable AI deployment. |
| `regulatory-acceleration` | Regulatory Acceleration | Governance frameworks are being written in real time across multiple jurisdictions simultaneously. |
| `community-accountability` | Community Accountability | Organizations are expected to demonstrate impact on the communities in which they operate, not just their shareholders. |
| `inclusive-design` | Inclusive Design | Products, services, and processes are expected to serve diverse populations, not assume a default user. |
| `stakeholder-governance` | Stakeholder Governance | Boards and leadership teams face expanded accountability to a wider set of stakeholders than regulatory compliance alone. |
| `public-private-rebalancing` | Public-Private Rebalancing | The boundary between what governments and private organizations are responsible for is being renegotiated across multiple sectors. |

---

## Workforce Transformation (`workforce-transformation`)

| ID | Name | Short Description |
|---|---|---|
| `work-redesign` | Work Redesign | Roles, workflows, and team structures are being rebuilt around AI capability rather than against it. |
| `continuous-reskilling` | Continuous Reskilling | The shelf life of skills is shortening — organizations need ongoing capability development rather than episodic training. |
| `workforce-fluidity` | Workforce Fluidity | The boundaries between full-time employment, fractional work, contracting, and platform labour are blurring. |
| `meaning-and-purpose` | Meaning and Purpose | Employees apply belonging and purpose criteria to their employer choices alongside compensation and career trajectory. |
| `burnout-visibility` | Burnout Visibility | Workforce wellbeing is increasingly tracked and expected as an organizational accountability, not a personal variable. |
| `hybrid-work-baseline` | Hybrid Work Baseline | Flexibility expectations are now structural, not provisional — requiring intentional design rather than reactive accommodation. |

---

## Human Augmentation (`human-augmentation`)

| ID | Name | Short Description |
|---|---|---|
| `judgment-amplification` | Judgment Amplification | AI expands the quantity and quality of decisions that senior humans can make — without replacing the judgment layer. |
| `human-ai-handoffs` | Human-AI Handoffs | The boundary between what AI handles and what humans handle is actively being designed and redesigned in every function. |
| `skill-extension` | Skill Extension | Individuals with AI tools can now perform tasks previously requiring specialized expertise or larger teams. |
| `dignity-by-design` | Dignity by Design | Augmentation that preserves human agency and meaning is increasingly a design constraint, not a value-add. |
| `physical-digital-augmentation` | Physical-Digital Augmentation | Wearables, exoskeletons, and embedded interfaces extend human physical and cognitive capability in operational environments. |
| `oversight-capacity` | Oversight Capacity | Humans are responsible for supervising AI output at a scale that strains traditional review processes. |

---

## Economic Reconfiguration (`economic-reconfiguration`)

| ID | Name | Short Description |
|---|---|---|
| `outcome-based-economics` | Outcome-Based Economics | Payment and value-capture models shift toward demonstrated results rather than inputs or process compliance. |
| `procurement-rationalization` | Procurement Rationalization | Organizations apply more rigorous ROI discipline to discretionary spend as capital becomes more selective. |
| `ai-cost-compression` | AI Cost Compression | AI reduces the labour cost of producing knowledge work, changing the economics of services and operations built around it. |
| `capital-discipline` | Capital Discipline | Higher cost of capital and investor scrutiny make efficiency and return clarity strategic priorities. |
| `industrial-policy` | Industrial Policy | Government spending and subsidies are reshaping competitive dynamics in energy, technology, and manufacturing. |
| `inequality-demand-fragmentation` | Inequality and Demand Fragmentation | Growing income stratification is bifurcating markets — premium and value segments grow while the middle compresses. |
| `internal-capability-building` | Internal Capability Building | Organizations are insourcing functions previously outsourced as AI makes internal capability more achievable. |

---

## Geopolitical Realignment (`geopolitical-realignment`)

| ID | Name | Short Description |
|---|---|---|
| `strategic-decoupling` | Strategic Decoupling | Nations and companies are deliberately reducing dependencies on rivals in technology, manufacturing, and finance. |
| `industrial-sovereignty` | Industrial Sovereignty | Governments are rebuilding domestic capability in semiconductors, energy, food, and critical materials. |
| `trade-friction` | Trade Friction | Tariffs, export controls, and sanctions are structurally reshaping supply chains and market access. |
| `security-reprioritization` | Security Reprioritization | Defence spending and security concerns are entering commercial strategy in ways not seen since the Cold War. |
| `policy-volatility` | Policy Volatility | Regulatory and policy environments are shifting faster than strategic planning cycles can accommodate. |
| `contested-interdependence` | Contested Interdependence | Economic interdependence is simultaneously a source of leverage and vulnerability — and both sides know it. |

---

## Climate & Resilience (`climate-and-resilience`)

| ID | Name | Short Description |
|---|---|---|
| `physical-climate-disruption` | Physical Climate Disruption | Extreme weather, heat, flooding, and water stress directly affect operations. |
| `adaptation-resilience-investment` | Adaptation & Resilience Investment | Organizations invest to withstand disruption rather than merely report on emissions. |
| `climate-disclosure` | Climate Disclosure | Reporting requirements make climate exposure more visible to investors and regulators. |
| `decarbonization-mandates` | Decarbonization Mandates | Policy and customer pressure create binding expectations for emissions reduction. |
| `infrastructure-fragility` | Infrastructure Fragility | Grids, transport, water, and logistics systems show increasing vulnerability. |
| `biodiversity-ecosystem-stress` | Biodiversity & Ecosystem Stress | Environmental degradation enters corporate risk and resilience frameworks. |

---

## Resource & Energy Transition (`resource-and-energy-transition`)

| ID | Name | Short Description |
|---|---|---|
| `electrification-demand` | Electrification Demand | Transport, industry, and buildings shift to electricity as the primary energy source. |
| `grid-constraint` | Grid Constraint | Electricity grids struggle to keep pace with demand growth and distributed generation. |
| `critical-minerals` | Critical Minerals | Lithium, cobalt, rare earths, and other minerals become strategic bottlenecks. |
| `energy-cost-volatility` | Energy Cost Volatility | Energy prices become less predictable as the grid and fuel mix shift. |
| `industrial-decarbonization` | Industrial Decarbonization | Hard-to-abate sectors face specific technology and capital challenges in the transition. |
| `resource-circularity` | Resource Circularity | Circular economy models gain traction as linear resource models face regulatory and cost pressure. |

---

## Identity & Belonging (`identity-and-belonging`)

| ID | Name | Short Description |
|---|---|---|
| `meaning-at-work` | Meaning at Work | Employees expect work to provide more than compensation — they seek purpose and contribution. |
| `community-formation` | Community Formation | People seek belonging in smaller, identity-aligned communities rather than broad institutions. |
| `representation-expectations` | Representation Expectations | Employees and consumers expect to see themselves reflected in leadership, products, and culture. |
| `social-polarization` | Social Polarization | Deepening social and political divides make it harder for organizations to hold diverse coalitions together. |
| `narrative-fragmentation` | Narrative Fragmentation | Shared organizational narratives erode as people consume different information ecosystems. |
| `belonging-as-performance` | Belonging as Performance | Programs and signals substitute for genuine inclusion, creating a gap between stated and lived culture. |
