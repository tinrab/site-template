import React from 'react';

const Buttons = () => (
  <section>
    <h2>Buttons</h2>
    <div className="p-3">
      <button type="button" className="button button--primary">
        Primary
      </button>
      <button type="button" className="button button--secondary">
        Secondary
      </button>
      <button type="button" className="button button--success">
        Success
      </button>
      <button type="button" className="button button--danger">
        Danger
      </button>
      <button type="button" className="button button--warning">
        Warning
      </button>
      <button type="button" className="button button--info">
        Info
      </button>
      <button type="button" className="button button--light">
        Light
      </button>
      <button type="button" className="button button--dark">
        Dark
      </button>
      <button type="button" className="button button--link">
        Link
      </button>
    </div>
    <div className="p-3">
      <button type="button" className="button button--outline-primary">
        Primary
      </button>
      <button type="button" className="button button--outline-secondary">
        Secondary
      </button>
      <button type="button" className="button button--outline-success">
        Success
      </button>
      <button type="button" className="button button--outline-danger">
        Danger
      </button>
      <button type="button" className="button button--outline-warning">
        Warning
      </button>
      <button type="button" className="button button--outline-info">
        Info
      </button>
      <button type="button" className="button button--outline-light">
        Light
      </button>
      <button type="button" className="button button--outline-dark">
        Dark
      </button>
    </div>
    <div className="p-3">
      <button type="button" className="button button--primary button--lg">
        Large button
      </button>
      <button type="button" className="button button--secondary button--lg">
        Large button
      </button>
      <button type="button" className="button button--primary button--sm">
        Small button
      </button>
      <button type="button" className="button button--secondary button--sm">
        Small button
      </button>
    </div>
  </section>
);

const ComponentsPage = () => (
  <div className="page page--narrow">
    <Buttons />
  </div>
);

export default ComponentsPage;
