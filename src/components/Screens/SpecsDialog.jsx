import React, { useId, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Dialog from "../Dialog/Dialog";

/**
 * Product specification dialog shared by every product page.
 * Tabs follow the WAI-ARIA tabs pattern (arrow keys move between tabs).
 */
function SpecsDialog({ product, onClose, featuresLabel = "Features", renderSpecs, renderFeatures, renderApplications }) {
  const [activeTab, setActiveTab] = useState("specTable");
  const tabRefs = useRef([]);
  const baseId = useId();

  const tabs = [
    { id: "specTable", label: "Technical Specifications", render: renderSpecs },
    { id: "features", label: featuresLabel, render: renderFeatures },
    { id: "applications", label: "Applications", render: renderApplications },
  ];

  const handleKeyDown = (event, index) => {
    const keys = { ArrowRight: 1, ArrowLeft: -1, Home: -index, End: tabs.length - 1 - index };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (index + keys[event.key] + tabs.length) % tabs.length;
    setActiveTab(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <Dialog
      title={`${product.name} - Complete Specifications`}
      onClose={onClose}
      className="specs-modal"
      overlayClassName="mfx-dialog-overlay--sheet"
    >
      <button type="button" className="specs-modal-close" onClick={onClose} aria-label="Close specifications">
        <FaTimes aria-hidden="true" />
      </button>

      <div className="specs-tabs" role="tablist" aria-label="Specification sections">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            type="button"
            role="tab"
            id={`${baseId}-tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`${baseId}-panel`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            className={`specs-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="specs-modal-content"
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${activeTab}`}
        tabIndex={0}
      >
        {current.render()}
      </div>
    </Dialog>
  );
}

export default SpecsDialog;
