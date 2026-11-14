---
layout: page
permalink: /publications/
title: Publications
description: Research from the BRAIN team indexed in HAL.
nav: true
nav_order: 1
---

The bibliography below is refreshed from HAL. Use the quick filter pills or enter keywords in the search bar.
It includes records associated with the team's HAL structures; some work may be missing if its affiliation is not recorded in HAL.

<div class="publication-filter-section" id="publication-filters">
  <div class="filter-row">
    <span class="filter-label">Venues/Topics:</span>
    <div class="filter-pills">
      <button type="button" class="filter-pill is-active" data-term="">All</button>
      <button type="button" class="filter-pill" data-term="NeurIPS">NeurIPS</button>
      <button type="button" class="filter-pill" data-term="CVPR">CVPR</button>
      <button type="button" class="filter-pill" data-term="ICASSP">ICASSP</button>
      <button type="button" class="filter-pill" data-term="EUSIPCO">EUSIPCO</button>
      <button type="button" class="filter-pill" data-term="TMLR">TMLR</button>
      <button type="button" class="filter-pill" data-term="Few-Shot">Few-Shot</button>
      <button type="button" class="filter-pill" data-term="EEG">EEG</button>
    </div>
  </div>
  <div class="filter-row">
    <span class="filter-label">Authors:</span>
    <div class="filter-pills">
      <button type="button" class="filter-pill" data-term="Gripon">V. Gripon</button>
      <button type="button" class="filter-pill" data-term="Farrugia">N. Farrugia</button>
      <button type="button" class="filter-pill" data-term="Pasdeloup">B. Pasdeloup</button>
      <button type="button" class="filter-pill" data-term="Lioi">G. Lioi</button>
      <button type="button" class="filter-pill" data-term="Leonardon">M. Léonardon</button>
      <button type="button" class="filter-pill" data-term="Marmoret">A. Marmoret</button>
    </div>
  </div>
</div>

<label for="bibsearch" class="publication-search-label">Search publications</label>
{% include bib_search.liquid %}

<div class="publication-stats-bar" id="publication-stats-bar" aria-live="polite">
  <div class="pub-count-status">
    <span class="pub-count-dot"></span>
    <span id="pub-count-text">Loading publications…</span>
    <button type="button" class="pub-reset-btn is-hidden" id="pub-reset-btn">Reset filter ×</button>
  </div>
  <div class="pub-year-chart" id="pub-year-chart" aria-label="Filter publications by year"></div>
</div>

<div class="publications">
{% bibliography %}
</div>
