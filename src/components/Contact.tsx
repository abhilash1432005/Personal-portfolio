// Contact.tsx
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// debug: verify env vars loaded
console.log('ENV', {
  SERVICE: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'bandaruabhilash2005@gmail.com',
    href: 'mailto:bandaruabhilash2005@gmail.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 7075323336',
    href: 'tel:+917075323336',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'abhilash-bandaru-',
    href: 'https://www.linkedin.com/in/abhilash-bandaru-',
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'abhilash1432005',
    href: 'https://github.com/abhilash1432005',
  },
];

export const Contact = () => {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  // read env vars (Vite)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // basic client-side validation (you already have required on inputs, but good to double-check)
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: 'Please fill all fields.' });
      return;
    }

    // template params should match the variable names you used in the EmailJS template
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
      // Add any other fields you want the template to receive
    };

    setSubmitting(true);

    try {
      // send: emailjs.send(serviceID, templateID, templateParams, publicKey)
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      toast({
        title: 'Unable to send',
        description: 'Something went wrong. Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">07.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold terminal-text">Get In Touch</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="code-block card-glow">
                <div className="flex items-center gap-2 text-muted-foreground text-sm border-b border-border pb-3 mb-4">
                  <span className="text-primary">const</span>
                  <span className="text-foreground">contact</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-secondary">{"{"}</span>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-all duration-300 group ${
                        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{item.label}:</div>
                        <div className="text-sm text-foreground group-hover:text-primary transition-colors">
                          "{item.value}"
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="text-secondary mt-4 text-sm">{"}"}</div>
              </div>

              {/* Location */}
              <div className="code-block card-glow">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-muted-foreground">location: </span>
                    <span className="text-foreground">"Vijayawada, Andhra Pradesh, India"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="code-block card-glow">
              <div className="flex items-center gap-2 text-muted-foreground text-sm border-b border-border pb-3 mb-6">
                <span className="text-primary">//</span> send_message.tsx
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    <span className="text-primary">const</span> name =
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-muted border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder='"Your Name"'
                    required
                  />
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    <span className="text-primary">const</span> email =
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder='"your@email.com"'
                    required
                  />
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    <span className="text-primary">const</span> message =
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-muted border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder='"Your message..."'
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'sending...' : 'send(message);'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
