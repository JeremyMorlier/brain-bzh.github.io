---
layout: page
title: People
permalink: /people/
description: Meet the researchers and students of BRAIN.
nav: true
nav_order: 2
---

<div class="team-directory">
  {% for group in site.data.people %}
    <section class="team-group" aria-labelledby="group-{{ forloop.index }}">
      <div class="team-group-header">
        <h2 id="group-{{ forloop.index }}">{{ group.group | escape }}</h2>
        <span class="team-group-count">{{ group.members | size }}</span>
      </div>
      <ul class="team-members">
        {% for member in group.members %}
          {% assign last_name = member.name | split: ' ' | last %}
          <li class="team-member-item">
            {% if member.avatar %}
              <img class="member-avatar" src="{{ member.avatar | relative_url }}" alt="{{ member.name | escape }}" width="48" height="48" loading="lazy">
            {% endif %}
            <div class="member-info">
              <div class="member-name-row">
                <span class="member-name">{{ member.name | escape }}</span>
                <div class="member-actions">
                  {% if member.scholar %}
                    <a class="member-icon-link" href="{{ member.scholar }}" target="_blank" rel="noopener noreferrer" title="Google Scholar — {{ member.name | escape }}" aria-label="Google Scholar profile for {{ member.name | escape }}">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg>
                    </a>
                  {% endif %}
                  <a class="member-icon-link" href="{{ '/publications/#' | append: last_name | relative_url }}" title="Publications by {{ member.name | escape }}" aria-label="Publications by {{ member.name | escape }}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                  </a>
                </div>
              </div>
              {% if member.role %}<small>{{ member.role | escape }}</small>{% endif %}
            </div>
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div>

<p class="directory-source">This list is based on the <a href="https://www.imt-atlantique.fr/en/research-innovation/teams/brain/members">IMT Atlantique team directory</a> and the <a href="https://labsticc.fr/fr/lab-sticc/annuaire?pole=&team=BRAIN">Lab-STICC directory</a>.</p>
