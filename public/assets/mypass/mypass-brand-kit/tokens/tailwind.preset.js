// MyPass — preset Tailwind (importer mypass.css pour les variables)
/** @type {import('tailwindcss').Config} */
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "mp": {
          "bg-canvas": "var(--mp-bg-canvas)",
          "bg-surface": "var(--mp-bg-surface)",
          "bg-surface-raised": "var(--mp-bg-surface-raised)",
          "bg-subtle": "var(--mp-bg-subtle)",
          "bg-inverse": "var(--mp-bg-inverse)",
          "bg-brand": "var(--mp-bg-brand)",
          "bg-brand-subtle": "var(--mp-bg-brand-subtle)",
          "text-primary": "var(--mp-text-primary)",
          "text-secondary": "var(--mp-text-secondary)",
          "text-placeholder": "var(--mp-text-placeholder)",
          "text-disabled": "var(--mp-text-disabled)",
          "text-inverse": "var(--mp-text-inverse)",
          "text-on-brand": "var(--mp-text-on-brand)",
          "text-brand": "var(--mp-text-brand)",
          "text-link": "var(--mp-text-link)",
          "border-subtle": "var(--mp-border-subtle)",
          "border-default": "var(--mp-border-default)",
          "border-strong": "var(--mp-border-strong)",
          "focus-ring": "var(--mp-focus-ring)",
          "focus-halo": "var(--mp-focus-halo)",
          "action-primary-bg": "var(--mp-action-primary-bg)",
          "action-primary-bg-hover": "var(--mp-action-primary-bg-hover)",
          "action-primary-bg-active": "var(--mp-action-primary-bg-active)",
          "action-primary-text": "var(--mp-action-primary-text)",
          "action-brand-bg": "var(--mp-action-brand-bg)",
          "action-brand-bg-hover": "var(--mp-action-brand-bg-hover)",
          "action-brand-bg-active": "var(--mp-action-brand-bg-active)",
          "action-brand-text": "var(--mp-action-brand-text)",
          "action-secondary-border": "var(--mp-action-secondary-border)",
          "action-secondary-bg-hover": "var(--mp-action-secondary-bg-hover)",
          "action-tertiary-bg-hover": "var(--mp-action-tertiary-bg-hover)",
          "action-disabled-bg": "var(--mp-action-disabled-bg)",
          "action-disabled-text": "var(--mp-action-disabled-text)",
          "action-danger-bg": "var(--mp-action-danger-bg)",
          "action-danger-text": "var(--mp-action-danger-text)",
          "selected-bg": "var(--mp-selected-bg)",
          "selected-indicator": "var(--mp-selected-indicator)",
          "status-success-fg": "var(--mp-status-success-fg)",
          "status-success-bg": "var(--mp-status-success-bg)",
          "status-warning-fg": "var(--mp-status-warning-fg)",
          "status-warning-bg": "var(--mp-status-warning-bg)",
          "status-danger-fg": "var(--mp-status-danger-fg)",
          "status-danger-bg": "var(--mp-status-danger-bg)",
          "status-info-fg": "var(--mp-status-info-fg)",
          "status-info-bg": "var(--mp-status-info-bg)",
          "accent-braise": "var(--mp-accent-braise)",
          "accent-lagune": "var(--mp-accent-lagune)",
          "accent-iris": "var(--mp-accent-iris)"
        },
        "nuit": {
          "50": "#F4F4F6",
          "100": "#EBECEF",
          "200": "#DCDDE2",
          "300": "#B4B8C1",
          "400": "#8A8E9A",
          "500": "#5E6270",
          "600": "#454956",
          "700": "#2E313B",
          "800": "#1E2028",
          "850": "#16171E",
          "900": "#111218",
          "950": "#0B0C10"
        },
        "volt": {
          "50": "#F9FDE6",
          "100": "#EEF9C0",
          "200": "#E3F58A",
          "300": "#DBF35F",
          "400": "#D4F03C",
          "500": "#BCD92A",
          "600": "#9AB51A",
          "700": "#5B6B00",
          "800": "#45510A",
          "900": "#2F3708"
        },
        "craie": {
          "50": "#FBFAF7",
          "100": "#F7F6F2",
          "200": "#EFEDE6"
        },
        "braise": {
          "100": "#FFE4DD",
          "400": "#FF5A3C",
          "700": "#B23116"
        },
        "lagune": {
          "100": "#D8F3F0",
          "400": "#25B5A9",
          "700": "#0E6E66"
        },
        "iris": {
          "100": "#ECE9FE",
          "400": "#8B7CF6",
          "700": "#5140C9"
        }
      },
      "fontFamily": {
        "display": [
          "Bricolage Grotesque",
          "Geist",
          "system-ui",
          "sans-serif"
        ],
        "sans": [
          "Geist",
          "system-ui",
          "sans-serif"
        ],
        "mono": [
          "Geist Mono",
          "ui-monospace",
          "monospace"
        ]
      },
      "spacing": {
        "0": "0px",
        "0.5": "2px",
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "32": "128px"
      },
      "borderRadius": {
        "none": "0px",
        "xs": "4px",
        "sm": "6px",
        "md": "10px",
        "lg": "16px",
        "xl": "24px",
        "full": "9999px"
      },
      "boxShadow": {
        "mp-0": "var(--mp-shadow-0)",
        "mp-1": "var(--mp-shadow-1)",
        "mp-2": "var(--mp-shadow-2)",
        "mp-3": "var(--mp-shadow-3)"
      },
      "screens": {
        "sm": "480px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },
      "transitionTimingFunction": {
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "enter": "cubic-bezier(0, 0, 0.2, 1)",
        "exit": "cubic-bezier(0.4, 0, 1, 1)",
        "passage": "cubic-bezier(0.65, 0, 0.35, 1)"
      },
      "transitionDuration": {
        "instant": "80",
        "fast": "140",
        "base": "220",
        "slow": "360",
        "reveal": "520"
      }
    }
  }
};
