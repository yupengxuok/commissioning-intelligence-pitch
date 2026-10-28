import assert from "node:assert/strict";
import fs from "node:fs";
import crypto from "node:crypto";
import { landingContent } from "../src/content/landing.ts";
import { presentationSections } from "../src/content/presentation.ts";
import { references } from "../src/content/references.ts";

const escapeHtml = text => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;");
export function visibleMainWords(main) {
  return main.replace(/<aside\b[^>]*data-citation[^>]*>[\s\S]*?<\/aside>/g, " ")
    .replace(/<span class="loop-step-index"[^>]*>[\s\S]*?<\/span>/g, " ")
    .replace(/<span aria-hidden="true"[^>]*>[\s\S]*?<\/span>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<")
    .trim().split(/\s+/).filter(word => /[A-Za-z0-9]/.test(word));
}

const preservation = JSON.parse(fs.readFileSync("docs/archive/landing-preservation.json", "utf8"));
for (const [file, hash] of Object.entries(preservation)) {
  assert.equal(crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex"), hash, `Detailed source changed: ${file}`);
}
assert.equal(presentationSections.length, 10, "Detailed internal proposal retained");
assert.equal((fs.readFileSync("docs/speaker-notes.md", "utf8").match(/^## \d{2} — /gm) || []).length, 10);
assert.equal(landingContent.navigation.length, 6);
assert.equal(landingContent.product.capabilities.length, 4);
for (const capability of landingContent.product.capabilities) assert.ok(capability.label.split(/\s+/).length <= 15);
const routeCounts = [];
for (const file of ["out/index.html", "out/presentation/index.html"]) {
  const html = fs.readFileSync(file, "utf8");
  const dom = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  const main = dom.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert.ok(main, file);
  assert.equal((main.match(/<section\b/g) || []).length, 6);
  assert.ok(!/<table\b|engineering-detail|roadmap-phases|Next slide|Previous slide/.test(main));
  assert.equal((main.match(/class="diagnostic-workspace\s*"/g) || []).length, 1);
  assert.equal((main.match(/class="equipment-schematic"/g) || []).length, 1);
  assert.equal((main.match(/class="landing-concept"/g) || []).length, 1);
  assert.equal((main.match(/class="engineering-loop"/g) || []).length, 1);
  const words = visibleMainWords(main);
  assert.ok(words.length >= 350 && words.length <= 550, `Visible word budget: ${words.length}`);
  routeCounts.push({ file, visibleMainWords: words.length });
  for (const item of landingContent.navigation) {
    assert.ok(main.includes(`id="${item.id}"`));
    assert.ok(dom.includes(`href="#${item.id}"`));
  }
  for (const copy of [landingContent.hero.headline, landingContent.hero.subtitle, landingContent.industry.takeaway, landingContent.advantage.headline, landingContent.advantage.takeaway, landingContent.google.headline, landingContent.google.action, ...landingContent.product.capabilities.map(item => item.label)]) {
    assert.equal(main.split(escapeHtml(copy)).length - 1, 1, `Missing/duplicated landing copy: ${copy}`);
  }
  for (const item of landingContent.product.capabilities) assert.equal(main.split(`<h3>${escapeHtml(item.verb)}</h3>`).length - 1, 1);
  assert.ok(main.includes("~40%") && main.includes("85%"));
  for (const id of [...landingContent.industry.referenceIds, ...landingContent.google.referenceIds]) assert.ok(dom.includes(references.find(source => source.id === id).url));
  const ids = [...dom.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of dom.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), `Broken anchor: ${match[1]}`);
}
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => entry.isDirectory() ? walk(`${dir}/${entry.name}`) : [`${dir}/${entry.name}`]);
for (const file of walk("out")) {
  if (!/\.(html|txt|js|json|map)$/.test(file)) continue;
  const text = fs.readFileSync(file,"utf8");
  for (const section of presentationSections) for (const privateCopy of [section.speakerNotes, section.transition]) {
    assert.ok(!text.includes(privateCopy) && !text.includes(JSON.stringify(privateCopy).slice(1,-1)), `Private narrative exported: ${file}`);
  }
  assert.ok(!text.includes(presentationSections[7].points[0].detail), `Internal pilot methodology exported: ${file}`);
}
assert.ok(!fs.existsSync("out/docs"), "Internal repository documents must not be published");
console.log(JSON.stringify({result:"PASS",sections:6,routeCounts,internalSectionsRetained:10,sourceHashes:"unchanged",deviceSchematics:1,notesAndMethodology:"not exported"},null,2));
