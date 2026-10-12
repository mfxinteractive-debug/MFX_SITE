import React, { useId, useRef } from "react";
import { createPortal } from "react-dom";
import useFocusTrap from "../../hooks/useFocusTrap";
import "./Dialog.css";

/**
 * Accessible modal dialog: rendered in a portal, traps focus, closes on
 * Escape or backdrop click and restores focus to the trigger on close.
 */
function Dialog({ title, onClose, className = "", overlayClassName = "", hideTitle = false, children }) {
  const panelRef = useRef(null);
  const titleId = useId();

  useFocusTrap(panelRef, true, onClose);

  return createPortal(
    <div
      className={`mfx-dialog-overlay ${overlayClassName}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={`mfx-dialog ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <h2 id={titleId} className={hideTitle ? "sr-only" : "mfx-dialog-title"}>
          {title}
        </h2>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Dialog;
