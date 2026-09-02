import { initialSuggestions, getMockAIResponse } from "../data/suggestions.js";

let suggestionsState = [...initialSuggestions];
let chatMessages = [
  {
    sender: "ai",
    text: "Hello! I am GovTrack AI. Ask me about project milestones, budgets, contractors, or schedule delay risks."
  }
];

export function renderSuggestionsScreen() {
  return `
    <div class="suggestions-container">
      <div>
        <h1 style="font-size: 18px; font-weight: 800;">Public Suggestions</h1>
        <p class="subheadline">Citizen community feedback and municipal responses</p>
      </div>

      <!-- Suggestion Cards List -->
      <div style="display: flex; flex-direction: column; gap: var(--space-md);">
        ${suggestionsState.map(s => renderSuggestionItem(s)).join("")}
      </div>

      <!-- Interactive GovTrack AI Chat Assistant -->
      <div class="ai-chat-section">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 28px; height: 28px; border-radius: 50%; background: #101820; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 13px;">🤖</div>
            <span style="font-weight: 700; font-size: 13px;">Ask GovTrack AI</span>
          </div>
          <span class="badge badge-info">Online Telemetry</span>
        </div>

        <div class="chat-messages-container" id="chat-messages-box">
          ${chatMessages.map(msg => `
            <div class="chat-bubble ${msg.sender}">
              ${msg.text}
            </div>
          `).join("")}
        </div>

        <form id="ai-chat-form" class="chat-input-bar" onsubmit="event.preventDefault(); window.handleSendChatMessage();">
          <input type="text" id="ai-chat-input" class="chat-input-field" placeholder="Ask GovTrack AI (e.g. Why is this project delayed?)" required />
          <button type="submit" class="btn btn-accent" style="padding: 0 16px;">
            Send
          </button>
        </form>
      </div>
    </div>
  `;
}

function renderSuggestionItem(s) {
  return `
    <div class="suggestion-card">
      <div class="suggestion-author-row">
        <div class="user-avatar-circle">${s.avatar}</div>
        <div class="suggestion-author-info">
          <div class="suggestion-author-name">${s.author}</div>
          <div class="suggestion-time">${s.role} &bull; ${s.timestamp}</div>
        </div>
        <span class="badge ${s.status === 'Approved' ? 'badge-success' : s.status === 'Actioned' ? 'badge-info' : 'badge-warning'}">${s.status}</span>
      </div>

      <div style="margin-bottom: 2px;">
        <span class="suggestion-tag">📍 ${s.projectContext}</span>
      </div>

      <p class="suggestion-content">
        "${s.message}"
      </p>

      <div class="suggestion-reactions-bar">
        <button class="reaction-btn ${s.hasUpvoted ? 'voted' : ''}" onclick="window.handleUpvoteSuggestion('${s.id}')">
          ▲ Upvote (${s.upvotes})
        </button>
        <span style="font-size: 11px; color: var(--muted); font-weight: 600;">
          💬 ${s.replies.length} official responses
        </span>
      </div>

      ${s.replies.map(r => `
        <div class="suggestion-reply-box">
          <div style="font-weight: 700; color: var(--brand-blue); margin-bottom: 2px;">
            ${r.author} <span style="font-size: 10px; color: var(--muted); font-weight: normal;">(${r.timestamp})</span>
          </div>
          <div style="color: var(--text);">${r.text}</div>
        </div>
      `).join("")}
    </div>
  `;
}

export function initSuggestionsEvents() {
  window.handleUpvoteSuggestion = function(id) {
    const item = suggestionsState.find(x => x.id === id);
    if (item) {
      if (item.hasUpvoted) {
        item.upvotes -= 1;
        item.hasUpvoted = false;
      } else {
        item.upvotes += 1;
        item.hasUpvoted = true;
        window.ToastManager.show("Upvote recorded!");
      }
      window.renderCurrentRoute();
    }
  };

  window.handleSendChatMessage = function() {
    const input = document.getElementById("ai-chat-input");
    if (!input || !input.value.trim()) return;

    const userText = input.value.trim();
    chatMessages.push({ sender: "user", text: userText });
    input.value = "";
    window.renderCurrentRoute();

    // Scroll chat to bottom
    setTimeout(() => {
      const box = document.getElementById("chat-messages-box");
      if (box) box.scrollTop = box.scrollHeight;
    }, 20);

    // Realistic AI response
    setTimeout(() => {
      const aiReply = getMockAIResponse(userText);
      chatMessages.push({ sender: "ai", text: aiReply });
      window.renderCurrentRoute();
      setTimeout(() => {
        const box = document.getElementById("chat-messages-box");
        if (box) box.scrollTop = box.scrollHeight;
      }, 20);
    }, 450);
  };
}
