// Shared, research-driven content for all nine demo sites.
// Every business identifier below is a clearly-marked placeholder, not a claim.

// The county is a first-class value so additional counties can be added later
// without rewriting the wordmark or the page copy.
export const county = {
  name: "Prince William County",
  shortName: "Prince William",
  state: "VA",
  label: "of Prince William County",
  slug: "prince-william-county",
  pageTitle: "Home care for Prince William County families",
};

export const business = {
  name: "Heart & Harbor Homecare",
  shortName: "Heart & Harbor Homecare",
  fullName: "Heart & Harbor Homecare of Prince William County",
  countyLabel: "of Prince William County",
  legalName: "Heart & Harbor Homecare LLC (placeholder entity)",
  tagline: "Care that keeps home within reach.",
  promise:
    "You will always know who is coming, what they will do, and how your family is doing.",
  phone: "(703) 555-0100",
  phoneHref: "tel:+17035550100",
  email: "hello@heartandharborhomecare.com",
  emailHref: "mailto:hello@heartandharborhomecare.com",
  addressLine: "By appointment only · 12345 Placeholder Plaza, Suite 200",
  city: "Woodbridge",
  state: "VA",
  zip: "22192",
  hours: "Office Mon–Fri, 8:00 a.m.–6:00 p.m. · Care available 7 days a week",
  founded: "2026",
  license:
    "Virginia home care organization license application pending (VDH license # PLACEHOLDER)",
  serviceArea: "Prince William County, Manassas, Manassas Park, and surrounding Northern Virginia communities",
  priceRange: "$$",
  minimum: "4-hour visit minimum · no weekly minimum · no long-term contract",
  response: "New inquiries answered within one business hour, 8 a.m.–6 p.m.",
  disclaimer:
    "Demonstration website. Heart & Harbor Homecare of Prince William County is a concept business. The phone number, address, license number, any rate information, staff biographies, and outcomes shown are placeholders and must be replaced with verified information before launch. Nothing here is medical advice.",
  licenseNote:
    "Personal care services in Virginia require licensure by the Virginia Department of Health. This concept site does not claim an active license. Launch content must show the actual license number only after VDH issues it.",
};

export const stats = [
  { value: "503,000", label: "residents in Prince William County (2025)", source: "U.S. Census Bureau via USAFacts" },
  { value: "60,900", label: "county residents aged 65+ (2024), a share that is growing", source: "U.S. Census Bureau via USAFacts" },
  { value: "26.8%", label: "of county residents identify as Hispanic or Latino", source: "U.S. Census Bureau via USAFacts" },
  { value: "$27B", label: "value of unpaid family caregiving in Virginia each year", source: "AARP Virginia" },
];

export const differentiators = [
  {
    icon: "compass",
    title: "One named care coordinator",
    short: "A real person who knows the case — not a call center queue.",
    body:
      "Every family is assigned a named coordinator who owns the care plan, the schedule, and the questions. The coordinator answers during office hours and hands off to a documented on-call line after hours.",
    proof: "You get a direct name, a direct number, and a documented after-hours backup.",
  },
  {
    icon: "message",
    title: "The Friday Family Brief",
    short: "A ten-minute weekly update you can actually read.",
    body:
      "Each Friday, families receive a short written summary: what changed, what was eaten, how sleep and mood were, which supplies are low, and what needs a decision. Delivered by email, text link, or printed copy.",
    proof: "A short written record you can share with family and keep with your own notes.",
  },
  {
    icon: "match",
    title: "Caregiver matching, not random assignment",
    short: "Language, temperament, routine, and interests are matched on purpose.",
    body:
      "The intake captures the client's routines, pet preferences, language, and conversation style. The coordinator assigns a primary caregiver and a trained backup, then checks fit at 72 hours and 14 days.",
    proof: "Fit is checked at 72 hours and 14 days — and changed if it is not working.",
  },
  {
    icon: "clock",
    title: "72-hour hospital-to-home bridge",
    short: "The first three days home are the riskiest. We plan for them.",
    body:
      "Non-clinical support after discharge: transportation home, groceries and prescriptions picked up, medication reminders set up, fall hazards cleared, and a follow-up call to the family. We coordinate with — never replace — the discharging clinical team.",
    proof: "Non-clinical support that works alongside the discharging care team.",
  },
  {
    icon: "receipt",
    title: "A written quote, not a rate card",
    short: "Clear pricing in writing — before the first visit, not after.",
    body:
      "We do not publish a single hourly figure, because the honest number depends on the schedule, the level of support, and travel. After a no-cost conversation we send an itemized written quote: hours, any weekend or overnight premium, and mileage. The rate you sign is the rate we bill.",
    proof: "No assessment fee. No long-term contract. Seven days' written notice to pause or end care.",
  },
  {
    icon: "language",
    title: "Bilingual care coordination",
    short: "English and Spanish coordination for a county that is 26.8% Hispanic.",
    body:
      "Intake, care-plan reviews, and family updates are available in English and Spanish when a qualified coordinator is on staff. We do not machine-translate care instructions or use unqualified interpreters for clinical conversations.",
    proof: "Language support is offered only when a qualified coordinator is on staff.",
  },
];

export const services = [
  {
    slug: "companion-care",
    name: "Companion care",
    category: "core",
    icon: "heart",
    short: "Conversation, companionship, walks, hobbies, and a dependable presence.",
    intro:
      "Companion care is for older adults who are safe with daily tasks but spend too much time alone. It is also the lowest-risk way for a family to test whether outside help feels right.",
    who: "Older adults living alone, recently widowed, or isolated after a move; families who live out of state.",
    problem: "Loneliness, skipped meals, missed social contact, and adult children worrying through the workday.",
    value: "Recurring weekday visits create a predictable revenue base and a natural path to personal care as needs change.",
    bullets: [
      "Friendly visits, conversation, cards, reading, and shared hobbies",
      "Walks, porch time, and encouragement to attend senior center programs",
      "Meal planning and simple meal preparation together",
      "Grocery lists, errands, and appointment companionship",
      "Family check-in notes after every visit",
    ],
    reg: "Companion services are exempt from Virginia home care licensure when provided alone, but an organization providing personal care needs a VDH home care organization license. This concept is designed to operate under the licensed model.",
    revenue: "Hourly, 4-hour minimum; weekly packages of 8, 12, or 20 hours.",
    phase: 1,
  },
  {
    slug: "personal-care",
    name: "Personal care assistance",
    category: "core",
    icon: "bath",
    short: "Dignified help with bathing, dressing, grooming, toileting, and mobility.",
    intro:
      "Personal care is hands-on assistance with activities of daily living. In Virginia it is a licensed home care organization service, delivered under a plan of care with supervision and documented caregiver training.",
    who: "Adults with limited mobility, chronic illness, recovery needs, or cognitive change who want to remain at home.",
    problem: "Safety risk in the bathroom, falls, skin breakdown, and family members physically unable to lift or assist.",
    value: "Highest-demand core service and the strongest driver of hours per client.",
    bullets: [
      "Bathing, showering, dressing, and grooming",
      "Toileting and incontinence care",
      "Safe transfers and walking assistance",
      "Skin observation and reporting — not wound care",
      "Mobility routines directed by a care plan",
    ],
    reg: "Requires a Virginia home care organization license, a qualified administrator, a plan of care, caregiver training, supervision, criminal record checks, and liability coverage. No clinical tasks.",
    revenue: "Hourly, 4-hour minimum; higher rate than companion care.",
    phase: 1,
  },
  {
    slug: "respite-care",
    name: "Respite care",
    category: "core",
    icon: "refresh",
    short: "Planned breaks for the family member who has been carrying everything.",
    intro:
      "Respite gives the primary family caregiver time to work, travel, recover, or simply rest, knowing the routine is being followed. It can be a single afternoon or a scheduled week.",
    who: "Adult children and spouses providing unpaid care, especially those with jobs or their own health needs.",
    problem: "Caregiver burnout, isolation, missed work, and avoidable hospitalizations when the caregiver collapses.",
    value: "High emotional urgency and strong referral potential from caregiver support groups.",
    bullets: [
      "A few hours a week or full days, scheduled in advance",
      "Routine continuity: meals, medication reminders, walks, bedtime",
      "Overnight respite when a caregiver needs a full night's sleep",
      "Written handoff notes at the start and end of each visit",
      "No requirement to become a permanent client",
    ],
    reg: "Same licensure rules as the underlying care. Personal care during respite requires the HCO license; companion-only respite does not.",
    revenue: "Hourly with a 4-hour minimum; discounted 20-hour respite bundle.",
    phase: 1,
  },
  {
    slug: "homemaker-services",
    name: "Homemaker & light housekeeping",
    category: "core",
    icon: "home",
    short: "A safer, calmer home: meals, laundry, dishes, and clutter control.",
    intro:
      "Homemaker services keep the household running when housekeeping has become physically difficult or emotionally overwhelming. Light housekeeping only — no heavy cleaning, lifting, or hazardous work.",
    who: "Older adults whose home is becoming hard to maintain; families preparing a home for a return from the hospital.",
    problem: "Unsafe clutter, spoiled food, laundry piles, fall hazards, and a home that no longer feels like home.",
    value: "Easy add-on to companion or personal care and a strong entry point for new clients.",
    bullets: [
      "Meal preparation and gentle nutrition reminders",
      "Laundry, linens, dishes, and trash",
      "Light tidying of paths, bathrooms, and kitchen surfaces",
      "Grocery list building and errand support",
      "Decluttering focused on fall prevention, not deep cleaning",
    ],
    reg: "Pure homemaker and chore services are exempt from HCO licensure when provided alone; combined with personal care, the organization must be licensed.",
    revenue: "Hourly add-on; bundled with companion visits.",
    phase: 1,
  },
  {
    slug: "transportation-errands",
    name: "Transportation & errands",
    category: "core",
    icon: "car",
    short: "Rides to appointments, groceries, pharmacy, and church — with a helper.",
    intro:
      "Transportation is one of the most requested and least reliable services for older adults in suburban Prince William County, where driving is often the difference between independence and isolation.",
    who: "Adults who no longer drive confidently, especially in Woodbridge, Gainesville, and Haymarket.",
    problem: "Missed appointments, skipped prescriptions, and isolation when family schedules do not align.",
    value: "Fills a concrete gap and creates frequent touchpoints that build trust.",
    bullets: [
      "Door-through-door accompaniment, not a curb drop-off",
      "Medical, dental, pharmacy, grocery, and worship trips",
      "Waiting-room companionship when requested",
      "Errand running with receipts and a written summary",
      "Coordination with family calendars",
    ],
    reg: "No special license for non-emergency transport in a personal or agency vehicle, but insurance, driver records, vehicle safety, and wheelchair-transport rules must be confirmed. Do not transport someone who needs stretcher or emergency care.",
    revenue: "Hourly with a small mileage supplement, disclosed up front.",
    phase: 1,
  },
  {
    slug: "medication-reminders",
    name: "Medication reminders",
    category: "core",
    icon: "pill",
    short: "On-time reminders and a written record — never administration.",
    intro:
      "Caregivers remind, prompt, and document. They do not administer medication, adjust doses, or interpret symptoms. This distinction is a regulatory line, not a marketing preference.",
    who: "Clients with complex schedules whose family cannot monitor every dose.",
    problem: "Missed doses, duplicate doses, expired prescriptions, and confusion after a discharge.",
    value: "Low-cost, high-trust service that increases visit frequency.",
    bullets: [
      "Scheduled verbal prompts from an approved medication list",
      "Pill organizer filling only where permitted by the plan of care and law",
      "Documented time-stamped reminder log shared with family",
      "Pharmacy pickup and refill coordination",
      "Escalation to family and the prescriber's office when something is wrong",
    ],
    reg: "Medication administration is a regulated nursing task. Reminders must follow the care plan and Virginia rules; confirm scope with counsel and the licensing authority before launch.",
    revenue: "Bundled with personal care; standalone wellness-check rate.",
    phase: 1,
  },
  {
    slug: "wellness-check-ins",
    name: "Wellness check-ins",
    category: "core",
    icon: "pulse",
    short: "A scheduled visit that confirms someone is safe, eating, and connected.",
    intro:
      "A check-in is a short, structured visit: eyes on the client, home hazards noted, hydration and meals confirmed, and a summary sent to the family. It is not a clinical assessment.",
    who: "Families at a distance, clients between larger care episodes, and older adults who resist full-time help.",
    problem: "Small problems become emergencies between family visits.",
    value: "Recurring subscription revenue with predictable scheduling.",
    bullets: [
      "Visual wellness check and friendly conversation",
      "Hydration, meal, and mail check",
      "Fall-hazard scan of main pathways",
      "Family notification with a photo (with consent)",
      "Escalation plan for no-answer and concern situations",
    ],
    reg: "Non-clinical. No vital-sign interpretation or medical advice. Follow HIPAA-aware privacy practices and obtain consent for photos.",
    revenue: "Monthly package of weekly or twice-weekly check-ins.",
    phase: 1,
  },
  {
    slug: "dementia-support",
    name: "Dementia-friendly support",
    category: "growth",
    icon: "brain",
    short: "Routine, redirection, and a calm environment for memory changes.",
    intro:
      "Dementia support is non-clinical care grounded in routine, validation, and environmental calm. It is appropriate for families who need consistent hands-on help and coaching, not a diagnosis or a cure.",
    who: "Families navigating early- to mid-stage dementia who want to stay home longer.",
    problem: "Wandering, sundowning, repetitive questions, resistance to bathing, and caregiver exhaustion.",
    value: "Premium rate, high loyalty, and strong word-of-mouth in caregiver communities.",
    bullets: [
      "Consistent caregiver assignment and a predictable daily rhythm",
      "Redirection and validation techniques, not confrontation",
      "Meal, hydration, and bathroom prompts",
      "Home safety review for wandering and night-time risk",
      "Family coaching and written escalation guidance",
    ],
    reg: "Non-clinical only. Staff need specialized dementia training and supervision. Do not market memory care, nursing, or behavioral treatment. Wandering risk may require a higher level of care.",
    revenue: "Premium hourly rate; 6-hour minimum for dementia visits.",
    phase: 2,
  },
  {
    slug: "hospital-to-home",
    name: "Post-discharge support",
    category: "growth",
    icon: "shield",
    short: "A non-clinical bridge through the first 72 hours at home.",
    intro:
      "Hospitals discharge people faster than families can prepare. This service handles the practical, non-clinical pieces: the ride, the fridge, the prescriptions, the fall hazards, and the follow-up call.",
    who: "Families bringing a parent home after a hospital or rehabilitation stay.",
    problem: "Readmissions driven by missed medications, no food, unsafe pathways, and no one to call.",
    value: "Urgent, referral-friendly, and easy to explain to discharge planners.",
    bullets: [
      "Home readiness check before pickup when possible",
      "Ride home and settling-in support",
      "Prescription pickup and medication reminder setup",
      "Groceries, meals, and basic supplies",
      "Follow-up call at 24 and 72 hours; written summary to family",
    ],
    reg: "Non-clinical support only. Must not duplicate or interfere with skilled home health, therapy, or hospice. Requires a clear coordination protocol and HIPAA-aware information handling.",
    revenue: "Flat 3-day bridge package plus optional ongoing care.",
    phase: 2,
  },
  {
    slug: "family-caregiver-coaching",
    name: "Family caregiver coaching",
    category: "growth",
    icon: "users",
    short: "Practical planning sessions for the family, not just the patient.",
    intro:
      "A structured conversation about what the family can safely do, what should be delegated, what to prepare for, and where the local resources are. Education and planning, not therapy.",
    who: "Adult children coordinating care from another city, spouses, and siblings who disagree about the plan.",
    problem: "Decision paralysis, duplicated effort, guilt, and preventable crises.",
    value: "Low overhead, high trust, and a natural pipeline into ongoing care.",
    bullets: [
      "90-minute family care planning session",
      "Written action plan with roles and next steps",
      "Local resource map: aging services, transportation, legal aid",
      "Home safety walkthrough",
      "Optional 30-day check-in call",
    ],
    reg: "Education and non-clinical planning only. Do not provide legal, financial, or medical advice. Refer to elder law attorneys, financial planners, and clinicians.",
    revenue: "Flat session fee; bundled free with 40+ monthly care hours.",
    phase: 2,
  },
  {
    slug: "home-safety-assessment",
    name: "Home safety & aging-in-place review",
    category: "growth",
    icon: "house-check",
    short: "A room-by-room look at falls, lighting, bathrooms, and exits.",
    intro:
      "A practical walkthrough with a written report the family can act on. Recommendations focus on low-cost fixes first, with contractor referrals only where the family asks.",
    who: "Families planning for the next five years, or reacting to a first fall.",
    problem: "Most falls happen at home, and most hazards are cheap to fix but easy to overlook.",
    value: "A paid entry offer that demonstrates expertise before a care commitment.",
    bullets: [
      "Room-by-room hazard checklist",
      "Bathroom, stair, and lighting review",
      "Emergency exit and phone-access check",
      "Written prioritized action list with cost ranges",
      "Optional 30-day follow-up to confirm fixes",
    ],
    reg: "Non-clinical. Do not perform construction, electrical, or medical work. Use licensed contractors for modifications.",
    revenue: "Flat assessment fee, credited toward the first month of care.",
    phase: 2,
  },
  {
    slug: "overnight-care",
    name: "Overnight & 24-hour care",
    category: "growth",
    icon: "moon",
    short: "Awake overnight support for safety, reassurance, and morning routine.",
    intro:
      "An awake caregiver provides night-time companionship, bathroom assistance, and safety monitoring. For clients who need continuous support, 24-hour care is delivered by a rotating team with documented handoffs.",
    who: "Clients who wander at night, need bathroom help, or cannot be left alone.",
    problem: "Night-time falls, exhausted family caregivers, and unsafe attempts to get up alone.",
    value: "Highest revenue per client, but operationally demanding and margin-sensitive.",
    bullets: [
      "Awake overnight caregiver, 8- or 10-hour shifts",
      "Bathroom and transfer assistance",
      "Night-time routine and reassurance",
      "Morning preparation and handoff",
      "Documented overnight log",
    ],
    reg: "Licensed HCO requirements apply when personal care is provided. Overnight staffing, fatigue management, and supervision policies must be in place.",
    revenue: "Premium overnight rate; 24-hour care quoted as a daily package.",
    phase: 3,
  },
];

export const processSteps = [
  {
    n: "01",
    title: "A 15-minute call",
    body: "Tell us what is happening. We ask about safety, mobility, medications, and what the family has already tried. No sales pressure and no assessment fee.",
  },
  {
    n: "02",
    title: "In-home conversation",
    body: "A coordinator visits the home, meets the client, reviews the routine, and completes a non-clinical safety walkthrough. Family can join by video.",
  },
  {
    n: "03",
    title: "A written care plan",
    body: "You receive the schedule, the named caregiver, the tasks, the written quote, and the escalation contacts before care begins.",
  },
  {
    n: "04",
    title: "A deliberate match",
    body: "We introduce the primary caregiver and a trained backup. We check fit at 72 hours and again at 14 days, and change the match if it is not working.",
  },
  {
    n: "05",
    title: "Weekly communication",
    body: "The Friday Family Brief summarizes the week. The coordinator answers questions during office hours; the on-call line handles evenings and weekends.",
  },
  {
    n: "06",
    title: "Review every 90 days",
    body: "Needs change. We revisit the plan, the hours, and the cost on a scheduled cadence — and sooner if something changes.",
  },
];

export const commitments = [
  { title: "No long-term contract", body: "Seven days' written notice to pause or end service. No cancellation penalty for illness or hospitalization." },
  { title: "A written quote", body: "The rate in your signed care agreement is the rate we bill. Weekend, overnight, and mileage terms are disclosed in writing before the first visit." },
  { title: "A named backup", body: "Every client has a trained backup caregiver who has been introduced before an emergency." },
  { title: "Background checks before contact", body: "Virginia State Police criminal record check and sworn disclosure before any direct client contact, consistent with 12VAC5-381-110." },
  { title: "No clinical overreach", body: "We do not provide skilled nursing, physical therapy, wound care, or medication administration. We refer to licensed providers." },
  { title: "Privacy by design", body: "Care notes are shared only with people the client authorizes. Photos require written consent." },
];

export const locations = [
  {
    slug: "woodbridge",
    name: "Woodbridge",
    zips: "22191, 22192, 22193",
    blurb:
      "Our home base. Woodbridge families often juggle commutes on I-95 with an aging parent who should not be alone all day. We build visits around the actual commute, not a call-center schedule.",
    landmarks: ["Potomac Mills", "Occoquan Bay", "Sentara Northern Virginia Medical Center", "Prince William Area Agency on Aging offices"],
    note: "Shorter travel times between clients mean more reliable start times and consistent caregiver assignments.",
  },
  {
    slug: "manassas",
    name: "Manassas",
    zips: "20108, 20109, 20110, 20111",
    blurb:
      "Manassas has a mix of long-time homeowners and multigenerational households. We are deliberate about language and family decision-making, and we coordinate with family members who are not local.",
    landmarks: ["Old Town Manassas", "UVA Health Prince William Medical Center", "Manassas Mall", "Virginia Railway Express"],
    note: "Multigenerational homes need clear role boundaries. Our care plan names who decides what.",
  },
  {
    slug: "manassas-park",
    name: "Manassas Park",
    zips: "20111",
    blurb:
      "A small, walkable city where neighbors often look out for one another. Our role is to make that informal support more reliable, with scheduled visits and a written record.",
    landmarks: ["Manassas Park Community Center", "VRE Manassas Park Station", "Blooms Park"],
    note: "In a small community, reputation is earned one family at a time. We focus on consistent, documented care.",
  },
  {
    slug: "gainesville",
    name: "Gainesville",
    zips: "20155, 20156",
    blurb:
      "Gainesville's newer neighborhoods are car-dependent. When driving stops, isolation can start quickly. Transportation and companion visits are the most common first request we expect here.",
    landmarks: ["Virginia Gateway", "Lake Manassas", "Novant Health UVA Health System Haymarket Medical Center"],
    note: "Newer homes are not automatically safe homes. Bathrooms and stairs are still the highest-risk rooms.",
  },
  {
    slug: "haymarket",
    name: "Haymarket",
    zips: "20168, 20169",
    blurb:
      "Haymarket and the surrounding semi-rural areas need caregivers who are comfortable with longer driveways, wells, and pets. We confirm travel expectations before the first visit.",
    landmarks: ["Haymarket Town Hall", "James Long Regional Park", "Town of Haymarket farmers market"],
    note: "Longer rural routes mean we confirm travel expectations and scheduling before the first visit.",
  },
  {
    slug: "dumfries",
    name: "Dumfries",
    zips: "22025, 22026",
    blurb:
      "Dumfries and Triangle have a significant share of older adults living in older housing stock. Small repairs and fall hazards matter as much as personal care.",
    landmarks: ["Dumfries Town Hall", "Leesylvania State Park", "Potomac Shores"],
    note: "Older homes may have narrow doorways and steep stairs. Safety assessments should happen before the first shower visit.",
  },
  {
    slug: "occoquan",
    name: "Occoquan",
    zips: "22125",
    blurb:
      "A historic river town with tight streets and older buildings. We plan parking, weather, and walking routes before a caregiver's first visit.",
    landmarks: ["Occoquan Historic District", "Occoquan River", "River Mill Park"],
    note: "Flooding and event traffic can delay visits. Backup routes are part of the care plan.",
  },
  {
    slug: "lake-ridge",
    name: "Lake Ridge",
    zips: "22192",
    blurb:
      "Lake Ridge has a large concentration of established homeowners and active older adults. Many clients want help to keep up community life, not to withdraw from it.",
    landmarks: ["Lake Ridge Park", "Lake Ridge Marina", "Old Bridge Road corridor"],
    note: "Active clients often start with transportation and companionship, then add personal care later.",
  },
  {
    slug: "dale-city",
    name: "Dale City",
    zips: "22193",
    blurb:
      "Dale City's housing stock ranges from 1960s ramblers to newer construction. We tailor safety recommendations to the actual house, not a generic checklist.",
    landmarks: ["Dale City Recreation Center", "Andrew Leitch Park", "Potomac Mills corridor"],
    note: "Home modifications should be prioritized by fall risk, not by aesthetics.",
  },
  {
    slug: "bristow",
    name: "Bristow",
    zips: "20136",
    blurb:
      "Bristow families are often balancing two working adults, children, and an aging parent. Respite and after-school-hours care are common needs.",
    landmarks: ["Bristow Village", "Brawner Farm", "Victory Elementary corridor"],
    note: "Evening and weekend visits are available by request and confirmed in writing.",
  },
];

export const faqs = [
  {
    q: "Are you licensed?",
    a: "This is a concept website. Heart & Harbor Homecare does not yet hold a Virginia home care organization license. Personal care services in Virginia require licensure by the Virginia Department of Health, and the launch site must display the actual license number once issued. Companion and homemaker services can be offered without an HCO license when provided alone, but this business intends to be licensed before delivering personal care.",
  },
  {
    q: "What is the difference between home care and home health?",
    a: "Home care is non-medical help with daily living — companionship, meals, housekeeping, transportation, and personal care such as bathing and dressing. Home health is skilled clinical care ordered by a physician, such as nursing, physical therapy, or occupational therapy, and is delivered by a Medicare-certified home health agency. We provide home care and refer clinical needs to licensed providers.",
  },
  {
    q: "How much does care cost?",
    a: "We do not publish a single hourly rate because it would change with hours, schedule, and level of support. After a no-cost consultation we send an itemized written quote covering the hourly rate, any weekend or overnight premium, mileage, and the four-hour minimum. There is no assessment fee and no long-term contract.",
  },
  {
    q: "Do you accept insurance, Medicare, or Medicaid?",
    a: "No payment relationships are claimed on this concept site. Most non-medical home care in Virginia is paid privately, through long-term care insurance, or through veterans' benefits. Medicaid personal care is available through the CCC Plus waiver but requires DMAS enrollment and a provider agreement. Confirm coverage with the agency before making a decision.",
  },
  {
    q: "Can you give my mother her medication?",
    a: "Caregivers can remind, prompt, and document. Medication administration is a regulated nursing task and is outside our scope. We coordinate with the prescriber, pharmacy, and family, and we use a written medication list approved by the family.",
  },
  {
    q: "What happens if our caregiver is sick?",
    a: "Every client is assigned a named backup caregiver who has been introduced before an emergency. If both are unavailable, the coordinator covers the visit or arranges a qualified substitute. You receive a call, not a surprise.",
  },
  {
    q: "How quickly can care start?",
    a: "For non-emergency care, the goal is a home visit within two business days and care within five. Hospital-to-home requests are triaged the same day. These are operating targets for launch, not guarantees.",
  },
  {
    q: "Do you provide care in assisted living or a nursing home?",
    a: "The launch model focuses on private homes and apartments in Prince William County. Facility-based care has different contracting, supervision, and insurance requirements and is not part of the initial scope.",
  },
];

export const articles = [
  {
    slug: "when-a-parent-needs-help",
    title: "How to tell when a parent needs help at home",
    description:
      "A practical, non-alarmist checklist for adult children in Prince William County who are trying to decide whether it is time to bring in outside care.",
    category: "Family decisions",
    read: "7 min read",
    date: "2026-10-14",
    intro:
      "The first sign is rarely a dramatic event. More often it is a stack of unopened mail, a fridge with nothing but condiments, or a story that does not quite add up. Families tend to wait for a crisis because the alternative — admitting that a parent is changing — feels disloyal.",
    sections: [
      {
        h: "Look for patterns, not moments",
        p: [
          "One missed bill is not a crisis. Three months of missed bills, a refrigerator that never has fresh food, and a new reluctance to leave the house is a pattern. Patterns are what matter.",
          "Ask yourself what has changed in the last six months: weight, gait, grooming, social contact, mail, driving, and the condition of the kitchen. Write it down. A written timeline is more useful to a doctor or care coordinator than a general impression.",
        ],
      },
      {
        h: "The five domains worth checking",
        p: [
          "Safety: unsteady on stairs, holding furniture, new bruises, a fall that was not reported. Nutrition: skipped meals, weight loss, expired food. Medication: duplicates, missed doses, confusion about what was taken. Money: unusual spending, unpaid bills, scam calls. Connection: fewer outings, unanswered calls, a canceled church group.",
          "You do not need to diagnose anything. You need enough information to have a calm conversation and, if needed, to ask a professional for a non-clinical assessment.",
        ],
      },
      {
        h: "Have the conversation before the crisis",
        p: [
          "Choose a low-stakes moment, not the aftermath of a fall. Lead with observation, not accusation: 'I noticed the mail has been piling up. Can we look at it together?' Offer a specific, small form of help rather than a permanent identity change.",
          "Many families start with four hours of companion care per week. It is reversible, it is affordable relative to full-time care, and it gives everyone data about how outside help actually feels.",
        ],
      },
      {
        h: "Know the local options",
        p: [
          "The Prince William Area Agency on Aging operates senior centers, care coordination, Meals on Wheels, and a caregiver support program. Its in-home personal care line is 703-792-6374. Virginia's Medicaid CCC Plus waiver can cover personal care for eligible adults, but eligibility and wait times vary.",
          "Private home care is the fastest route for families who can pay privately or use long-term care insurance. Ask any agency for its VDH license number, its insurance limits, its background-check process, and its backup-caregiver policy before signing anything.",
        ],
      },
    ],
    takeaway:
      "If you are unsure, start with a written timeline, one small reversible service, and a conversation with a professional who will not push you into a contract.",
  },
  {
    slug: "home-care-cost-prince-william",
    title: "What home care costs in Prince William County",
    description:
      "A plain-language breakdown of hourly rates, minimums, premiums, and the payment sources families actually use in Northern Virginia.",
    category: "Paying for care",
    read: "6 min read",
    date: "2026-09-30",
    intro:
      "Home care pricing is deliberately confusing. Agencies advertise a low hourly rate, then add assessment fees, weekend premiums, mileage, and minimum-hour rules. The number on the website is rarely the number on the invoice.",
    sections: [
      {
        h: "The local range",
        p: [
          "National survey data put the median non-medical caregiver rate at about $35 per hour in 2025. In Northern Virginia, published local rates commonly land between $35 and $42 per hour depending on the agency, the level of care, and the hours purchased. Virginia's median is often cited at $35 per hour.",
          "Treat any single number as a starting point. The real cost is the rate multiplied by the hours you actually need, plus premiums and fees.",
        ],
      },
      {
        h: "The fine print that changes the bill",
        p: [
          "Minimum visit length: four hours is common; some agencies require more. Overnight and holiday premiums: often 1.5x. Mileage for transportation: usually a per-mile charge. Assessment fees: sometimes $100–$250. Cancellation windows: often 24–48 hours. Long-term contracts: increasingly rare but still exist.",
          "Ask for a written sample invoice before care starts. A reputable agency can produce one in minutes.",
        ],
      },
      {
        h: "Payment sources",
        p: [
          "Most non-medical care is private pay. Long-term care insurance may reimburse covered services if the policy includes home care and the agency can provide the required documentation. Veterans may qualify for VA benefits, including aid and attendance for eligible wartime veterans and surviving spouses.",
          "Medicaid's CCC Plus waiver covers agency-directed or consumer-directed personal care and respite for eligible adults, but the agency must be enrolled with DMAS. Medicare generally does not pay for non-medical custodial care; it covers short-term skilled home health ordered by a physician.",
        ],
      },
      {
        h: "How to compare two quotes",
        p: [
          "Compare the all-in hourly cost for a typical week, the cost of a holiday visit, the cancellation policy, the backup-caregiver plan, and what happens if the client is hospitalized. A five-dollar rate difference can disappear quickly if one agency charges a weekly minimum and the other does not.",
        ],
      },
    ],
    takeaway:
      "Ask for the all-in cost of a realistic week, not the advertised hourly rate. Then ask what happens when plans change.",
  },
  {
    slug: "first-72-hours-after-hospital",
    title: "The first 72 hours home after a hospital stay",
    description:
      "A non-clinical checklist for the fragile window between discharge and the first follow-up appointment.",
    category: "Transitions",
    read: "5 min read",
    date: "2026-09-12",
    intro:
      "Discharge is a handoff, and handoffs are where things fall. The hospital's job ends at the door. The family's job starts in a house that may not be ready, with a medication list no one has read, and a follow-up appointment nobody wrote down.",
    sections: [
      {
        h: "Before you leave the building",
        p: [
          "Get the discharge summary, the medication list, the follow-up appointments, and the phone number for the discharging unit. Ask who to call at 2 a.m. if something goes wrong. Confirm whether a home health referral was placed and which agency will call.",
          "Ask the nurse to walk you through the medication changes out loud. 'New' and 'changed' are the words that matter. Write them down in the same notebook you will use at home.",
        ],
      },
      {
        h: "The first night",
        p: [
          "Clear a path from the bed to the bathroom. Put a lamp or nightlight within reach. Set out water, the phone, and the medication list. Remove throw rugs from the path. If the person is unsteady, do not improvise a transfer alone — ask for a physical therapy or home health assessment.",
          "Confirm that someone will be there for the first 24 hours. If no one can, that is the moment to arrange non-clinical support, not the next morning.",
        ],
      },
      {
        h: "The first 72 hours",
        p: [
          "Fill prescriptions before the first dose is due. Stock easy food. Confirm the follow-up appointment and transportation. Watch for the practical warning signs families are told to report: confusion, falls, inability to keep fluids down, a fever, or a wound that looks worse. Call the clinical team, not a caregiver, for medical concerns.",
          "A non-clinical caregiver can handle the ride, the groceries, the pharmacy, the laundry, and the reminder schedule. That is often enough to keep the family from collapsing in week one.",
        ],
      },
    ],
    takeaway:
      "The discharge plan is a document, not a service. Someone has to turn it into a schedule, a stocked kitchen, and a working medication routine.",
  },
  {
    slug: "questions-before-hiring-agency",
    title: "12 questions to ask before hiring a home care agency",
    description:
      "A printable list of licensing, insurance, staffing, and communication questions for Virginia families.",
    category: "Choosing care",
    read: "4 min read",
    date: "2026-08-22",
    intro:
      "The difference between a good and a bad home care experience is rarely the brochure. It is the license, the supervisor, the backup plan, and whether anyone answers the phone when something goes wrong.",
    sections: [
      {
        h: "Licensing and safety",
        p: [
          "1. What is your Virginia home care organization license number, and what services does it cover? 2. Are you insured, and what are the liability limits? 3. How do you screen caregivers, and do you run a Virginia State Police criminal record check before direct contact? 4. Are caregivers employees or independent contractors?",
          "5. Who supervises the caregiver, and how often does a supervisor visit? 6. What training do caregivers receive before working with a client with dementia or mobility limits?",
        ],
      },
      {
        h: "Operations and communication",
        p: [
          "7. Will we have a named coordinator, and what are the after-hours arrangements? 8. What happens if our caregiver is sick or quits? 9. What is the cancellation policy, and is there a minimum visit? 10. How do you communicate changes — phone, text, email, or a portal?",
          "11. What exactly is included in the hourly rate, and what costs extra? 12. Can we see a sample care plan and a sample invoice before we sign?",
        ],
      },
      {
        h: "Listen for the evasions",
        p: [
          "A legitimate agency answers licensing and insurance questions directly. Hesitation, 'we're bonded' without a license number, or a promise to provide nursing without a Medicare certification are reasons to keep looking.",
        ],
      },
    ],
    takeaway:
      "Ask for documents, not reassurance. A license number, a certificate of insurance, and a sample care plan tell you more than any testimonial.",
  },
];

export const resourceLinks = [
  { name: "Prince William Area Agency on Aging", desc: "Care coordination, senior centers, caregiver support, and in-home assistance.", url: "https://www.pwcva.gov/department/area-agency-aging" },
  { name: "Virginia Department of Health — Home Care & Hospice", desc: "State licensure and inspection of home care organizations.", url: "https://www.vdh.virginia.gov/licensure-and-certification/division-of-acute-care-services/home-care-and-hospice/" },
  { name: "Virginia Medicaid — CCC Plus Waiver", desc: "Personal care, respite, and other home and community-based services.", url: "https://www.dmas.virginia.gov/for-members/benefits-and-services/waivers/ccc-plus-waiver" },
  { name: "Eldercare Locator", desc: "National directory connecting older adults and caregivers to local services.", url: "https://eldercare.acl.gov/" },
  { name: "AARP Family Caregiving", desc: "Practical guides, financial planning, and caregiver support.", url: "https://www.aarp.org/caregiving/" },
  { name: "Virginia Navigator", desc: "Aging and disability resource navigation for Virginia families.", url: "https://www.virginianavigator.org/" },
];

export const navLinks = [
  { href: "services.html", label: "Services" },
  { href: "locations.html", label: "Service Area" },
  { href: "about.html", label: "Our Approach" },
  { href: "resources.html", label: "Resources" },
  { href: "contact.html", label: "Contact" },
];

export const serviceCategories = {
  core: "Core services",
  growth: "Specialized support",
};
