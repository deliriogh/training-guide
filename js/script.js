
const breadcrumb = document.getElementById("breadcrumb");
const breadcrumbParent = document.getElementById("breadcrumbParent");

const breadcrumbLabels = {
  "support-org": "Support Organization, Case Management & Customer Experience",
  "platform-fundamentals": "Salesforce Platform Fundamentals",
  "core-cloud": "Core Cloud Fundamentals",
  "security-visibility": "Security, Visibility & Escalation Management",
  "automation-knowledge": "Automation, Knowledge Management & Known Issues",
  progress: "Course Progress",
  glossary: "Glossary",
  references: "Reference Links"
};

const subtopicLabels = {
  "support-role": "Support Engineer Role",
  "case-lifecycle": "Case Lifecycle",
  "severity-sla": "Severity, SLA & Case Closure",
  "case-quality": "Case Details & Case Quality",
  "routing-transfers": "Case Routing & Transfers",
  "queue-work": "Queue & Work Management",
  "customer-experience": "Customer Experience & Communication",
  "support-metrics": "Support Expectations & Metrics",
  "platform-architecture": "Salesforce Platform & Architecture",
  "internal-tools": "Internal Support Tools",
  "sf-environments": "Salesforce Environments",
  "data-metadata": "Data & Metadata",
  "navigation-config": "Navigation & Configuration",
  "sales-cloud": "Sales Cloud",
  "service-cloud": "Service Cloud",
  "sales-vs-service": "Sales Cloud vs Service Cloud"
};

function updateBreadcrumb(parentId, subtarget = null, isUtility = false) {
  if (!breadcrumb) return;

  const parentLabel = breadcrumbLabels[parentId] || parentId;
  breadcrumb.innerHTML = `
    <span class="breadcrumb-root">Training</span>
    <span class="breadcrumb-separator">›</span>
    <span class="${subtarget ? "" : "breadcrumb-current"}">${parentLabel}</span>
    ${subtarget ? `
      <span class="breadcrumb-separator">›</span>
      <span class="breadcrumb-current">${subtopicLabels[subtarget] || subtarget}</span>
    ` : ""}
  `;
}

const themeToggle = document.getElementById("themeToggle");
const topButton = document.getElementById("topButton");
const startLearning = document.getElementById("startLearning");
const railButtons = document.querySelectorAll(".rail-button");
const panel = document.getElementById("utilityPanel");
const panelClose = document.getElementById("panelClose");
const trainingSections = document.querySelectorAll(".training-section");
const fullPageViews = document.querySelectorAll(".full-page-view");
const treeParents = document.querySelectorAll(".tree-parent");
const treeChildren = document.querySelectorAll(".tree-children button");
const currentTopic = document.getElementById("currentTopic");
const glossaryPageSearch = document.getElementById("glossaryPageSearch");
const glossaryPageItems = document.querySelectorAll(".glossary-page-item");
const glossaryPageEmpty = document.getElementById("glossaryPageEmpty");

const topicLabels = {
  "support-org": "01 · Support Organization & Case Management",
  "platform-fundamentals": "02 · Salesforce Platform Fundamentals",
  "core-cloud": "03 · Core Cloud Fundamentals",
  "security-visibility": "04 · Security, Visibility & Escalation",
  "automation-knowledge": "05 · Automation & Knowledge"
};

const utilityLabels = {
  progress: "Course Progress",
  glossary: "Glossary",
  references: "Reference Links"
};

function closeContentsPanel() {
  panel.classList.remove("open");
  document.body.classList.remove("panel-open");
  const contentsButton = document.querySelector('[data-panel="contents"]');
  if (contentsButton) contentsButton.classList.remove("active");
}

function hideAllMainViews() {
  trainingSections.forEach(section => section.classList.remove("active-section"));
  fullPageViews.forEach(view => view.classList.remove("active-full-page"));
}

function showFullPage(type) {
  closeContentsPanel();
  hideAllMainViews();

  const page = document.getElementById(`${type}-page`);
  if (page) {
    page.classList.add("active-full-page");
    page.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  railButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.panel === type));
  currentTopic.textContent = utilityLabels[type] || "";
  updateBreadcrumb(type, null, true);
  recordView({ type: "full", id: type });
}

function showSection(sectionId, subtarget = null) {
  hideAllMainViews();

  trainingSections.forEach(section => {
    section.classList.toggle("active-section", section.id === sectionId);
  });

  treeParents.forEach(parent => {
    parent.classList.toggle("active", parent.dataset.section === sectionId);
  });

  railButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.panel === "contents"));
  currentTopic.textContent = topicLabels[sectionId] || "";
  updateBreadcrumb(sectionId, subtarget);

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (subtarget) {
    setTimeout(() => {
      const target = document.getElementById(subtarget);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 220);
  }

  recordView({ type: "section", id: sectionId, subtarget: subtarget || null });
}

railButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.panel;

    if (type === "contents") {
      const isOpen = panel.classList.contains("open");

      if (isOpen) {
        closeContentsPanel();
        return;
      }

      railButtons.forEach(button => button.classList.toggle("active", button === btn));
      panel.classList.add("open");
      document.body.classList.add("panel-open");
      return;
    }

    showFullPage(type);
  });
});

panelClose.addEventListener("click", closeContentsPanel);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

startLearning.addEventListener("click", () => {
  showSection("support-org", "support-role");
  const contentsButton = document.querySelector('[data-panel="contents"]');
  if (contentsButton) contentsButton.click();
});

treeParents.forEach(parent => {
  parent.addEventListener("click", () => {
    const clickedGroup = parent.closest(".tree-group");
    const wasOpen = clickedGroup.classList.contains("open");

    document.querySelectorAll(".tree-group").forEach(group => group.classList.remove("open"));

    if (!wasOpen) {
      clickedGroup.classList.add("open");
      showSection(parent.dataset.section);
    }
  });
});

treeChildren.forEach(child => {
  child.addEventListener("click", () => {
    const group = child.closest(".tree-group");
    const parent = group.querySelector(".tree-parent");

    document.querySelectorAll(".tree-group").forEach(item => item.classList.toggle("open", item === group));
    showSection(parent.dataset.section, child.dataset.subtarget);
  });
});

glossaryPageSearch.addEventListener("input", () => {
  const query = glossaryPageSearch.value.trim().toLowerCase();
  let visible = 0;

  glossaryPageItems.forEach(item => {
    const matches = item.textContent.toLowerCase().includes(query);
    item.style.display = matches ? "grid" : "none";
    if (matches) visible += 1;
  });

  glossaryPageEmpty.style.display = visible ? "none" : "block";
});


document.querySelectorAll(".ecosystem-node[data-jump]").forEach(node => {
  node.addEventListener("click", () => {
    showSection(node.dataset.jump, node.dataset.subtarget || null);
  });
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const sectionIds = ["support-role","case-lifecycle","severity-sla","case-quality","routing-transfers","queue-work","customer-experience","support-metrics","platform-architecture","internal-tools","sf-environments","data-metadata","navigation-config","sales-cloud","service-cloud","sales-vs-service"];
const completeButtons = document.querySelectorAll(".complete-button");
const progressCards = document.querySelectorAll("[data-progress-section]");
const mainProgressRing = document.getElementById("mainProgressRing");
const mainProgressPercent = document.getElementById("mainProgressPercent");
const mainProgressStat = document.getElementById("mainProgressStat");

function getCompletedSections() {
  try {
    return JSON.parse(localStorage.getItem("trainingGuideCompleted") || "[]");
  } catch {
    return [];
  }
}

function saveCompletedSections(completed) {
  localStorage.setItem("trainingGuideCompleted", JSON.stringify(completed));
}

function updateProgressUI() {
  const completed = getCompletedSections();
  const percent = Math.round((completed.length / sectionIds.length) * 100);

  if (mainProgressPercent) mainProgressPercent.textContent = `${percent}%`;
  if (mainProgressStat) mainProgressStat.textContent = `${completed.length} of ${sectionIds.length}`;
  if (mainProgressRing) {
    mainProgressRing.style.background =
      `conic-gradient(var(--accent) ${percent}%, var(--surface-2) 0)`;
  }

  const topProgressPercent = document.getElementById("topProgressPercent");
  const topProgressFill = document.getElementById("topProgressFill");

  if (topProgressPercent) topProgressPercent.textContent = `${percent}%`;
  if (topProgressFill) topProgressFill.style.width = `${percent}%`;

  completeButtons.forEach(button => {
    const done = completed.includes(button.dataset.complete);
    button.classList.toggle("completed", done);
    button.textContent = done ? "Completed ✓" : "Mark section as completed ✓";
  });

  progressCards.forEach(card => {
    const done = completed.includes(card.dataset.progressSection);
    card.classList.toggle("completed", done);
    const status = card.querySelector("[data-status]");
    if (status) status.textContent = done ? "Completed" : "Not completed";
  });
}

completeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.complete;
    const completed = getCompletedSections();
    const index = completed.indexOf(id);

    if (index >= 0) completed.splice(index, 1);
    else completed.push(id);

    saveCompletedSections(completed);
    updateProgressUI();
  });
});

document.querySelectorAll(".quiz-button").forEach(button => {
  button.addEventListener("click", () => {
    const quiz = button.closest(".quick-check");
    const selected = quiz.querySelector('input[type="radio"]:checked');
    const feedback = quiz.querySelector(".quiz-feedback");
    feedback.classList.remove("correct", "incorrect");

    if (!selected) {
      feedback.textContent = "Choose an answer first.";
      feedback.classList.add("incorrect");
      return;
    }

    if (selected.value === button.dataset.answer) {
      feedback.textContent = button.dataset.success || "✓ Correct.";
      feedback.classList.add("correct");
    } else {
      feedback.textContent = "Not quite. Try again.";
      feedback.classList.add("incorrect");
    }
  });
});

updateProgressUI();


const sectionNavButtons = document.querySelectorAll(".section-nav-btn");
const historyBack = document.getElementById("historyBack");
const historyForward = document.getElementById("historyForward");

let viewHistory = [];
let historyIndex = -1;
let suppressHistory = false;

function recordView(view) {
  if (suppressHistory) return;

  const current = viewHistory[historyIndex];
  if (current && current.type === view.type && current.id === view.id && current.subtarget === view.subtarget) {
    updateHistoryButtons();
    return;
  }

  viewHistory = viewHistory.slice(0, historyIndex + 1);
  viewHistory.push(view);
  historyIndex = viewHistory.length - 1;
  updateHistoryButtons();
}

function updateHistoryButtons() {
  if (historyBack) historyBack.disabled = historyIndex <= 0;
  if (historyForward) historyForward.disabled = historyIndex < 0 || historyIndex >= viewHistory.length - 1;
}

function openHistoryView(view) {
  suppressHistory = true;

  if (view.type === "section") {
    showSection(view.id, view.subtarget || null);
  } else if (view.type === "full") {
    showFullPage(view.id);
  }

  suppressHistory = false;
  updateHistoryButtons();
}

if (historyBack) {
  historyBack.addEventListener("click", () => {
    if (historyIndex > 0) {
      historyIndex -= 1;
      openHistoryView(viewHistory[historyIndex]);
    }
  });
}

if (historyForward) {
  historyForward.addEventListener("click", () => {
    if (historyIndex < viewHistory.length - 1) {
      historyIndex += 1;
      openHistoryView(viewHistory[historyIndex]);
    }
  });
}

sectionNavButtons.forEach(button => {
  button.addEventListener("click", () => {
    showSection(button.dataset.go, button.dataset.subtarget || null);
  });
});

/* Initial state: course content visible, utility panel closed */
closeContentsPanel();
showSection("support-org", "support-role");
railButtons.forEach(btn => btn.classList.remove("active"));
updateHistoryButtons();


const ecosystemProducts = document.querySelectorAll(".ecosystem-product");
const ecosystemInfoCard = document.getElementById("ecosystemInfoCard");
const ecosystemInfoIcon = document.getElementById("ecosystemInfoIcon");
const ecosystemInfoTitle = document.getElementById("ecosystemInfoTitle");
const ecosystemInfoText = document.getElementById("ecosystemInfoText");
const ecosystemInfoLink = document.getElementById("ecosystemInfoLink");

function updateEcosystemProduct(product) {
  ecosystemProducts.forEach(item => item.classList.toggle("active", item === product));

  ecosystemInfoIcon.textContent = product.dataset.icon || "✦";
  ecosystemInfoTitle.textContent = product.dataset.title || "";
  if (product.dataset.descriptionHtml) {
    ecosystemInfoText.innerHTML = product.dataset.descriptionHtml;
  } else {
    ecosystemInfoText.textContent = product.dataset.description || "";
  }
  ecosystemInfoLink.textContent = product.dataset.action || "";

  const hasJump = Boolean(product.dataset.jump);
  ecosystemInfoLink.disabled = !hasJump;
  ecosystemInfoLink.dataset.jump = product.dataset.jump || "";
  ecosystemInfoLink.dataset.subtarget = product.dataset.subtarget || "";

  ecosystemInfoCard.classList.remove("flash");
  requestAnimationFrame(() => ecosystemInfoCard.classList.add("flash"));
  setTimeout(() => ecosystemInfoCard.classList.remove("flash"), 240);
}

ecosystemProducts.forEach(product => {
  product.addEventListener("mouseenter", () => updateEcosystemProduct(product));
  product.addEventListener("focus", () => updateEcosystemProduct(product));
  product.addEventListener("click", () => {
    updateEcosystemProduct(product);
    if (product.dataset.jump) {
      showSection(product.dataset.jump, product.dataset.subtarget || null);
    }
  });
});

ecosystemInfoLink.addEventListener("click", () => {
  if (!ecosystemInfoLink.disabled && ecosystemInfoLink.dataset.jump) {
    showSection(ecosystemInfoLink.dataset.jump, ecosystemInfoLink.dataset.subtarget || null);
  }
});

const navHotspots = document.querySelectorAll(".nav-hotspot");
const navFeatureCards = document.querySelectorAll(".navigation-feature-cards button");
const navInfoIcon = document.getElementById("navInfoIcon");
const navInfoTitle = document.getElementById("navInfoTitle");
const navInfoText = document.getElementById("navInfoText");
const navLiveCard = document.querySelector(".nav-live-card");

function updateNavigationHotspot(hotspot) {
  navHotspots.forEach(item => item.classList.toggle("active", item === hotspot));
  navFeatureCards.forEach(card => {
    card.classList.toggle("active", card.dataset.hotspotTarget === hotspot.dataset.title);
  });

  navInfoIcon.textContent = hotspot.dataset.icon || "•";
  navInfoTitle.textContent = hotspot.dataset.title || "";
  navInfoText.textContent = hotspot.dataset.description || "";

  navLiveCard.classList.remove("flash");
  requestAnimationFrame(() => navLiveCard.classList.add("flash"));
  setTimeout(() => navLiveCard.classList.remove("flash"), 240);
}

navHotspots.forEach(hotspot => {
  hotspot.addEventListener("mouseenter", () => updateNavigationHotspot(hotspot));
  hotspot.addEventListener("focus", () => updateNavigationHotspot(hotspot));
  hotspot.addEventListener("click", () => updateNavigationHotspot(hotspot));
});

navFeatureCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    const target = [...navHotspots].find(item => item.dataset.title === card.dataset.hotspotTarget);
    if (target) updateNavigationHotspot(target);
  });
  card.addEventListener("click", () => {
    const target = [...navHotspots].find(item => item.dataset.title === card.dataset.hotspotTarget);
    if (target) updateNavigationHotspot(target);
  });
});


// V17 navigation search
const navigationSearch = document.getElementById("navigationSearch");
const navigationSearchClear = document.getElementById("navigationSearchClear");
const navigationSearchEmpty = document.getElementById("navigationSearchEmpty");

function filterNavigation() {
  if (!navigationSearch) return;
  const query = navigationSearch.value.trim().toLowerCase();
  const wrap = navigationSearch.closest(".nav-search-wrap");
  wrap?.classList.toggle("has-value", Boolean(query));

  let totalMatches = 0;

  document.querySelectorAll("#courseTree .tree-group").forEach(group => {
    const parent = group.querySelector(".tree-parent");
    const children = [...group.querySelectorAll(".tree-children button")];
    const parentMatches = parent?.textContent.toLowerCase().includes(query);
    let childMatches = 0;

    children.forEach(child => {
      const matches = !query || child.textContent.toLowerCase().includes(query);
      child.style.display = matches ? "" : "none";
      if (matches) childMatches += 1;
    });

    const visible = !query || parentMatches || childMatches > 0;
    group.style.display = visible ? "" : "none";

    if (query && visible && childMatches > 0) group.classList.add("open");
    if (query && parentMatches) children.forEach(child => child.style.display = "");

    if (visible) totalMatches += 1;
  });

  if (!query) {
    document.querySelectorAll("#courseTree .tree-children button").forEach(child => child.style.display = "");
  }

  if (navigationSearchEmpty) navigationSearchEmpty.style.display = totalMatches ? "none" : "block";
}

navigationSearch?.addEventListener("input", filterNavigation);
navigationSearchClear?.addEventListener("click", () => {
  navigationSearch.value = "";
  filterNavigation();
  navigationSearch.focus();
});

// V17 interactive Case Lifecycle
const lifecycleSteps = document.querySelectorAll(".lifecycle-step");
const lifecycleNumber = document.getElementById("lifecycleNumber");
const lifecycleTitle = document.getElementById("lifecycleTitle");
const lifecycleDescription = document.getElementById("lifecycleDescription");
const lifecyclePractice = document.getElementById("lifecyclePractice");

function activateLifecycleStep(step) {
  lifecycleSteps.forEach(item => item.classList.toggle("active", item === step));
  if (lifecycleNumber) lifecycleNumber.textContent = step.dataset.step;
  if (lifecycleTitle) lifecycleTitle.textContent = step.dataset.title;
  if (lifecycleDescription) lifecycleDescription.textContent = step.dataset.description;
  if (lifecyclePractice) lifecyclePractice.textContent = step.dataset.practice;
}
lifecycleSteps.forEach(step => {
  step.addEventListener("mouseenter", () => activateLifecycleStep(step));
  step.addEventListener("focus", () => activateLifecycleStep(step));
  step.addEventListener("click", () => activateLifecycleStep(step));
});

// Reflect topic completion on Course chips
function updateTopicCourseChips() {
  const completed = getCompletedSections();
  document.querySelectorAll("[data-topic-chip]").forEach(chip => {
    chip.classList.toggle("completed", completed.includes(chip.dataset.topicChip));
  });
}
document.querySelectorAll(".topic-complete-button").forEach(button => {
  button.addEventListener("click", () => setTimeout(updateTopicCourseChips, 0));
});
updateTopicCourseChips();
