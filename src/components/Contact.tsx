import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "say hi",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", reason: "say hi", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="w-full max-w-[780px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-2 text-foreground">
          Get in touch
        </h2>
        <p className="text-muted-foreground mb-12">
          Say hi. Ask a question. Propose a collaboration. I respond to everything.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium mb-2 text-foreground">
              Reason
            </label>
            <select
              id="reason"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="say hi">Just saying hi</option>
              <option value="work">Work / collaboration</option>
              <option value="feedback">Feedback / suggestion</option>
              <option value="press">Press inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              placeholder="Your message..."
            />
          </div>

          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </form>

        <div className="mt-12 pt-12 border-t border-border">
          <p className="text-muted-foreground mb-4">
            Prefer to schedule a quick call?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://calendly.com/steve" target="_blank" rel="noopener noreferrer">
              Book a time
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
