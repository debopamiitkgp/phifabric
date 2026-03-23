import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-tag">Latest Publications</div>
          <h1>The Physics of What Is</h1>
          <p>
            Exploring the nature of reality through the analytical and cosmological lens
            of a theoretical physicist.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <Link href="/bci-asymmetric-channel" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="article-card">
            <div className="tag">Information Theory &middot; Neurotechnology &middot; Brain-Computer Interfaces</div>
            <h2>Information Theory, BCI, and the Bottleneck Between Thought and Action</h2>
            <p className="excerpt">
              The nervous system ingests a billion bits per second and transmits ten.
              That asymmetry&mdash;not engineering, not funding, not regulation&mdash;is
              the constraint that will determine which neural interfaces succeed and which
              collide with biology.
            </p>
            <span className="read-more">Read exploration &rarr;</span>
          </div>
        </Link>

        <div style={{ height: 24 }} />

        <Link href="/article" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="article-card">
            <div className="tag">Thermodynamics &middot; Computation &middot; Phase Transitions</div>
            <h2>The Entropy of Intelligence</h2>
            <p className="excerpt">
              Why autonomous reasoning is a physical phase transition, not a software abstraction.
              Information is physical. This axiom, formalized by Landauer in 1961, has been
              conveniently ignored by the software industry for decades. That era is ending.
            </p>
            <span className="read-more">Read exploration &rarr;</span>
          </div>
        </Link>

        <div className="subscribe-box" style={{ marginTop: 48 }}>
          <h3>Go deeper</h3>
          <p>New explorations on the nature of reality, delivered to your inbox.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
