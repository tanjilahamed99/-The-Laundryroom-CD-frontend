import React from "react";
import "./priceTest.css";

const PriceTest = () => {
  return (
    <div>
      <div className="pricing-header">
        <p className="section-label">Pricing Plans</p>
        <h2 className="section-title">Choose Your Perfect Plan</h2>
        <p className="section-sub">
          Transparent pricing with no hidden fees. Pick the option that fits
          your lifestyle.
        </p>
      </div>

      <div className="pricing-grid">
        <div className="price-card">
          <div className="price-badge badge-primary">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Flexible
          </div>
          <div className="price-icon-row">
            <div className="price-icon-wrap">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                // style={"color:var(--primary)"}
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
          </div>
          <p className="plan-name">Self-Service</p>
          <div className="price-amount-row">
            <span className="price-amount">$2.50</span>
            <span className="price-unit">/ wash cycle</span>
          </div>
          <div className="price-divider"></div>
          <ul className="features-list">
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              State-of-the-art washers
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              High-speed dryers
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Card &amp; coin payment
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Free WiFi
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Comfortable waiting area
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Detergent vending
            </li>
          </ul>
          <button className="cta-btn cta-default">
            Choose Plan
            <svg
              className="cta-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="price-card featured">
          <div className="price-badge">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Most Popular
          </div>
          <div className="price-icon-row">
            <div className="price-icon-wrap">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                // style="color:#fff"
              >
                <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
              </svg>
            </div>
          </div>
          <p className="plan-name">Wash &amp; Fold</p>
          <div className="price-amount-row">
            <span className="price-amount">$1.25</span>
            <span className="price-unit">/ pound</span>
          </div>
          <div className="price-divider"></div>
          <ul className="features-list">
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:#fff"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Drop off anytime
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:#fff"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Same-day or next-day
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:#fff"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Professional folding
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:#fff"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Eco-friendly detergents
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:#fff"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Sorted by type &amp; color
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:#fff"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Packaged &amp; ready
            </li>
          </ul>
          <button className="cta-btn cta-featured">
            Get Started Now
            <svg
              className="cta-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              // style="color:var(--primary-dark)"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <p
          // style="text-align:center;font-size:11px;color:rgba(255,255,255,0.45);margin-top:10px;"
          >
            30-day satisfaction guarantee
          </p>
        </div>

        <div className="price-card">
          <div className="price-badge badge-premium">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5">
              <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
              <path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0012 0V2z" />
            </svg>
            Enterprise
          </div>
          <div className="price-icon-row">
            <div className="price-icon-wrap">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                // style="color:var(--primary)"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
          </div>
          <p className="plan-name">Business Plan</p>
          <div className="price-amount-row">
            <span
              className="price-amount"
              // style="font-size:26px;"
            >
              Custom
            </span>
          </div>
          <div className="price-divider"></div>
          <ul className="features-list">
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Volume discounts
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Dedicated pickup crew
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Priority turnaround
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Monthly invoicing
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Account manager
            </li>
            <li className="feature-item">
              <span className="check-dot">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  // style="color:var(--primary)"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              SLA guarantee
            </li>
          </ul>
          <button className="cta-btn cta-default">
            Contact Sales
            <svg
              className="cta-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="trust-bar">
        <div className="trust-item">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            // style="color:var(--primary)"
          >
            <rect x="1" y="3" width="15" height="13" rx="2" />
            <path d="M16 8h4l3 3v5h-7V8z" />
            <circle cx="5.5" cy="18.5" r="1.5" />
            <circle cx="18.5" cy="18.5" r="1.5" />
          </svg>
          Free pickup over $30
        </div>
        <div className="trust-item">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            // style="color:var(--primary)"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          100% satisfaction guaranteed
        </div>
        <div className="trust-item">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            // style="color:var(--primary)"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          24/7 customer support
        </div>
      </div>
    </div>
  );
};

export default PriceTest;
