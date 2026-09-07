
const breadcrumb = document.getElementById("breadcrumb");
const breadcrumbParent = document.getElementById("breadcrumbParent");

const breadcrumbLabels = {
  "support-org": "Success Engineer & Case Operations",
  "platform-fundamentals": "Salesforce Platform Foundations",
  "sales-experience": "Sales & Experience Cloud",
  "service-cloud": "Service Cloud",
  "security-visibility": "Security & Visibility",
  "automation-execution": "Automation & Execution",
  "reports-data": "Reports & Data Management",
  "investigation-toolbox": "Investigation Toolbox & Technical Diagnostics",
  "structured-investigation": "Structured Investigation, RCA & Collaboration",
  "real-cases": "Real Case Library",
  "progress": "Home",
  "glossary": "Glossary",
  "references": "Reference Links"
};

const subtopicLabels = {
  "support-role": "Support Engineer Role",
  "case-lifecycle": "Case Lifecycle",
  "severity-sla": "Severity, Business Impact & SLA",
  "case-quality": "Case Quality & Documentation",
  "case-closure": "Case Closure & Special Processes",
  "routing-transfers": "Transfers & Escalations",
  "queue-work": "Queue & Work Management",
  "customer-experience": "Customer Experience",
  "support-metrics": "Expectations, Metrics & Career",
  "module-01-final": "Module 01 Final Quiz",
  "salesforce-c360": "Salesforce & Customer 360",
  "platform-architecture": "Salesforce Architecture",
  "sf-environments": "Environments",
  "editions-licenses": "Editions, Licenses & Entitlements",
  "data-model-foundations": "Data Model",
  "navigation": "Navigation",
  "configuration": "Configuration",
  "module-02-final": "Module 02 Final Quiz",
  "sales-overview": "Sales Cloud Overview",
  "accounts-contacts": "Accounts, Contacts & Person Accounts",
  "lead-lifecycle": "Leads & Lead Lifecycle",
  "web-to-lead": "Web-to-Lead",
  "lead-assignment": "Lead Assignment",
  "lead-conversion": "Lead Conversion",
  "lead-troubleshooting": "Lead Troubleshooting",
  "opportunity-management": "Opportunity Management",
  "approval-processes": "Approval Processes",
  "experience-cloud": "Experience Cloud",
  "service-overview": "Service Cloud Ecosystem",
  "service-console": "Service Console",
  "case-management-feed": "Case Management & Case Feed",
  "parent-child-cases": "Parent & Child Cases",
  "case-creation-automation": "Case Creation & Initial Automation",
  "omni-queues": "Omni-Channel & Queues",
  "escalation-rules": "Escalation Rules",
  "digital-engagement": "Digital Engagement",
  "email-telephony": "Email & Telephony",
  "service-productivity": "Service Productivity",
  "security-model": "Security Model — Who Sees What?",
  "profiles": "Profiles",
  "permission-sets": "Permission Sets",
  "object-permissions": "Object Permissions / CRUD",
  "field-level-security": "Field-Level Security",
  "page-layout-vs-fls": "Page Layout vs FLS",
  "record-ownership": "Record Ownership",
  "owd": "Organization-Wide Defaults",
  "role-hierarchy": "Role Hierarchy",
  "sharing-rules": "Sharing Rules",
  "public-groups": "Public Groups",
  "teams": "Teams",
  "manual-sharing": "Manual Sharing",
  "manager-groups": "Manager Groups",
  "restriction-rules": "Restriction Rules",
  "login-hours-ip": "Login Hours & IP Ranges",
  "elevated-permissions": "Admin / Elevated Permissions",
  "security-troubleshooting": "Security Troubleshooting",
  "order-of-execution": "Order of Execution",
  "salesforce-flow": "Salesforce Flow",
  "flow-types": "Flow Types",
  "flow-builder": "Flow Builder",
  "flow-logic": "Flow Logic",
  "subflows-versions": "Subflows & Flow Versions",
  "flow-debugging": "Debugging Flows",
  "validation-rules": "Validation Rules",
  "apex-for-se": "Apex for Success Engineers",
  "reports": "Reports",
  "report-types": "Report Types",
  "report-filters": "Filters",
  "report-formats": "Report Formats",
  "dashboards": "Dashboards",
  "report-dashboard-security": "Reports & Dashboard Security",
  "subscriptions": "Subscriptions & Scheduling",
  "report-troubleshooting": "Report Troubleshooting",
  "data-import-wizard": "Data Import Wizard",
  "data-loader": "Data Loader",
  "data-loader-io": "Data Loader.io",
  "data-operations": "Data Operations",
  "se-toolbox": "Success Engineer Toolbox",
  "case-history": "Case History",
  "setup": "Setup",
  "salesforce-help": "Salesforce Help & Documentation",
  "demo-sandboxes": "Demo Orgs / Sandboxes",
  "developer-console": "Developer Console",
  "debug-logs": "Debug Logs",
  "soql": "SOQL",
  "workbench": "Workbench",
  "salesforce-inspector": "Salesforce Inspector",
  "splunk": "Splunk",
  "blacktab": "BlackTab",
  "gus": "GUS",
  "trust": "Salesforce Trust",
  "email-logs": "Email Logs",
  "setup-audit-trail": "Setup Audit Trail",
  "organization-history": "Organization History",
  "ai-tools": "AI Investigation Tools",
  "problem-boundary": "Define the Problem Boundary",
  "understand-symptom": "Understand the Symptom",
  "business-impact": "Business Impact",
  "reproduce": "Reproduce",
  "research-before-troubleshooting": "Research Before Troubleshooting",
  "evidence-hypothesis": "Evidence & Hypothesis",
  "pattern-recognition": "Pattern Recognition",
  "root-cause-analysis": "Root Cause Analysis",
  "escalation-readiness": "Escalation Readiness",
  "swarming": "Swarming",
  "release-readiness": "Release Readiness",
  "final-checklist": "Final Investigation Checklist"
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
  "support-org": "01 · Success Engineer & Case Operations",
  "platform-fundamentals": "02 · Salesforce Platform Foundations",
  "sales-experience": "03 · Sales & Experience Cloud",
  "service-cloud": "04 · Service Cloud",
  "security-visibility": "05 · Security & Visibility",
  "automation-execution": "06 · Automation & Execution",
  "reports-data": "07 · Reports & Data Management",
  "investigation-toolbox": "08 · Investigation Toolbox & Technical Diagnostics",
  "structured-investigation": "09 · Structured Investigation, RCA & Collaboration",
  "real-cases": "10 · Real Case Library"
};

const utilityLabels = {
  progress: "Home · Course Progress",
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
  trainingSections.forEach(section => {
    section.classList.remove("active-section", "topic-focused", "show-module-hero");
    section.querySelectorAll(":scope > .topic-section").forEach(topic => topic.classList.remove("active-topic"));
    section.querySelectorAll(".selected-placeholder").forEach(item => item.classList.remove("selected-placeholder"));
  });
  fullPageViews.forEach(view => view.classList.remove("active-full-page"));
}

function setHeroVisibility(show) {
  const hero = document.querySelector(".hero");
  if (hero) hero.style.display = show ? "" : "none";
}

function updateModuleMenuState(sectionId, subtarget = null) {
  document.querySelectorAll(".module-topic-dropdown").forEach(details => {
    const isCurrent = details.dataset.section === sectionId;
    const currentLabel = details.querySelector(".module-menu-current");
    if (isCurrent && currentLabel) {
      currentLabel.textContent = subtarget && subtopicLabels[subtarget]
        ? subtopicLabels[subtarget]
        : "Explore module topics";
    }
    details.querySelectorAll(".module-topic-jump").forEach(button => {
      button.classList.toggle("active", isCurrent && button.dataset.subtarget === subtarget);
    });
    if (!isCurrent) details.open = false;
  });
}

function showFullPage(type) {
  closeContentsPanel();
  hideAllMainViews();
  setHeroVisibility(type === "progress");

  const page = document.getElementById(`${type}-page`);
  if (page) {
    page.classList.add("active-full-page");
    page.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  railButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.panel === type));
  currentTopic.textContent = utilityLabels[type] || "";
  updateBreadcrumb(type, null, true);
  updateModuleMenuState(null, null);
  recordView({ type: "full", id: type });
}

function getFirstModuleSubtarget(sectionId) {
  const treeParent = document.querySelector(`.tree-parent[data-section="${sectionId}"]`);
  const firstTopic = treeParent?.closest(".tree-group")?.querySelector(".tree-children button[data-subtarget]");
  return firstTopic?.dataset.subtarget || null;
}

function showSection(sectionId, subtarget = null) {
  // A module always opens on its first learning topic. The dropdown is then
  // used to switch between topics without showing a duplicated topic catalog.
  const firstSubtarget = getFirstModuleSubtarget(sectionId);
  if (!subtarget) subtarget = firstSubtarget;

  closeContentsPanel();
  hideAllMainViews();
  setHeroVisibility(false);

  trainingSections.forEach(section => {
    section.classList.toggle("active-section", section.id === sectionId);
  });

  treeParents.forEach(parent => {
    parent.classList.toggle("active", parent.dataset.section === sectionId);
  });

  railButtons.forEach(btn => btn.classList.remove("active"));
  currentTopic.textContent = subtarget && subtopicLabels[subtarget]
    ? `${topicLabels[sectionId]} · ${subtopicLabels[subtarget]}`
    : (topicLabels[sectionId] || "");
  updateBreadcrumb(sectionId, subtarget);

  const section = document.getElementById(sectionId);
  const target = subtarget ? document.getElementById(subtarget) : null;

  if (section) {
    section.classList.toggle("show-module-hero", subtarget === firstSubtarget);
  }

  if (section && target && target.classList.contains("topic-section")) {
    section.classList.add("topic-focused");
    target.classList.add("active-topic");
  } else if (section && subtarget) {
    const placeholder = section.querySelector(`[data-module-topic-card="${subtarget}"]`) || target;
    if (placeholder) placeholder.classList.add("selected-placeholder");
  }

  updateModuleMenuState(sectionId, subtarget);

  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });

  if (subtarget) {
    setTimeout(() => {
      const focusTarget = section?.querySelector(`[data-module-topic-card="${subtarget}"]`) || target;
      if (focusTarget && !section?.classList.contains("topic-focused")) {
        focusTarget.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 180);
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
  showSection("support-org");
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


const sectionIds = ["support-role", "case-lifecycle", "severity-sla", "case-quality", "case-closure", "routing-transfers", "queue-work", "customer-experience", "support-metrics", "salesforce-c360", "platform-architecture", "sf-environments", "editions-licenses", "data-model-foundations", "navigation", "configuration", "sales-overview", "accounts-contacts", "lead-lifecycle", "web-to-lead", "lead-assignment", "lead-conversion", "lead-troubleshooting", "opportunity-management", "approval-processes", "experience-cloud", "service-overview", "service-console", "case-management-feed", "parent-child-cases", "case-creation-automation", "omni-queues", "escalation-rules", "digital-engagement", "email-telephony", "service-productivity", "security-model", "profiles", "permission-sets", "object-permissions", "field-level-security", "page-layout-vs-fls", "record-ownership", "owd", "role-hierarchy", "sharing-rules", "public-groups", "teams", "manual-sharing", "manager-groups", "restriction-rules", "login-hours-ip", "elevated-permissions", "security-troubleshooting", "order-of-execution", "salesforce-flow", "flow-types", "flow-builder", "flow-logic", "subflows-versions", "flow-debugging", "validation-rules", "apex-for-se", "reports", "report-types", "report-filters", "report-formats", "dashboards", "report-dashboard-security", "subscriptions", "report-troubleshooting", "data-import-wizard", "data-loader", "data-loader-io", "data-operations", "se-toolbox", "case-history", "setup", "salesforce-help", "demo-sandboxes", "developer-console", "debug-logs", "soql", "workbench", "salesforce-inspector", "splunk", "blacktab", "gus", "trust", "email-logs", "setup-audit-trail", "organization-history", "ai-tools", "problem-boundary", "understand-symptom", "business-impact", "reproduce", "research-before-troubleshooting", "evidence-hypothesis", "pattern-recognition", "root-cause-analysis", "escalation-readiness", "swarming", "release-readiness", "final-checklist"];
const completeButtons = document.querySelectorAll(".complete-button");
const progressCards = document.querySelectorAll("[data-progress-section]");
const mainProgressRing = document.getElementById("mainProgressRing");
const mainProgressPercent = document.getElementById("mainProgressPercent");
const mainProgressStat = document.getElementById("mainProgressStat");
const QUIZ_RESULTS_KEY = "trainingGuideQuizResults";

// Module-to-section routing must be available before progress/quiz UI initializes.
const moduleSectionMap = {
  "01": "support-org",
  "02": "platform-fundamentals",
  "03": "sales-experience",
  "04": "service-cloud",
  "05": "security-visibility",
  "06": "automation-execution",
  "07": "reports-data",
  "08": "investigation-toolbox",
  "09": "structured-investigation",
  "10": "real-cases"
};

function getCompletedSections() {
  try {
    return JSON.parse(localStorage.getItem("trainingGuideCompleted") || "[]");
  } catch {
    return [];
  }
}

function saveCompletedSections(completed) {
  localStorage.setItem("trainingGuideCompleted", JSON.stringify([...new Set(completed)]));
}

function getQuizResults() {
  try {
    return JSON.parse(localStorage.getItem(QUIZ_RESULTS_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveQuizResults(results) {
  localStorage.setItem(QUIZ_RESULTS_KEY, JSON.stringify(results));
}

function markSectionComplete(id) {
  if (!sectionIds.includes(id)) return;
  const completed = getCompletedSections();
  if (!completed.includes(id)) {
    completed.push(id);
    saveCompletedSections(completed);
  }
  updateProgressUI();
}

function getModuleTopicIds(moduleNumber) {
  const sectionId = moduleSectionMap[moduleNumber];
  if (!sectionId) return [];
  const treeParent = document.querySelector(`.tree-parent[data-section="${sectionId}"]`);
  return [...(treeParent?.closest(".tree-group")?.querySelectorAll(".tree-children button[data-subtarget]") || [])]
    .map(button => button.dataset.subtarget);
}

function updateModuleQuizAverages() {
  const results = getQuizResults();
  document.querySelectorAll(".course-module-card[data-module]").forEach(card => {
    const moduleNumber = card.dataset.module;
    const topicIds = getModuleTopicIds(moduleNumber);
    const moduleResults = topicIds.map(id => results[id]).filter(result => result && Number.isFinite(result.score));
    const average = moduleResults.length
      ? Math.round(moduleResults.reduce((sum, result) => sum + result.score, 0) / moduleResults.length)
      : null;

    let stat = card.querySelector(".module-quiz-stat");
    if (!stat) {
      stat = document.createElement("div");
      stat.className = "module-quiz-stat";
      const copy = card.querySelector(".module-copy");
      const summary = copy?.querySelector(":scope > p");
      if (summary) summary.after(stat);
      else copy?.prepend(stat);
    }

    stat.classList.toggle("has-results", average !== null);
    stat.innerHTML = average === null
      ? `<span>Quiz average</span><strong>—</strong><small>No quizzes completed yet</small>`
      : `<span>Quiz average</span><strong>${average}%</strong><small>${moduleResults.length} ${moduleResults.length === 1 ? "quiz" : "quizzes"} completed</small>`;
  });
}

function updateProgressUI() {
  const completed = getCompletedSections();
  const validCompleted = completed.filter(id => sectionIds.includes(id));
  const percent = Math.round((validCompleted.length / sectionIds.length) * 100);

  if (mainProgressPercent) mainProgressPercent.textContent = `${percent}%`;
  if (mainProgressStat) mainProgressStat.textContent = `${validCompleted.length} of ${sectionIds.length}`;
  if (mainProgressRing) {
    mainProgressRing.style.background =
      `conic-gradient(var(--accent) ${percent}%, var(--surface-2) 0)`;
  }

  const topProgressPercent = document.getElementById("topProgressPercent");
  const topProgressFill = document.getElementById("topProgressFill");

  if (topProgressPercent) topProgressPercent.textContent = `${percent}%`;
  if (topProgressFill) topProgressFill.style.width = `${percent}%`;

  // Legacy buttons are intentionally no longer used for topic completion.
  completeButtons.forEach(button => {
    button.hidden = true;
  });

  progressCards.forEach(card => {
    const done = validCompleted.includes(card.dataset.progressSection);
    card.classList.toggle("completed", done);
    const status = card.querySelector("[data-status]");
    if (status) status.textContent = done ? "Completed" : "Not completed";
  });

  document.querySelectorAll("[data-topic-chip]").forEach(chip => {
    chip.classList.toggle("completed", validCompleted.includes(chip.dataset.topicChip));
  });

  document.querySelectorAll("[data-quiz-completion]").forEach(note => {
    const done = validCompleted.includes(note.dataset.quizCompletion);
    note.classList.toggle("completed", done);
    note.textContent = done ? "Topic completed ✓" : "Complete the quiz to finish this topic.";
  });

  updateModuleQuizAverages();
}

function getQuestionBlocks(quiz) {
  const blocks = [...quiz.querySelectorAll(":scope > .quiz-question")];
  return blocks.length ? blocks : [quiz];
}

function getQuestionButton(question) {
  return question.querySelector(":scope > .quiz-button") || question.querySelector(".quiz-button");
}

function getQuestionLabels(question) {
  return [...question.querySelectorAll("label")];
}

function paintQuestionResult(question, selectedValue, correctValue) {
  getQuestionLabels(question).forEach(label => {
    const input = label.querySelector('input[type="radio"]');
    label.classList.remove("answer-correct", "answer-incorrect", "answer-selected");
    if (!input) return;
    if (input.value === correctValue) label.classList.add("answer-correct");
    if (input.value === selectedValue && selectedValue !== correctValue) label.classList.add("answer-incorrect");
    if (input.value === selectedValue) label.classList.add("answer-selected");
  });
}

function completeQuizIfReady(quiz) {
  const topicId = quiz.dataset.quiz;
  if (!topicId || !sectionIds.includes(topicId)) return;
  const questions = getQuestionBlocks(quiz);
  const buttons = questions.map(getQuestionButton).filter(Boolean);
  if (!buttons.length || !buttons.every(button => button.dataset.answered === "true")) return;

  const correct = buttons.filter(button => button.dataset.wasCorrect === "true").length;
  const total = buttons.length;
  const score = Math.round((correct / total) * 100);
  const answers = questions.map(question => {
    const button = getQuestionButton(question);
    const selected = question.querySelector('input[type="radio"]:checked');
    return {
      selected: selected?.value || null,
      correct: button?.dataset.answer || null,
      wasCorrect: button?.dataset.wasCorrect === "true"
    };
  });

  const results = getQuizResults();
  results[topicId] = { score, correct, total, answers, completedAt: Date.now() };
  saveQuizResults(results);
  markSectionComplete(topicId);

  let summary = quiz.querySelector(".quiz-result-summary");
  if (!summary) {
    summary = document.createElement("div");
    summary.className = "quiz-result-summary";
    quiz.append(summary);
  }
  summary.innerHTML = `<span>QUIZ RESULT</span><strong>${score}%</strong><small>${correct} of ${total} correct</small>`;
  summary.classList.add("visible");
}

function evaluateQuizButton(button) {
  if (button.dataset.answered === "true") return;
  const quiz = button.closest(".quick-check");
  const question = button.closest(".quiz-question") || quiz;
  const selected = question.querySelector('input[type="radio"]:checked');
  const feedback = question.querySelector(".quiz-feedback") || quiz?.querySelector(".quiz-feedback");
  if (!quiz || !question || !feedback) return;

  feedback.classList.remove("correct", "incorrect");

  if (!selected) {
    feedback.textContent = "Choose an answer first.";
    feedback.classList.add("incorrect");
    return;
  }

  const isCorrect = selected.value === button.dataset.answer;
  paintQuestionResult(question, selected.value, button.dataset.answer);
  feedback.textContent = isCorrect
    ? (button.dataset.success || "✓ Correct.")
    : "Incorrect. The correct answer is highlighted in green.";
  feedback.classList.add(isCorrect ? "correct" : "incorrect");

  button.dataset.answered = "true";
  button.dataset.wasCorrect = String(isCorrect);
  button.disabled = true;
  button.textContent = "Answered";
  question.querySelectorAll('input[type="radio"]').forEach(input => input.disabled = true);

  completeQuizIfReady(quiz);
}

function restoreQuizState() {
  const results = getQuizResults();
  document.querySelectorAll(".quick-check[data-quiz]").forEach(quiz => {
    const result = results[quiz.dataset.quiz];
    if (!result?.answers?.length) return;
    const questions = getQuestionBlocks(quiz);
    questions.forEach((question, index) => {
      const saved = result.answers[index];
      const button = getQuestionButton(question);
      if (!saved || !button) return;
      const selected = question.querySelector(`input[type="radio"][value="${CSS.escape(saved.selected || "")}"]`);
      if (selected) selected.checked = true;
      paintQuestionResult(question, saved.selected, saved.correct || button.dataset.answer);
      button.dataset.answered = "true";
      button.dataset.wasCorrect = String(Boolean(saved.wasCorrect));
      button.disabled = true;
      button.textContent = "Answered";
      question.querySelectorAll('input[type="radio"]').forEach(input => input.disabled = true);
    });

    let summary = quiz.querySelector(".quiz-result-summary");
    if (!summary) {
      summary = document.createElement("div");
      summary.className = "quiz-result-summary";
      quiz.append(summary);
    }
    summary.innerHTML = `<span>QUIZ RESULT</span><strong>${result.score}%</strong><small>${result.correct} of ${result.total} correct</small>`;
    summary.classList.add("visible");
  });
}

document.querySelectorAll(".quiz-button").forEach(button => {
  button.addEventListener("click", () => evaluateQuizButton(button));
});

restoreQuizState();
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



// V19 — module hubs, compact topic dropdowns, home navigation, and guided topic interactions
const brandHome = document.getElementById("brandHome");
function moduleNumberFromLabel(label) {
  const match = String(label || "").match(/^(\d+)/);
  return match ? match[1].padStart(2, "0") : "";
}

function buildModuleExperience() {
  Object.entries(topicLabels).forEach(([sectionId, label]) => {
    const section = document.getElementById(sectionId);
    const treeParent = document.querySelector(`.tree-parent[data-section="${sectionId}"]`);
    const treeGroup = treeParent?.closest(".tree-group");
    if (!section || !treeGroup || section.classList.contains("module-enhanced")) return;

    const topicButtons = [...treeGroup.querySelectorAll(".tree-children button[data-subtarget]")];
    const moduleNumber = moduleNumberFromLabel(label);
    const title = label.replace(/^\d+\s·\s/, "");
    const originalIntro = section.querySelector(":scope > .lead, :scope > .module-title-row .section-intro");
    const description = originalIntro?.textContent.trim() || "Explore the topics in this module.";

    section.classList.add("module-enhanced");
    section.querySelector(":scope > .section-number")?.classList.add("module-source-heading");
    section.querySelector(":scope > h2")?.classList.add("module-source-heading");
    section.querySelector(":scope > .lead")?.classList.add("module-source-heading");
    section.querySelector(":scope > .module-title-row")?.classList.add("module-source-heading");

    const hero = document.createElement("div");
    hero.className = "module-hub-hero";
    hero.innerHTML = `
      <span class="module-hub-kicker">MODULE ${moduleNumber}</span>
      <h2>${title}</h2>
      <p>${description}</p>
      <div class="module-hub-meta">
        <span>${topicButtons.length || "Coming"} ${topicButtons.length === 1 ? "topic" : "topics"}</span>
        <span>Learn · Understand · Investigate · Apply · Check</span>
      </div>
    `;
    section.prepend(hero);

    // Convert not-yet-built catalog entries into a single focused topic shell.
    // This lets every module open directly on its first topic, even before that
    // topic receives its final learning content.
    topicButtons.forEach(button => {
      const subtarget = button.dataset.subtarget;
      const existing = document.getElementById(subtarget);
      if (!existing || existing.classList.contains("topic-section")) return;

      const raw = button.textContent.trim();
      const parts = raw.split(" · ");
      const index = parts.shift() || "";
      const name = parts.join(" · ") || subtopicLabels[subtarget] || raw;

      const shell = document.createElement("article");
      shell.id = subtarget;
      shell.className = "topic-section topic-placeholder-shell";
      shell.innerHTML = `
        <div class="topic-hero-panel placeholder-topic-hero">
          <div>
            <span class="topic-index">${index} · LEARNING TOPIC</span>
            <h3>${name}</h3>
            <p>This topic is part of the approved course structure. Its full Learn → Understand → Investigate → Apply → Check content will be added from the original training sources.</p>
          </div>
          <span class="topic-status">CONTENT NEXT</span>
        </div>
        <div class="topic-placeholder-card">
          <span class="mini-eyebrow">TOPIC READY</span>
          <h4>${name}</h4>
          <p>The navigation and learning shell are ready. Detailed training content will replace this placeholder as we build the module topic by topic.</p>
        </div>
      `;
      existing.remove();
      section.append(shell);
    });

    const dropdown = document.createElement("details");
    dropdown.className = "module-topic-dropdown";
    dropdown.dataset.section = sectionId;
    dropdown.innerHTML = `
      <summary>
        <span class="module-menu-icon">☷</span>
        <span class="module-menu-copy"><small>MODULE NAVIGATION</small><strong class="module-menu-current">Explore module topics</strong></span>
        <span class="module-menu-count">${topicButtons.length ? `${topicButtons.length} topics` : "Coming later"}</span>
        <span class="module-menu-chevron">⌄</span>
      </summary>
      <div class="module-topic-menu-panel">
        ${topicButtons.length ? topicButtons.map(button => {
          const subtarget = button.dataset.subtarget;
          const raw = button.textContent.trim();
          const parts = raw.split(" · ");
          const index = parts.shift() || "";
          const name = parts.join(" · ") || subtopicLabels[subtarget] || raw;
          const target = document.getElementById(subtarget);
          const built = Boolean(target?.classList.contains("real-content-topic"));
          return `<button type="button" class="module-topic-jump${built ? " built" : ""}" data-section="${sectionId}" data-subtarget="${subtarget}"><span>${index}</span><strong>${name}</strong><small>${built ? "OPEN TOPIC" : "CONTENT NEXT"}</small><i>→</i></button>`;
        }).join("") : '<div class="module-topic-menu-empty">The Real Case Library will be built after the core training content.</div>'}
      </div>
    `;
    hero.after(dropdown);
  });

  document.querySelectorAll(".module-topic-jump").forEach(button => {
    button.addEventListener("click", () => {
      button.closest("details")?.removeAttribute("open");
      showSection(button.dataset.section, button.dataset.subtarget);
    });
  });
}

function bindHomeNavigation() {
  document.querySelectorAll(".course-module-card[data-module]").forEach(card => {
    const sectionId = moduleSectionMap[card.dataset.module];
    if (!sectionId) return;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    const open = event => {
      const chip = event?.target?.closest?.("[data-topic-chip]");
      if (chip) showSection(sectionId, chip.dataset.topicChip);
      else showSection(sectionId);
    };

    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(event);
      }
    });
  });
}

function activateFocusButton(button) {
  const panel = button.closest("[data-focus-panel]");
  if (!panel) return;
  panel.querySelectorAll(".focus-btn").forEach(item => item.classList.toggle("active", item === button));
  const kicker = panel.querySelector(".focus-kicker");
  const title = panel.querySelector(".focus-title");
  const text = panel.querySelector(".focus-text");
  if (kicker) kicker.textContent = button.dataset.focusKicker || "";
  if (title) title.textContent = button.dataset.focusTitle || "";
  if (text) text.textContent = button.dataset.focusText || "";
  const points = String(button.dataset.focusPoints || "").split("|");
  panel.querySelectorAll(".focus-point span").forEach((item, index) => item.textContent = points[index] || "");
}

document.querySelectorAll("[data-focus-panel] .focus-btn").forEach(button => {
  button.addEventListener("mouseenter", () => activateFocusButton(button));
  button.addEventListener("focus", () => activateFocusButton(button));
  button.addEventListener("click", () => activateFocusButton(button));
});

document.querySelectorAll(".topic-learning-nav button[data-phase-target]").forEach(button => {
  button.addEventListener("click", () => {
    const nav = button.closest(".topic-learning-nav");
    nav?.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
    document.getElementById(button.dataset.phaseTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

brandHome?.addEventListener("click", () => showFullPage("progress"));
brandHome?.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showFullPage("progress");
  }
});

buildModuleExperience();
bindHomeNavigation();

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

/* Initial state: always open on Home / Course Progress. */
closeContentsPanel();
showFullPage("progress");
window.scrollTo({ top: 0, left: 0, behavior: "auto" });
updateHistoryButtons();



// V23 — growth path hover buttons
function activateGrowthPill(button) {
  const panel = button.closest('[data-growth-panel]');
  if (!panel) return;
  panel.querySelectorAll('.growth-pill').forEach(item => item.classList.toggle('active', item === button));
  const kicker = panel.querySelector('.growth-kicker');
  const title = panel.querySelector('.growth-title');
  const text = panel.querySelector('.growth-text');
  if (kicker) kicker.textContent = button.dataset.growthKicker || '';
  if (title) title.textContent = button.dataset.growthTitle || '';
  if (text) text.textContent = button.dataset.growthText || '';
}

document.querySelectorAll('[data-growth-panel] .growth-pill').forEach(button => {
  button.addEventListener('mouseenter', () => activateGrowthPill(button));
  button.addEventListener('focus', () => activateGrowthPill(button));
  button.addEventListener('click', () => activateGrowthPill(button));
});


// V28 glossary-link terms: hover for definition, click to jump to glossary entry
function openGlossaryTerm(termKey) {
  if (!termKey) return;
  showFullPage('glossary');
  const glossarySearch = document.getElementById('glossaryPageSearch');
  const entry = document.getElementById(`glossary-${termKey}`);
  if (glossarySearch) {
    glossarySearch.value = '';
    glossarySearch.dispatchEvent(new Event('input', { bubbles: true }));
  }
  setTimeout(() => {
    if (glossarySearch) {
      const label = entry?.querySelector('h3')?.textContent || termKey.replace(/-/g, ' ');
      glossarySearch.value = label;
      glossarySearch.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (entry) entry.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 140);
}

document.querySelectorAll('[data-glossary-link]').forEach(term => {
  term.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    openGlossaryTerm(term.dataset.glossaryLink);
  });
  term.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openGlossaryTerm(term.dataset.glossaryLink);
    }
  });
});


// V29 reference navigation
function openReferenceGroup(groupId){showFullPage("references");setTimeout(()=>{const group=document.getElementById(groupId);if(group)group.scrollIntoView({behavior:"smooth",block:"start"});},160)}
document.querySelectorAll("[data-reference-jump]").forEach(block=>{block.addEventListener("click",()=>openReferenceGroup(block.dataset.referenceJump));block.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openReferenceGroup(block.dataset.referenceJump)}})});


// V31 — interactive 01.5 closure path switcher
function activateClosurePath(button) {
  const panel = button.closest('[data-closure-panel]');
  if (!panel) return;
  panel.querySelectorAll('.closure-path-btn').forEach(item => item.classList.toggle('active', item === button));
  const kicker = panel.querySelector('.closure-detail-kicker');
  const title = panel.querySelector('.closure-detail-title');
  const text = panel.querySelector('.closure-detail-text');
  const flow = panel.querySelector('.closure-detail-flow');
  if (kicker) kicker.textContent = button.dataset.closureKicker || '';
  if (title) title.textContent = button.dataset.closureTitle || '';
  if (text) text.textContent = button.dataset.closureText || '';
  if (flow) {
    const steps = String(button.dataset.closureFlow || '').split('|').filter(Boolean);
    flow.innerHTML = steps.map((step,index) => `${index ? '<i>→</i>' : ''}<span>${step}</span>`).join('');
  }
}

document.querySelectorAll('[data-closure-panel] .closure-path-btn').forEach(button => {
  button.addEventListener('mouseenter', () => activateClosurePath(button));
  button.addEventListener('focus', () => activateClosurePath(button));
  button.addEventListener('click', () => activateClosurePath(button));
});


const MODULE_FINAL_RESULTS_KEY="trainingGuideModuleFinalResults";
function getModuleFinalResults(){try{return JSON.parse(localStorage.getItem(MODULE_FINAL_RESULTS_KEY)||"{}")}catch{return {}}}
function saveModuleFinalResults(results){localStorage.setItem(MODULE_FINAL_RESULTS_KEY,JSON.stringify(results))}
function completeModuleFinalIfReady(quiz){
  const moduleId=quiz?.dataset.moduleFinal;if(!moduleId)return;
  const questions=getQuestionBlocks(quiz);const buttons=questions.map(getQuestionButton).filter(Boolean);
  if(!buttons.length||!buttons.every(button=>button.dataset.answered==="true"))return;
  const correct=buttons.filter(button=>button.dataset.wasCorrect==="true").length,total=buttons.length,score=Math.round(correct/total*100);
  const answers=questions.map(question=>{const button=getQuestionButton(question),selected=question.querySelector('input[type="radio"]:checked');return{selected:selected?.value||null,correct:button?.dataset.answer||null,wasCorrect:button?.dataset.wasCorrect==="true"}});
  const results=getModuleFinalResults();results[moduleId]={score,correct,total,answers,completedAt:Date.now()};saveModuleFinalResults(results);
  let summary=quiz.querySelector(".module-final-result-summary");if(!summary){summary=document.createElement("div");summary.className="module-final-result-summary";quiz.append(summary)}
  summary.innerHTML=`<span>MODULE FINAL RESULT</span><strong>${score}%</strong><small>${correct} of ${total} correct</small>`;
  const completion=document.querySelector(`[data-module-final-completion="${CSS.escape(moduleId)}"]`);if(completion){completion.classList.add("completed");completion.textContent=`Module final quiz completed ✓ · ${score}% (${correct}/${total})`}
}
document.querySelectorAll(".module-final-quiz .quiz-button").forEach(button=>button.addEventListener("click",()=>setTimeout(()=>completeModuleFinalIfReady(button.closest(".module-final-quiz")),0)));
function restoreModuleFinalState(){
  const results=getModuleFinalResults();
  document.querySelectorAll(".module-final-quiz[data-module-final]").forEach(quiz=>{
    const moduleId=quiz.dataset.moduleFinal,result=results[moduleId];if(!result?.answers?.length)return;
    const questions=getQuestionBlocks(quiz);
    questions.forEach((question,index)=>{const saved=result.answers[index],button=getQuestionButton(question);if(!saved||!button)return;const selected=question.querySelector(`input[type="radio"][value="${CSS.escape(saved.selected||"")}"]`);if(selected)selected.checked=true;paintQuestionResult(question,saved.selected,saved.correct||button.dataset.answer);button.dataset.answered="true";button.dataset.wasCorrect=String(Boolean(saved.wasCorrect));button.disabled=true;button.textContent="Answered";question.querySelectorAll('input[type="radio"]').forEach(input=>input.disabled=true)});
    let summary=quiz.querySelector(".module-final-result-summary");if(!summary){summary=document.createElement("div");summary.className="module-final-result-summary";quiz.append(summary)}
    summary.innerHTML=`<span>MODULE FINAL RESULT</span><strong>${result.score}%</strong><small>${result.correct} of ${result.total} correct</small>`;
    const completion=document.querySelector(`[data-module-final-completion="${CSS.escape(moduleId)}"]`);if(completion){completion.classList.add("completed");completion.textContent=`Module final quiz completed ✓ · ${result.score}% (${result.correct}/${result.total})`}
  })
}
restoreModuleFinalState();


// V36 — Module 02 interactive Customer 360 cards.
document.querySelectorAll('[data-c360-explorer]').forEach(explorer => {
  const detailIcon = explorer.querySelector('.c360-detail-icon');
  const detailTitle = explorer.querySelector('.c360-detail h4');
  const detailText = explorer.querySelector('.c360-detail p');
  const nodes = [...explorer.querySelectorAll('.c360-node')];
  const activate = node => {
    nodes.forEach(item => item.classList.toggle('active', item === node));
    if (detailIcon) detailIcon.textContent = node.dataset.icon || '✦';
    if (detailTitle) detailTitle.textContent = node.dataset.title || '';
    if (detailText) detailText.textContent = node.dataset.text || '';
  };
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => activate(node));
    node.addEventListener('focus', () => activate(node));
    node.addEventListener('click', () => activate(node));
  });
});

// V36 — Module 02 interactive navigation screenshot.
document.querySelectorAll('[data-module2-nav]').forEach(explorer => {
  const detailIcon = explorer.querySelector('.module2-nav-detail-icon');
  const detailTitle = explorer.querySelector('.module2-nav-detail h4');
  const detailText = explorer.querySelector('.module2-nav-detail p');
  const spots = [...explorer.querySelectorAll('.module2-hotspot')];
  const activate = spot => {
    spots.forEach(item => item.classList.toggle('active', item === spot));
    if (detailIcon) detailIcon.textContent = spot.dataset.icon || '✦';
    if (detailTitle) detailTitle.textContent = spot.dataset.title || '';
    if (detailText) detailText.textContent = spot.dataset.text || '';
  };
  spots.forEach(spot => {
    spot.addEventListener('mouseenter', () => activate(spot));
    spot.addEventListener('focus', () => activate(spot));
    spot.addEventListener('click', () => activate(spot));
  });
  const initial = spots.find(spot => spot.classList.contains('active')) || spots[0];
  if (initial) activate(initial);
});
