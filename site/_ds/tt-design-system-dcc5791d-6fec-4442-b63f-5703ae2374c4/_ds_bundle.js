/* @ds-bundle: {"format":4,"namespace":"TennisTerminalDesignSystem_dcc579","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"PriceTag","sourcePath":"components/display/PriceTag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"20c7a3d8d3c0","components/display/Badge.jsx":"9403503e8022","components/display/Card.jsx":"a8a11437619a","components/display/PriceTag.jsx":"e690ce54187f","components/forms/Button.jsx":"e3e4dcfe161c","components/forms/IconButton.jsx":"1af97c4fea1d","components/forms/Input.jsx":"518037886d5f","components/forms/SegmentedControl.jsx":"8a49a87b4afa","components/forms/Switch.jsx":"d48b462603a0","guidelines/doc-page.js":"f106e1b77ea0","ui_kits/booking-app/screens.jsx":"c0a807ff1651"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TennisTerminalDesignSystem_dcc579 = window.TennisTerminalDesignSystem_dcc579 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
const files = {
  horizontal: 'lockup-horizontal.svg',
  vertical: 'lockup-vertical.svg',
  monogram: 'monogram.svg',
  icon: 'app-icon.svg',
  wordmark: 'wordmark.svg'
};

/**
 * Renders an official Tennis Terminal logo lockup from the design system's SVG assets.
 * `assetBase` should point at the assets/logo directory relative to the host page.
 */
function Logo({
  variant = 'horizontal',
  height = 40,
  assetBase = './assets/logo',
  alt = 'Tennis Terminal',
  style
}) {
  const file = files[variant] || files.horizontal;
  return /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/${file}`,
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/**
 * Small status/label pill. Tones map to the brand palette.
 */
function Badge({
  children,
  tone = 'neutral',
  style
}) {
  const tones = {
    neutral: {
      background: 'var(--color-surface-alt)',
      color: 'var(--text-muted)',
      border: '1px solid var(--color-border)'
    },
    green: {
      background: 'var(--tt-success-bg)',
      color: 'var(--color-primary)',
      border: '1px solid var(--tt-success-border)'
    },
    yellow: {
      background: 'var(--color-accent)',
      color: 'var(--color-accent-on)',
      border: '1px solid transparent'
    },
    peak: {
      background: 'var(--color-energy)',
      color: '#fff',
      border: '1px solid transparent'
    },
    ink: {
      background: 'var(--color-surface-ink)',
      color: 'var(--text-on-ink)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--tt-danger-bg)',
      color: 'var(--tt-danger)',
      border: '1px solid var(--tt-danger-border)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.01em',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. `surface` = white on cream; `ink` = dark Court-Ink panel;
 * `cream` = flat cream tile. Hairline border, generous rounding.
 */
function Card({
  children,
  variant = 'surface',
  padding = 26,
  interactive = false,
  style,
  ...rest
}) {
  const variants = {
    surface: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      color: 'var(--text-body)'
    },
    cream: {
      background: 'var(--color-surface-alt)',
      border: '1px solid var(--color-border)',
      color: 'var(--text-body)'
    },
    ink: {
      background: 'var(--color-surface-ink)',
      border: '1px solid transparent',
      color: 'var(--text-on-ink)'
    }
  };
  const v = variants[variant] || variants.surface;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-xl)',
      padding,
      transition: 'var(--transition-base)',
      cursor: interactive ? 'pointer' : undefined,
      boxShadow: interactive ? 'var(--shadow-sm)' : undefined,
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/PriceTag.jsx
try { (() => {
/**
 * Price display. Ink on a neutral surface for a trustworthy, financial feel.
 * Peak pricing is signalled with marigold text — not a loud fill.
 */
function PriceTag({
  amount,
  peak = false,
  size = 'md',
  style
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '5px 10px'
    },
    md: {
      fontSize: 16,
      padding: '7px 12px'
    },
    lg: {
      fontSize: 22,
      padding: '9px 14px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-surface-alt)',
      border: '1px solid var(--color-border)',
      color: peak ? 'var(--color-price-peak)' : 'var(--color-price)',
      ...s,
      ...style
    }
  }, typeof amount === 'number' ? `$${amount}` : amount);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '8px 14px',
    fontSize: 14,
    radius: 'var(--radius-md)'
  },
  md: {
    padding: '11px 18px',
    fontSize: 15,
    radius: 'var(--radius-md)'
  },
  lg: {
    padding: '15px 22px',
    fontSize: 16,
    radius: 'var(--radius-lg)'
  }
};
const variants = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-primary-on)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--color-surface)',
    color: 'var(--text-heading)',
    border: '1px solid var(--color-border)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--color-accent-on)',
    border: '1px solid transparent'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid transparent'
  },
  danger: {
    background: 'var(--tt-danger)',
    color: '#fff',
    border: '1px solid transparent'
  }
};

/**
 * Primary action button. Fredoka semibold, generous rounding, full-width friendly.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: s.fontSize,
      padding: s.padding,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-base)',
      ...v,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular / square icon-only button. Matches Button sizing but square.
 */
function IconButton({
  children,
  variant = 'secondary',
  size = 40,
  round = true,
  disabled = false,
  style,
  ...rest
}) {
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-primary-on)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--color-surface)',
      color: 'var(--text-heading)',
      border: '1px solid var(--color-border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-base)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label and leading icon. White field on cream.
 */
function Input({
  label,
  hint,
  iconLeft,
  error,
  style,
  id,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-heading)',
      background: 'var(--color-surface)',
      border: `1px solid ${error ? 'var(--tt-danger)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-md)',
      padding: iconLeft ? '12px 14px 12px 40px' : '12px 14px',
      outline: 'none',
      transition: 'var(--transition-base)',
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: error ? 'var(--tt-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
/**
 * Segmented control — the Tennis / Pickleball toggle pattern.
 * Controlled: pass `value` and `onChange`.
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: 4,
      background: 'var(--color-surface-alt)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }, options.map(opt => {
    const val = typeof opt === 'string' ? opt : opt.value;
    const label = typeof opt === 'string' ? opt : opt.label;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      onClick: () => onChange && onChange(val),
      style: {
        flex: 1,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        transition: 'var(--transition-base)',
        background: active ? 'var(--color-primary)' : 'transparent',
        color: active ? 'var(--color-primary-on)' : 'var(--text-muted)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * On/off switch. Green when on.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style
}) {
  const toggle = () => !disabled && onChange && onChange(!checked);
  const control = /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      width: 46,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-primary)' : '#D8CFB4',
      padding: 3,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'var(--transition-base)',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-heading)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, control, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// guidelines/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * On screen the document renders as a single continuous sheet on a desk
 * background (Google Docs' pageless view): you scroll one tall page card.
 * There is no manual page-splitting — write the whole document as normal
 * flow inside <doc-page> and the browser's print engine paginates it at
 * export.
 *
 * At print the component injects `@page { size: …; margin: 0 }` (which
 * leaves Chrome no margin box to draw its date/URL/page-count header in)
 * and moves the visual margin onto the sheet's own padding, so the printed
 * page has the same inset you see on screen. Standard break-hygiene rules
 * (`break-inside: avoid` on figures, code blocks, images and table rows;
 * `orphans/widows: 3`) are applied so paragraphs and groups split cleanly.
 * On screen and at print, headings default to `text-wrap: balance` and
 * body text (p, li, blockquote, figcaption) to `text-wrap: pretty`, so
 * the document avoids widowed/orphaned words; the defaults have zero
 * specificity, so any text-wrap you declare on those elements wins.
 * The component also marks the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page size="letter" margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 *
 * Attributes:
 *   size    — letter | a4 | legal (default letter)
 *   orientation — portrait (default) | landscape. For documents built to
 *           export, always set it explicitly. landscape swaps the named
 *           size's dimensions (letter landscape prints 11in × 8.5in).
 *   width / height — explicit CSS lengths, override `size` and
 *           `orientation`: the page IS the design's size (a poster
 *           printed at its true dimensions). With both set, the component
 *           also declares the page box as the preview size (a
 *           `meta[name="omelette-fixed-size"]` it injects at runtime,
 *           never overriding one you author), so the in-app preview
 *           scales the whole sheet into view.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the named
 *           paper: content lays out at exactly this size, and the
 *           component scales it to fit the printable area (centered
 *           horizontally, top-aligned), so e.g. a 960px-wide poster lands
 *           on one Letter page. Both must be set; they do not change the
 *           page box — `size`/`orientation` (or `width`/`height`)
 *           still name the paper. For pages WITHOUT running
 *           header/footer slots — the fit box fills the printable area
 *           and does not subtract slot heights.
 *   margin  — printable inset on every page (default 0.75in); margin="0"
 *           makes pages full-bleed (content then owns its own insets)
 *
 * Running header/footer (optional): give an element `slot="header"` or
 * `slot="footer"` and it repeats on every printed page via
 * `position: fixed`. To keep body text from sliding under it, the
 * component prints inside a single-cell table whose <thead>/<tfoot> are
 * spacers sized to the header/footer height — browsers repeat thead/tfoot
 * on every page, so each sheet's content starts below the header and ends
 * above the footer. On screen the header/footer render once at the
 * top/bottom of the sheet.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks: `break-before: page` on an element that must start
 *   a new page (a chapter, an appendix). Add your own kept-together
 *   blocks (callouts, stat tiles, cards) to a `break-inside: avoid`
 *   rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #ece8dd;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 14px rgba(20, 20, 19, 0.12);
      border-radius: 2px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
      } else if (typeof survivor._syncFixedSizeMeta === 'function') {
        // A departed true-size owner hands the page-global preview meta
        // to whatever true-size page remains (or it's removed).
        survivor._syncFixedSizeMeta();
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      this._vars.textContent = ':host{' + fitVars + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      tag.textContent = '@page { size: ' + this.pageWidth + ' ' + this.pageHeight + '; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/booking-app/screens.jsx
try { (() => {
/* Tennis Terminal — Booking web app UI kit.
   Well-factored click-through recreation of the mobile web app.
   Composes design-system primitives from window.<Namespace>. */
// Resolve DS components lazily (at render) so this file works whether the
// bundle loads before or after it — e.g. when x-imported by a template DC.
const NS = 'TennisTerminalDesignSystem_dcc579';
const D = n => props => React.createElement(window[NS][n], props);
const Button = D('Button'),
  IconButton = D('IconButton'),
  Input = D('Input'),
  SegmentedControl = D('SegmentedControl'),
  Switch = D('Switch'),
  Card = D('Card'),
  Badge = D('Badge'),
  PriceTag = D('PriceTag'),
  Logo = D('Logo');
const ASSET = '../../assets/logo';

/* ---------- shared bits ---------- */
function Eyebrow({
  children,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: color || 'var(--color-primary)'
    }
  }, children);
}
function H({
  children,
  size = 26,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: 'var(--text-heading)',
      ...style
    }
  }, children);
}
function BottomNav({
  tab,
  onTab
}) {
  const items = [['book', 'Book', '◎'], ['sessions', 'Sessions', '▤'], ['account', 'Account', '◍']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-surface)',
      padding: '10px 8px 14px'
    }
  }, items.map(([id, label, gl]) => {
    const on = id === tab;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onTab(id),
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        color: on ? 'var(--color-primary)' : 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        lineHeight: 1
      }
    }, gl), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: on ? 700 : 500,
        fontSize: 11
      }
    }, label));
  }));
}

/* ---------- Login ---------- */
function LoginScreen({
  onLogin
}) {
  const [phone, setPhone] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '52px 24px 28px',
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "vertical",
    height: 148,
    assetBase: ASSET
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      margin: '26px 0 0',
      maxWidth: 260,
      lineHeight: 1.5
    }
  }, "Your court, your schedule. No membership.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Mobile number",
    placeholder: "(555) 000-0000",
    value: phone,
    onChange: e => setPhone(e.target.value),
    hint: "We'll text you a one-tap unlock code."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onLogin
  }, "Text me a code \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, "Book, unlock, play. That's it.")));
}

/* ---------- Book ---------- */
const SLOTS = {
  Tennis: [{
    bay: 3,
    time: '2:30 PM',
    tag: 'Off-peak',
    price: 22,
    peak: false,
    open: true
  }, {
    bay: 1,
    time: '4:00 PM',
    tag: 'Off-peak',
    price: 22,
    peak: false,
    open: true
  }, {
    bay: 5,
    time: '6:30 PM',
    tag: 'Peak',
    price: 34,
    peak: true,
    open: true
  }, {
    bay: 2,
    time: '7:30 PM',
    tag: 'Peak',
    price: 34,
    peak: true,
    open: false
  }],
  Pickleball: [{
    bay: 6,
    time: '1:00 PM',
    tag: 'Off-peak',
    price: 18,
    peak: false,
    open: true
  }, {
    bay: 7,
    time: '3:30 PM',
    tag: 'Off-peak',
    price: 18,
    peak: false,
    open: true
  }, {
    bay: 6,
    time: '6:00 PM',
    tag: 'Peak',
    price: 28,
    peak: true,
    open: true
  }]
};
const DAYS = [['Today', 'Jul 17'], ['Fri', 'Jul 18'], ['Sat', 'Jul 19'], ['Sun', 'Jul 20']];
function BookScreen({
  sport,
  setSport,
  day,
  setDay,
  onPick
}) {
  const slots = SLOTS[sport];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "monogram",
    height: 30,
    assetBase: ASSET
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, "Furman St"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "Brooklyn Bridge Park")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    size: 36
  }, "\u25C9"))), /*#__PURE__*/React.createElement(H, {
    size: 28,
    style: {
      marginBottom: 14
    }
  }, "Book a bay"), /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ['Tennis', 'Pickleball'],
    value: sport,
    onChange: setSport
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14,
      overflowX: 'auto'
    }
  }, DAYS.map(([d, dt], i) => {
    const on = i === day;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setDay(i),
      style: {
        flex: '0 0 auto',
        textAlign: 'center',
        padding: '9px 15px',
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${on ? 'transparent' : 'var(--color-border)'}`,
        background: on ? 'var(--color-primary)' : 'var(--color-surface)',
        color: on ? 'var(--color-primary-on)' : 'var(--text-muted)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13
      }
    }, d), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        opacity: 0.85
      }
    }, dt));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, slots.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: s.open,
    padding: 16,
    onClick: () => s.open && onPick(s),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      opacity: s.open ? 1 : 0.55
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-surface-alt)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 8,
      color: 'var(--text-faint)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, "Bay"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-heading)',
      lineHeight: 1
    }
  }, s.bay)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-heading)'
    }
  }, s.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: s.peak ? 'peak' : 'green'
  }, s.open ? s.tag : 'Full'), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "60 min"))), s.open && /*#__PURE__*/React.createElement(PriceTag, {
    amount: s.price,
    peak: s.peak
  })))));
}

/* ---------- Confirm ---------- */
function ConfirmScreen({
  slot,
  sport,
  onBack,
  onReserve
}) {
  const [machine, setMachine] = React.useState(true);
  const [text, setText] = React.useState(true);
  const machineFee = machine ? 8 : 0;
  const total = slot.price + machineFee;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '18px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    size: 36,
    onClick: onBack
  }, "\u2190"), /*#__PURE__*/React.createElement(H, {
    size: 20
  }, "Review & reserve")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "ink",
    padding: 22
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--color-accent)"
  }, sport, " \xB7 Furman St"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--text-on-ink)',
      margin: '10px 0 2px'
    }
  }, "Bay ", slot.bay, " \xB7 ", slot.time), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: '#C6D6CB'
    }
  }, "Today, Jul 17 \xB7 60 minutes")), /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, "Ball machine"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "Starts automatically when you unlock. +$8")), /*#__PURE__*/React.createElement(Switch, {
    checked: machine,
    onChange: setMachine
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, "Text me my unlock code"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "To (555) 018-2245")), /*#__PURE__*/React.createElement(Switch, {
    checked: text,
    onChange: setText
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, [['Court time (' + slot.tag.toLowerCase() + ')', '$' + slot.price], ['Ball machine', machine ? '$8' : '—']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", null, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--color-border)',
      marginTop: 8,
      paddingTop: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-heading)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-heading)'
    }
  }, "$", total)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 22px',
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-surface)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onReserve
  }, "Reserve & unlock \u2192")));
}

/* ---------- Unlock / active ---------- */
function UnlockScreen({
  slot,
  onDone
}) {
  const [unlocked, setUnlocked] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: unlocked ? 'var(--color-primary)' : 'var(--color-bg)',
      transition: 'background 280ms ease',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: 36,
    onClick: onDone,
    style: {
      color: unlocked ? 'var(--color-primary-on)' : 'var(--text-muted)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, !unlocked ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Confirmed \xB7 Bay ", slot.bay), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 32,
      color: 'var(--text-heading)',
      margin: '10px 0 6px'
    }
  }, "You're all set."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      maxWidth: 250,
      lineHeight: 1.5
    }
  }, "Head to Bay ", slot.bay, ". Tap below at the door \u2014 the ball machine starts on its own."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setUnlocked(true),
    style: {
      marginTop: 34,
      width: 168,
      height: 168,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--color-primary)',
      color: 'var(--color-primary-on)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44,
      lineHeight: 1
    }
  }, "\u233E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18
    }
  }, "Unlock"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      background: 'var(--color-accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 46,
      marginBottom: 22
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      color: 'var(--color-primary-on)'
    }
  }, "Door open!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: '#E6FAEE',
      maxWidth: 250,
      lineHeight: 1.5,
      margin: '10px 0 0'
    }
  }, "Bay ", slot.bay, " is yours for 60 minutes. Ball machine is warming up. Have fun out there."))), unlocked && /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    block: true,
    onClick: onDone
  }, "Done"));
}

/* ---------- App state machine ---------- */
function BookingApp() {
  const [screen, setScreen] = React.useState('login');
  const [tab, setTab] = React.useState('book');
  const [sport, setSport] = React.useState('Tennis');
  const [day, setDay] = React.useState(0);
  const [slot, setSlot] = React.useState(null);
  let body;
  if (screen === 'login') body = /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: () => setScreen('book')
  });else if (screen === 'book') body = /*#__PURE__*/React.createElement(BookScreen, {
    sport: sport,
    setSport: setSport,
    day: day,
    setDay: setDay,
    onPick: s => {
      setSlot(s);
      setScreen('confirm');
    }
  });else if (screen === 'confirm') body = /*#__PURE__*/React.createElement(ConfirmScreen, {
    slot: slot,
    sport: sport,
    onBack: () => setScreen('book'),
    onReserve: () => setScreen('unlock')
  });else if (screen === 'unlock') body = /*#__PURE__*/React.createElement(UnlockScreen, {
    slot: slot,
    onDone: () => setScreen('book')
  });
  const showNav = screen === 'book';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }
  }, body, showNav && /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    onTab: setTab
  }));
}
function BookingAppReady() {
  const [ready, setReady] = React.useState(!!window[NS]);
  React.useEffect(() => {
    if (ready) return;
    const id = setInterval(() => {
      if (window[NS]) {
        setReady(true);
        clearInterval(id);
      }
    }, 40);
    return () => clearInterval(id);
  }, [ready]);
  if (!ready) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-faint)'
      }
    }, "Loading\u2026");
  }
  return /*#__PURE__*/React.createElement(BookingApp, null);
}
window.BookingApp = BookingAppReady;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Switch = __ds_scope.Switch;

})();
