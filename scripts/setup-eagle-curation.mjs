#!/usr/bin/env node
/**
 * Create the Eagle Website Curation folder tree.
 *
 * Idempotent: existing folders are reused. This only creates folders through
 * Eagle's local API; it does not move, tag, rate, or delete any images.
 */

const API = process.env.EAGLE_API || "http://127.0.0.1:41595";

const TREE = {
  "Website Curation": {
    "01-Case Study Picks": [
      "A01-SmaTaste",
      "A02-CoCereb",
      "A03-SKG-Plus-Web",
      "A04-BEATROL",
      "A05-Sync-E-BCI",
      "A06-SprayScape",
      "A07-Wildfire-Whispers",
      "A08-Meta-Station-Huawei",
      "B02-Bamboo-Wind",
      "B03-Botanictrum",
      "B04-Lunacy-Moon",
      "B05-Walking-Heaven",
      "B06-Poetic-Form",
      "B07-GreenMove",
      "B08-Massbot-Digital-Legacy",
      "C01-Runway-ISEE",
      "C02-SP-AI-Collaboration",
      "C03-Mercury-Piano",
      "C05-Profile-Promo",
      "Needs-Review",
    ],
    "02-Play Category Picks": [
      "*3D_3D Art",
      "*Ad_Advertising",
      "*Animation & Video",
      "*Ar_Architecture",
      "*At_Fine Art & Cr_Crafts",
      "*Fa_Fashion",
      "*Ga_Game Design",
      "*Gr-Graphic_Brainding",
      "*Interaction Design",
      "*Logo Design",
      "*Mo_Motion_Film",
      "*Pd_Product Design",
      "*Ph_Photography",
      "*Sd_Sound",
      "*UI_UI:UX",
      "*Web Design",
      "*ll-Illustration",
    ],
    "03-Homepage Playground": ["GIFs", "Dynamic Posters", "3D Loops", "Live Demos"],
  },
};

async function api(path, options) {
  const response = await fetch(`${API}${path}`, options);
  if (!response.ok) throw new Error(`${path} failed: ${response.status}`);
  const body = await response.json();
  if (body.status !== "success") throw new Error(`${path} failed: ${JSON.stringify(body)}`);
  return body.data;
}

async function listFolders() {
  return api("/api/folder/list");
}

function findChild(folders, name) {
  return folders.find((folder) => folder.name === name);
}

async function createFolder(name, parentId) {
  const data = await api("/api/folder/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parentId ? { folderName: name, parent: parentId } : { folderName: name }),
  });
  return data;
}

async function ensureChild(parentChildren, name, parentId) {
  const existing = findChild(parentChildren, name);
  if (existing) return { folder: existing, created: false };
  const folder = await createFolder(name, parentId);
  return { folder, created: true };
}

let created = 0;
let reused = 0;

let roots = await listFolders();
for (const [rootName, groups] of Object.entries(TREE)) {
  const rootResult = await ensureChild(roots, rootName);
  if (rootResult.created) {
    created++;
    roots = await listFolders();
  } else {
    reused++;
  }

  const root = findChild(roots, rootName);
  for (const [groupName, childNames] of Object.entries(groups)) {
    const groupResult = await ensureChild(root.children ?? [], groupName, root.id);
    if (groupResult.created) {
      created++;
      roots = await listFolders();
    } else {
      reused++;
    }

    const refreshedRoot = findChild(roots, rootName);
    const group = findChild(refreshedRoot.children ?? [], groupName);
    for (const childName of childNames) {
      const childResult = await ensureChild(group.children ?? [], childName, group.id);
      if (childResult.created) created++;
      else reused++;
    }
    roots = await listFolders();
  }
}

console.log(`Eagle Website Curation folder tree ready. Created ${created}, reused ${reused}.`);
