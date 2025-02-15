'use client'

export function ContactForm() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">Contact Us</h2>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSex6PxuLRId6UtFL6iG64jIvR7d0tuy6a_dDLZBAb3MQ_Sg9g/viewform?embedded=true"
          width="100%"
          height="800"
          style={{ border: 0 }}
          title="Contact Form"
        >
          Loading form...
        </iframe>
      </div>
    </div>
  )
}
