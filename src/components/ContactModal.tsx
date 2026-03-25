import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", company: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border/50 max-w-md w-[94vw] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-foreground">Book a Strategy Session</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your business and we'll get back to you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="bg-muted border-border/50"
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-muted border-border/50"
          />
          <Input
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="bg-muted border-border/50"
          />
          <Textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            className="bg-muted border-border/50"
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(220_90%_56%/0.3)]">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
