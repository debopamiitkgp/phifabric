export const metadata = { title: 'Subscribe — PhiFabric' };

export default function Subscribe() {
  return (
    <main className="container" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, marginBottom: 16 }}>Go deeper</h1>
        <p style={{ fontSize: 18, color: 'var(--warm-gray)', marginBottom: 40, lineHeight: 1.6 }}>
          New explorations on the nature of reality — from thermodynamics to consciousness,
          from the holographic principle to the physics of computation — delivered to your inbox.
        </p>
        <div className="subscribe-form" style={{ maxWidth: 400, margin: '0 auto', flexDirection: 'column' }}>
          <input type="email" placeholder="Your email" style={{ textAlign: 'center' }} />
          <button style={{ width: '100%' }}>Subscribe</button>
        </div>
        <p style={{ fontSize: 13, color: 'var(--warm-gray)', marginTop: 20 }}>
          No spam. Unsubscribe anytime. Just physics.
        </p>
      </div>
    </main>
  );
}
