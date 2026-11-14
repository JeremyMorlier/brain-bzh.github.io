import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  const filterItems = (searchTerm) => {
    searchTerm = (searchTerm || "").trim().toLowerCase();

    // 1. Reset all unloaded elements
    document.querySelectorAll(".unloaded").forEach((el) => el.classList.remove("unloaded"));

    // 2. Sync filter pills immediately so active state is always 100% accurate
    document.querySelectorAll(".filter-pill").forEach(function (pill) {
      const pTerm = (pill.dataset.term || "").trim().toLowerCase();
      if (!searchTerm && !pTerm) {
        pill.classList.add("is-active");
      } else if (pTerm && searchTerm === pTerm) {
        pill.classList.add("is-active");
      } else {
        pill.classList.remove("is-active");
      }
    });

    // 3. If searchTerm is empty, reset highlights and restore all
    if (!searchTerm) {
      if (CSS.highlights) {
        CSS.highlights.delete("search");
      }
      return;
    }

    // 4. Otherwise, filter items
    if (CSS.highlights) {
      const nonMatchingElements = highlightSearchTerm({ search: searchTerm, selector: ".bibliography > li" });
      if (nonMatchingElements) {
        nonMatchingElements.forEach((el) => el.classList.add("unloaded"));
      }
    } else {
      document.querySelectorAll(".bibliography > li").forEach((el) => {
        const text = el.innerText.toLowerCase();
        if (text.indexOf(searchTerm) === -1) {
          el.classList.add("unloaded");
        }
      });
    }

    // 5. Hide empty year/group headings
    document.querySelectorAll("h2.bibliography").forEach(function (element) {
      let iterator = element.nextElementSibling;
      let hideHeading = true;
      while (iterator && iterator.tagName !== "H2") {
        if ("OL" === iterator.tagName) {
          const unloaded = iterator.querySelectorAll(":scope > li.unloaded");
          const total = iterator.querySelectorAll(":scope > li");
          if (unloaded.length === total.length) {
            if (iterator.previousElementSibling) {
              iterator.previousElementSibling.classList.add("unloaded");
            }
            iterator.classList.add("unloaded");
          } else {
            hideHeading = false;
          }
        }
        iterator = iterator.nextElementSibling;
      }
      if (hideHeading) {
        element.classList.add("unloaded");
      }
    });
  };

  const updateInputField = () => {
    const hashValue = decodeURIComponent(window.location.hash.substring(1)).trim();
    const input = document.getElementById("bibsearch");
    if (input) {
      input.value = hashValue;
    }
    filterItems(hashValue);
  };

  // Hook input search
  const inputEl = document.getElementById("bibsearch");
  let timeoutId;
  if (inputEl) {
    inputEl.addEventListener("input", function () {
      clearTimeout(timeoutId);
      const val = this.value;
      timeoutId = setTimeout(() => filterItems(val), 120);
    });
  }

  // Hook pill clicks
  document.querySelectorAll(".filter-pill").forEach(function (pill) {
    pill.addEventListener("click", function (e) {
      e.preventDefault();
      const term = (this.dataset.term || "").trim();
      const input = document.getElementById("bibsearch");

      if (this.classList.contains("is-active") && term) {
        // Unselect if already active -> reset to All
        if (input) input.value = "";
        if (history.replaceState) {
          history.replaceState(null, "", window.location.pathname);
        } else {
          window.location.hash = "";
        }
        filterItems("");
      } else {
        // Activate clicked pill (or All if term is empty)
        if (input) input.value = term;
        if (history.replaceState) {
          history.replaceState(null, "", term ? "#" + encodeURIComponent(term) : window.location.pathname);
        } else {
          window.location.hash = term ? encodeURIComponent(term) : "";
        }
        filterItems(term);
      }
    });
  });

  window.addEventListener("hashchange", updateInputField);

  updateInputField();
});
