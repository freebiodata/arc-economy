/**
 * ARC ECONOMY — site data. All game values are placeholders [VERIFY]:
 * ARC Raiders prices/mechanics change per patch; confirm before publishing.
 */

export const SITE = {
  brand: 'ARC ECONOMY',
  domain: 'arceconomy.top',
  game: 'ARC Raiders',
  kicker: 'Salvage economics // prices',
  lastVerified: '2026-10-08',
  disclaimer:
    'Unofficial fan-made toolkit. Not affiliated with or endorsed by Embark Studios or Nexon. ARC Raiders and related marks belong to their respective owners.',
};

export const NAV = [
  { href: '/tools/', label: 'Tools' },
  { href: '/craft-profit/', label: 'Craft Profit' },
  { href: '/guides/raid-loot-value/', label: 'Guides' },
  { href: '/about/', label: 'About' },
];

export const TOOLS = [
  { href: '/craft-profit/', ico: '🛠️', name: 'Craft Profit Calculator', desc: 'Recipe inputs vs market sell price — real margin per craft, batch included.', tag: 'Flagship' },
  { href: '/loot-ev/', ico: '🎒', name: 'Raid Loot EV', desc: 'Expected loot value per raid from drop chances and your extraction rate.', tag: 'Calculator' },
  { href: '/flip-margin/', ico: '📈', name: 'Market Flip Margin', desc: 'Buy low, sell high — net profit after fees, ROI and break-even spread.', tag: 'Calculator' },
  { href: '/kit-budget/', ico: '🎯', name: 'Kit Budget', desc: 'Loadout cost with cost-per-death math so every raid is priced on purpose.', tag: 'Calculator' },
];

export const GUIDES = [
  { href: '/guides/crafting-for-profit/', ico: '📘', name: 'Crafting for profit', desc: 'When crafting beats looting, and which recipes are worth the bench time.' },
  { href: '/guides/raid-loot-value/', ico: '📗', name: 'Raid loot value', desc: 'Expected value thinking for extraction loots — the five numbers that matter.' },
  { href: '/guides/market-flipping/', ico: '📙', name: 'Market flipping basics', desc: 'Spreads, fees, and the boring discipline that makes flipping work.' },
];

const y = '2026-10-08';

export const TRUST: { slug: string; title: string; desc: string; html: string }[] = [
  {
    slug: 'about',
    title: 'About ARC ECONOMY – Free ARC Raiders Tools',
    desc: 'Who builds ARC ECONOMY, why it exists, how tools are made and kept current. An unofficial, ad-free ARC Raiders economy toolkit.',
    html: `
<h2>Why this site exists</h2>
<p>ARC Raiders is an economy game with guns attached — crafting, trading and loot math decide your progress as much as aim does. ARC ECONOMY turns that math into fast free tools: the <a href="/craft-profit/">craft profit calculator</a>, <a href="/loot-ev/">raid loot EV</a>, <a href="/flip-margin/">market flip margin</a> and <a href="/kit-budget/">kit budget</a>.</p>
<h2>How the tools are built</h2>
<ul>
<li>Every calculation runs client-side in your browser. Nothing you type is uploaded — see <a href="/privacy/">privacy</a>.</li>
<li>Prices and mechanics are entered by you or shipped as clearly-labeled placeholders [VERIFY]; every formula is on the <a href="/methodology/">methodology page</a>.</li>
<li>When a live community price feed is added, it will be disclosed here and in the changelog.</li>
</ul>
<h2>How the site is funded</h2>
<p>Currently: out of pocket, no ads, no affiliate links. Future funding will be disclosed here first.</p>
<h2>Who is behind it</h2>
<p>Maintained by an independent fan of extraction shooters. <!-- [NEEDS DATA]: add your name/bio before publishing. --> Corrections: <a href="/contact/">contact</a>.</p>
<h2>Affiliation notice</h2>
<p>${SITE.disclaimer}</p>`,
  },
  {
    slug: 'contact',
    title: 'Contact ARC ECONOMY – Report a Price Error',
    desc: 'Contact ARC ECONOMY: report outdated prices or formulas, request tools, or ask about methodology.',
    html: `
<h2>Email</h2>
<p><strong>hello@arceconomy.top</strong><br />
<!-- [NEEDS DATA]: set up this mailbox before launch. --> Include the page URL and, for price reports, the date you checked the market.</p>
<h2>What to include in a report</h2>
<ol class="steps">
<li>The page and value that looks wrong.</li>
<li>How you verified it (in-game market check, patch notes).</li>
<li>The date of your check.</li>
</ol>
<h2>Requests</h2>
<p>Tool ideas welcome — roadmap on the <a href="/changelog/">changelog</a>.</p>`,
  },
  {
    slug: 'methodology',
    title: 'Methodology – Formulas & Data Policy | ARC ECONOMY',
    desc: 'Every formula behind ARC ECONOMY: craft margins, loot EV, flip spreads, kit budgeting — plus the [VERIFY] placeholder policy and sources.',
    html: `
<h2>Craft profit</h2>
<pre class="formula">profit = sellPrice × (1 − marketFee%) − Σ(componentPrice × qty)
margin %  = profit ÷ Σ(componentPrice × qty)</pre>
<h2>Raid loot EV</h2>
<pre class="formula">EV per raid = extractionRate × Σ(dropChanceᵢ × valueᵢ)
EV per hour = EV per raid ÷ (raidTime + lobbyTime)</pre>
<h2>Market flipping</h2>
<pre class="formula">net = (sell − buy) × qty − fees
ROI = net ÷ (buy × qty) × 100</pre>
<p>Fees default to an editable placeholder [VERIFY against the current market fee schedule].</p>
<h2>Kit budget</h2>
<p>Cost per death amortization: a kit that costs <code>C</code> and survives on average <code>1 ÷ (1 − extractionRate)</code> raids costs <code>C × (1 − extractionRate)</code> per raid in expectation.</p>
<h2>The [VERIFY] policy</h2>
<p>Prices ship as editable placeholders — the math is exact, the defaults are yours to fill. Review date: <span class="mono">${y}</span>. Update flow: fix <code>src/data/site.ts</code> → bump the date → <a href="/changelog/">changelog</a> entry.</p>
<h2>AI-assist disclosure</h2>
<p>Pages drafted with AI assistance, reviewed by the operator before publishing. All math is auditable client-side code.</p>`,
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy | ARC ECONOMY',
    desc: 'ARC ECONOMY privacy in plain language: calculators run in your browser, nothing is uploaded, no tracking cookies, no accounts.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>The short version</h2>
<ul>
<li>All calculators run in your browser. <strong>Nothing you type is sent to any server.</strong></li>
<li>No advertising or tracking cookies; no analytics by default; no accounts.</li>
</ul>
<h2>Third parties</h2>
<p>Fonts load from Google Fonts — the only external request. If analytics are ever added, this page updates first with a dated <a href="/changelog/">changelog</a> note.</p>`,
  },
  {
    slug: 'terms',
    title: 'Terms of Use | ARC ECONOMY',
    desc: 'Terms of use for ARC ECONOMY: free unofficial ARC Raiders tools provided as-is, with no warranty of accuracy.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>What this site is</h2>
<p>${SITE.disclaimer}</p>
<h2>Accuracy</h2>
<p>Tools are provided <strong>as is, with no warranty of accuracy</strong>. Prices are user inputs or labeled placeholders; verify anything that matters before trading on it.</p>
<h2>Acceptable use</h2>
<ul><li>Personal use, freely. Don't resell or rebrand the tools.</li><li>Linking is welcome and needs no permission.</li></ul>
<h2>Limitation of liability</h2>
<p>To the maximum extent permitted by law, the operator is not liable for losses arising from use of the tools, including in-game currency decisions.</p>`,
  },
  {
    slug: 'changelog',
    title: "Changelog – What's New | ARC ECONOMY",
    desc: 'Every real update to ARC ECONOMY: new tools, data reviews, fixes. Dated and honest, newest first.',
    html: `
<h2>2026-10-08 — Launch</h2>
<ul>
<li>Shipped four tools: <a href="/craft-profit/">craft profit</a>, <a href="/loot-ev/">raid loot EV</a>, <a href="/flip-margin/">market flip margin</a>, <a href="/kit-budget/">kit budget</a>.</li>
<li>Price fields ship as editable inputs with [VERIFY] placeholders — see <a href="/methodology/">methodology</a>.</li>
<li>Three guides published: <a href="/guides/crafting-for-profit/">crafting for profit</a>, <a href="/guides/raid-loot-value/">raid loot value</a>, <a href="/guides/market-flipping/">market flipping</a>.</li>
</ul>
<h2>Planned</h2>
<ul><li>Optional community price snapshot feed (disclosed here first).</li><li>Crafting-queue time value — request via <a href="/contact/">contact</a>.</li></ul>`,
  },
  {
    slug: 'sitemap',
    title: 'HTML Sitemap – All Pages | ARC ECONOMY',
    desc: 'Every page on ARC ECONOMY: craft profit, loot EV, flip margin, kit budget tools, guides and site information.',
    html: '',
  },
];
